# Slimy
[Live Demo](https://edmondthui.github.io/slimy/)  
Slimy is a homage to one of my favourite flash games called Fishy. Now that browsers no longer support flash, the next generation will not understand what flash games are. These games were a large part of my childhood which is what inspired me to make this game. Grow your slime by eating enemies and destroy the ecosystem!

In this game, you are a slime that grows whenever you touch a smaller enemy. Use WASD or the arrow keys to move. Once you eat 100 enemies you win!
![Slimy Demo](https://github.com/edmondthui/slimy/blob/master/og_image.gif?raw=true)

## Technologies Used
* `JavaScript` 
* `Canvas`
* `Webpack` to bundle JS files

```    
    window.addEventListener("keydown", (e) => {
      this.keys.push(e.key);
    });

    window.addEventListener("keyup", (e) => {
      this.keys = this.keys.filter((x) => x !== e.key);
      this.slime.moving = false;
    });
```
This code snippet allows players to move the slime around. The constructor uses an array to keeep track of all keypresses and if the player presses the wasd or arrow keys they will be pushed unto the this.keys array. Then in the movePlayer function this.keys is checked to see if it includes wasd or the arrow keys and if it does will move the slime in the included directions at the slime's speed. This allows the player to move in any direction including diagonally. Once the player lifts the keys the keys are removed from the keys array and the slime will no longer move.

## Key Features / MVP
* Display board, player, and enemies
* Have hit detection when colliding with enemies
* Grow your slime when eating other entities
* Start button, replay button, and win page

## Wireframe
![Slimy Wireframe](https://i.imgur.com/gruDcmt.png)
