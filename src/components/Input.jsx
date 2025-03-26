import React from 'react';

const Input = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted!!");
  };

  return (
    <>
      <div className='bg-linear-to-bl from-purple-500 to-purple-300 h-screen w-full flex justify-center items-center'>
        <div className='flex justify-center items-center bg-purple-600 rounded-3xl h-96 w-1/2 font-mono ml-64 mr-56'>
          <form className='flex flex-col justify-center items-start h-full w-full p-8' onSubmit={submitHandler}> {/* Added padding and full width */}
            <div className='mb-4 w-full '> {/* Flex container for alignment */}
              <h1 className='text-2xl mr-4 tracking-tighter'>Total Sessions:</h1>
              <input
                name="total"
                type="text"
                className="border-purple-900 bg-purple-400 rounded-md h-10 w-full p-2 outline-0" // Full width for input
                placeholder='Enter the total number of sessions'
              />
            </div>

            <div className='mb-4 w-full '> {/* Flex container for alignment */}
              <h1 className='text-2xl mr-4'>Attended sessions:</h1>
              <input
                name="attended"
                type="text"
                className="border-purple-900 bg-purple-400 rounded-md h-10 w-full p-2 outline-0" // Full width for input
                placeholder='Sessions attended'
              />
            </div>

            <button type="submit" className="text-white bg-purple-950 rounded-2xl w-60 mt-20 ml-64 h-96 hover:bg-purple-500 hover:text-black hover:border-purple-950 border-2 border-solid border-purple-400">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Input;