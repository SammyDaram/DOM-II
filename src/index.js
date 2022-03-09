import './less/index.less'

// Your code goes here!
//LOAD
window.onload = function (evt) {
  console.log(`event ${evt.type} fired! Ready to go!`)
  const heading = document.querySelector("h1")
  heading.textContent = `READY TO GO!!`



  //COPY
  window.addEventListener('copy', () => {
    navigator.clipboard.readText()
        .then(text => {
            heading.textContent += text
    })
  })



  //CLICK
  document.body.addEventListener ('click', evt => {
      evt. target.classList.toggle ('mirror')
  })


  //DBLCLICK
  document.body.addEventListener ('dblclick', evt => {
    evt.target.innerHTML = ''
  })


  //KEYDOWN
  window.addEventListener('keydown', evt => {
      if (evt.key === 6) {
          document.body.innerHTML = 'YOU RAN ORDER 66'
      }
  })

  //MOUSEMOVE
  document.body.addEventListener('mousemove', evt => {
      const { clientX, clientY } = evt
  })


  //MOUSELEAVE 
  const destination = document.querySelectorAll('.destination')
  for (let destination of destinations) {
      destination,addEventListener('mouseenter', () => {
          destination.style.fontWeight = 'bold'
      })
      destination.addEventListener('mouseleave', () => {
          setTimeout(() => {
              destination.style.fontWeight = 'initial'
          })
      })
  }
}






















// const page = document.querySelector("body");
// const heading = document.querySelector(".logo-heading");
// const navlinks = document.querySelectorAll(".nav-link");
// const mainImg = document.querySelector(".intro img");
// const midImages = document.querySelectorAll(".img-content ime");
// const bottomImg = document.querySelector(".content-destination img");
// const buttons = document.querySelectorAll(".btn");
// const footer = document.querySelector(".footer");

// const squish = function (e) {
//   mainImg.classList.toggle("squish");
//   mainImg.target.style.width = "10px";
//   e.target.classList.toggle("squish");
// };
// mainImg.addEventListener("dblclick", squish);
