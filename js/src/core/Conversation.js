
BasicGame.Conversation = function (game) {

	this.character1 = null;
	this.character2 = null;
    
	this.character1Name = null;
	this.character2Name = null;
    
    this.exitButton = null;
    this.dialogueCloud = null;
    this.dialogueText = null;

};

BasicGame.Conversation.prototype = {
    
    init: function(character1Name, character2Name) {
        
        this.character1Name = character1Name;
        this.character2Name = character2Name;
        
    },
    
    create: function () {
        
        this.dialogueCloud = this.game.add.sprite(0, 0, 'inventory');
        this.dialogueText = this.game.add.bitmapText(this.dialogueCloud.width/2, this.dialogueCloud.height/2, 'carrier_command', "", 24);
        this.dialogueText.anchor.setTo(0.5, 0.5);
        this.dialogueText.align = "center";
        this.dialogueText.maxWidth = this.dialogueCloud.width - 50;
                
        this.character1 = this.game.add.sprite(Math.floor(this.game.width * 0.2), Math.floor(this.game.height * 0.6), this.character1Name);
        this.character2 = this.game.add.sprite(Math.floor(this.game.width * 0.8), Math.floor(this.game.height * 0.6), this.character2Name);
        
        this.character1.anchor.setTo(0.5, 0.5);
        this.character2.anchor.setTo(0.5, 0.5);
        
        this.character1.scale.setTo(-1.5, 1.5);
        this.character2.scale.setTo(1.5, 1.5);
        
        //this.exitButton = this.game.add.button(Math.floor(this.game.width * 0.8), Math.floor(this.game.height * 0.9), 'playButton', this.switchToGameState, this, 2, 1, 0);
        
        this.character1.animations.add('idle',[
            'walk-01.png'
        ]);
        this.character1.animations.add('walk',[
            'walk-01.png','walk-02.png','walk-03.png','walk-04.png','walk-05.png','walk-06.png','walk-07.png','walk-08.png'
        ]);
        
        this.character2.animations.add('idle',[
            'walk01.png'
        ]);
        this.character2.animations.add('walk',[
            'walk01.png','walk02.png','walk04.png','walk05.png'
        ]);
        
        this.initializeConversation();
        
	},
    
    initializeConversation: function() {
        
        if(DataManager.lastPlayedConversation == ""){
            DataManager.conversationInProgress = DataManager.root;
        }
        else{
            DataManager.conversationInProgress = DataManager.GetConversationWithID(DataManager.lastPlayedConversation).next;
        }
        
        this.startConversation();
    },
    
    startConversation: function() {
        
        this.playDialogue(DataManager.GetConversationWithID(DataManager.conversationInProgress).root);
        
    },
    
    playDialogue: function(currentDialogueID) {
        
        var self = this;
        
        var currentDialogueObj = DataManager.GetDialogueWithID(DataManager.conversationInProgress, currentDialogueID);
        
        console.log(currentDialogueObj.thedialogue);
        
        this.dialogueText.text = currentDialogueObj.thedialogue;
        
        if(currentDialogueObj.whosays == "hero"){
            
            this.character1.animations.play("walk", 10, true);
            this.character2.animations.play("idle", 10, true);
            
        } else {
            
            this.character1.animations.play("idle", 10, true);
            this.character2.animations.play("walk", 10, true);
            
        }
        
        if(currentDialogueObj.next != "finish"){
            
            setTimeout(function() { self.playDialogue(currentDialogueObj.next); }, currentDialogueObj.duration * 1000);
        }
        else{
            
            setTimeout(function() { self.switchToGameState(); }, currentDialogueObj.duration * 1000);
            //this.switchToGameState();
        }
    },
    
    switchToGameState: function() {
        
        this.character1 = null;
        this.character2 = null;

        this.character1Name = null;
        this.character2Name = null;

        this.exitButton = null;
        this.dialogueCloud = null;
        this.dialogueText = null;
        
        this.game.state.start('Game', true, false);   
        
    }
    
};