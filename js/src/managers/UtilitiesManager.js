
UtilitiesManager = function(){
    
};

UtilitiesManager.prototype = {

    ObjectLength: function ( object ) {
        var length = 0;
        for( var key in object ) {
            if( object.hasOwnProperty(key) ) {
                ++length;
            }
        }
        return length;
    }
}