
class Food{
  positionX:number = 0
  positionY:number = 0
  constructor(){
    this.positionChange()
    // setInterval(()=>{
    //   this.positionChange()
    // },1000)
  }
  positionChange(){
    this.positionX = (Math.floor(Math.random() * 34)*11)
    this.positionY = (Math.floor(Math.random() * 34)*11)
  }
}

export default Food