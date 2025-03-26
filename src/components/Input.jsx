import React, { useState } from 'react'
import Popup from './Popup';

const Input = () => {

  const [total,setTotal] = useState("")
  const handleChange = (e) => {
    setTotal(e.target.value)
  }


  const [attended, setAttended] = useState("");
  const handleChange2 = (e) => {
    setAttended(e.target.value);
  };  


   const [showPopup, setShowPopup] = useState(false);
   const [attendancePercentage, setAttendancePercentage] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    
    if (total && attended) {
      const percentage = ((Number(attended) / Number(total)) * 100).toFixed(2)
      setAttendancePercentage(percentage)
      setShowPopup(true)
    }

    
    setAttended("");
    setTotal("");
  }

  return (
    <>
      <div className="bg-linear-to-bl from-purple-500 to-purple-300 h-screen w-full flex justify-center items-center">
        <div className="flex justify-center items-center bg-purple-600 rounded-3xl h-96 w-1/2 font-mono ml-64 mr-56">
          <form
            className="flex flex-col justify-center items-start h-full w-full p-8"
            onSubmit={submitHandler}
          >
            {" "}
            {/* Added padding and full width */}
            <div className="mb-4 w-full ">
              {" "}
              {/* Flex container for alignment */}
              <h1 className="text-2xl mr-4 tracking-tighter">
                Total Sessions:
              </h1>
              <input
                onChange={handleChange}
                value={total}
                name="total"
                type="text"
                className="border-purple-900 bg-purple-400 rounded-md h-10 w-full p-2 outline-0" // Full width for input
                placeholder="Enter the total number of sessions"
              />
            </div>
            <div className="mb-4 w-full ">
              {" "}
              {/* Flex container for alignment */}
              <h1 className="text-2xl mr-4">Attended sessions:</h1>
              <input
                onChange={handleChange2}
                value={attended}
                name="attended"
                type="text"
                className="border-purple-900 bg-purple-400 rounded-md h-10 w-full p-2 outline-0" // Full width for input
                placeholder="Sessions attended"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-purple-950 rounded-2xl w-60 mt-20 ml-64 h-96 hover:bg-purple-500 hover:text-black hover:border-purple-950 border-2 border-solid border-purple-400"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {showPopup && (
        <Popup
          attendence={attendancePercentage}
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
};

export default Input;

