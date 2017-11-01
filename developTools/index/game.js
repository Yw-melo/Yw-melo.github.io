(function(){
	function game (){
		this.food = new food();
		this.snake = new snake();
		that = this;
	}

	game.prototype.start = function (map) {
		this.food.createFood(map);
		this.snake.createSnake(this.food);
		this.map = map;
		// autoMove();
		keyboard();
	}

	function autoMove( ) {
		id = setInterval(function(){
			//让蛇移动
			that.snake.move(that.food,that.map);
			//判断蛇是否越界
			var foodX = that.food.x / that.food.width;
			var foodY = that.food.y / that.food.width;
			var head = that.snake.body[0];
			var headX = head.x;
			var headY = head.y;
			var maxX = that.map.offsetWidth / that.snake.width - 1;
			var maxY = that.map.offsetHeight / that.snake.height - 1;
			if(headX < 0 || headY < 0){



		        clearInterval(id);
		        alert('game over');
		        return; // 如果对象中数据计算已经到大目标位置,则不再进行渲染,解决蛇头移出地图的问题
		        }
		      //判断蛇头是否到达右/下边界
	        if(headX > maxX || headY > maxY){
		        clearInterval(id);
		        alert('game over');
		        return;
		        }

				if(headX > foodX){
                that.snake.direction = 'left';
	            }
	            if(headX < foodX){
	                that.snake.direction = 'right';
	            }
	            if(headY > foodY){
	                that.snake.direction = 'top';
	            }
	            if(headY < foodY){
	                that.snake.direction = 'bottom';
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


