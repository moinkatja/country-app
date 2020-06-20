import React from 'react';

const Form = (props) => (

<form onSubmit={props.getCountry}>
 
 <input type="text" name="name" placeholder="Enter the name" required/>
 <button>Get info!</button>
</form>

);
export default Form;
