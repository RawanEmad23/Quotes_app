var userName= ["--Oscar Wilde","― Marcus Tullius Cicero","― Bernard M. Baruch","― Andre Gide, Autumn Leaves"];

var text=["“Be yourself; everyone else is already taken.”","“A room without books is like a body without a soul.”","“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”","“It is better to be hated for what you are than to be loved for what you are not.”"];


function randomText() {

   var num = Math.floor( Math.random () * userName.length )

 

document.getElementById("data").innerHTML=text[num]
document.getElementById("data2").innerHTML=userName[num]
}

