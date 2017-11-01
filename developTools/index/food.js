

(function (){
	var arr = [];
	function food (options){
		
		options = options || {};

		this.width = options.width || 20;
		this.height = options.height || 20;
		this.x = options.left || 0;
		this.y = options.top || 0;
		// this.color = randomColor();
		this.food_color = function ( ) {
			return randomColor();
		
		};
	}
	food.prototype.createFood = function() {
		remove();
		
		var div = document.createElement('div');
		arr.push(div);
		// var food = document.getElementById('food');
		div.style.position = 'absolute';
		div.style.width = this.width + 'px';
		div.style.height = this.height + 'px';
		div.style.backgroundColor = this.food_color();
		// console.log(this.color());
		// console.log(this.food_color);
		food.prototype.color = div.style.backgroundColor;

		div.style.borderRadius = 10 + 'px';
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