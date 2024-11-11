import { Route, Routes } from "react-router-dom";
import QRScanner from "./components/QRScanner";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import TakeAttendance from "./components/attendance/TakeAttendance";

function App() {
  return (
    <div className="w-[100%] font-title h-[100%] bg-[#000814] text-white">
      {/* <QRScanner/> */}
      <div className="h-[10vh] border-b-2 border-gray-600">
        <Navbar />
      </div>
      <div className="sm:min-h-[90vh] overflow-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/QR" element={<QRScanner />} />
          <Route path="/takeattendance" element={<TakeAttendance />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
