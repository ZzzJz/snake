 class Score{
    score:number
    level:number
    levelUpScore:number
    constructor(score:number = 0,level:number = 1,levelUpScore:number = 10){
      this.score = score
      this.level = level
      this.levelUpScore = levelUpScore
    }
    addScore(){
      this.score+=1
    }
    addLevel(){
      if(this.score%this.levelUpScore===0){
        this.level = this.score/this.levelUpScore
      }
    }
 }

 export default Score