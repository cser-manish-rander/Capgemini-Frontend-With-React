import { useState } from "react";

function ProductForm({ onCreate }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title) return;
    onCreate({ title, price: Number(price), category });
    setTitle("");
    setPrice(0);
    setCategory("");
  };

  return (
    <form className="product-form" onSubmit={submit}>
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input placeholder="Price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      <input placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;