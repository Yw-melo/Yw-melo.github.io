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
function randomColor (){
  var base = ['0','1','2','3','4','5','6','7','8','9','a','b','c','e','f'];
  var len = base.length;
  var col1,col2,col3;
  var color;
  col1 = getRandom(0,len - 1);
  col2 = getRandom(0,len - 1);
  col3 = getRandom(0,len - 1);
  color = '#' + base[col1] + base[col2] + base[col3];
  return color;
}