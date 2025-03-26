import React from "react";

function Popup() {
  return (
    <div className="h-screen flex justify-center items-center p-20 font-mono text-">
      <div className="bg-purple-400 h-32 w-[30rem] border border-black rounded-md p-2">
        <h1>Your Current attendence is from 100% is: </h1>
        <p>Class need to make the 75 and more</p>
        <div className="flex justify-center items-center mt-4 mb-3 p-2">
          <button className="border border-zinc-700 w-20 rounded-2xl bg-purple-500 pt-1 pb-1 hover:bg-pink-200">
            okay
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
