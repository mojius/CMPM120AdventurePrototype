
// Scenes: Intro (Scene), Outside, Foyer, Balcony, Bedroom, Attic (Scene, Ending), Credits?

class Intro extends Phaser.Scene{
    constructor()
    {
        super("intro");
    }

    preload()
    {
        this.load.path = "./assets/";
        this.load.image("intro_bg", "Intro.png");
        this.load.image("intro_text", "Intro_Text.png");
    }

    create()
    {
        this.cameras.main.fadeIn(1000, 0, 0, 0);

        let intro_sprite = this.add.image(this.game.config.width*0.75/2,  this.game.config.height/2, "intro_bg").setOrigin(0.5,0.5);
        intro_sprite.setScale(this.game.config.width*0.75/intro_sprite.displayWidth, this.game.config.height/ intro_sprite.displayHeight);  
        
        let intro_text_sprite = this.add.image(this.game.config.width * 0.75, 0, "intro_text").setOrigin(0,0);
        intro_text_sprite.setScale(this.game.config.width * 0.20 / intro_text_sprite.displayWidth, this.game.config.height / intro_text_sprite.displayHeight);
        
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('outside'));
        });

    }
}

class Outside extends AdventureScene
{
    constructor(){
        super("outside", "Outside the Haunted House", "#f54fff", "#ffffff")
    }

    preload()
    {
        this.load.path = "./assets/";
        this.load.image("house_bg", "House.png");
        this.load.image("bike", "Bike.png")
    }

    onEnter()
    {
        this.cameras.main.fadeIn(1000, 0, 0, 0);

        let house_sprite = this.add.image(this.game.config.width*0.75/2,  this.game.config.height/2, "house_bg").setOrigin(0.5,0.5);
        house_sprite.setScale(this.game.config.width*0.75/house_sprite.displayWidth, this.game.config.height/ house_sprite.displayHeight);  
        
        let bike_sprite = this.add.image(this.game.config.width * 0.1, this.game.config.height * 0.85, "bike")
        .setScale(2,2)
        .setInteractive()
        .on("pointerover", () => {
            this.showMessage("This bike MAY look fine, but it broke on the way here.");
        })
        .on("pointerdown", () =>
        {
            this.tweens.add(
                {
                    targets: bike_sprite,
                    scale: 1.5,
                    ease: 'Bounce.inOut',
                    duration:500
                })
            
            this.time.delayedCall(500, () => {

            this.tweens.add(
                {
                    targets: bike_sprite,
                    scale: 2,
                    ease: 'Bounce.inOut',
                    duration:500
                })
            })
            this.showMessage("See? Bikes don't do that.");

        })

        this.showMessage("So creepy... What could it mean?");

        let windowRect = this.add.rectangle(this.game.config.width * 0.39, this.game.config.height * 0.47, 600, 200)
        .setInteractive()
        .on("pointerover", () =>
        {
            this.showMessage("You can see eyes look back at you through the windows. Eepy! So creepy!");
        })

        let doorRect = this.add.rectangle(this.game.config.width / 2.5, this.game.config.height / 1.6, 200, 150)
        .setInteractive()
        .on("pointerover", () =>
        {
            this.showMessage("Super creaky door... Aaaah!! Creepy!");
        })
        .on("pointerdown", () =>
        {

            this.showMessage("Onward we go...");
            this.cameras.main.fadeOut(1000, 0,0,0);

            this.gotoScene('foyer');

    

        });



    }

}

class Foyer extends AdventureScene {

    constructor(){
        super("foyer", "The Haunted Foyer", "#3399ff")
    }

    preload()
    {
        this.load.path = "./assets/";
        this.load.image("foyer_bg", "Foyer.png");
        this.load.image("skeleton", "Skeleton.png");
    }

