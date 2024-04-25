// Main.jsx

import React, { useState } from 'react';
import FormComponent from './form';

function Main() {
  // State to manage form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  // Function to handle form input changes
  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form submission logic here
    console.log(formData);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 >Login </h1>
      <FormComponent
        formData={formData}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default Main;
