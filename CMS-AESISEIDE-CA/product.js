let container = document.querySelector("#product");

const URL =
  " https://luxcar.tech/wp-json/wc/v3/products?consumer_key=ck_803765d65968f2b51094c6aac941a8929cf82741&consumer_secret=cs_4db15c8eec4494d7e94ad21a67366aec6504197f";

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

let prodId = getParameterByName("prodid");

fetch(URL)
  .then((r) => r.json())
  .then((prod) => {
    let singleProduct = prod.filter((r) => r.id == prodId);
    console.log(singleProduct);
    let prodData = singleProduct[0];

    let product = document.createElement("div");
    product.innerHTML = `
    <a href="product.html?prodid=${prodData.id}">
  <div class="image">
  <img src="${prodData.images[0].src}" />
  </div>
  <div class="description">
  <h2>${prodData.name}</h2>
  ${prodData.price_html}
  <span class="btn">Add to cart</span>
  </div></a>
  `;

    container.appendChild(product);
  });
