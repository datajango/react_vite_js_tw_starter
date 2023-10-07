import React, { useState } from 'react';
import './index.css';
import LogWindow from './LogWindow';
import Banner from './Banner';
import Footer from './Footer';

function App() {
  const [logs, setLogs] = useState([]);
  //const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  const handleButtonClick = () => {
    const newLog = "Button clicked!";
    console.log(newLog);
    setLogs(prevLogs => [...prevLogs, newLog]);
  };

  // return (
  //   <div className="flex justify-center items-center h-screen">
  //     <Banner />
  //     <h1 className="text-3xl font-bold text-gray-900">Electron + React + Vite + JavaScript + Tailwind CSS Starter</h1>
  //     <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded">Click Me</button>
  //     <LogWindow messages={logs} />
  //     <Footer />
  //   </div>
  // );

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-500 p-4 text-white">
        <h1 className="text-xl">App Header</h1>
      </header>

      {/* Body */}
      <main className="flex-grow flex items-center justify-center">
        {/* Centered Card */}
        <div className="bg-white p-8 rounded-lg shadow-md w-1/3">
          <h2 className="text-2xl mb-4">Centered Card</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4" onClick={handleButtonClick}>Click Me</button>

          {/* Styled List Box */}
          <LogWindow messages={logs} />

          {/* <aside className="bg-gray-200 p-4 rounded">
            <h3 className="text-lg mb-2">Styled List Box</h3>
            <ul>
              {items.map((item, index) => (
                <li key={index} className="mb-2">{item}</li>
              ))}
            </ul>
          </aside> */}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-500 p-4 text-white mt-4">
        <p>App Footer</p>
      </footer>
    </div>
  )

}

export default App;
