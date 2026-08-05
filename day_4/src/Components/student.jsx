export function Student() {
  let studentName = "Sara";
  let university = "University of Swat";
  let marks = 72;
  let attendance = 80;

  let status = "";

  if (marks >= 50) {
    status = "Pass";
  } else {
    status = "Fail";
  }

  function greets() {
    return "Welcome to Task 2";
  }

  return (
    <div style={{ padding: "20px 10px" }}>
      <h1>{greets()}</h1>

      <h2>Name: {studentName}</h2>
      <h2>University: {university}</h2>
      <h2>Marks: {marks}</h2>

      <h2>Result: {status}</h2>

      <h3>
        {attendance >= 75
          ? "Eligible for Exam"
          : "Not Eligible for Exam"}
      </h3>

      <h3>
        {marks >= 80
          ? "Excellent"
          : "Needs Improvement"}
      </h3>
    </div>
  );
}