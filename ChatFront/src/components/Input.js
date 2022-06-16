import React from 'react';
import './components.scss';


export default function Input({type, placeholder}) {
    return (
      <input type={type} placeholder={placeholder} className="Input" />
    );
}
