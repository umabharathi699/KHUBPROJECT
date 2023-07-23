import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./home.css"
const HomePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    maths: '',
    english: '',
    python: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/add-idcards', formData);
      console.log(response.data); // Optional: Log the response
      // Clear the form after successful submission
      setFormData({ name: '', phone: '', maths: '', english: '', python: '' });
    } catch (error) {
      console.error(error);
    }
  };

  const navigate = useNavigate();
  const navigateToViewDataPage = () => {
    navigate('/ViewDatapage');
  };

  return (
    <div className="container">
      <h2>Home Page</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Roll no: </label>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Maths: </label>
          <input
            type="number"
            name="maths"
            value={formData.maths}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>English: </label>
          <input
            type="number"
            name="english"
            value={formData.english}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Python: </label>
          <input
            type="number"
            name="python"
            value={formData.python}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="button" onClick={navigateToViewDataPage}>
        View Data
      </div>
    </div>
  );
};

export default HomePage;
