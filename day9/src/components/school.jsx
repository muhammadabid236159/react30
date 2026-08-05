function School({ skills, deletehandle }) {
  return (
    <div>
      <h2>Skills</h2>

      {skills.map((skill, index) => (
        <div key={index}>
          <p>{skill}</p>

          <button onClick={() => deletehandle(skill)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default School;