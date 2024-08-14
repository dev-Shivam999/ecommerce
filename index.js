let cardIcon = document.querySelector("#card-icon");
let card = document.querySelector(".card");
let closeCard = document.querySelector("#close-card");
const search = document.querySelector(".search input");
const searchList = document.querySelector(".search-list");
let CartPage = document.querySelector(".card-content");

document.querySelector('.up').addEventListener('mousemove', function (e) {
  document.querySelector('.cur').style.top = e.clientY + 'px'
  document.querySelector('.cur').style.left = e.clientX + 'px'



})
const productArr = [
  {
    img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "T-SHIRT",
    prise: "20",
    id:0,
  },
  {
    img: "https://images.unsplash.com/photo-1668649176554-3ad841a780d0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "WIRELESS EARBUDS",
    prise: "150",
    id: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1627637454030-5ddd536e06e5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "COAT",
    prise: "100",
    id: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "SUNGLASS",
    prise: "130",
    id: 3,
  },
  {
    img: "https://media.istockphoto.com/id/458530691/tr/foto%C4%9Fraf/john-deere-cap-on-wood-block.jpg?s=612x612&w=0&k=20&c=f7S74pVLNl088rYgDR_xvM8EG0eomKDIDHD6UCQhejk=",
    title: "BACK HAT",
    prise: "30",
    id: 4,
  },
  {
    img: "https://images.unsplash.com/photo-1622260614153-03223fb72052?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhY2twYWNrfGVufDB8fDB8fHww",
    title: "BACKPACK",
    prise: "90",
    id: 5,
  },
  {
    img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "T-SHIRT",
    prise: "20",
    id: 6,
  },
  {
    img: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D",
    title: "SNEAKERS",
    prise: "135",
    id: 7,
  },
  {
    img: "https://images.unsplash.com/photo-1695634237630-f99602661946?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "METAL BOTTLE",
    prise: "55",
    id: 8,
  },
];

search.addEventListener("input", function (e) {
  if (e.target.value !== "") {
    let one = String(e.target.value).toLocaleLowerCase();

    let items = productArr.filter((i) => {
      return i.title.toLocaleLowerCase().includes(one);
    });

    searchList.innerHTML = ` `;
    items.length == 0 &&
      searchList.insertAdjacentHTML(
        "beforeend",
        `<div class="lol5">not found </div>`
      );
    items.forEach((r) =>
      r != null
        ? searchList.insertAdjacentHTML(
          "beforeend",
          `<div onclick="op(${r.id})" class="lol5">${r.title}</div>`
        )
        : searchList.insertAdjacentHTML(
          "beforeend",
          `<div class="lol">not found </div>`
        )
    );
  } else {
    searchList.innerHTML = "";
  }
});

let CartArr = [];

function params() {
  localStorage.setItem('products', JSON.stringify(""))
  let pro=document.createElement("div");
  productArr.forEach((productArr, i) => {
    pro.innerHTML += `
    <div class="product-box2">
    <div class="product-box" onclick="op(${i})">
      <div class="product-img">
        <img class="img1" src=${productArr.img} alt="">
        <img class="img2" src=${productArr.img} alt="">
      </div>
      <div style="padding:4px;">
        <h2 class="product-title">${productArr.title}</h2>
        <span class="price">$${productArr.prise}</span>
        
      </div>
    </div>
    <i class='bx bx-shopping-bag add-card'></i>
    </div>
    `;
  });
  document.querySelector('.shop-content').innerHTML=pro.innerHTML
  document.querySelectorAll(".add-card").forEach((e) => {
    e.addEventListener("click", function (e) {
      const productElement = e.target.parentNode.childNodes[1];
      const obj = {
        img: productElement.childNodes[1].childNodes[1].src,
        title: productElement.childNodes[3].childNodes[1].innerHTML,
        prise: productElement.childNodes[3].childNodes[3].innerHTML,
      };
    
    const data=localStorage.getItem('cart')
      let j = JSON.parse(data)
      if (!j) {
        j = []
        
      }
      // console.log(," ",value);
    

      const p = j.find(ob => ob.title == obj.title)
      if (p) {
        alert("already added");
      } else {
       
      j.push(obj)
      localStorage.setItem('cart',JSON.stringify(j));
       
      }
    });
  });



}
if (CartArr.length == 0) {
  CartPage.innerHTML = "no add products"
}

function op(params) {
localStorage.setItem('products', JSON.stringify(params))  
  window.location.href = `product.html`;

}


const cart = () => {
  card.classList.add("active");
  const data = localStorage.getItem('cart')
  let j = JSON.parse(data)
  CartPage.innerHTML = "";
 
  if (j.length==0) {
    
    CartPage.innerHTML = "add to cart";
    j = []

  }
  j.forEach((r) =>

    CartPage.innerHTML += `
              <div class="cartItem">
           <img src='${r.img}'>

            <div>
             <span class="lola">${r.title}</span>
             <br>
              <span class="lola">${r.prise}</span>
              </div>
              
              <div class="remove">x</div>
              </div>
              `

  )

  let removeProduct = document.querySelectorAll(".remove");
  removeProduct.forEach(p => p.addEventListener("click", function (e) {
    e.target.parentNode.remove()
    let ab = String(e.target.parentNode.childNodes[3].children[0].innerHTML)
    const pp = j.filter(p => p.title == ab)
    j.pop(pp[0])

    localStorage.setItem('cart', JSON.stringify(j));
    if (j.length==0) {
      CartPage.innerHTML="add product"
    }
   
  }))
};




function pro(){
  const products=localStorage.getItem("products")
  if (products) {
    
    const items = productArr[products]

    document.querySelector('.newpage').innerHTML =` <div class="section">
    <div class="inSection">
        <img src="${ items.img }" alt="">
    </div>
    <div class="text">
        <h1>${items.title}</h1>
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptatibus ipsa sapiente blanditiis quis
            eum sit
            porro rerum

        </div>
        <div>
         prise :  ${  items.prise}
        </div>
        <div>
          Rate :  ⭐⭐⭐⭐⭐
        </div>
    </div>
</div>`
  }else{
    window.location.href = `/`;
  }
  
}


function bg() {

  document.querySelector('.body').classList.toggle('color')
  document.querySelector('.card').classList.toggle('color')
  document.querySelector('.logo').classList.toggle('color')
  document.querySelector('.nav').classList.toggle('color')
  document.querySelector('.search-list').classList.toggle('color')
  document.querySelectorAll('a').forEach(p => p.classList.toggle('pp'))
  document.querySelectorAll('.product-box').forEach(p=>p.classList.toggle('pp'))
}



