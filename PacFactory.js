//Nested Array of Images
const pacArray = [
  ['PacMan1.png', 'PacMan2.png'],
  ['PacMan3.png', 'PacMan4.png']
];

//Array to hole the newPac objects
const pacMen = [];

//Random Generator
function getRandom(scale){
  return {
    x: Math.ceil(Math.random() * scale),
    y: Math.ceil(Math.random() * scale), 
  }
}

function makePac(){
  let velocity = getRandom(20);
  let position = getRandom(250);
  let container = document.getElementById('container');
  let newPac = document.createElement('img');
//Sets position to interior of 'Container' Div
  position.x += 30;
  position.y += 25;
//Initializes the img src for the Pac  
  newPac.direction = 0;
  newPac.mouth = 0;
  
  newPac.style.position = 'absolute';
  newPac.width = 100;
  newPac.src = pacArray[newPac.direction][newPac.mouth];

  newPac.style.top = `${position.y}px`;
  newPac.style.left = `${position.x}px`;
  

  container.appendChild(newPac);
  
  return {
    position,
    velocity,
    newPac,
  }
};

function makeOne(){
  pacMen.push(makePac());
};

// function update() {
  
//   pacMen.forEach((item) => {
//       checkCollisions(item)
//       //mouth = item.newPac.mouth 
//       item.position.x += item.velocity.x;
//       item.position.y += item.velocity.y;

//       item.newPac.style.left = item.position.x;
//       item.newPac.style.top = item.position.y;

//       // if (faceRight === true) direction = 0;
//       // if (faceRight === false) direction = 1;
      
//       item.newimg.src = pacArray[direction][mouth];
//       mouth = (mouth + 1) % 2; 
//   })
  
//   setTimeout(update, 75);
// }

// function checkCollisions(item) {
  
//   if (item.position.x + item.velocity.x + item.newimg.width > window.innerWidth ||
//       item.position.x + item.velocity.x < 0){
//       item.velocity.x = -item.velocity.x;
//       faceRight = !faceRight;
//   }
        
//   if (item.position.y + item.velocity.y + item.newimg.width > window.innerHeight ||
//       item.position.y + item.velocity.y < 0) item.velocity.y = -item.velocity.y;
  
//   }