var InfiniteScroller = InfiniteScroller || {};
 
InfiniteScroller.Preload = function(){};
 
InfiniteScroller.Preload.prototype = {
    preload: function() {
        
        //show loading screen
        this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
        this.preloadBar.anchor.setTo(0.5);
        this.preloadBar.scale.setTo(3);
        
        this.load.setPreloadSprite(this.preloadBar);
        
        //load game assets
        this.load.spritesheet('grant', 'assets/images/spritesheet_grant.png', 165, 292, 1);
        this.load.spritesheet('grantrun', 'assets/images/spritesheet_grant.png', 165, 292, 26);
        this.load.spritesheet('grantjump', 'assets/images/spritesheet_grant.png', 165, 292, 38);
        this.load.image('ground', 'assets/images/ground.png');
        this.load.image('grass', 'assets/images/grass.png');
        //this.load.audio('whine', ['assets/audio/whine.ogg', 'assets/audio/whine.mp3']);
        //this.load.audio('bark', ['assets/audio/bark.ogg', 'assets/audio/bark.mp3']);

        this.load.image('mound', 'assets/images/rock.png');
        this.load.image('flea', 'assets/images/flea.png');
        
        this.game.load.json('levelData', 'assets/data/level.json');
        
    },
    
    create: function() {
        
        this.state.start('Game');
        
    }
};