class Snake{
  headPositionX:number = 0
  headPositionY:number = 0
  positionArr:{x:number,y:number}[]
  constructor(positionArr:{x:number,y:number}[] = [{x:0,y:0}]){
    this.positionArr = positionArr
  }
  addBody(){
    this.positionArr.push({x:0,y:0})
  }
}

export default Snake