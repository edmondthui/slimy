!function(e){var i={};function t(s){if(i[s])return i[s].exports;var n=i[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=i,t.d=function(e,i,s){t.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:s})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,i){if(1&i&&(e=t(e)),8&i)return e;if(4&i&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var n in e)t.d(s,n,function(i){return e[i]}.bind(null,n));return s},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},t.p="/dist/",t(t.s=3)}([function(e,i,t){function s(e,i){for(var t=0;t<i.length;t++){var s=i[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var n=t(2),r=new Image;r.src="slime.png";var h=new Image;h.src="dungeon.png";var a=function(){function e(i,t){var s=this;!function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this,e),this.numCharacters=30,this.characters=[],this.keys=[],this.DIM_X=i,this.DIM_Y=t,this.slime={width:31,height:21,x:this.randomPosition()[0],y:this.randomPosition()[1],frameX:0,frameY:0,speed:5,moving:!1,sizeX:64,sizeY:26,flipped:!1},window.addEventListener("keydown",(function(e){s.keys.push(e.key)})),window.addEventListener("keyup",(function(e){s.keys=s.keys.filter((function(i){return i!==e.key})),s.slime.moving=!1})),this.addEnemies()}var i,t,a;return i=e,(t=[{key:"addEnemies",value:function(){if(this.characters.length<this.numCharacters)for(var e=this.characters.length;e<this.numCharacters;e++)this.characters.push(new n(this))}},{key:"randomPosition",value:function(){return[Math.random()*this.DIM_X-30,Math.random()*this.DIM_Y-20]}},{key:"draw",value:function(e){e.clearRect(0,0,this.DIM_X,this.DIM_Y),e.drawImage(h,0,0,this.DIM_X,this.DIM_Y),this.movePlayer(),this.handleAnimation(),this.slime.flipped?(e.scale(-1,1),e.drawImage(r,this.slime.width*this.slime.frameX,this.slime.height*this.slime.frameY,this.slime.width,this.slime.height,-this.slime.width-this.slime.x,this.slime.y,this.slime.sizeX,this.slime.sizeY),e.scale(-1,1)):e.drawImage(r,this.slime.width*this.slime.frameX,this.slime.height*this.slime.frameY,this.slime.width,this.slime.height,this.slime.x,this.slime.y,this.slime.sizeX,this.slime.sizeY),this.characters.forEach((function(i){return i.draw(e)}))}},{key:"moveEnemies",value:function(){this.characters.forEach((function(e){return e.move()}))}},{key:"step",value:function(){this.moveEnemies(),this.addEnemies(),this.removeEnemies()}},{key:"removeEnemies",value:function(){var e=this;this.characters.forEach((function(i,t){(i.x<0||i.x>e.DIM_X)&&e.characters.splice(t,1)}))}},{key:"movePlayer",value:function(){(this.keys.includes("w")||this.keys.includes("ArrowUp"))&&this.slime.y>0&&(this.slime.y-=this.slime.speed,this.slime.moving=!0),(this.keys.includes("a")||this.keys.includes("ArrowLeft"))&&this.slime.x>0&&(this.slime.x-=this.slime.speed,this.slime.moving=!0,this.slime.flipped=!1),(this.keys.includes("s")||this.keys.includes("ArrowDown"))&&this.slime.y<this.DIM_Y-20&&(this.slime.y+=this.slime.speed,this.slime.moving=!0),(this.keys.includes("d")||this.keys.includes("ArrowRight"))&&this.slime.x<this.DIM_X-20&&(this.slime.x+=this.slime.speed,this.slime.moving=!0,this.slime.flipped=!0)}},{key:"handleAnimation",value:function(){this.slime.frameX<=9&&!this.slime.moving?(this.slime.frameY=0,this.slime.frameX++):this.slime.frameX<=5&&this.slime.moving?(this.slime.frameY=1,this.slime.frameX++):this.slime.frameX=0}}])&&s(i.prototype,t),a&&s(i,a),e}();e.exports=a},function(e,i){function t(e,i){for(var t=0;t<i.length;t++){var s=i[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var s=function(){function e(i,t){!function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this,e),this.game=i,this.context=t}var i,s,n;return i=e,(s=[{key:"start",value:function(){setInterval(this.game.draw.bind(this.game,this.context),50),setInterval(this.game.step.bind(this.game,this.context),50)}}])&&t(i.prototype,s),n&&t(i,n),e}();e.exports=s},function(e,i){function t(e,i){for(var t=0;t<i.length;t++){var s=i[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var s=new Image;s.src="spider.png";var n=["left","right"],r=function(){function e(i){!function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this,e),this.width=32,this.height=34,this.frameX=0,this.frameY=1,this.speed=3*Math.random()+2,this.direction=n[Math.floor(Math.random()*n.length)],this.y=i.randomPosition()[1],"right"===this.direction?(this.flipped=!0,this.x=0):(this.flipped=!1,this.x=i.DIM_X);var t=200*Math.random()+50;this.sizeX=t,this.sizeY=t}var i,r,h;return i=e,(r=[{key:"draw",value:function(e){"right"===this.direction?(e.scale(-1,1),e.drawImage(s,this.width*this.frameX,this.height*this.frameY,this.width,this.height,-this.width-this.x,this.y,this.sizeX,this.sizeY),e.scale(-1,1)):e.drawImage(s,this.width*this.frameX,this.height*this.frameY,this.width,this.height,this.x,this.y,this.sizeX,this.sizeY),console.log("draw")}},{key:"move",value:function(){"right"===this.direction?this.x+=this.speed:this.x-=this.speed,this.frameX<=4?this.frameX++:this.frameX=0}}])&&t(i.prototype,r),h&&t(i,h),e}();e.exports=r},function(e,i,t){"use strict";t.r(i);var s=t(0),n=t.n(s),r=t(1),h=t.n(r);document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("game");e.width=1e3,e.height=400;var i=e.getContext("2d"),t=new n.a(e.width,e.height);new h.a(t,i).start()}))}]);
//# sourceMappingURL=main.js.map