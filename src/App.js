import React, { useState, useEffect } from "react";
import data from "./data";
import Tour from "./Tour";
import Title from "./Title";
const App = () => {
  const notInterested = (id) => {
    setTours(tours.filter((item) => item.props.id !== id));
  };
  const newData = data.map((item) => {
    return <Tour {...item} key={item.id} not={notInterested} />;
  });
  const [tours, setTours] = useState(newData);
  //   setTours();
  return (
    <main>
      <section>
        <Title />
        {tours}
      </section>
    </main>
  );
};
export default App;
