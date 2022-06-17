import React from 'react';
import './components.scss';


export default function Button({content, props}) {
    return (
      <button className="Button" {...props} >
        {content}
        </button>
    );
}

