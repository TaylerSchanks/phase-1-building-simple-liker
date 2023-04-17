// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heartClasses = document.querySelectorAll(".like-glyph");

function fullHeart(element) {
  element.innerText = FULL_HEART
  element.classList.add("activated-heart")
}

function timeout() {
 const modal =  document.getElementById("modal")
  modal.classList.add("hidden")
}

function emptyHeart(element) {
  element.innerText = EMPTY_HEART
  element.classList.remove("activated-heart")
  const modal = document.getElementById("modal")
  modal.classList.remove("hidden")
  setTimeout(timeout, 3000)
}
async function heartInteraction(e) {
  let res = await mimicServerCall()
  fullHeart(e.target)
}

heartClasses.forEach(h =>
    h.addEventListener("click", heartInteraction)
);






// const heartClasses = document.querySelectorAll(".like-glyph");
//
// function fullHeart(element) {
//   element.innerText = FULL_HEART
//   element.classList.add("activated-heart")
// }
//
// function timeout() {
//   const modal =  document.getElementById("modal")
//   modal.classList.add("hidden")
// }
//
// function emptyHeart(element) {
//   element.innerText = EMPTY_HEART
//   element.classList.remove("activated-heart")
//   const modal = document.getElementById("modal")
//   modal.classList.remove("hidden")
//   setTimeout(timeout, 3000)
// }
// function heartInteraction(e) {
//   mimicServerCall()
//       .then(res => fullHeart(e.target))
//       .catch(error => emptyHeart(e.target))
// }
//
// heartClasses.forEach(h =>
//     h.addEventListener("click", heartInteraction)
// );

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