    onEnter()
    {
        this.cameras.main.fadeIn(1000, 0, 0, 0);

        let foyer_sprite = this.add.image(this.game.config.width*0.75/2,  this.game.config.height/2, "foyer_bg").setOrigin(0.5,0.5);
        foyer_sprite.setScale(this.game.config.width*0.75/foyer_sprite.displayWidth, this.game.config.height/ foyer_sprite.displayHeight);        

        let middleDoorRect = this.add.rectangle(550, 700, 320, 240)
        .setOrigin(0,0)
        .setInteractive()
        .on("pointerover", () =>
        {
            this.showMessage("This door leads back to the outside.");
        })
        .on("pointerdown", () =>
        {

            this.showMessage("You return outside...");

            this.cameras.main.fadeOut(1000, 0,0,0);

            this.gotoScene('outside');

    

        });

        let leftDoorRect = this.add.rectangle(0, 284, 143, 212)
        .setOrigin(0,0)
        .setInteractive()
        .on("pointerover", () =>
        {
            this.showMessage("A creeeaky door seems to have wind coming from it...");
        })
        .on("pointerdown", () =>
        {

            this.showMessage("You open it up and hear the storm...");

            this.cameras.main.fadeOut(1000, 0,0,0);

            this.gotoScene('balcony');

    

        });

        let skeletonSprite = this.add.image(415, 730, "skeleton").setOrigin(0.5,0.5).setScale(2,2)
        .setInteractive()
        .on("pointerover", () =>
        {
            this.showMessage("Look at this silly guy. Pretty jolly for someone hung by cheese wire.");
        })
        .on("pointerdown", () =>
        {
            this.showMessage("You give him a good jostle. You're not afraid of anything in this place, you're just pretending.");
            this.tweens.add(
                {
                    targets: skeletonSprite,
                    angle: 3,
                    ease: 'Bounce.inOut',
                    duration:400,
                    yoyo:true
                }); 
        })
    
        let chandlerRect = this.add.rectangle(514,0, 455, 309).setOrigin(0,0)
        .setInteractive()
        .on("pointerover", () =>
        {
            this.showMessage("This chandelier sucks.");
        })

        //514, 0, 455, 309


        let rightDoorRect = this.add.rectangle(1300, 280, 150, 212)
        .setOrigin(0,0)
        .setInteractive()
        .on("pointerover", () =>
        {
            this.showMessage("This door is darker and dustier and EVEN SPOOKIER!! (Believe it!!!!!)");
        })
        .on("pointerdown", () =>
        {

            this.showMessage(`You open it up and hear SILENCE!!!... 
            
            
            
            😨😨😨😨😨`);

            this.cameras.main.fadeOut(1000, 0,0,0);

            this.gotoScene("bedroom");

    



        });

    }
    
}

// Do table stuff. Add skeleton, table, bedroom flavor text, spooky ending, maybe a bonus item and you're done.
class Balcony extends AdventureScene {
    constructor(){
        super("balcony", "The Balcony", "#00ff00")
    }

    preload()
    {
        this.load.path = "./assets/";
        this.load.image("balcony_bg", "balcony_noprops.png");
        this.load.image("chairs", "chairs.png");
        this.load.image("table_normal", "table_normal.png");
        this.load.image("table_broken", "table_broken.png");
    }

    onEnter()
    {

        //chairs: 40, 822
        let balcony_sprite = this.add.image(this.game.config.width*0.75/2,  this.game.config.height/2, "balcony_bg").setOrigin(0.5,0.5);
        balcony_sprite.setScale(this.game.config.width*0.75/balcony_sprite.displayWidth, this.game.config.height/ balcony_sprite.displayHeight);        

        let chairs_sprite = this.add.image(319, 911, "chairs").setOrigin(0.5,0.5).setScale(2,2)
        .setInteractive()
        .on("pointerover", () =>
        {
            this.showMessage("Some chairs here... Doubtlessly used for SPOOKY TEA TIME!!! Nah, probably not.");
        })
        .on("pointerdown", () => 
        {
            this.tweens.add(
                {
                    targets: chairs_sprite,
                    angle: 5,
                    ease: 'Bounce.inOut',
                    duration:300,
                    yoyo:true
                });



        });


   

        let table_sprite = this.add.image(775, 814, "table_normal").setOrigin(0,0).setScale(2,2)
        .setInteractive()
        .on("pointerover", () =>
        {
            this.showMessage("This table looks pretty busted up...");
            
        })
        .on("pointerdown", () => 
        {
            table_sprite.setTexture("table_broken");
            this.gainItem("Creepy Key");
            this.showMessage("You gained a creepy key with a note that tells you to go up into the attic in the bedroom...");


        });



        let mountainViewRect = this.add.rectangle(0,0, 985, 715)
        .setOrigin(0,0)
        .setInteractive()
        .on("pointerover", () =>
        {
            this.showMessage("The mountains look beautiful at this dark, dank time of night... And yet somehow... They're spooky.");
        })


        let doorRect = this.add.rectangle(1158,455, 200, 255)
        .setOrigin(0,0)
        .setInteractive()
        .on("pointerover", () =>
        {
            this.showMessage("Door to go back to the foyer.");
        })
        .on("pointerdown", () =>
        {

            this.showMessage("Back to the foyer you go...");

            this.cameras.main.fadeOut(1000, 0,0,0);

            this.gotoScene('foyer');

    

        });
    
    }
    
    }


