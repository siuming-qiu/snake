import "./style/index.css";
import Food from "./modules/Food";
import Score from "./modules/Score";
import Snake from "./modules/Snake";
const food = new Food();
const score = new Score(10, 10, 0, 1);
const snake = new Snake();

let dirction: string = "";
let dirHor: Array<string> = ["ArrowRight","ArrowLeft"]

function changeDirction(e: KeyboardEvent) {
  // 水平移动时只能改变上下方向
  let isHornow = dirHor.includes(dirction) ? 1 : 0
  let curr = dirHor.includes(e.key) ? 1 : 0
  if (snake.body.length > 1 && !(isHornow ^ curr)) {
    return;
  }
  dirction = e.key;
}
function run() {
  let [x, y] = snake.get();
  switch (dirction) {
    case "ArrowRight":
      x += 10;
      break;
    case "ArrowLeft":
      x -= 10;
      break;
    case "ArrowUp":
      y -= 10;
      break;
    case "ArrowDown":
      y += 10;
      break;
  }
  if (x === food.left && y === food.top) {
    snake.add();
    food.change();
    score.add();
  }
  try {
    snake.set(x, y);
  } catch (e: any) {
    window.alert(e.message);
    return;
  }
  setTimeout(run, 300 / score.level);
}
document.body.addEventListener("keyup", changeDirction);
run()
