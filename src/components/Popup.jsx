import React from "react";

function Popup({ attendence, onClose }) {
  return (
    <div className="absolute top-1/2 left-[30%] -translate-x-1 -translate-y-1/2">
      <div className="flex justify-center items-center p-20 font-mono">
        <div className="bg-purple-400 h-32 w-[30rem] border border-black rounded-md p-2">
          <h1>Your current attendance percentage is {attendence}%:</h1>
          <p>{attendence >= 75 ? "You're good!" : "Attend more classes!"}</p>
          <div className="flex justify-center items-center mt-4 mb-3 p-2">
            <button
              onClick={onClose}
              className="border border-zinc-700 w-20 rounded-2xl bg-purple-500 pt-1 pb-1 hover:bg-pink-200"
            >
              Okay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
