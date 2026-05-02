import { useState } from "react";

function ProductList({ products, onUpdate, onPatch, onDelete }) {
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ title: "", price: 0, category: "" });

  const startEdit = (p) => {
    setEditingId(p.id);
    setForm({ title: p.title || "", price: p.price || 0, category: p.category || "" });
  };

  const submitUpdate = (e) => {
    e.preventDefault();
    onUpdate(editingId, form);
    setEditingId(null);
  };

  return (
    <div className="product-list">
      {products.map((p) => (
        <div key={p.id} className="product-item">
          {editingId === p.id ? (
            <form onSubmit={submitUpdate} className="edit-form">
              <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
              <input type="number" value={form.price} onChange={(e) => setForm({ ...form, price: Number(e.target.value) })} />
              <input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
              <button type="submit">Save</button>
              <button type="button" onClick={() => { onPatch(p.id, { price: p.price + 1 }); setEditingId(null); }}>Patch +1</button>
              <button type="button" onClick={() => setEditingId(null)}>Cancel</button>
            </form>
          ) : (
            <>
              <div>
                <strong>{p.title}</strong>
                <div className="meta">${p.price} • {p.category}</div>
              </div>
              <div className="actions">
                <button onClick={() => startEdit(p)}>Edit</button>
                <button onClick={() => onDelete(p.id)}>Delete</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default ProductList;