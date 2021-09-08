import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../utils/firebase/firebase';
import { ref, onValue } from 'firebase/database';
import './View.css';

const View = () => {
  const [compliantsList, setCompliantsList] = useState([]);

  useEffect(() => {
    const compliantRef = ref(db, 'compliant');
    onValue(compliantRef, (snapshot) => {
      const compliants = snapshot.val();
      const compliantsData = [];
      for (let c in compliants) {
        compliantsData.push(compliants[c]);
      }
      setCompliantsList(compliantsData);
    })
  }, []);

  return(
    <div className="view-container">
      <h1>Todos los reclamos</h1>
      <div className="view-btn-container">
        <Link className="view-btn" to="/form">Realizar reclamo</Link>
        <Link className="view-btn" to="/">Volver al inicio</Link>
      </div>
      {compliantsList ? compliantsList.map((compliant) => 
        <div className="compliant-container">
          <div className="compliant-container-left">
            <h2>{compliant.title}</h2>
            <h4>{compliant.comuna}</h4>
            <p>{compliant.description}</p>
          </div>
          <div className="compliant-container-right">
            <img className="compliant-img" src={compliant.imageURL} alt={compliant.title} />
          </div>
        </div>
      ) : ''}
    </div>
  );
}

export default View;