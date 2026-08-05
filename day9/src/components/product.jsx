import "./product.css";

export default function Product({ product }) {
  return (
    <div className="product-card">
      <h2>Title: {product.title}</h2>
      <h3>Price: Rs. {product.price}</h3>
      <h3>Brand: {product.brand}</h3>

      <h3>
        Status: {product.stock ? "✅ In Stock" : "❌ Out of Stock"}
      </h3>
    </div>
  );
}