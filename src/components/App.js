import { useState, useEffect } from 'react';

function App() {
  const [isOdd, setIsOdd] = useState(false);

  function handleButtonClick() {
    setIsOdd(!isOdd);
  }

  return (
    <div>
      <button onClick={handleButtonClick}>Toggle</button>
      {isOdd ? <Odd /> : <Even />}
    </div>
  );
}

function Odd() {
  useEffect(() => {
    return () => {
      console.log("Odd is unmounted");
    };
  }, []);

  return <div>I am Odd</div>;
}

function Even() {
  useEffect(() => {
    return () => {
      console.log("Even is unmounted");
    };
  }, []);

  return <div>I am Even</div>;
}
