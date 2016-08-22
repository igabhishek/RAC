
DataManager = new function(){
    
    this.moduleJSON = null;
    this.conversationEntries = new Array();
    
    this.lastPlayedConversation = "";
    this.conversationInProgress = "";
    
    this.root = "";
    
    this.PopulateConversationEntries = function(){
        
        this.root = this.moduleJSON.root;
        
        for (var key in this.moduleJSON.conversations)
        {
            var conversationObject = {};
            conversationObject.id = key;
            conversationObject.root = this.moduleJSON.conversations[key].root;
            conversationObject.dialogues = new Array();
            
            for(var i = 0; i < this.moduleJSON.conversations[key].dialogues.length; i++)            
            {
                var dialogueObject = {};
                dialogueObject.id = this.moduleJSON.conversations[key].dialogues[i]["id"];
                dialogueObject.whosays = this.moduleJSON.conversations[key].dialogues[i]["whosays"];
                dialogueObject.thedialogue = this.moduleJSON.conversations[key].dialogues[i]["thedialogue"];
                dialogueObject.duration = this.moduleJSON.conversations[key].dialogues[i]["duration"];
                dialogueObject.next = this.moduleJSON.conversations[key].dialogues[i]["next"];                
                
                conversationObject.dialogues.push(dialogueObject);
            }
            
            conversationObject.prerequisites = new Array();
            
            conversationObject.next = this.moduleJSON.conversations[key].next;
            
            this.conversationEntries.push(conversationObject);
        }
    };
    
    this.GetConversationWithID = function(conversationID){
        
        for(var i = 0; i < this.conversationEntries.length; i++){
            
            if(this.conversationEntries[i].id == conversationID){
                
                return this.conversationEntries[i];
                
            }
        }
        
    };
    
    this.GetDialogueWithID = function(conversationID, dialogueID){
        
        for(var i = 0; i < this.conversationEntries.length; i++){
            
            if(this.conversationEntries[i].id == conversationID){
                
                for(var j = 0; j < this.conversationEntries[i].dialogues.length; j++){
                    
                    if(this.conversationEntries[i].dialogues[j].id == dialogueID){
                        
                        return this.conversationEntries[i].dialogues[j];
                        
                    }                    
                }
            }
        }
        
    };
    
};