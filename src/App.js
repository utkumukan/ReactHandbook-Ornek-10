import "./styles.css";
import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleChange = (item) => {
    setCount(item);
  };

  return (
    <div className="App">
      <Child onChange={handleChange} />
      {count}
    </div>
  );
};

const Child = (props) => {
  const { onChange } = props;

  const handleClick = () => {
    onChange(Math.floor(Math.random() * (100 - 0) + 0));
  };

  return <button onClick={handleClick}>Rasgele Sayı</button>;
};

export default App;
