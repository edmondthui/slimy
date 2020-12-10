!function(e){var i={};function t(s){if(i[s])return i[s].exports;var n=i[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=i,t.d=function(e,i,s){t.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:s})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,i){if(1&i&&(e=t(e)),8&i)return e;if(4&i&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var n in e)t.d(s,n,function(i){return e[i]}.bind(null,n));return s},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},t.p="/dist/",t(t.s=5)}([function(e,i){function t(e,i){for(var t=0;t<i.length;t++){var s=i[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var s=function(){function e(i){!function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this,e),this.sound=document.createElement("audio"),this.sound.src=i,this.sound.style.display="none",document.body.appendChild(this.sound)}var i,s,n;return i=e,(s=[{key:"play",value:function(){this.sound.cloneNode(!0).play()}},{key:"repeatPlay",value:function(){var e=this;this.sound.volume=.05,this.sound.id="music",this.sound.addEventListener("ended",(function(){e.currentTime=0,e.sound.play()})),this.sound.play()}},{key:"pause",value:function(){this.sound.pause()}}])&&t(i.prototype,s),n&&t(i,n),e}();e.exports=s},function(e,i,t){function s(e,i){for(var t=0;t<i.length;t++){var s=i[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var n=t(3),r=t(4),h=t(0),a=new Image;a.src="slime.png";var o=new Image;o.src="slime-mirror.png";var l=new Image;l.src="dungeon.png";var m=["spider","spider","spider","spider","spider","spider","adventurer"],d=function(){function e(i,t){var s=this;!function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this,e),this.eat=new h("eat.mp3"),this.numCharacters=10,this.characters=[],this.keys=[],this.DIM_X=i,this.DIM_Y=t,this.slime={width:31,height:22,x:this.randomPosition()[0],y:this.randomPosition()[1],frameX:0,frameY:0,speed:5,moving:!1,sizeX:80,sizeY:40,flipped:!1},window.addEventListener("keydown",(function(e){s.keys.push(e.key)})),window.addEventListener("keyup",(function(e){s.keys=s.keys.filter((function(i){return i!==e.key})),s.slime.moving=!1})),this.addEnemies()}var i,t,d;return i=e,(t=[{key:"addEnemies",value:function(){if(this.characters.length<this.numCharacters)for(var e=this.characters.length;e<this.numCharacters;e++){var i=m[Math.floor(Math.random()*m.length)];"spider"===i?this.characters.push(new n(this)):"adventurer"===i&&this.characters.push(new r(this))}}},{key:"randomPosition",value:function(){return[Math.random()*this.DIM_X-30,Math.random()*this.DIM_Y-20]}},{key:"draw",value:function(e){e.clearRect(0,0,this.DIM_X,this.DIM_Y),e.drawImage(l,0,0,this.DIM_X,this.DIM_Y),this.movePlayer(),this.handleAnimation(),this.characters.forEach((function(i){return i.draw(e)})),this.slime.flipped?e.drawImage(o,this.slime.width*this.slime.frameX+2,this.slime.height*this.slime.frameY,this.slime.width,this.slime.height,this.slime.x,this.slime.y+30,this.slime.sizeX,this.slime.sizeY):e.drawImage(a,this.slime.width*this.slime.frameX,this.slime.height*this.slime.frameY,this.slime.width,this.slime.height,this.slime.x,this.slime.y+30,this.slime.sizeX,this.slime.sizeY)}},{key:"moveEnemies",value:function(){this.characters.forEach((function(e){return e.move()}))}},{key:"step",value:function(){this.checkCollisions(),this.moveEnemies(),this.addEnemies(),this.removeEnemies(),this.win()}},{key:"win",value:function(){var e=this;if(this.slime.sizeX*this.slime.sizeY>=75e4){this.characters=[],this.numCharacters=0;var i=document.createElement("div");i.id="win";var t=document.createElement("button"),s=document.createElement("h1");s.id="win-title",s.innerHTML="You Win!",t.id="replay",t.innerHTML="Replay",document.body.children.length<7&&(document.body.appendChild(t),document.body.appendChild(i),document.body.appendChild(s)),t.addEventListener("click",(function(){e.numCharacters=10,e.slime.sizeX=80,e.slime.speed=5,e.slime.sizeY=40,e.slime.x=e.randomPosition()[0],e.slime.y=e.randomPosition()[1],i.parentNode.removeChild(i),t.parentNode.removeChild(t),s.parentNode.removeChild(s)}))}}},{key:"removeEnemies",value:function(){var e=this;this.characters.forEach((function(i,t){(i.x<-100||i.x>e.DIM_X+100)&&e.characters.splice(t,1)}))}},{key:"checkCollisions",value:function(){var e=this;this.characters.forEach((function(i,t){i.x<e.slime.x+.5*e.slime.sizeX&&i.x+.5*i.sizeX>e.slime.x&&i.y<e.slime.y+.5*e.slime.sizeY&&i.y+.5*i.sizeY>e.slime.y&&(i.sizeX*i.sizeY*.1<e.slime.sizeX*e.slime.sizeY?(e.characters.splice(t,1),e.slime.sizeX+=6,e.slime.sizeY+=6,e.slime.speed+=.1,e.numCharacters+=.2,e.eat.play()):!0===i.hostile&&console.log("You Lose!"))}))}},{key:"movePlayer",value:function(){(this.keys.includes("w")||this.keys.includes("ArrowUp"))&&this.slime.y>0-this.slime.sizeY&&(this.slime.y-=this.slime.speed,this.slime.moving=!0),(this.keys.includes("a")||this.keys.includes("ArrowLeft"))&&this.slime.x>0-this.slime.sizeX&&(this.slime.x-=this.slime.speed,this.slime.moving=!0,this.slime.flipped=!1),(this.keys.includes("s")||this.keys.includes("ArrowDown"))&&this.slime.y<this.DIM_Y-20&&(this.slime.y+=this.slime.speed,this.slime.moving=!0),(this.keys.includes("d")||this.keys.includes("ArrowRight"))&&this.slime.x<this.DIM_X-20&&(this.slime.x+=this.slime.speed,this.slime.moving=!0,this.slime.flipped=!0)}},{key:"handleAnimation",value:function(){this.slime.flipped?this.slime.frameX<=9&&!this.slime.moving?(this.slime.frameY=0,this.slime.frameX++):this.slime.frameX<=9&&this.slime.moving?(this.slime.frameY=1,this.slime.frameX++):this.slime.moving?this.slime.frameX=3:this.slime.frameX=0:this.slime.frameX<=9&&!this.slime.moving?(this.slime.frameY=0,this.slime.frameX++):this.slime.frameX<=5&&this.slime.moving?(this.slime.frameY=1,this.slime.frameX++):this.slime.frameX=0}}])&&s(i.prototype,t),d&&s(i,d),e}();e.exports=d},function(e,i){function t(e,i){for(var t=0;t<i.length;t++){var s=i[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var s=function(){function e(i,t){!function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this,e),this.game=i,this.context=t}var i,s,n;return i=e,(s=[{key:"start",value:function(){this.draw=setInterval(this.game.draw.bind(this.game,this.context),50),this.step=setInterval(this.game.step.bind(this.game,this.context),50)}},{key:"won",value:function(){}}])&&t(i.prototype,s),n&&t(i,n),e}();e.exports=s},function(e,i){function t(e,i){for(var t=0;t<i.length;t++){var s=i[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var s=new Image;s.src="spider.png";var n=new Image;n.src="spider-mirror.png";var r=["left","right"],h=function(){function e(i){!function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this,e),this.hostile=!1,this.width=32,this.height=33,this.frameX=0,this.frameY=1,this.speed=10*Math.random()+1,this.direction=r[Math.floor(Math.random()*r.length)],this.y=i.randomPosition()[1],"right"===this.direction?(this.flipped=!0,this.x=0):(this.flipped=!1,this.x=i.DIM_X);var t=100*Math.random()+40;this.sizeX=t,this.sizeY=t}var i,h,a;return i=e,(h=[{key:"draw",value:function(e){"right"===this.direction?e.drawImage(n,this.width*(this.frameX+3),this.height*this.frameY,this.width,this.height,this.x,this.y,this.sizeX,this.sizeY):e.drawImage(s,this.width*this.frameX,this.height*this.frameY,this.width,this.height,this.x,this.y,this.sizeX,this.sizeY)}},{key:"move",value:function(){"right"===this.direction?this.x+=this.speed:this.x-=this.speed,this.frameX<=4?this.frameX++:this.frameX=0}}])&&t(i.prototype,h),a&&t(i,a),e}();e.exports=h},function(e,i){function t(e,i){for(var t=0;t<i.length;t++){var s=i[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var s=new Image;s.src="adventurer.png";var n=new Image;n.src="adventurer-mirror.png";var r=["left","right"],h=function(){function e(i){!function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this,e),this.hostile=!1,this.width=32,this.height=33,this.frameX=0,this.frameY=1,this.speed=15*Math.random()+10,this.direction=r[Math.floor(Math.random()*r.length)],this.y=i.randomPosition()[1],"right"===this.direction?(this.flipped=!0,this.x=0):(this.flipped=!1,this.x=i.DIM_X),this.sizeX=80,this.sizeY=80}var i,h,a;return i=e,(h=[{key:"draw",value:function(e){"right"===this.direction?e.drawImage(s,this.width*this.frameX,this.height*this.frameY,this.width,this.height,this.x,this.y,this.sizeX,this.sizeY):e.drawImage(n,this.width*(this.frameX+5),this.height*this.frameY,this.width,this.height,this.x,this.y,this.sizeX,this.sizeY)}},{key:"move",value:function(){"right"===this.direction?this.x+=this.speed:this.x-=this.speed,this.frameX<=6?this.frameX++:this.frameX=0}}])&&t(i.prototype,h),a&&t(i,a),e}();e.exports=h},function(e,i,t){"use strict";t.r(i);var s=t(0),n=t.n(s),r=t(1),h=t.n(r),a=t(2),o=t.n(a);document.addEventListener("DOMContentLoaded",(function(){var e=new n.a("song.mp3"),i=document.getElementById("game");i.width=1e3,i.height=400;var t=i.getContext("2d"),s=new h.a(i.width,i.height),r=new o.a(s,t),a=document.getElementById("start");a.addEventListener("click",(function(i){i.preventDefault(),r.start(),a.parentNode.removeChild(a),e.repeatPlay()}));var l=document.getElementById("music-button");l.addEventListener("click",(function(){document.getElementById("music").paused?(e.repeatPlay(),l.innerHTML="🔊"):(e.pause(),l.innerHTML="🔇")}))}))}]);
//# sourceMappingURL=main.js.map