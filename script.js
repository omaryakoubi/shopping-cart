let total = document.getElementById("total");

let plusBtn = document.getElementsByClassName("plus");
for (let btn of plusBtn) {
  btn.addEventListener("click", function () {
    // getting the value of each product name attribute
    let itemName = btn.getAttribute("name");

    //getting the price of each product
    let price = document.getElementById(itemName + "_price").innerHTML;

    //getting the quantity of each product
    let quantity = document.getElementById(itemName + "_qty");

    quantity.innerHTML++;

    total.innerHTML = parseInt(total.innerHTML) + parseInt(price);
  });
}

let minusBtn = document.getElementsByClassName("minus");
for (let btn of minusBtn) {
  btn.addEventListener("click", function () {
    // getting the value of each product name attribute
    let itemName = btn.getAttribute("name");

    //getting the price of each product
    let price = document.getElementById(itemName + "_price").innerHTML;

    //getting the quantity of each product
    let quantity = document.getElementById(itemName + "_qty");

    if (quantity.innerHTML > 0) {
      quantity.innerHTML--;
      total.innerHTML = parseInt(total.innerHTML) - parseInt(price);
    } else {
      alert("Pay Attention.");
    }
  });
}

let deleteBtn = document.getElementsByClassName("delete");
for (let btn of deleteBtn) {
  btn.addEventListener("click", function () {
    // getting the value of each product name attribute
    let ItemName = btn.getAttribute("name");

    //getting the price of each product
    let price = document.getElementById(ItemName + "_price").innerHTML;

    //getting the quantity of each product
    let quantity = document.getElementById(ItemName + "_qty");

    //changing the total price
    total.innerHTML =
      parseInt(total.innerHTML) -
      parseInt(price) * parseInt(quantity.innerHTML);

    //removing the item from the cart
    document.getElementById(ItemName).remove();
  });
}

let heartBtn = document.getElementsByClassName("heart");
for (let heart of heartBtn) {
  heart.addEventListener("click", function () {
    let heartColor = heart.getAttribute("fill");
    if (heartColor === "grey") {
      heart.setAttribute("fill", "red");
    } else {
      heart.setAttribute("fill", "grey");
    }
  });
}
