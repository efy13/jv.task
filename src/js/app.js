const liveButton = document.querySelector(".btn")


function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let colorArr = ["rgb(", r, ", ", g, ", ", b, ")"].reduce((a, b) => a + b)

  document.querySelector(".card-body").style.backgroundColor = colorArr;
  console.log(colorArr)
}
liveButton.addEventListener("click", randomColor )





  




  