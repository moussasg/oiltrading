import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
const Technologies = () => {
  const [errors, setErrors] = useState({ name: '', email: '', phone: '' , message  : ''})
  const [showConfirmation , setshowConfirmation] = useState(false)

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    message: '' ,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};    
    // Check if all fields are filled
    const allFieldsFilled = Object.values(formData).every((value) => !!value);
    if (!allFieldsFilled) {
      // If any field is missing, show an error for each empty field
      for (const field in formData) { 
        if (!formData[field]) {
          newErrors[field] = 'Please fill in this field.';
        }
      }
      setErrors(newErrors)
    } else {
      // If all fields are filled, show the confirmation message
      setshowConfirmation(true);
    }
    try {
      const response = await axios.post('endpoint_here', formData);
      if (response.status === 200) {
        console.log('Server response:', response.data);
      }
      // Do something with the response if needed
    } catch (error) {
      console.error('Error sending the form data:', error);
      // Handle the error
    }
  };
    return (
        <div className="support-section-1">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="consult-section__content"
                style={{
                  backgroundImage: "url(/images/background.jpg)",
                }}>
                <div className="row justify-content-md-start">
                  <div className="col-md-8 col-lg-7 col-xl-6 col-xxl-5">
                    <div className="booking-form">
                      <div className="booking-form__head">
                        <h4 className="text-center mb-2">
                          {" "}
                          Inquire About Our Oil Trading Solutions{" "}
                        </h4>
                        <p className="text-center">
                          {" "}
                          It is our joy to have the opportunity to collaborate.{" "}
                        </p>
                      </div>
                      <form onSubmit={handleSubmit}>
                      <div className="row g-4">
                        <div className="col-12">
                          <input
                            type="text"
                            className="form-control booking-form__input"
                            placeholder="Name"
                            name="name" value={formData.name} onChange={handleChange}/>
                            <p className="error-message">{errors.name}</p>

                        </div>
                        <div className="col-12">
                          <input
                            type="number"
                            className="form-control booking-form__input"
                            placeholder="Phone"
                            name="phone" value={formData.phone} onChange={handleChange}
                          />
                          <p className="error-message">{errors.phone}</p>

                        </div>
                        <div className="col-12">
                          <input
                            type="email"
                            className="form-control booking-form__input"
                            placeholder="Email"
                            name="email" value={formData.email} onChange={handleChange}
                          />
                  <p className="error-message">{errors.email}</p>
                        </div>
                        <div className="col-12">
                          <textarea
                            rows={3}
                            className="form-control booking-form__input placeholder-clr"
                            placeholder="Let us know what you need"></textarea>
                                                      <p className="error-message">{errors.message}</p>
                        </div>
                      </div>
                      <div className="booking-form__footer text-center">
                        <button className="bttn bttn--base bttn-md bttn-pill fw-md" type="submit">
                          {" "}
                          Submit{" "}
                        </button>
                      </div>
                      </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Technologies;