const BASE = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_URL)
  ? import.meta.env.VITE_API_URL
  : "http://localhost:3000";
const URL = `${BASE.replace(/\/$/, "")}/products`;

async function handleResponse(res) {
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || res.statusText);
  }
  return res.json();
}

export const getProducts = async () => {
  const res = await fetch(URL);
  return handleResponse(res);
};

export const createProduct = async (product) => {
  const res = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product)
  });
  return handleResponse(res);
};

export const updateProduct = async (id, product) => {
  const res = await fetch(`${URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product)
  });
  return handleResponse(res);
};

export const patchProduct = async (id, patchData) => {
  const res = await fetch(`${URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(patchData)
  });
  return handleResponse(res);
};

export const deleteProduct = async (id) => {
  const res = await fetch(`${URL}/${id}`, { method: "DELETE" });
  return handleResponse(res);
};