passwordGen = function (__param) {
    var digit = parseInt(__param.digit),
        password = "",
        context = {};
    context.range = (function() { 
    	var range = [];
    	if (__param.includeSymbols)
    		range = range.concat([[33, 33], [35, 38], [40, 47]]);
    	if (__param.includeNumerals)
    		range = range.concat([[48, 57]]);
    	if (__param.includeUppercase)
    		range = range.concat([[65, 90]]);
    	if (__param.includeLowercase)
    		range = range.concat([[97, 122]]);
    	return range;
    })();
    /*[
        [33, 33],
        [35, 38],
        [40, 47],
        [48, 57],
        [65, 90],
        [97, 122]
    ];*/
    context.size = (function () {
        var a = context.range,
            c = 0;
        for (var b in a) c += a[b][1] - a[b][0] + 1;
        return c;
    })();
    for (var i = 0; i < digit; i++) {
        var rand = Math.round(Math.random() * (context.size - 1)),
            mapping = (function () {
                var a = context.range;
                for (var b in a) {
                    var l = a[b][1] - a[b][0] + 1;
                    if (rand >= l) rand -= l;
                    else return a[b][0] + rand;
                }
            })();
        console.log(mapping);
        password += String.fromCharCode(mapping);
    }
    //console.log("digit: "+digit+"\nsize: "+context.size+"\npassword: "+password);
    return password;
};
