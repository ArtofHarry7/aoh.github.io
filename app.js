// import Typed from 'typed.js';

var typed = new Typed(".auto-input", {
    strings: [
        "Harshit, an Engineer",
        "Harsh, a Writer",
        "Harry, an Artist",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});

var description = new Typed(".desc", {
    strings: [
        "<div class='type'><div class='icon'><img src='icons/developer.png' alt=''></div>Developer</div>"+
        "<div class='type'><div class='icon'><img src='icons/design.png' alt=''></div>Writer</div>"+
        "<div class='type'><div class='icon'><img src='icons/sketch.png' alt=''></div>Sketch Artist</div>"+
        "<div class='type'><div class='icon'><img src='icons/mimicry.png' alt=''></div>Mimicry Artist</div>"+
        "<div class='type'><div class='icon'><img src='icons/developer.png' alt=''></div>Flutist</div>"+
        
        "<br>Sometimes try Beat-Boxing as well<br><br>"+
        "Your eyes are Story Teller<br>"
    ],
});

var terminal_text = new Typed(".terminal-text", {
    strings: [
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~</a>$"
    ],
    typeSpeed: 30,
});

function resetTyped (strings) {
    terminal_text.destroy();
    terminal_text = new Typed('.terminal-text', {
      strings: strings,
      typeSpeed: 30,
    });
}

document.getElementById("developer").onclick = function() {
    document.getElementById("terminal-top").innerHTML = "@harry!~/Developer";
    resetTyped([
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~</a>$ cd Developer<br>"+
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~/Developer</a>$ ls<br>"+
        "Currently persuing Bachelors of Technology with Computer Science in IIT BHU varanasi<br>"+
        "Designed a simple food delivery website : <a href='http://artofharry7.pythonanywhere.com/menu/' target='_blank' rel='noopener noreferrer'>Delish</a><br>"+
        "Here is my github profile : <a href='https://github.com/ArtofHarry7' target='_blank' rel='noopener noreferrer'>gitHub</a><br>"+
        "Here is my codeforces profile : <a href='https://codeforces.com/profile/Harshit_Singh' target='_blank' rel='noopener noreferrer'>CodeForces</a><br>"+
        "Here is my codechef profile : <a href='https://www.codechef.com/users/artofharry' target='_blank' rel='noopener noreferrer'>CodeChef</a><br>"
    ]);
};

document.getElementById("sketch").onclick = function() {
    document.getElementById("terminal-top").innerHTML = "@harry!~/Sketch Artist";
    resetTyped([
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~</a>$ cd Sketch Artist<br>"+
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~/Sketch Artist</a>$ ls<br>"+
        "Instagram Art page : <a href='https://www.instagram.com/artofharry7/' target='_blank' rel='noopener noreferrer'>@ArtofHarry7</a><br>"+
        "Facebook Art page : <a href='https://www.facebook.com/artofharry' target='_blank' rel='noopener noreferrer'>@Art Lover</a><br>"+
        ""
    ]);
};

document.getElementById("writer").onclick = function() {
    document.getElementById("terminal-top").innerHTML = "@harry!~/Writer";
    resetTyped([
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~</a>$ cd Writer<br>"+
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~/writer</a>$ ls<br>"+
        "Blog page : <a href='https://alfaz-e-harsh.blogspot.com/' target='_blank' rel='noopener noreferrer'>मुन्तज़िर</a><br>"+
        ""
    ]);
};

document.getElementById("mimicry").onclick = function() {
    document.getElementById("terminal-top").innerHTML = "@harry!~/Mimicry Artist";
    resetTyped([
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~</a>$ cd Mimicry Artist<br>"+
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~/Mimicry Artist</a>$ ls<br>"+
        "Nothing to show you yet<br>"+
        "Aa gaye mera tamasha dekhne<br>"
    ]);
};

document.getElementById("flutist").onclick = function() {
    document.getElementById("terminal-top").innerHTML = "@harry!~/Flutist";
    resetTyped([
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~</a>$ cd Flutist<br>"+
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~/Flutist</a>$ ls<br>"+
        "Nothing to show you yet<br>"
    ]);
};

document.getElementById("contact").onclick = function() {
    document.getElementById("terminal-top").innerHTML = "@harry!~/Contact";
    resetTyped([
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~</a>$ cd Contact<br>"+
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~/Contact</a>$ cd gmail<br>"+
        "singhharshit9080@gmail.com<br>"+
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~/Contact/gmail</a>$ cd ..<br>"+
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~/Contact</a>$ cd linkedin Profile<br>"+
        "<a href='https://www.linkedin.com/in/harshit-singh-5850131bb/' target='_blank' rel='noopener noreferrer'>Harshit Singh</a><br>"+
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~/Contact/Linkedin Profile</a>$ cd ..<br>"+
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~/Contact</a>$ cd Instagram<br>"+
        "<a href='https://www.instagram.com/7purplethursday/' target='_blank' rel='noopener noreferrer'>@7purplethursday</a><br>"+
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~/Contact/Instagram</a>$ cd ..<br>"+
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~/Contact</a>$ cd mobile<br>"+
        "8587864950<br>"+
        "7982728603<br>"+
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~/Contact/mobile</a>$"
    ]);
};

const elements = document.getElementsByClassName("circle");

var le = 300;
var to = 300;

let maxl = screen.availWidth-200;
let maxt = screen.availHeight-200;

function move_(element, i, n, gap, time){
    console.log('hua');
    var x = -1, y = -1;
    var l = le+(i%n)*(gap+13)-(i/n)*(gap+13);
    var t = to+(i%n)*(gap)+(i/n)*(gap);
    var T = time;
    setInterval(function(){
        if(t >= maxt)
            y = -1;
        if(t <= 0)
            y = 1;
        if(l >= maxl)
            x = -1;
        if(l <= 0)
            x = 1;
        t += y;
        l += x;
        // T++;
        element.style.top = t+"px";
        element.style.left = l+"px";
    }, time);
};

for(var i = 0; i < elements.length; i++)
    move_(elements[i], i, 4, 60, 3);