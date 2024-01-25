import React from "react";
import hero from "./Assets/hero-fix-health.jpg";
import BookingForm from "./Components/BookingForm";
import Testimonials from "./Components/Testimonials";
import Navbar from "./Components/Navbar";
import patientsRecovery from "./Assets/YourPhysio-Patients-Recovered.webp";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="relative">
      <Navbar />

      <div className="relative w-screen h-screen">
        <img src={hero} className="w-full h-full object-cover" alt="hero" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="flex flex-col items-center justify-center w-1/2 p-8 text-white text-center">
            <h1 className="text-4xl font-bold mb-4">
              Book an Appointment for Rs 1000 FREE
            </h1>
            <p className="text-xl mb-6">
              60+ Expert Physiotherapists for 200+ Conditions
            </p>
            <img src={patientsRecovery} alt="Patients Recovery" />
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full md:w-[400px] mx-auto md:left-8">
        <BookingForm />
      </div>

      <div className="mt-8">
        <Testimonials />
      </div>

      <Footer />
    </div>
  );
}

export default App;
