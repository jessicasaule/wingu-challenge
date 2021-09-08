import React from 'react';
import { Link } from 'react-router-dom';
import './SuccessMsg.css';

const SuccessMsg = () => {
  return(
    <div className="msg-container">
      <h2>Tu reclamo fue enviado correctamente</h2>
      <Link className="msg-btn" to="/form">Realizar otro reclamo</Link>
      <Link className="msg-btn" to="/">Volver al inicio</Link>
    </div>
  );
}

export default SuccessMsg;