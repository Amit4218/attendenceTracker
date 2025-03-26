import React from 'react'

const Input = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted!!")
  }

  return (
    <>
      <form>
        <label htmlFor="total">
          {" "}
          Total Sessions
          <input name="total" type="text" className="border" />
        </label>
        <br />
        <label htmlFor="attended">
          {" "}
          Attended Sessions
          <input name="attended" type="text" className="border" />
        </label>
        <br />
        <button type="submit" className="text-cyan-700">
          submit
        </button>
      </form>
    </>
  );
}

export default Input
