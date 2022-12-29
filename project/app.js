const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 11900,
    colors: [
      {
        code: "black",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZjQyYFHfSyrf1hiV7Ms6qQHaEc%26pid%3DApi&f=1",
      },
      {
        code: "orange",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IdVju9ASOazQ5TP0DkckyQHaEc%26pid%3DApi&f=1",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 14900,
    colors: [
      {
        code: "black",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.tulbMQNvHWd1SRqhuqjxXgHaE7%26pid%3DApi&f=1",
      },
      {
        code: "green",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.yfvtnw8FJJnnE4sE_GDkzgHaEc%26pid%3DApi&f=1",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 10900,
    colors: [
      {
        code: "lightgray",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.odKD3QLGwvOhHmerA6FfBQHaHa%26pid%3DApi&f=1",
      },
      {
        code: "red",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.as1PBpnSAVytEw1Qsi0koAHaHa%26pid%3DApi&f=1",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 12900,
    colors: [
      {
        code: "black",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.94zhxuTf19SjBAr-3qp56AHaJQ%26pid%3DApi&f=1",
      },
      {
        code: "lightgray",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.SHxByFbStB4sIKjLvqsXPgHaJQ%26pid%3DApi&f=1s",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 9900,
    colors: [
      {
        code: "gray",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.9E7HjSVZ0j7a4U7FtPGpYwHaFM%26pid%3DApi&f=1",
      },
      {
        code: "black",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.2oebEK3JjOQbuUCI4rrcpAHaIO%26pid%3DApi&f=1",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});