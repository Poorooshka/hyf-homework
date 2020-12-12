"use strict"
console.log('Script loaded');

const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');
console.log(productsUl);

function renderProducts(products) {
        
         while (productsUl.hasChildNodes()) {
        productsUl.removeChild(productsUl.firstChild);
      }
        
        products.forEach((product)=>{const li = document.createElement('li');

        let shipsToHTML = '';
        product.shipsTo.forEach(country => shipsToHTML += `<li>${country}</li>`);

        li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
        productsUl.appendChild(li);});
}



// Search products by inputting names


document.getElementById("searched").addEventListener('input', (event)=>{
    const searchedItem = document.getElementById("searched").value.toLowerCase();
    const searchedProducts = products.filter((product)=>product.name.toLowerCase().includes(searchedItem))
    console.log(searchedProducts)
    renderProducts(searchedProducts); 
})
    

//Search Products by max price 
document.getElementById("price").addEventListener('input', (event)=>{
    const searchedPrice = document.getElementById("price").value;
    const maxPrice= parseInt(searchedPrice);
    const lessPriceProducts = products.filter((product)=>product.price < maxPrice);
    console.log(lessPriceProducts);
    renderProducts(lessPriceProducts);
  });


// Search Products by rating

  document.getElementById("rating").addEventListener('input', (event)=>{
      const searchedRating = document.getElementById("rating").value;
      const rating = parseInt(searchedRating);
      const ratedProducts = products.filter(product=>product.rating === rating);
      console.log(ratedProducts);
      renderProducts(ratedProducts);
  })
