import React from "react";
// import Modal from "../components/modal/modal";
// import QRScanner from "../components/QRScanner";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const router = useNavigate();

  return (
    <div>
      <p>Home</p>
      <button onClick={() => router('/takeattendance')}>Take Attendance</button>
    </div>
  );
};

export default Home;
