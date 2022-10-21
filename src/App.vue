<template>
  <div class="gameBox">
    <div class="area">
      <div class="snake">
        <div v-for="(item,index) in gameControl.snake.positionArr" :key="index" :style="{'left':item.x+'px','top':item.y+'px'}"  ></div>
      </div>
      <div ref="food" class="food" :style="{'left':gameControl.food.positionX+'px','top':gameControl.food.positionY+'px'}" ></div>
    </div>
    <div class="score">
      <div>得分：{{gameControl.score.score}}</div>
      <div>等级：{{gameControl.score.level}}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { ref,reactive } from '@vue/runtime-core'
  import GameControl from './utils/gameCntrol'
  
  let gameControl = reactive(new GameControl())
  gameControl.move()
</script>
<style lang="scss" scoped>
$bg:#B9DAAA;

.gameBox{
  width: 400px;
  height: 500px;
  border-radius: 30px;
  border: 10px solid #000;
  background: $bg;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  .area{
    width: 350px;
    height: 350px;
    border: 1px solid #000;
    position: relative;
  }
  .score{
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .snake{
    div{
      width: 9px;
      height: 9px;
      background: #000;
      border: 1px solid $bg;
      position: absolute;
    }
  }
  .food{
    position: absolute;
    width: 9px;
    height: 9px;
    background: blue;
    border-left: 1px solid $bg;
  }
}
</style>
