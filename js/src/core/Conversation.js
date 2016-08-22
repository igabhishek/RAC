
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
        this.dialogueText = this.game.add.text(0, 0, "test");
        
        this.character1 = this.game.add.sprite(Math.floor(this.game.width * 0.2), Math.floor(this.game.height * 0.6), this.character1Name);
        this.character2 = this.game.add.sprite(Math.floor(this.game.width * 0.8), Math.floor(this.game.height * 0.6), this.character2Name);
        
        this.character1.anchor.setTo(0.5, 0.5);
        this.character2.anchor.setTo(0.5, 0.5);
        
        this.character1.scale.setTo(-1.5, 1.5);
        this.character2.scale.setTo(1.5, 1.5);
        
        this.exitButton = this.game.add.button(Math.floor(this.game.width * 0.8), Math.floor(this.game.height * 0.9), 'playButton', this.switchToGameState, this, 2, 1, 0);
        
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
        
        if(currentDialogueObj.next != "finish"){
            
            setTimeout(function() { self.playDialogue(currentDialogueObj.next); }, currentDialogueObj.duration * 1000);
        }
        else{
            
            this.switchToGameState();
        }
    },
    
    switchToGameState: function() {
        
        this.game.state.start('Game', true, false);   
        
    }
    
};