class Bedroom extends AdventureScene {
    constructor(){
        super("bedroom", "The Bedroom", "#ff0000", "#333300")
    }

    preload()
    {
        this.load.path = "./assets/";
        this.load.image("bedroom_bg", "Bedroom.png");
    }

    onEnter()
    {
        let bedroom_sprite = this.add.image(this.game.config.width*0.75/2,  this.game.config.height/2, "bedroom_bg").setOrigin(0.5,0.5);
        bedroom_sprite.setScale(this.game.config.width*0.75/bedroom_sprite.displayWidth, this.game.config.height/ bedroom_sprite.displayHeight);      
        
        this.showMessage("The air smells so bad it makes you cough and pinch your nose.");



        //left door: 0, 514, 117, 430
        let leftDoorRectBedroom = this.add.rectangle(0, 514, 117, 430)
        .setOrigin(0,0)
        .setInteractive()
        .on("pointerover", () =>
        {
            this.showMessage("Door to go back to the foyer.");
        })
        .on("pointerdown", () =>
        {

            this.showMessage("Back to the foyer you go...");

            this.cameras.main.fadeOut(1000, 0,0,0);

            this.gotoScene('foyer');

    

        });

        //bed: 248, 710, 590, 200
        let bedRect = this.add.rectangle(248, 710, 590, 200)
        .setOrigin(0,0)
        .setInteractive()
        .on("pointerover", () =>
        {
            this.showMessage("The bed makes you retch with its stains and smell.");
        })
        .on("pointerdown", () =>
        {

            this.showMessage("No. You won't get any closer.");
    
        });

        let evilDoorRect = this.add.rectangle(845, 632, 200, 300)
        .setOrigin(0,0)
        .setInteractive()
        .on("pointerover", () =>
        {
            if (this.hasItem("Creepy Key")) {
                this.showMessage("Infinitely ominous door. You better not go in.");
            } else {
                this.showMessage("Bound by a creepy lock. Look elsewhere.");
            }
        })
        .on('pointerdown', () => {
            if (this.hasItem("Creepy Key")) {
                this.loseItem("Creepy Key");
                this.showMessage("Oh god oh god oh god oh god");
                this.cameras.main.fadeOut(1000, 0,0,0);

                    this.gotoScene('attic');

            }
        })
    
        


        let dresserRect = this.add.rectangle(1165, 690, 300, 300)
        .setOrigin(0,0)
        .setInteractive()
        .on("pointerover", () =>
        {
            this.showMessage("Creepy old dresser.");
        })
        .on("pointerdown", () =>
        {

            this.showMessage("You found a shrunken head.");
            this.gainItem("Shrunken Head");

        });






    }
}

class Attic extends Phaser.Scene{
    constructor(){
        super("attic")
    }

    preload()
    {
        this.load.path = "./assets/";
        this.load.image("attic_bg", "Attic.png");
        this.load.image("end_text", "Attic_text.png");
    }

    create()
    {
        let attic_sprite = this.add.image(this.game.config.width*0.75/2,  this.game.config.height/2, "attic_bg").setOrigin(0.5,0.5);
        attic_sprite.setScale(this.game.config.width*0.75/attic_sprite.displayWidth, this.game.config.height/ attic_sprite.displayHeight);   
                
        let attic_text_sprite = this.add.image(this.game.config.width * 0.75, 0, "end_text").setOrigin(0,0);
        attic_text_sprite.setScale(this.game.config.width * 0.20 / attic_text_sprite.displayWidth, this.game.config.height / attic_text_sprite.displayHeight);


        //  Enable lights and set a dark ambient color
                this.lights.enable().setAmbientColor(0x000000);

                //  Add an image and set it to use Lights2D
        
                attic_sprite.setPipeline('Light2D');
        
                //  Our spotlight. 100px radius and white in color.
                const light = this.lights.addLight(180, 80, 120).setColor(0xffffff).setIntensity(2);
        
                //  Track the pointer
                this.input.on('pointermove', pointer =>
                {
        
                    light.x = pointer.x;
                    light.y = pointer.y;
        
                });



    }
}




const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, Outside, Foyer, Balcony, Bedroom, Attic],
    title: "Haunted House",
});

