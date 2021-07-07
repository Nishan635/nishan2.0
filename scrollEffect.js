const allItems = document.querySelector(".all_items");
const wordPress = document.querySelector(".word_press");
const customeCode = document.querySelector(".custome_code");

allItems.addEventListener("click", () => {
  allItems.style.backgroundColor = "#ffb400";
  wordPress.style.backgroundColor = "white";
  customeCode.style.backgroundColor = "white";
  let ele = document.querySelectorAll(".project_by_wp");
  ele.forEach((ele) => {
    ele.classList.add("add");
    ele.style.display = "block";
  });
  let custome = document.querySelectorAll(".project_by_custom");
  custome.forEach((ele) => {
    ele.style.display = "block";
    ele.classList.add("add");
  });
});
customeCode.addEventListener("click", () => {
  allItems.style.backgroundColor = "white";
  wordPress.style.backgroundColor = "white";
  customeCode.style.backgroundColor = "#ffb400";
  let ele = document.querySelectorAll(".project_by_wp");
  ele.forEach((ele) => {
    ele.style.display = "none";
  });
  let custome = document.querySelectorAll(".project_by_custom");
  custome.forEach((ele) => {
    ele.classList.add("add");
    ele.style.display = "block";
  });
});
wordPress.addEventListener("click", () => {
  allItems.style.backgroundColor = "white";
  wordPress.style.backgroundColor = "#ffb400";
  customeCode.style.backgroundColor = "white";
  let ele = document.querySelectorAll(".project_by_wp");
  ele.forEach((ele) => {
    ele.classList.add("add");
    ele.style.display = "block";
  });
  let custome = document.querySelectorAll(".project_by_custom");
  custome.forEach((ele) => {
    ele.style.display = "none";
  });
});

const section = document.querySelectorAll(".sections");
section.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let ele = document.getElementById(item.getAttribute("single-section"));
    ele.style.color = "#FFB400";
  });
});
section.forEach((item) => {
  item.addEventListener("mouseout", () => {
    let ele = document.getElementById(item.getAttribute("single-section"));
    ele.style.color = "white";
  });
});
