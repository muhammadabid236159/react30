import { Student } from "./Components/student";

function App() {
  let employeeName = "Ali";
  let company = "Google";
  let salary = 120000;
  let experience = 3;

  let salary_status = "";

  function greets() {
    return "Welcome to Task 1";
  }

  if (salary >= 100000) {
    salary_status = "High Salary";
  } else {
    salary_status = "Average Salary";
  }

  return (
    <div>
      {/* Employee Component */}
      <div style={{ padding: "10px 20px" }}>
        <h1>{greets()}</h1>

        <h2>Employee: {employeeName}</h2>
        <h2>Company: {company}</h2>

        <h2>Salary Status: {salary_status}</h2>

        <h2>
          Experience: {experience >= 2 ? "Experienced" : "Fresher"}
        </h2>
      </div>

      <hr />

      {/* Student Component */}
      <Student />
    </div>
  );
}

export default App;