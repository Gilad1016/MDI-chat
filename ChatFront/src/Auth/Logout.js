import React from 'react';
import Button from '../components/Button.js';


// Define the logout button component
export default function Logout({props}) {

    function handleClick(e) {
        e.preventDefault();
        props.setToken(null);
        this.props.history.push('/');
    }

return (
      <Button {...props} class="Logout" content="LOGOUT" onClick={handleClick}  />
    )
}
