import React, { useState } from 'react'

const Input = () => {

  const [total,setTotal] = useState("")
  const handleChange = (e) => {
    setTotal(e.target.value)
  }


  const [attended, setAttended] = useState("");
  const handleChange2 = (e) => {
    setAttended(e.target.value);
  };  

  const submitHandler = (e) => {
    e.preventDefault();
    setAttended("")
    setTotal("")
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="total">
          Total Sessions
          <input
            onChange={handleChange}
            value={total}
            name="total" type="text" className="border" />
        </label>
        <br />
        <label htmlFor="attended">
          Attended Sessions
          <input
            onChange={handleChange2}
            value={attended}
            name="attended" type="text" className="border" />
        </label>
        <br />
        <button type="submit" className="text-cyan-700">
          submit
        </button>
      </form>
    </>
  );
};

export default Input;
