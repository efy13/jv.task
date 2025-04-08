// const liveButton = document.querySelectorAll(".btn")

// liveButton.forEach(button => {
//   function randomColor() {
//     let r = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     let colorArr = ["rgb(", r, ", ", g, ", ", b, ")"].reduce((a, b) => a + b)

//     document.querySelector(".card  .card-body").style.backgroundColor = colorArr;
//     console.log(colorArr)
//   }
//   liveButton.addEventListener("click", randomColor)
// // })

// const mixButton = document.querySelectorAll(".mix");
// const result = document.querySelectorAll(".result");
// const cardBody = document.querySelectorAll(".card-body");



const buttons = document.querySelectorAll('.card-body .btn');
    const colors = ['lightblue', 'lightgreen', 'orange', 'pink', 'yellow'];

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        button.parentElement.style.backgroundColor = randomColor;
      });
    });









