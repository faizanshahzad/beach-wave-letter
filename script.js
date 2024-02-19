console.clear();

const sentence = "waves on the shore ";
const letters = sentence.split("");

const letterSize = 16;

function setup() {
  createCanvas(windowWidth,windowHeight);
}
function fbm (x, y) {
  let fs = [84384, 7, 951];
  let acc = 0;
  fs.forEach(f=>{
    acc += noise(x*f,y*f);
  })
  return acc / fs.length;
}
function draw() {
  background('#e9d8a6');
  textFont('Courier New');
  textSize(letterSize);
  for(var y = 0; y <= Math.ceil(height / letterSize); y+= 1) {
    for(var x = 0; x <= Math.ceil(width / letterSize) + 5; x += 1) {
      const letter = letters[x % letters.length];
      const xInitial = x * letterSize;
      const yPos = y * letterSize;
      const perc = x/(width/letterSize);
      let n = noise((x*.1) - frameCount * .005,y*.1);
      n -= .5;
      n *= 180;
      n *= perc;
      const xPos = xInitial + n;
      
      const beach = color("#bb3e03");
      const sea = color("#005f73");
      const c = lerpColor(beach, sea, perc);
      fill(c)
      
      text(letter, xPos, yPos);
    }
  }
}