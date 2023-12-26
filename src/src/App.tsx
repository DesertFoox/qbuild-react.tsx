import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count);
  }

  return <button onClick={handleClick}>Clicked {count} times</button>;
}

export default App;