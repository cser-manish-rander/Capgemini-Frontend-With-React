import { useEffect, useState } from "react";
import ProductForm from "../components/ApiButtons";
import ProductList from "../components/ProductList";

import {
  getProducts,
  createProduct,
  updateProduct,
  patchProduct,
  deleteProduct
} from "../api/productApi";

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [response, setResponse] = useState("");

  const handleGet = async () => {
    const data = await getProducts();
    setProducts(data);
    setResponse("Loaded products");
  };

  const handleCreate = async (product) => {
    try {
      const created = await createProduct(product);
      setProducts((p) => [...p, created]);
      setResponse("Created product: " + created.title);
    } catch (err) {
      setResponse("Create failed: " + err.message);
    }
  };

  const handleUpdate = async (id, product) => {
    try {
      const updated = await updateProduct(id, product);
      setProducts((list) => list.map((p) => (p.id === id ? updated : p)));
      setResponse("Updated product: " + updated.title);
    } catch (err) {
      setResponse("Update failed: " + err.message);
    }
  };

  const handlePatch = async (id, patchData) => {
    try {
      const patched = await patchProduct(id, patchData);
      setProducts((list) => list.map((p) => (p.id === id ? patched : p)));
      setResponse("Patched product: " + patched.title);
    } catch (err) {
      setResponse("Patch failed: " + err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProducts((list) => list.filter((p) => p.id !== id));
      setResponse("Deleted product id " + id);
    } catch (err) {
      setResponse("Delete failed: " + err.message);
    }
  };

  useEffect(() => {
    handleGet();
  }, []);

  return (
    <div className="app">
      <h2>React API CRUD Example</h2>

      <ProductForm onCreate={handleCreate} />

      <h3>API Response</h3>
      <p className="response">{response}</p>

      <h3>Product Data</h3>
      <ProductList products={products} onUpdate={handleUpdate} onPatch={handlePatch} onDelete={handleDelete} />
    </div>
  );
}

export default ProductPage;