<template>
  <div class="gameBox">
    <div class="area">
      <div class="snake">
        <div v-for="(item,index) in snake.positionArr" :key="index" :style="{'left':item.x+'px','top':item.y+'px'}"  >{{item}}</div>
      </div>

      <!-- <div ref="food" class="food" :style="{'left':gameControl.food.positionX+'px','top':gameControl.food.positionY+'px'}" ></div> -->
    </div>
    <div class="score">
      <div>得分：{{score}}</div>
      <div>等级：{{level}}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { ref,reactive } from '@vue/runtime-core'
  import GameControl from './utils/gameCntrol'
  
  let gameControl = new GameControl()
  let positionArr = reactive(gameControl.snake)
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
      width: 10px;
      height: 10px;
      background: #000;
      border-left: 1px solid $bg;
      position: absolute;
    }
  }
  .food{
    width: 10px;
    height: 10px;
    background: blue;
    border-left: 1px solid $bg;
    position: absolute;
  }
}
</style>
