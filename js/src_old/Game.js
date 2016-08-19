var InfiniteScroller = InfiniteScroller || {};
 
InfiniteScroller.Game = function(){};
 
InfiniteScroller.Game.prototype = {
    
    preload: function() {
        
        this.game.time.advancedTiming = true;
    
    },

    create: function() {
        
        levelDataManager.fillData(this.game.cache.getJSON('levelData'));
        
        //create player and walk animation
        this.player = this.game.add.sprite(this.game.width/2, this.game.height - 350, 'grant');
        this.player.animations.add('grantrun');
        this.player.animations.add('grantjump');
        
        this.game.world.setBounds(0, 0, 3500, this.game.height);
        this.grass = this.add.tileSprite(0,this.game.height-100,this.game.world.width,70,'grass');
        this.ground = this.add.tileSprite(0,this.game.height-70,this.game.world.width,70,'ground');    
        
        this.generateFleas();
        this.generateMounds();
        
        this.game.world.bringToTop(this.grass);
        this.game.world.bringToTop(this.mounds);
        this.game.world.bringToTop(this.ground);
        
        this.game.physics.arcade.enable(this.player);
        this.game.physics.arcade.enable(this.ground);

        //player gravity
        this.player.body.gravity.y = 1000;

        //so player can walk on ground
        this.ground.body.immovable = true;
        this.ground.body.allowGravity = false;

        //properties when the player is digging, scratching and standing, so we can use in update()
        var playerRunImg = this.game.cache.getImage('grantrun');
        this.player.animations.add('grantrun');
        this.player.runDimensions = {width: playerRunImg.width, height: playerRunImg.height};

        var playerJumpImg = this.game.cache.getImage('grantjump');
        this.player.animations.add('grantjump');
        this.player.jumpDimensions = {width: playerJumpImg.width, height: playerJumpImg.height};

        this.player.standDimensions = {width: this.player.width, height: this.player.height};
        this.player.anchor.setTo(0.5, 1);

        //the camera will follow the player in the world
        this.game.camera.follow(this.player);

        //play the walking animation
        this.player.animations.play('grantrun', 3, true);

        //move player with cursor keys
        this.cursors = this.game.input.keyboard.createCursorKeys();
        
        this.scratches = 0;
        this.wraps = 0;
        this.points = 0;
        this.wrapping = true;
        this.stopped = false;
        this.maxScratches = 5;
        
        var style1 = { font: "20px Arial", fill: "#ff0"};
        var t1 = this.game.add.text(10, 20, "Points:", style1);
        var t2 = this.game.add.text(this.game.width-300, 20, "Remaining Flea Scratches:", style1);
        t1.fixedToCamera = true;
        t2.fixedToCamera = true;

        var style2 = { font: "26px Arial", fill: "#00ff00"};
        this.pointsText = this.game.add.text(80, 18, "", style2);
        this.fleasText = this.game.add.text(this.game.width-50, 18, "", style2);
        //this.refreshStats();
        this.pointsText.fixedToCamera = true;
        this.fleasText.fixedToCamera = true;
    },

    update: function() {
        
        this.game.physics.arcade.collide(this.player, this.ground, this.playerHit, null, this);
        this.game.physics.arcade.collide(this.player, this.fleas, this.playerHit, null, this);
        this.game.physics.arcade.overlap(this.player, this.mounds, this.collect, this.checkRun, this);

    },
    
    render: function() {
        
        this.game.debug.text(this.game.time.fps || '--', 20, 40, "#00ff00", "26px Courier");   
        
    },
    
    generateMounds: function() {
        
        this.mounds = this.game.add.group();

        //enable physics in them
        this.mounds.enableBody = true;

        //phaser's random number generator
        var numMounds = this.game.rnd.integerInRange(0, 5)
        var mound;

        for (var i = 0; i < numMounds; i++) {
            
            var x = this.game.rnd.integerInRange(this.game.width, this.game.world.width - this.game.width);
            mound = this.mounds.create(x, this.game.height-75, 'mound');
            mound.body.velocity.x = 0;
            
        }

    },
    
  generateFleas: function() {
        
        this.fleas = this.game.add.group();

        //enable physics in them
        this.fleas.enableBody = true;

        var numFleas = this.game.rnd.integerInRange(1, 5)
        var flea;

        for (var i = 0; i < numFleas; i++) {
            
            var x = this.game.rnd.integerInRange(this.game.width, this.game.world.width - this.game.width);
            flea = this.fleas.create(x, this.game.height-415, 'flea');

            //physics properties
            flea.body.velocity.x = this.game.rnd.integerInRange(-20, 0);

            flea.body.immovable = true;
            flea.body.collideWorldBounds = false;
        }
    }
};