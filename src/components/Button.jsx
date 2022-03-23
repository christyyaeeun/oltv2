import React from 'react';

const Button = ({ children, onClick }) => (
  <button className="create-btn" onClick={onClick}>
    {children}
  </button>
);



export default Button;