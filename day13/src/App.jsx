import { useState } from "react";
import Courses from "./course";

function App() {
  const [hobbies, setHobbies] = useState([]);

  const handleCheckbox = (e) => {
    console.log(e.target.value);
    console.log(e.target.checked);

    if (e.target.checked) {
      setHobbies([...hobbies, e.target.value]);
    } else {
      setHobbies(
        hobbies.filter((item) => item !== e.target.value)
      );
    }
  };

  return (
    <>
      <input
        type="checkbox"
        value="cricket"
        id="cricket"
        onChange={handleCheckbox}
      />
      <label htmlFor="cricket">Cricket</label>

      <br />
      <br />

      <input
        type="checkbox"
        value="football"
        id="football"
        onChange={handleCheckbox}
      />
      <label htmlFor="football">Football</label>

      <br />
      <br />

      <input
        type="checkbox"
        value="coding"
        id="coding"
        onChange={handleCheckbox}
      />
      <label htmlFor="coding">Coding</label>

      <h2>{JSON.stringify(hobbies)}</h2>
      <Courses/>


    </>
  );
}

export default App;