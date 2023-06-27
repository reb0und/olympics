// canvas template

const canvas = document.querySelector('.myCanvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth-20; 
const height = canvas.height = window.innerHeight-20; // gonna make a full sized canvas with a little bit of ground leeway

// now you can clearred fillrect fillstyle arc on the ctx


// for animations
const sleep = ms => new Promise(res => setTimeout(res, ms));

// main loop
(async () => {
  while (true){

   await sleep(2); // standard delay
  }
})();
// ok thats it for the main loop

// keypress processing
(async () => {
  window.addEventListener("keydown", function(event) {
    
    if (event.defaultPrevented) {
      return;
    }

    let actkey = event.code.replace('Key','')
    let filterletters = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    
  }, true);
})();
