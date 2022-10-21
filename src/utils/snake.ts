class Snake{
  positionArr:{x:number,y:number}[]
  constructor(positionArr:{x:number,y:number}[] = [{x:0,y:0}]){
    this.positionArr = positionArr
  }
  crossBorder(){
    if(this.positionArr[0].x<0||this.positionArr[0].y<0||this.positionArr[0].x>340||this.positionArr[0].y>340){
      throw new Error("撞墙");
    }
  }
}

export default Snake