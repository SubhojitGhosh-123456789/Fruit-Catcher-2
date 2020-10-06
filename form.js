class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting1 = createElement('h2');
       this.greeting2 = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting1.hide();
        this.greeting2.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER-2");
        this.title.position(650, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(850,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(860,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.reset.position(900, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting1.html("Welcome " + player.name + "!!");
            this.greeting1.position(800,250);
            this.greeting1.style('color', 'white');
            this.greeting1.style('font-size', '50px');

            this.greeting2.html("Waiting For One More Player.......")
            this.greeting2.position(600,350);
            this.greeting2.style('color', 'white');
            this.greeting2.style('font-size', '50px');
        });

        this.reset.mousePressed(() =>{
            game.start();
            player.updateCount(0);
            game.update(0);
        });

    }
}