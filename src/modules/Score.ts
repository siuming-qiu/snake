class Score {
    score: number;
    level: number;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    maxup: number;
    maxlevel: number
    constructor(maxup: number = 10, maxlevel: number = 10, score: number = 0, level: number = 1) {
        this.scoreEle = document.querySelector(".score")!
        this.levelEle = document.querySelector(".level")!
        this.maxup = maxup
        this.maxlevel = maxlevel
        this.score = score
        this.level = level
        this.scoreEle.innerHTML = score + ''
        this.levelEle.innerHTML = level + ''
    }
    add() {
        this.scoreEle.innerHTML = ++this.score + ''
        if(this.score % 5 == 0 && this.level < this.maxlevel) {           
            this.levelEle.innerHTML = ++this.level + ''
        }
    }

}
export default Score