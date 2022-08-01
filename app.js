// import Typed from 'typed.js';

var typed = new Typed(".auto-input", {
    strings: [
        "Hi, I'm ...",
        "Harshit, an Engineer",
        "Harsh, a Writer",
        "Harry, an Artist",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    startDelay: 2700,
    backDelay: 1000,
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
    cursorChar: "▮",
});

function resetTyped (strings) {
    terminal_text.destroy();
    terminal_text = new Typed('.terminal-text', {
      strings: strings,
      typeSpeed: 30,
      cursorChar: "▮",
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
        "Soon there will be something<br>"+
        "Aa gaye mera tamasha dekhne<br>"
    ]);
};

document.getElementById("flutist").onclick = function() {
    document.getElementById("terminal-top").innerHTML = "@harry!~/Flutist";
    resetTyped([
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~</a>$ cd Flutist<br>"+
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~/Flutist</a>$ ls<br>"+
        "Nothing to show you yet<br>"+
        "Soon there will be something<br>"
    ]);
};

document.getElementById("contact").onclick = function() {
    document.getElementById("terminal-top").innerHTML = "@harry!~/Contact";
    resetTyped([
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~</a>$ cd Contact<br>"+
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~/Contact</a>$ ls<br>"+
        "gmail1 : artofharry00@gmail.com<br>"+
        "gmail2 : singhharshit9080@gmail.com<br>"+
        "Linkedin : <a href='https://www.linkedin.com/in/harshit-singh-5850131bb/' target='_blank' rel='noopener noreferrer'>Harshit Singh</a><br>"+
        "Instagram : <a href='https://www.instagram.com/7purplethursday/' target='_blank' rel='noopener noreferrer'>@7purplethursday</a><br>"+
        "mobile1 : 8587864950<br>"+
        "mobile2 : 7982728603<br>"+
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~/Contact</a>$"
    ]);
};

function twinkle(n){
    var str = "";
    for(var i = 0; i < n; i++)
        str += "<div class='circle'></div>";
    document.getElementById("bg").innerHTML = str;
    
    const elements = document.getElementsByClassName("circle");
    
    let maxl = screen.width-200;
    let maxt = screen.height-230;
    let maxop = 20;
    
    function randomBais(){
        var tmp = Math.floor(Math.random()*2);
        if(tmp == 0)
            tmp = -1;
        return tmp;
    };

    function checkBais(tmp, mn, mx){
        if(tmp >= mx || tmp <= mn)
            return -1;
        return 1;
    }

    var colors = [[255, 0, 0], [100, 155, 155], [45, 210, 100], [90, 255, 55]];

    function move(element){
        var x = randomBais();
        var y = randomBais();
        var z = randomBais();
        var op = Math.floor(Math.random()*maxop);
        var l = Math.floor(Math.random()*maxl);
        var t = Math.floor(Math.random()*maxt);
        var color = colors[0];
        var cat = [0, 0, 0];
        setInterval(function(){
            y *= checkBais(t, 0, maxt);
            x *= checkBais(l, 0, maxl);
            z *= checkBais(op, 1, maxop);
            op += z;
            t += y;
            l += x;
            console.log(color);
            element.style.top = t+"px";
            element.style.left = l+"px";
            element.style.backgroundColor = "rgb(255, 255, 255," + 1/op + ")";

        }, 100);
    };

    for(var i = 0; i < elements.length; i++)
        move(elements[i], i);
};

twinkle(500);