// import Typed from 'typed.js';
var terminalSpeed = 15;

var typed = new Typed(".auto-input", {
    strings: [
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
        "<div class='type'><div class='icon'><img src='icons/writer.png' alt=''></div>Writer</div>"+
        "<div class='type'><div class='icon'><img src='icons/sketch.png' alt=''></div>Sketch Artist</div>"+
        "<div class='type'><div class='icon'><img src='icons/mimicry.png' alt=''></div>Mimicry Artist</div>"+
        "<div class='type'><div class='icon'><img src='icons/flute.png' alt=''></div>Flutist</div>"+
        "<br>Sometimes try Beat-Boxing as well<br><br>"+
        "Your eyes are Story Teller<br>"
    ],
});

var terminal_text = new Typed(".terminal-text", {
    strings: [
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~</a>$"
    ],
    typeSpeed: terminalSpeed,
    cursorChar: "▮",
});

// function resetPopText(strings) {
//     popTerminalText.destroy();
//     popTerminalText = new Typed(".pop-terminal-text", {
//         strings: [
//             "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~</a>$"
//         ],
//         typeSpeed: 30,
//         cursorChar: "▮",
//     });
// }

var popTerminalText;

function resetTyped (strings) {
    terminal_text.destroy();
    terminal_text = new Typed('.terminal-text', {
      strings: strings,
      typeSpeed: terminalSpeed,
      cursorChar: "▮",
    });
}

function popTerminal() {
    var popterminal = document.getElementById("pop-terminal");
    popterminal.style.opacity = "1";
    popterminal.style.top = "200px";
    popterminal.style.left = "4vw";
    popterminal.style.height = "500px";
    popterminal.style.width = "90vw";
}

function resetPopTyped(strings) {
    popTerminalText = new Typed(".pop-terminal-text", {
        strings: str,
        typeSpeed: terminalSpeed,
        cursorChar: "▮",
    });
}

document.getElementById("developer").onclick = function() {
    str = [
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~</a>$ cd Developer<br>"+
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~/Developer</a>$ cat Developer.txt<br>"+
        "Currently persuing Bachelors of Technology with Computer Science in IIT BHU varanasi<br>"+
        "Designed a simple food delivery website : <a href='http://artofharry7.pythonanywhere.com/menu/' target='_blank' rel='noopener noreferrer'>Delish</a><br>"+
        "Here is my github profile : <a href='https://github.com/ArtofHarry7' target='_blank' rel='noopener noreferrer'>gitHub</a><br>"+
        "Here is my codeforces profile : <a href='https://codeforces.com/profile/Harshit_Singh' target='_blank' rel='noopener noreferrer'>CodeForces</a><br>"+
        "Here is my codechef profile : <a href='https://www.codechef.com/users/artofharry' target='_blank' rel='noopener noreferrer'>CodeChef</a><br>"+
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~/Developer</a>$"
    ]
    if(window.innerWidth >= 1250){
        document.getElementById("terminal-top").innerHTML = "@harry!~/Developer";
        resetTyped(str);
    }
    else{
        popTerminal();
        resetPopTyped(str);
    }
};

document.getElementById("sketch").onclick = function() {
    str = [
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~</a>$ cd Sketch Artist<br>"+
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~/Sketch Artist</a>$ cat 'Art Works.txt'<br>"+
        "Instagram Art page : <a href='https://www.instagram.com/artofharry7/' target='_blank' rel='noopener noreferrer'>@ArtofHarry7</a><br>"+
        "Facebook Art page : <a href='https://www.facebook.com/artofharry' target='_blank' rel='noopener noreferrer'>@Art Lover</a><br>"+
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~/Sketch Artist</a>$"
    ];
    if(window.innerWidth >= 1250){
        document.getElementById("terminal-top").innerHTML = "@harry!~/Sketch Artist";
        resetTyped(str);
    }
    else{
        popTerminal();
        resetPopTyped(str);
    }
};

document.getElementById("writer").onclick = function() {
    str = [
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~</a>$ cd Writer<br>"+
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~/writer</a>$ cat Writer.txt<br>"+
        "Blog page : <a href='https://alfaz-e-harsh.blogspot.com/' target='_blank' rel='noopener noreferrer'>मुन्तज़िर</a><br>"+
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~/writer</a>$"
    ]
    if(window.innerWidth >= 1250){
        document.getElementById("terminal-top").innerHTML = "@harry!~/Writer";
        resetTyped(str);
    }
    else{
        popTerminal();
        resetPopTyped(str);
    }
};

document.getElementById("mimicry").onclick = function() {
    str = [
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~</a>$ cd Mimicry Artist<br>"+
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~/Mimicry Artist</a>$ cat 'Mimicry.txt'<br>"+
        "Nothing to show you yet<br>"+
        "Soon there will be something<br>"+
        "Aa gaye mera tamasha dekhne<br>"+
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~/Mimicry Artist</a>$"
    ];
    if(window.innerWidth >= 1250){
        document.getElementById("terminal-top").innerHTML = "@harry!~/Mimicry Artist";
        resetTyped(str);
    }
    else{
        popTerminal();
        resetPopTyped(str);
    }
};

document.getElementById("flutist").onclick = function() {
    str = [
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~</a>$ cd Flutist<br>"+
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~/Flutist</a>$ cat 'Flutist.txt'<br>"+
        "Nothing to show you yet<br>"+
        "Soon there will be something<br>"+
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~/Flutist</a>$"
    ];
    if(window.innerWidth >= 1250){
        document.getElementById("terminal-top").innerHTML = "@harry!~/Flutist";
        resetTyped(str);
    }
    else{
        popTerminal();
        resetPopTyped(str);
    }
};

document.getElementById("contact").onclick = function() {
    str = [
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~</a>$ cd Contact<br>"+
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~/Contact</a>$ cat Contact.txt<br>"+
        "gmail1 : artofharry00@gmail.com<br>"+
        "gmail2 : singhharshit9080@gmail.com<br>"+
        "Linkedin : <a href='https://www.linkedin.com/in/harshit-singh-5850131bb/' target='_blank' rel='noopener noreferrer'>Harshit Singh</a><br>"+
        "Instagram : <a href='https://www.instagram.com/7purplethursday/' target='_blank' rel='noopener noreferrer'>@7purplethursday</a><br>"+
        "mobile1 : 8587864950<br>"+
        "mobile2 : 7982728603<br>"+
        "<a class='green-color'>ArtofHarry</a>:<a class='blue-color'>~/Contact</a>$"
    ];
    if(window.innerWidth >= 1250){
        document.getElementById("terminal-top").innerHTML = "@harry!~/Contact";
        resetTyped(str);
    }
    else{
        popTerminal();
        resetPopTyped(str);
    }
};

function twinkle(n){
    var str = "";
    for(var i = 0; i < n; i++)
        str += "<div class='circle'></div>";
    document.getElementById("bg").innerHTML = str;
    
    const elements = document.getElementsByClassName("circle");
    
    let maxl = window.innerWidth;
    let maxt = window.innerHeight;
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
            element.style.top = t+"px";
            element.style.left = l+"px";
            element.style.backgroundColor = "rgb(255, 255, 255," + 1/op + ")";

        }, 100);
    };

    for(var i = 0; i < elements.length; i++)
        move(elements[i], i);
};

twinkle(500);

function removeTerminal() {
    popterminal = document.getElementById("pop-terminal");
    popterminal.style.opacity = "0";
    popterminal.style.top = "0px";
    popterminal.style.left = "0px";
    popterminal.style.height = "0px";
    popterminal.style.width = "0px";
    popTerminalText.destroy();
};