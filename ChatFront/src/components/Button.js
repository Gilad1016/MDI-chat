import React from 'react';
import './components.scss';


export default function Button({content}) {
    return (
      <button className="Button" >
        {content}
        </button>
    );
}

