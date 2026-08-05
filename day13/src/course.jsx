import { useState } from "react";

function Courses() {
  const [course, setCourse] = useState([]);

  const handleCheckbox = (e) => {
    console.log(e.target.value);
    console.log(e.target.checked);

    if (e.target.checked) {
      setCourse([...course, e.target.value]);
    } else {
      setCourse(course.filter((item) => item !== e.target.value));
    }
  };

  return (
    <>
      <div>
        <input
          type="checkbox"
          value="python"
          id="python"
          onChange={handleCheckbox}
        />
        <label htmlFor="python">Python</label>

        <br />
        <br />

        <input
          type="checkbox"
          value="react"
          id="react"
          onChange={handleCheckbox}
        />
        <label htmlFor="react">React</label>

        <br />
        <br />

        <input
          type="checkbox"
          value="java"
          id="java"
          onChange={handleCheckbox}
        />
        <label htmlFor="java">Java</label>

        <br />
        <br />

        <h2>Selected Courses:</h2>
        <p>{JSON.stringify(course)}</p>
      </div>
    </>
  );
}

export default Courses;