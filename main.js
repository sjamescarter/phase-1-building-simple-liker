// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeBtns = document.querySelectorAll('.like-glyph')
like()

function like() {
  likeBtns.forEach(element => element.addEventListener('click', function(e) {
    mimicServerCall()
    .then(function() {
      if (e.target.textContent === EMPTY_HEART) {
        e.target.textContent = FULL_HEART
        e.target.className = "like-glyph activated-heart"
      } else if (e.target.textContent === FULL_HEART) {
        e.target.textContent = EMPTY_HEART
        e.target.className = "like-glyph"
      }
    })
    .catch(function(error) {
      let reveal = document.querySelector('#modal')
      let errorMsg = document.querySelector('#modal-message')
      reveal.className = ""
      errorMsg.textContent = error
      setTimeout(() => (reveal.className = "hidden"), 3000)
    })
  }))
}



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
