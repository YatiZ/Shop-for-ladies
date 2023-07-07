import React, { useState } from 'react';
import axios from 'axios';

const SignInPage = () => {
  const [data, setData] = useState({
    username: '',
    phone_number: '',
    email: '',
    gender: '',
    birth_date: '',
    password: '',
  });

  const handleInput = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/register/', data);
      console.log(response.data);

      setData({
        username: '',
        phone_number: '',
        email: '',
        gender: '',
        birth_date: '',
        password: '',
      });

      setSubmitted(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (submitted) {
    return (
      <div>
        <h1>Thank you for submitting the form!</h1>
        {/* Add your desired content for the new page */}
      </div>
    );
  }

return(
    
)
};

export default SignInPage;
