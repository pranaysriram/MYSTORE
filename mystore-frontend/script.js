<<<<<<< HEAD
async function loadProducts() {
  const res = await fetch("http://localhost:5000/api/products");
  const products = await res.json();

  const container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <p>${p.available ? "✅ Available" : "❌ Out of Stock"}</p>
      </div>
    `;
  });
}

loadProducts();
=======
async function loadProducts() {
  const res = await fetch("http://localhost:5000/api/products");
  const products = await res.json();

  const container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <p>${p.available ? "✅ Available" : "❌ Out of Stock"}</p>
      </div>
    `;
  });
}

loadProducts();
>>>>>>> d58989b79c0319419750a96b365575c714a9af4d
