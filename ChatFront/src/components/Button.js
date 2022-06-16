import React from 'react';
import './components.scss';


export default function Button({content, className}) {
    return (
      <button className="Button" {...className} >
        {content}
        </button>
    );
}

