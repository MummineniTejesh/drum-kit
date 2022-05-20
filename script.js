for(var i=0;i<7;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function (){
        var btn=this.innerText;
        player(btn);
    });
}


document.addEventListener("keydown",function(event){
    player(event.key);

});

function player(key){
    var song=new Audio("audio/audio"+key+".mp3");
    song.play();
}