class Form {
    constructor(){
        this.button = createButton('Play')
        this.reset = createButton('Reset')
        this.input = createInput('Name')
        this.title = createElement('h2')
        this.greeting = createElement('h2')
        this.question1 = createElement('h3')
        this.question2 = createElement('h3')
        this.question3 = createElement('h3')
        this.question4 = createElement('h3')

    }
    hide(){
        this.title.hide()
        this.button.hide()
        this.reset.hide()
        this.input.hide()
    }

    display(){
        this.title.html("Spelling Shooter")
        this.title.position(displayWidth/2, 50)
        this.button.position(displayWidth/2, 200)
        this.input.position(displayWidth/2, 150)
        this.reset.position(displayWidth/2, 300)

        //document.body.style.backgroundImage("Images/game background.jpg")

        console.log("hi")
        this.button.mousePressed(() => {
            console.log("hi")
            this.input.hide()
            this.button.hide()
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            console.log(playerCount)
            console.log(player.name)
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello" + player.name)
            this.greeting.position()
        })
    }
}