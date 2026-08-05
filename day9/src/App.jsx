import { useState } from "react";
import Product from "./components/product";
import School from "./components/school";
import Student from "./components/student";

function App() {
  const student = {
    name: "Abid",
    age: 22,
    cgpa: 3.5,
    city: "Swat",
  };

  const product = {
    title: "Laptop",
    price: 85000,
    brand: "Dell",
    stock: true,
  };

  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "React",
  ]);

  function deletehandle(skill) {
    const newskills = skills.filter((s) => s !== skill);
    setSkills(newskills);
  }

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      <Student student={student} />
      <Product product={product} />
      <School
        skills={skills}
        deletehandle={deletehandle}
      />
    </div>
  );
}

export default App;