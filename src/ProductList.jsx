import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "./CartSlice";

const plants = [
  // Indoor Plants
  {
    id: 1,
    name: "Snake Plant",
    price: 299,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2b2e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 399,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Money Plant",
    price: 249,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1614594575926-b2c2e8c6f6b3?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Areca Palm",
    price: 499,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1632207691144-2e9b4c6f4e3f?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "ZZ Plant",
    price: 449,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1632207691144-2e9b4c6f4e3f?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    name: "Rubber Plant",
    price: 549,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80",
  },

  // Outdoor Plants
  {
    id: 7,
    name: "Rose Plant",
    price: 299,
    category: "Outdoor Plants",
    image:
      "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 8,
    name: "Hibiscus",
    price: 349,
    category: "Outdoor Plants",
    image:
      "https://images.unsplash.com/photo-1597848212624-e19c0a4b4f1b?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 9,
    name: "Jasmine",
    price: 299,
    category: "Outdoor Plants",
    image:
      "https://images.unsplash.com/photo-1597848212624-e19c0a4b4f1b?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 10,
    name: "Bougainvillea",
    price: 399,
    category: "Outdoor Plants",
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 11,
    name: "Lavender",
    price: 349,
    category: "Outdoor Plants",
    image:
      "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 12,
    name: "Marigold",
    price: 199,
    category: "Outdoor Plants",
    image:
      "https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=500&q=80",
  },

  // Flowering Plants
  {
    id: 13,
    name: "Orchid",
    price: 599,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1566984111389-7d4e7b0f4d3a?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 14,
    name: "Anthurium",
    price: 499,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1591958911259-bee2173bdccc?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 15,
    name: "African Violet",
    price: 399,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 16,
    name: "Geranium",
    price: 299,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1526397751294-331021109fbd?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 17,
    name: "Begonia",
    price: 349,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1518882605630-8eb2a9e1a0a1?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 18,
    name: "Chrysanthemum",
    price: 299,
    category: "Flowering Plants",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80",
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const [addedItems, setAddedItems] = useState([]);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems((previous) => [...previous, plant.id]);
  };

  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div className="product-page">
      {/* Navbar */}
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">🛒 Cart ({cartCount})</Link>
        </div>
      </nav>

      <h1 className="page-title">Our Plants</h1>

      {/* Product Categories */}
      {categories.map((category) => (
        <section key={category} className="plant-category">
          <h2>{category}</h2>

          <div className="plant-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div className="plant-card" key={plant.id}>
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="plant-image"
                  />

                  <h3>{plant.name}</h3>

                  <p className="plant-price">₹{plant.price}</p>

                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedItems.includes(plant.id)}
                  >
                    {addedItems.includes(plant.id)
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;