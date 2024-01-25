import React from "react";
import hero from "./Assets/hero-fix-health.jpg";
import BookingForm from "./Components/BookingForm";
import Testimonials from "./Components/Testimonials";
import Navbar from "./Components/Navbar";
import patientsRecovery from "./Assets/YourPhysio-Patients-Recovered.webp";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />

      <div className="relative flex">
        <img src={hero} className="w-full h-screen object-cover" alt="hero" />
        <div className="absolute right-5 bottom-60 w-full md:w-1/2 mx-auto md:left-auto p-8 text-white text-center">
          <h1 className="text-4xl font-bold mb-4">
            Book an Appointment for Rs 1000 FREE
          </h1>
          <p className="text-xl mb-6">
            60+ Expert Physiotherapists for 200+ Conditions
          </p>
          <img src={patientsRecovery} alt="Patients Recovery" />
        </div>
        <div className="absolute bottom-20">
          <BookingForm />
        </div>
      </div>

      <div className="mt-8">
        <Testimonials />
      </div>

      <Footer />
    </div>
  );
}

export default App;
