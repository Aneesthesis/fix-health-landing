// src/components/BookingForm.js
import React, { useEffect, useState } from "react";

const BookingForm = () => {
  const [data, setData] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch(
          "https://doctor-api-umjl.onrender.com/api/fhdoctors"
        );
        const { data } = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDoctors();
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlCity = urlParams.get("city");

    if (urlCity) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        city: urlCity,
      }));
    }
  }, []);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    city: "",
    company: "",
    complaints: "",
    experience: "",
    selectedDoctor: "",
  });

  const nextStep = () => {
    if (
      (step === 1 && formData.name && formData.phone) ||
      (step === 2 && formData.age && formData.city && formData.company) ||
      (step === 3 && formData.complaints) ||
      (step === 4 && formData.selectedDoctor)
    ) {
      setStep(step + 1);
    } else {
      alert("Please fill in all required fields before proceeding.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!isNaN(value)) {
        setFormData({
          ...formData,
          [name]: value,
        });
      } else {
        setFormData({
          ...formData,
          [name]: "",
        });
      }
    } else if (name === "city") {
      setFormData({
        ...formData,
        [name]: value,
      });
      setFilteredDoctors(
        data.filter((doctor) =>
          doctor.city.toLowerCase().includes(value.trim().toLowerCase())
        )
      );
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Form submitted!");
  };

  const isUnder40 = parseInt(formData.age, 10) < 40;

  return (
    <section className="booking-form min-w-[400px] max-w-3xl  p-8 bg-gray-900 rounded-lg my-8  text-white shadow-lg">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        {step === 1 && (
          <div className="form-step flex flex-col space-y-4">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="dark-input outline-none text-black"
            />
            <label htmlFor="phone">Phone number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit phone number"
              minLength="10"
              maxLength="15"
              inputMode="numeric"
              className="dark-input outline-none text-black"
              placeholder="Enter your phone number"
            />

            <button type="button" onClick={nextStep} className="dark-btn">
              Proceed
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="form-step flex flex-col space-y-4">
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              min="1"
              max="100"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              className="dark-input outline-none text-black"
            />
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="dark-input outline-none text-black"
            />
            <label htmlFor="company">Company:</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="dark-input outline-none text-black"
            />
            <button type="button" onClick={nextStep} className="dark-btn">
              Proceed
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="form-step flex flex-col space-y-4">
            <label htmlFor="complaints">Chief Complaints:</label>
            <textarea
              id="complaints"
              name="complaints"
              value={formData.complaints}
              onChange={handleChange}
              required
              className="dark-input outline-none text-black"
            ></textarea>
            {!isUnder40 && (
              <>
                <label htmlFor="experience">
                  Previous experience with physiotherapy:
                </label>
                <input
                  type="text"
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="dark-input outline-none text-black"
                />
              </>
            )}
            <button type="button" onClick={nextStep} className="dark-btn">
              Proceed
            </button>
          </div>
        )}

        {step === 4 && (
          <div className="form-step flex flex-col space-y-4">
            <label htmlFor="doctors">Best available doctors:</label>
            <select
              id="doctors"
              name="selectedDoctor"
              value={formData.selectedDoctor}
              onChange={handleChange}
              required
              className="dark-input outline-none text-black"
            >
              <option value="" disabled>
                Select a doctor
              </option>
              {formData.city
                ? (filteredDoctors.length > 0 ? filteredDoctors : data).map(
                    (doctor, index) => (
                      <option key={index} value={doctor.name}>
                        {`${doctor.name} - ${doctor.expertise} (${doctor.city})`}
                      </option>
                    )
                  )
                : data.map((doctor, index) => (
                    <option key={index} value={doctor.name}>
                      {`${doctor.name} - ${doctor.expertise} (${doctor.city})`}
                    </option>
                  ))}
            </select>
            <button type="submit" className="dark-btn">
              Submit
            </button>
          </div>
        )}
      </form>
    </section>
  );
};

export default BookingForm;
