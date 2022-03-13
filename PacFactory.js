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
  position.y += 30;
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

function update() {
  
  pacMen.forEach((item) => {
      checkCollisions(item)
      
      item.position.x += item.velocity.x;
      item.position.y += item.velocity.y;

      item.newPac.style.left = item.position.x + 'px';
      item.newPac.style.top = item.position.y + 'px';

          
      item.newPac.src = pacArray[item.newPac.direction][item.newPac.mouth];
      item.newPac.mouth = (item.newPac.mouth + 1) % 2; 
  })
  
  setTimeout(update, 75);
}

function checkCollisions(item) {
  let container = document.getElementById('container');
  
  if (item.position.x + item.velocity.x + item.newPac.width > container.clientWidth + 25 ||
      item.position.x + item.velocity.x < 25){
      item.velocity.x = -item.velocity.x;
      item.newPac.direction = (item.newPac.direction + 1) % 2; 
    }
          
  
  if (item.position.y + item.velocity.y + item.newPac.width > container.clientHeight + 25 ||
      item.position.y + item.velocity.y < 25) item.velocity.y = -item.velocity.y;
  
  }