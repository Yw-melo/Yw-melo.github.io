/**
 * Created by luodianlei on 2017/10/7.
 */
/**
 * 设置元素的文本
 */
function setText(e, str){
  //能力检测
  if(typeof e.innerText !== 'string'){
    //如果执行到此处证明没有这个属性
    e.textContent = str;
  }else{
     e.innerText = str;
  }
}

//获取元素的文本
function getText(e){
  if(typeof e.innerText !== 'string'){
    return e.textContent;
  }else{
    return e.innerText;
  }
  
}

//封装通过id获取元素的方法
function id$ (id){
  return document.getElementById(id);
}

//封装通过tagname获取元素的方法
function tag$ (tag){
  return document.getElementsByTagName(tag);
}

//获取min - max 之间的随机数
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//封装nextEle
function getNextEle(nodeBro){
  while(true){
    nodeBro = nodeBro.nextSibling;
    if (nodeBro.nodeType == 1) {
      return nodeBro;
    }
  } 
}



;(function (){
  var arr = [];
  function food (options){
    
    options = options || {};

    this.width = options.width || 20;
    this.height = options.height || 20;
    this.x = options.left || 0;
    this.y = options.top || 0;
    this.color = options.color || 'orange';
  }
  food.prototype.createFood = function() {
    remove();
    
    var div = document.createElement('div');
    arr.push(div);
    // var food = document.getElementById('food');
    div.style.position = 'absolute';
    div.style.width = this.width + 'px';
    div.style.height = this.height + 'px';
    div.style.backgroundColor = this.color;

    this.x = getRandom(0,map.offsetWidth / this.width - 1) * this.width;
    this.y = getRandom(0,map.offsetHeight / this.height - 1) * this.height;
    div.style.left = this.x + 'px';
    div.style.top = this.y + 'px';
    map.appendChild(div);
    function remove() {
          for(var i = 0, leng = arr.length; i < leng; i++){
           arr[i].parentNode.removeChild(arr[i]);
           arr.splice(i,1);
          }
      
      }
  }
  
    
  window.food = food;
})();

;(function(){
  var arr = [];
  function snake (options){
    options = options || {};

    this.width = options.width || 20;
    this.height = options.height || 20;
    this.direction = options.direction || 'right';
    this.body = [
      {x:3,y:2,backgroundColor:'red'},
      {x:2,y:2,backgroundColor:'blue'},
      {x:1,y:2,backgroundColor:'blue'},
    ];
  }
  snake.prototype.createSnake = function (){
    remove();
    for(var i = 0; i < this.body.length; i++){
      var div = document.createElement('div');
      arr.push(div);
      div.style.position = 'absolute';

      div.style.width = this.width + 'px';
      div.style.height = this.height + 'px';

      div.style.backgroundColor = this.body[i].backgroundColor;

      div.style.left = this.body[i].x * 20 + 'px';
      div.style.top = this.body[i].y * 20 + 'px';
      map.appendChild(div);
    }
  }
  snake.prototype.move = function (food,map){
    for(var i = this.body.length - 1; i > 0; i--){
      this.body[i].x = this.body[i - 1].x;
      this.body[i].y = this.body[i - 1].y;
    }
    var head = this.body[0];
    switch(this.direction){
      case 'right' :
        head.x +=1;
        break;
      case 'left' :
        head.x -= 1;
        break;
      case 'top' :
        head.y -= 1;
        break;
      case 'bottom':
        head.y += 1;
        break;
    }
    if (food.x === head.x * this.width && food.y === head.y * this.height) {
        var last = this.body[arr.length - 1];
        console.log(last);
        this.body.push({
          x: last.x,
          y: last.y,
          backgroundColor : last.backgroundColor
        });
        food.createFood(map);
        }
      }
  function remove (){
    for(var i = 0; i<arr.length;i++){ 0="" arr[i].parentnode.removechild(arr[i]);="" }="" arr="[];" window.snake="snake;" })()="" ;(function(){="" function="" game="" (){="" this.food="new" food();="" this.snake="new" snake();="" that="this;" game.prototype.start="function" (map)="" {="" this.food.createfood(map);="" this.snake.createsnake(map);="" this.map="map;" automove();="" keyboard();="" automove(="" )="" id="setInterval(function(){" 让蛇移动="" that.snake.move(that.food,that.map);="" 判断蛇是否越界="" var="" head="that.snake.body[0];" headx="head.x;" heady="head.y;" maxx="that.map.offsetWidth" that.snake.width="" -="" 1;="" maxy="that.map.offsetHeight" that.snake.height="" if(headx="" <="" ||="" 0){="" clearinterval(id);="" alert('game="" over');="" return;="" 如果对象中数据计算已经到大目标位置,则不再进行渲染,解决蛇头移出地图的问题="" 判断蛇头是否到达右="" 下边界=""> maxX || headY > maxY){
            clearInterval(id);
            alert('game over');
            return;
            }
      that.snake.createSnake(that.map);

    },200)        
  }
  function keyboard (){
    document.onkeydown = function (e){
      switch(e.keyCode){
        case 37:
        if (that.snake.direction === 'right') {
          break
        }
        that.snake.direction = 'left';
        break;
        case 38:
        if (that.snake.direction === 'bottom') {
            break
          }
        that.snake.direction = 'top';
        break;
        case 39:
        if (that.snake.direction === 'left') {
            break
          }
        that.snake.direction = 'right';
        break;
        case 40:
        if (that.snake.direction === 'top') {
            break
          }
        that.snake.direction = 'bottom';
        break;
      }


    }
  } 
  window.game = game;
  window.autoMove = autoMove;
})()


</arr.length;i++){>