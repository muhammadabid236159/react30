import "./usercounter.css";

function UserCounter({ count, setCount }) {
  return (
    <div className="counter-container">
      <div className="counter-card">
        <h1>Counter App</h1>

        <div className="count-circle">
          <span>{count}</span>
        </div>

        <p className="status">
          {count > 0
            ? "🟢 Positive"
            : count < 0
            ? "🔴 Negative"
            : "⚪ Zero"}
        </p>

        <div className="btn-group">
          <button
            className="increase"
            onClick={() => setCount(count + 1)}
          >
            + Increase
          </button>

          <button
            className="decrease"
            onClick={() => {
              if (count > 0) {
                setCount(count - 1);
              }
            }}
          >
            − Decrease
          </button>

          <button
            className="reset"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserCounter;