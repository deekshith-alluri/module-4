//object declaration script-2
((window)=>{
    var bye = "GoodBye";
    var byeSpeaker ={
        speak:function(name){
            console.log(bye+' '+name);
        }
    };
    window.byeSpeaker = byeSpeaker;
})(window);