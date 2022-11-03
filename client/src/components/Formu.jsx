/** @format */

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Axios from 'axios';

const Formu = () => {
  //making the http request to the backend
  //this will be capturing our users input
  // const [email, setemail] = useState();
  // const [password, setpassword] = useState();

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
    // event.preventDefault();
    // const options = {
    //   method: 'POST',
    //   mode: 'cors',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email, password }),
    // };
    // fetch("http://localhost:4000/register", options)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .then((req) => {
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // Axios.post('http://localhost:4000/register', {
    //   email,
    //   password,
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:4000/register/', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => alert(JSON.stringify(result.error.message, null, 2)));
  };
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Checkbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Formu;
