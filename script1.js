//object declaration script-1
((window)=>{
    var hi = "Hello";
    var helloSpeaker = {
        speak: function(name){
            console.log(hi+" "+name);
        }
    };
    window.helloSpeaker = helloSpeaker;
})(window);