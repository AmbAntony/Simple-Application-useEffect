import React, { useState, useEffect} from 'react';

function Counter() {
    //state to hold count
    const [count, setCount] = useState(0);
    //state to hold name
    const [text, setText] = useState('');

    useEffect(() => {
        document.title = `You clicked ${count} times`;
        console.log( `Document title updated to: You clicked ${count} times`);
}, [count]); //dependancy array. Effect re runs if count changes


return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
            <h2 className="text-3x1 font-bold text-gray-800 mb-6"> Demonstration 101 </h2>
            {/*Counter Section*/}
            <div className="mb-8">
                <p className="text-x1 text-gray-700 mb-4">
                    You clicked the button <strong className="text-blue-600">{count}</strong> times.
                </p>
                <button
                onClick={() => setCount(prevCount => prevCount + 1)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline focus:ring-2 focus:ring-blue-600 focus:ring-opacity-75"
                >Click Me 
                </button>
            </div>
            
         {/* Text Input Section */}
        <div className="mb-6">
          <label htmlFor="text-input" className="block text-lg font-medium text-gray-700 mb-2">
            Type something here:
          </label>
          <input
            id="text-input"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            placeholder="Enter text..."
          />
          <p className="mt-2 text-gray-600">Current text: "{text}"</p>
        </div>

        <p className="text-sm text-gray-500 mt-4">
          Check your browser's console and document title to see `useEffect` in action!
        </p>
      </div>
    </div>
  );
}

export default Counter;