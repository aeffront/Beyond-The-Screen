const alphabet = {
  a: [[1, 2], [4], [], [2]],
  b: [[1, 2, 4], [1], [], [2]],
  c: [[1], [1], [], []],
  d: [[1, 2], [4], [2], [2]],
  e: [[1, 2], [2], [3], []],
  f: [[1, 2], [2], [], []],
  g: [[2, 3, 4], [2], [], [3]],
  h: [[2, 3], [], [4], [4]],
  i: [[2, 4], [], [], []],
  j: [[4], [], [2], []],
  k: [[3], [1], [4], [4]],
  l: [[], [1], [], [4]],
  m: [[4], [2, 3], [], [4]],
  n: [[4], [2], [], [4]],
  o: [[1, 2], [4], [], []],
  p: [[3, 4], [2], [4], [4]],
  q: [[], [], [], []],
  r: [[], [2], [], [4]],
  s: [[3], [2], [], [3]],
  t: [[3], [2], [], [4]],
  u: [[2], [4], [], [2]],
  v: [[2], [4], [], []],
  w: [[2], [1, 4], [], []],
  x: [[1, 2, 3], [], [3], [3]],
  y: [[1, 4], [4], [2], []],
  z: [[3], [2], [1], []],
};

class letter {
  constructor(letter, letter_position) {
    this.letter = letter;
    this.components = alphabet[letter];
    this.letter_position = letter_position;
    this.pos = -this.letter_position;
  }
  move() {
    this.pos++;
  }
  print() {
    if (this.pos >= 0 && this.pos <= 3) {
      let current_prints = this.components[this.pos];

      if (current_prints.length > 0) {
        for (let i = 0; i < current_prints.length; i++) {
          instructions.push(
            `${this.letter} : ${colors[this.pos]} ${
              shapes[current_prints[i] - 1]
            }`
          );
          shapeInstructions.push([
            colors[this.pos],
            shapes[current_prints[i] - 1],
          ]);
        }
      }
    }
  }
}

function extract_letters(word) {
  letters = [];
  for (let i = 0; i < word.length; i++) {
    letters.push(new letter(word[i], i));
  }
}

function step(val) {
  instructions = [];
  shapeInstructions = [];
  val += 1;
  shapeInstructions.push(["paper", "insert"]);
  for (let i = 0; i < val; i++) {
    letters.forEach((element) => {
      element.print(instructions);
    });

    letters.forEach((element) => {
      element.move(instructions);
    });
    shapeInstructions.push(["paper", "move"]);
  }
  shapeInstructions.push(["paper", "cut"]);
}

function addShapes() {
  let row = 1;
  let col = 0;

  function processShape(i) {
    let img = document.createElement("img");
    img.style.gridRow = row;
    img.style.gridColumn = col;
    img.setAttribute(
      "src",
      `../public/shapes/${shapeInstructions[i][0]}/${shapeInstructions[i][1]}.svg`
    );
    if (shapeInstructions[i][0] == "paper") {
      console.log("paper");
      row++;
    }
    img.setAttribute("width", "10%");
    img.setAttribute("class", "shape");
    document.getElementById("visuals").appendChild(img);

    i++;
    console.log(document.getElementById("visuals").style.top);
    //img.scrollIntoView();

    if (i < shapeInstructions.length)
      setTimeout(() => {
        processShape(i);
      }, (time * 1000) / shapeInstructions.length);
  }

  let i = 0;
  processShape(i);
}

function show_instructions() {
  instructions_text.innerHTML = instruction_text = "";
  for (let i = 0; i < instructions.length; i++) {
    instruction_text += `${i} : ${instructions[i]}<br>`;
  }
  instructions_text.innerHTML = instruction_text;
}

const colors = ["black", "green", "orange", "yellow"];
const shapes = ["house", "circle", "triangle", "square"];

let canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 300;
canvas.height = 300;

let pos = { x: 20, y: canvas.height / 2 };
let scale = 0.1;

