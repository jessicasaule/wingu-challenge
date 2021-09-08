import React, { useState } from 'react';
import comunasList from '../../utils/comunasList';
import { db, store } from '../../utils/firebase/firebase';
import { ref, push, set } from 'firebase/database';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { Redirect } from "react-router-dom";
import './Form.css';

const Form = () => {
  const [comuna, setComuna] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [errorMsg, setErrorMsg] = useState(false);
  const [successMsg, setSuccessMsg] = useState(null);

  const handleComuna = (e) => {
    setComuna(e.target.value);
  }

  const handleTitle = (e) => {
    setTitle(e.target.value);
  }

  const handleDescription = (e) => {
    setDescription(e.target.value);
  }

  const handleImage = (e) => {
    const selected = e.target.files[0];
    const types = ['image/png', 'image/jpeg']
    if (selected && types.includes(selected.type)) {
      setImage(e.target.files[0]);
    } else {
      alert('La imagen debe ser de tipo png o jpeg');
      setImage(null);
    }
  }

  const handleSubmit = async () => {

    if (comuna === '' || title === '' || description === '' || image === null) {
      setErrorMsg(true);
    } else {
      // storage (images)
      const imageRef = storageRef(store, `images/${image.name}`); 
      await uploadBytes(imageRef, image);
      const imageURL = await getDownloadURL(imageRef);

      //database
      const compliant = {
        comuna,
        title,
        description,
        imageURL
      }
      const compliantRef = ref(db, `compliant/${uuidv4()}`);
      const newCompliant = push(compliantRef);
      set(compliantRef, compliant);
  
      setComuna('');
      setTitle('');
      setDescription('');
      setImage(null);
      setSuccessMsg('/successMsg');
      setErrorMsg(false);
    }
  }

  return(
    <div className="form-container">
      <div className="form-body">
        <h1>Realice su reclamo</h1>
        <select className="form-body-element" name="comunas" id="comunas" value={comuna} onChange={handleComuna} >
          <option value=''>Seleccioná tu comuna</option>
          {comunasList.map((comuna) =>
            <option>{comuna.title} - {comuna.name}</option>
          )}
        </select>
        <input className="form-body-element" type="text" value={title} onChange={handleTitle} placeholder="Título..." />
        <textarea className="form-body-element form-textarea" value={description} onChange={handleDescription} placeholder="Descripción del reclamo" />
        <input className="form-body-element" type="file" onChange={handleImage} />
        <button className="form-body-btn" onClick={handleSubmit}>Enviar reclamo</button>
      </div>

      {errorMsg ? 
      <div className="error-msg"> Por favor completá todos los campos </div>
      : null
      }

      {successMsg ?
      <Redirect to={successMsg} />
      : null
      }
    </div>
  );
}

export default Form;