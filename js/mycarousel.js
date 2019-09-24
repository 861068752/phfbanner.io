//transitionend事件
	    	function transitionend(obj){
	    		var imgul = obj.children[0];
	    		var lis = imgul.children;
	    		jd.addTransitionEnd(imgul,function(){
	    			if(obj.index<0){
	    			obj.index = lis.length - 3;
	    		    }else if(obj.index>lis.length-3){
	    		   	obj.index = 1;
	    		    }
	    			jd.removeTransition(imgul);
	    			jd.setTransform(imgul,-obj.offsetWidth*obj.index);
	    			touchSilber(obj);
	    		})
	    		console.log(1);
	    	}
	    	
	    	//触摸滑动事件
	    	function touchSilber(obj){
	    		var imgul = obj.children[0];
	    		imgul.isMove = false;
	    		window.addEventListener('touchmove',function(e){
	    			e.stopPropagation();
	    			e.preventDefault();
	    		})
	    		imgul.addEventListener('touchstart',function(e){
	    			e.stopPropagation();
	    			e.preventDefault();
	    			console.log("touchstart");
	    			imgul.startX = e.touches[0].pageX;
	    			
	    		})
	    		imgul.addEventListener('touchmove',function(e){
	    			imgul.isMove = true;
	    			e.stopPropagation();
	    			e.preventDefault();
	    			console.log("touchmove");
	    			imgul.endX = e.touches[0].pageX;
	    			imgul.dir = imgul.endX - imgul.startX;
	    			var target = -obj.offsetWidth*obj.index + imgul.dir;
	    			jd.removeTransition(imgul);
	    			jd.setTransform(imgul,target);
	    			
	    		})
	    		imgul.addEventListener('touchend',function(e){
	    			e.stopPropagation();
	    			e.preventDefault();
	    			console.log("touchend");
	    			if(imgul.isMove){
	    				if(Math.abs(imgul.dir)>obj.offsetWidth/4){
	    					if(imgul.dir>0){
	    						obj.index --;
	    					}else if(imgul<0){
	    						obj.index ++;
	    					}
	    				}
	    			imgMove(obj);
	    			}
	    			
	    		})
	    	}
	    	//图片移动函数
	    	function imgMove(obj){
	    		var imgul = obj.children[0];
	    		var lis = imgul.children;
	    		console.log("ismove");
	    		if(obj.index<0){
	    			obj.index = lis.length - 3;
	    		}else if(obj.index>lis.length-3){
	    			obj.index = 1;
	    		}
	    		jd.addTransition(imgul);
	    		jd.setTransform(imgul,-obj.offsetWidth*obj.index);
	    	}