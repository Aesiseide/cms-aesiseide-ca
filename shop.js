const URL =
  " https://luxcar.tech/wp-json/wc/v3/products?consumer_key=ck_803765d65968f2b51094c6aac941a8929cf82741&consumer_secret=cs_4db15c8eec4494d7e94ad21a67366aec6504197f";

let container = document.querySelector("#products");

fetch(URL)
  .then((r) => r.json())
  .then((d) => {
    d.forEach((prod) => {
      let product = document.createElement("div");
      product.innerHTML = `
      <a href="product.html?prodid=${prod.id}">
    <div class="image">
    <img src="${prod.images[0].src}" />
    </div>
    <div class="description">
    <h2>${prod.name}</h2>
    ${prod.price_html}
    <span class="btn">Add to cart</span>
    </div></a>
    `;
      container.appendChild(product);
    });
  });
