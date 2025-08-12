import { useEffect, useState } from "react";

export default function AdminPanel() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    title: "",
    chance: "",
    price: "",
    image: "",
    case: "",
    model: "",
    type: "",
  });
  const [editId, setEditId] = useState(null);

  const fetchItems = async () => {
    try {
      const res = await fetch("http://localhost:5000/items");
      if (!res.ok) throw new Error("Failed to fetch items");
      const data = await res.json();
      setItems(data);
    } catch (err) {
      console.error(err);
    }
  };

  const addItem = async () => {
    const newItem = {
      title: form.title,
      chance: parseFloat(form.chance),
      price: parseFloat(form.price),
      image: form.image,
      case: parseInt(form.case),
      model: form.model,
      type: form.type,
    };

    try {
      const res = await fetch("http://localhost:5000/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      });
      if (!res.ok) throw new Error("Failed to add item");
      resetForm();
      fetchItems();
    } catch (err) {
      console.error(err);
    }
  };

  const updateItem = async () => {
    const updatedItem = {
      title: form.title,
      chance: parseFloat(form.chance),
      price: parseFloat(form.price),
      image: form.image,
      case: parseInt(form.case),
      model: form.model,
      type: form.type,
    };

    try {
      const res = await fetch(`http://localhost:5000/items/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedItem),
      });
      if (!res.ok) throw new Error("Failed to update item");
      resetForm();
      fetchItems();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteItem = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/items/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete item");
      fetchItems();
    } catch (err) {
      console.error(err);
    }
  };

  const editItem = (item) => {
    setEditId(item._id);
    setForm({
      title: item.title,
      chance: item.chance,
      price: item.price,
      image: item.image,
      case: item.case,
      model: item.model,
      type: item.type,
    });
  };

  const resetForm = () => {
    setEditId(null);
    setForm({
      title: "",
      chance: "",
      price: "",
      image: "",
      case: "",
      model: "",
      type: "",
    });
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="barcxana" style={{ padding: "20px" }}>
      <h2 className="abaertivinmemramegabedos">Admin Panel</h2>

      <input
        className="balzams"
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <input
        className="balzams"
        placeholder="Type"
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
      />
      <input
        className="balzams"
        placeholder="Model"
        value={form.model}
        onChange={(e) => setForm({ ...form, model: e.target.value })}
      />
      <input
        className="balzams"
        placeholder="Chance (%)"
        type="number"
        step="0.01"
        value={form.chance}
        onChange={(e) => setForm({ ...form, chance: e.target.value })}
      />
      <input
        className="balzams"
        placeholder="Image URL"
        type="text"
        value={form.image}
        onChange={(e) => setForm({ ...form, image: e.target.value })}
      />
      <input
        className="balzams"
        placeholder="Case Number"
        type="number"
        value={form.case}
        onChange={(e) => setForm({ ...form, case: e.target.value })}
      />
      <input
        className="balzams"
        placeholder="Price"
        type="number"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />

      {editId ? (
        <>
          <button className="xodzevart" onClick={updateItem}>
            Update Item
          </button>
          <button className="xodzevart" onClick={resetForm}>
            Cancel
          </button>
        </>
      ) : (
        <button className="xodzevart" onClick={addItem}>
          Add Item
        </button>
      )}

      <ul>
        {items.map((item) => (
          <li key={item._id} className="shavi">
            {item.title} — Chance: {item.chance}% — Price: ${item.price} — ImageUrl: {item.image} — CaseNumber:{" "}
            {item.case} — Type: {item.type} — Model: {item.model}
            <button className="xodzevart" onClick={() => deleteItem(item._id)}>
              Delete
            </button>
            <button className="xodzevart" onClick={() => editItem(item)}>
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
