const pacArray = [
  ['PacMan1.png', 'PacMan2.png'],
  ['PacMan3.png', 'PacMan4.png']
];
const pacMen = [];


function getRandom(scale){
  return {
    x: Math.ceil((Math.random() * scale) + 10),
    y: Math.ceil((Math.random() * scale) + 30), 
  }
}

function makePac(){
  let velocity = getRandom(20);
  let position = getRandom(270);
  let container = document.getElementById('container');
  let newPac = document.createElement('img');

  newPac.direction = 0;
  newPac.mouth = 0;
  newPac.style.position = 'absolute';
  newPac.style.width = 100;
  newPac.src = pacArray[newPac.direction][newPac.mouth];

  newPac.style.left = position.x;
  newPac.style.top = position.y;
  newPac.style.zIndex = 2;

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
      mouth = item.newPac.mouth;
	  faceRight = true;
      item.position.x += item.velocity.x;
      item.position.y += item.velocity.y;

      item.newPac.style.left = item.position.x;
      item.newPac.style.top = item.position.y;

      if (faceRight === true) direction = 0;
      if (faceRight === false) direction = 1;
      
      item.newPac.src = pacArray[direction][mouth];
      mouth = (mouth + 1) % 2; 
  })
  
  setTimeout(update, 75);
}

function checkCollisions(item) {
  
  if (item.position.x + item.velocity.x + item.newPac.width > window.innerWidth ||
      item.position.x + item.velocity.x < 0){
      item.velocity.x = -item.velocity.x;
      faceRight = !faceRight;
  }
        
  if (item.position.y + item.velocity.y + item.newPac.width > window.innerHeight ||
      item.position.y + item.velocity.y < 0) item.velocity.y = -item.velocity.y;
  
  }
