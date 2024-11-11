import React, { useState } from "react";
import Modal from "../modal/modal";
import QRScanner from "../QRScanner";
import DropDown from "../ui/DropDown";
import DatePicker from "../ui/DatePicker";

const TakeAttendance = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const options = [
    { value: "10", label: "Ten" },
    { value: "20", label: "Twenty" },
    { value: "30", label: "Thirty" },
  ];

  return (
    <>
      <div
        className="text-white
      h-[85vh] mt-5
      text-center px-1 flex 
      flex-col justify-between"
      >
        {/* choose class  */}
        <div className="flex justify-between items-center py-3 gap-2">
          <div className="flex flex-col p-4 w-[50%] text-center gap-1">
            <DropDown
              label="Choose class"
              options={options}
              selectedValue={selectedValue}
              onChange={handleSelectChange}
            />
          </div>
          <div className="flex flex-col p-4 w-[50%] text-center gap-">
            <DatePicker
              label="Choose Date"
              selectedDate={selectedDate}
              onChange={handleDateChange}
            />
          </div>
        </div>

        {!isModalOpen && (
          <div className="w-[75%] inset-10 mx-auto text-center">
            <button
              onClick={() => openModal()}
              className="
              text-black bg-[#FFD52A] 
              py-2 rounded-xl font-semibold
               text-4xl w-full mx-auto"
            >
              Take
            </button>
          </div>
        )}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div>
          <QRScanner onClose={closeModal} />
        </div>
      </Modal>
    </>
  );
};

export default TakeAttendance;
