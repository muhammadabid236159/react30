import "./card.css"
function Card({ user }) {
  return (

    <div className="user-card">
      <section>
        <h2>Student: {user.name}</h2>
        <div className="user-info">
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>Course:</strong> {user.course}</p>
        </div>
      </section>

    </div>
  );
}

export default Card;
