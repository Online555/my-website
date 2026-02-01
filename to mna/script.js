const TELEGRAM_USERNAME = "ՔՈ_USERNAME"; // օրինակ՝ myshop_arm

const productsData = [
  { id:1, name:"Духи мужские набор Брутальный 36мл", price:2000, stock:10, img:"https://basket-15.wbcontent.net/vol2379/part237913/237913224/images/big/1.webp" },
  { id:2, name:"Ապրանք 2", price:5500, stock:10, img:"img/p2.jpg" },
  { id:3, name:"Ապրանք 3", price:6000, stock:10, img:"img/p3.jpg" },
  { id:4, name:"Ապրանք 4", price:6500, stock:10, img:"img/p4.jpg" },
  { id:5, name:"Ապրանք 5", price:7000, stock:10, img:"img/p5.jpg" },
  { id:6, name:"Ապրանք 6", price:7500, stock:10, img:"img/p6.jpg" },
  { id:7, name:"Ապրանք 7", price:8000, stock:10, img:"img/p7.jpg" },
  { id:8, name:"Ապրանք 8", price:8500, stock:10, img:"img/p8.jpg" },
  { id:9, name:"Ապրանք 9", price:9000, stock:10, img:"img/p9.jpg" },
  { id:10,name:"Ապրանք 10",price:9500,stock:10,img:"img/p10.jpg"}
];

const products = document.getElementById("products");

function renderProducts() {
  products.innerHTML = "";
  productsData.forEach(p => {
    products.innerHTML += `
      <div class="product">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <div class="price">${p.price} դրամ</div>
        <button ${p.stock === 0 ? "disabled" : ""} onclick="buyTelegram(${p.id})">
          ${p.stock === 0 ? "Չկա" : "Գնել"}
        </button>
      </div>
    `;
  });
}

function buyTelegram(id) {
  const p = productsData.find(x => x.id === id);
  if (!p || p.stock === 0) return;

  p.stock--;
  renderProducts();

  const text =
`Բարև 👋
Ուզում եմ գնել
📦 ${p.name}
💰 ${p.price} դրամ`;

  window.open(
    `https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(text)}`,
    "_blank"
  );
}

renderProducts();
