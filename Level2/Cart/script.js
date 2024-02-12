// show real products
let products = [
  {
    name: "Wood Chair",
    image:
      "https://images.unsplash.com/photo-1549497538-303791108f95?q=80&w=1361&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "15000",
    headline: "Comfortable",
  },
  {
    name: "White Chair",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "20000",
    headline: "Soft and Comfortable",
  },
  {
    name: "Black Chair",
    image:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "17000",
    headline: "Descent Design",
  },
  {
    name: "Grey Chair",
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoYWlyfGVufDB8MXwwfHx8MA%3D%3D",
    price: "19000",
    headline: "Soft and Wood",
  },
];

let popularProducts = [
  {
    name: "Pink Chair",
    image:
      "https://images.unsplash.com/photo-1586158291800-2665f07bba79?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "25000",
    headline: "Red Cool",
  },
  {
    name: "White Chair",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "20000",
    headline: "Soft and Comfortable",
  },
  {
    name: "Black Chair",
    image:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "17000",
    headline: "Descent Design",
  },
  {
    name: "Grey Chair",
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoYWlyfGVufDB8MXwwfHx8MA%3D%3D",
    price: "19000",
    headline: "Soft and Wood",
  },
];

const addProducts = (products) => {
  let clutter = "";
  products.forEach((product) => {
    clutter += `
      <div class="product w-fit rounded-xl p-2 bg-white">
      <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overlfow-hidden">
        <img class="w-full h-full object-cover" src=${product.image} />
      </div>
      <div class="data w-full px-2 py-5">
          <h1 class="font-semibold text-xl leading-none tracking-tight">
            ${product.name}
          </h1>
          <div class="flex justify-between w-full items-center mt-2">
              <div class="w-1/2">
                  <h3 class="font-semibold opacity-20">${product.headline}</h3>
                  <h4 class="font-semibold mt-2">&#x20b9;${product.price}</h4>
              </div>
              <button class="w-10 h-10 rounded-full shader text-yellow-400"><i
                      class="ri-add-line"></i></button>
          </div>
      </div>
  </div>
      `;
  });

  document.querySelector(".products").innerHTML = clutter;
};

const addPopularProducts = (popularProducts) => {
  let clutter = "";
  popularProducts.forEach((product) => {
    clutter += `
        <div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src=${product.image}
                alt="">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${product.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.heading}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">&#x20b9;${product.price}</h4>
        </div>
    </div>
        `;
  });

  document.querySelector('.populars').innerHTML = clutter

};

addProducts(products);
addPopularProducts(popularProducts);
// show real popular products
// on click of product add button add it to the cart
