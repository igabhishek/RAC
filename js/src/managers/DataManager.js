
DataManager = new function(){
    
    this.moduleJSON = null;
    this.conversationEntries = new Array();
    
    this.justPlayedConversation = 0;
    
    this.PopulateConversationEntries = function(){
        
        for (var key in this.moduleJSON)
        {
            var conversationObject = {};
            conversationObject.id = key;
            conversationObject.dialogues = new Array();
            
            for(var i = 0; i < this.moduleJSON[key].dialogues.length; i++)            
            {
                var dialogueObject = {};
                dialogueObject.id = this.moduleJSON[key].dialogues[i]["id"];
                dialogueObject.whosays = this.moduleJSON[key].dialogues[i]["whosays"];
                dialogueObject.thedialogue = this.moduleJSON[key].dialogues[i]["thedialogue"];
                dialogueObject.duration = this.moduleJSON[key].dialogues[i]["duration"];
                dialogueObject.next = this.moduleJSON[key].dialogues[i]["next"];                
                
                conversationObject.dialogues.push(dialogueObject);
            }
            
            conversationObject.prerequisites = new Array();
            
            this.conversationEntries.push(conversationObject);
        }
        
        console.log(this.conversationEntries);
    }
    
};