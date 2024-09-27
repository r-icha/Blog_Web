import React from 'react';
import  { useState, useEffect } from 'react';

function Footer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-gray-100 shadow w-full dark:bg-gray-800">
     <div className="w-full mx-auto max-w-screen-xl p-4 flex justify-center"> 
  <span className="text-sm text-gray-500 dark:text-gray-400"> 2024 Richa Chaudhary. All Rights Reserved.  {time}
  </span>
  {/* <div id="clock text-blue-300 mx-10">
      {time}
    </div> */}
</div>
    </footer>
  );
}

export default Footer;