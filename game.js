class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {

        form = new Form()
        form.display();

            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);

                 var x = 100;
                 var y=200;
                 var index =0;
                 var display_position = 80;

                 drawSprites();

                 for(var plr in allPlayers){                    
                    
                     index = index+1;
                     x = 500 - allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index -1].y = y;
                       
                     if(index === player.index){
                         
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);     
                         
                         fill("white");
                         textSize(25);
                         text("Collect 5 fruits To Win. Use Left And Right Arow Keys To Move The Basket." ,150,50);  
                         
                     }

                display_position += 50;
                fill("white");
                textSize(25);
                text(allPlayers[plr].name+" :"+allPlayers[plr].score, 50, display_position);
                                                        
                 }
                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 if (frameCount % 20 === 0) {
                     fruits = createSprite(random(100, 1000), 0, 100, 100);
                     fruits.velocityY = 6;
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1: fruits.addImage("fruit1",fruit1_img);
                         break;
                         case 2: fruits.addImage("fruit1", fruit2_img);
                         break;
                         case 3: fruits.addImage("fruit1", fruit3_img);
                         break;
                         case 4: fruits.addImage("fruit1", fruit4_img);
                         break;
                         case 5: fruits.addImage("fruit1", fruit5_img);
                         break;
                     }
                     fruitGroup.add(fruits);
                     
                 }
                 
    if (player.index !== null) {     
        if(fruitGroup.isTouching(players)){
            player.score = player.score + 1;
            fruitGroup.destroyEach();
        }
        if(player.score >= 5){    
        game.end();
        }
    }

}

    end(){  
        image(back_img2, 0, 0, 1000,650);
        player1.visible = false;
        player2.visible = false;
        fruitGroup.destroyEach();
        fruitGroup.setVelocityYEach(0);
        var position = 240; 
        drawSprites();

        for(var plr in allPlayers){       
       position += 100;
       fill(0);
       textSize(35);
       text(allPlayers[plr].name+"                           "+allPlayers[plr].score+" fruits", 390, position);
    }
}
}
