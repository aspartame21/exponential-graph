var endl = "<br>\n\r";

function log(str) { 
    if (typeof(str[0]) !== "undefined" && str[0].length > 0) {
         var err = (str[0].indexOf("Error") !== -1) ? true : false;
    }
    try {
        logbox = document.getElementById('logbox');
        if (err) {
            logbox.innerHTML += str[0] + endl +
                "-filename: " + str[1] + endl +
                "-row: " + str[2] + endl +
                "-column: " + str[3] + endl;
        } else if (typeof(str) === "object"){
            logbox.innerHTML += JSON.stringify(str) + endl;
        } else {
            logbox.innerHTML += str + endl;
        }
    } catch(e) {
        console.error("logbox hasn't initialized yet");
    }
}

Array.prototype.min = function(){
	return Math.min.apply(null, this);
}

Array.prototype.max = function(){
	return Math.max.apply(null, this);
}

window.onerror = function globalError(){
    log(arguments);
};