import "./Image.css";

export function Image() {
  return (
    <div className="container">
      <h1 className="name"> BEAR</h1>

      <img
        src="https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=500&auto=format&fit=crop&q=60"
        alt="Bear"
      />

      <h2>Bear Facts</h2>

      <ul>
        <li>Bears are very strong animals.</li>
        <li>Bears can swim and climb trees.</li>
        <li>Bears eat fish, berries, and honey.</li>
      </ul>
    </div>
  );
}