function black(rot) {
  ctx.save();
  ctx.translate(pos.x, pos.y);
  ctx.scale(scale, scale);

  if (rot == "house") {
    ctx.rotate(0);
  } else if (rot == "circle") {
    ctx.rotate(Math.PI / 2);
  } else if (rot == "triangle") {
    ctx.rotate(Math.PI);
  } else if (rot == "square") {
    ctx.rotate(-Math.PI / 2);
  }

  ctx.moveTo(10, 0);
  ctx.lineWidth = 20;
  ctx.lineTo(canvas.width / 4, 0);
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.restore();
}
function green(rot) {
  ctx.save();
  ctx.translate(pos.x, pos.y);
  ctx.scale(scale, scale);

  if (rot == "house") {
    ctx.rotate(0);
  } else if (rot == "circle") {
    ctx.rotate(Math.PI / 2);
  } else if (rot == "triangle") {
    ctx.rotate(Math.PI);
  } else if (rot == "square") {
    ctx.rotate(-Math.PI / 2);
  }
  ctx.translate(-10, 10);
  ctx.moveTo(0, 0 + canvas.width / 4);
  ctx.lineWidth = 20;
  ctx.arc(0, 0, canvas.width / 4, Math.PI / 2, Math.PI);
  ctx.strokeStyle = "green";
  ctx.stroke();
  ctx.restore();
}
function orange(rot) {
  ctx.save();
  ctx.translate(pos.x, pos.y);
  ctx.scale(scale, scale);

  if (rot == "house") {
    ctx.rotate(0);
  } else if (rot == "circle") {
    ctx.rotate(Math.PI / 2);
  } else if (rot == "triangle") {
    ctx.rotate(Math.PI);
  } else if (rot == "square") {
    ctx.rotate(-Math.PI / 2);
  }
  ctx.translate(10, -10);
  ctx.moveTo(0, -canvas.width / 4);
  ctx.lineWidth = 20;
  ctx.lineTo(10 + canvas.width / 4, -canvas.width / 4);
  ctx.strokeStyle = "green";
  ctx.stroke();
  ctx.restore();
}
function yellow(rot) {
  ctx.save();
  ctx.translate(pos.x, pos.y);
  ctx.scale(scale, scale);

  if (rot == "house") {
    ctx.rotate(0);
  } else if (rot == "circle") {
    ctx.rotate(Math.PI / 2);
  } else if (rot == "triangle") {
    ctx.rotate(Math.PI);
  } else if (rot == "square") {
    ctx.rotate(-Math.PI / 2);
  }
  ctx.translate(-10, -10);
  ctx.moveTo(0, -canvas.width / 4);
  ctx.lineWidth = 20;
  ctx.lineTo(-10 - canvas.width / 4, -canvas.width / 4);
  ctx.strokeStyle = "green";
  ctx.stroke();
  ctx.restore();
}

function draw() {
  pos = { x: 20, y: canvas.height / 2 };
  ctx.clearRect(-10000, -10000, 10000, 10000);
  for (let i = 0; i < shapeInstructions.length; i++) {
    const color = shapeInstructions[i][0];
    const shape = shapeInstructions[i][1];

    if (color == "black") {
      black(shape);
    } else if (color == "green") {
      green(shape);
    } else if (color == "orange") {
      orange(shape);
    } else if (color == "yellow") {
      yellow(shape);
    } else if (color == "paper") {
      pos.x += 20;
    }
  }
}

let shapeInstructions = [];
let letters = [];
let word;
let instructions = [];
const instructions_text = document.getElementById("instructions");
let instruction_text = "";
let time = 1;

word = "exemple";
extract_letters(word);
step(word.length + 1);
addShapes();

window.addEventListener("keydown", (e) => {
  localStorage.clear();
  if (e.code == "Enter") {
    console.log();
    word = document.getElementById("input").value;
    console.log(word, word.length);
    extract_letters(word);
    step(word.length + 1);
    console.log(shapeInstructions);
    //show_instructions();
    document.getElementById("visuals").innerHTML = "";
    addShapes();
    draw();
  }
});
