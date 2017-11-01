(function(){
	var arr = [];
	function snake (options){
		options = options || {};

		this.width = options.width || 20;
		this.height = options.height || 20;
		this.direction = options.direction || 'right';
		this.body = [
			{x:3,y:2,backgroundColor:'red'},
			{x:2,y:2,backgroundColor:'blue'},
			{x:1,y:2,backgroundColor:'orange'},
		];
	}
	snake.prototype.createSnake = function (food){
		remove();
		for(var i = 0; i < this.body.length; i++){
			var div = document.createElement('div');
			arr.push(div);
			div.style.position = 'absolute';

			div.style.width = this.width + 'px';
			div.style.height = this.height + 'px';
			div.style.borderRadius = 10 + 'px';
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
		var width = food.x / food.width - head.x;
		var height = food.y / food.height - head.y;
	
		// if (width > 0) {
		// 	this.direction = 'right';
		// }else{
		// 	this.direction = 'left';
		// }

		switch(this.direction){
		  case 'right' :
		    head.x +=1;
		    break;
		  case 'left' :
		    head.x -= 1;
		    break;
		// }
		
		// if (height > 0) {
		// 	this.direction = 'bottom';
		// }else{
		// 	this.direction = 'top';
		// }
		// switch(this.direction){		    
		  case 'top' :
		    head.y -= 1;
		    break;
		  case 'bottom':
		    head.y += 1;
		    break;
		}
		if (food.x === head.x * this.width && food.y === head.y * this.height) {
	      var last = this.body[arr.length - 1];
	      // last.backgroundColor = food.color();
	      
	      this.body.push({
	        x: last.x,
	        y: last.y,
	        backgroundColor : food.color,
	      });
	      food.createFood(map);
	      }
	    }
	function remove (){
		for(var i = 0; i