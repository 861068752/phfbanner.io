var lb = {};

lb.addTransition = function(obj,time){
	obj.style.transition = 'all+'+time+'s';
	obj.style.WebKitTransition = 'all+'+time+'s';
}
lb.setTransform = function(obj,target){
	obj.style.transform = 'translateX('+target+'px)';
	obj.style.webkitTransform = 'translateX('+target+'px)';
}
lb.removeTransition = function(obj){
	obj.style.transition = '';
	obj.style.WebKitTransition = '';
}
lb.addTransitionEnd = function(obj,fn){
	obj.addEventListener('transitonend',fn);
	obj.addEventListener('webkitTransitionEnd',fn);
	
}
