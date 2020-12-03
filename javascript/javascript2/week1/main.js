console.log("Script loaded");

const products = getAvailableProducts();

function renderProducts(products) {
  
  ul_element = document.querySelector("#list")
  for(let i=0; i < products.length; i++)
  {
    const li_tag = document.createElement('li');
    const product = products[i];
    li_tag.innerHTML = "Title: <strong>" + product.name + "</strong><br/> Price: " + product.price + "<br/> Rating: " + product.rating;
    ul_element.appendChild(li_tag);
  }
}

renderProducts(products);

console.log(products);






