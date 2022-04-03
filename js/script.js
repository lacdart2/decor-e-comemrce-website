// navbar color change
/*
const navbar = document.querySelector(".last-nav");

window.addEventListener("scroll", () => {
  console.log(scrollY);

})
 */


const productContainer = document.querySelectorAll(".product-wrapper");
const nxtBtn = document.querySelectorAll(".nxt-btn");
const preBtn = document.querySelectorAll(".pre-btn");

productContainer.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  })
  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  })
})
