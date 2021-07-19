var typed = new Typed('.tn', {
    strings: [
        'to Our Website.',
        'for Happy Learning.',
    ],
    typeSpeed: 70,
    backSpeed: 85,
    startDelay: 300,
    backDelay: 900,
    cursorChar: '|',
    loop: true,

});

// preloader by thapa technique

var loader = document.getElementById('preloader');

function myload() {
	
	setTimeout(function() {
		loader.style.display = "none";
	}, 1100);
	
	
}

// dark mode with using sun and moon icon

// var icon = document.getElementById('icon');
// icon.onclick = function() {
//     document.body.classList.toggle('dark-theme');
//     this.querySelector('i').classList.toggle('fa-sun');
// }


// dark mode in localStorage using image of sun and moon

var icon = document.getElementById('imgIcon');


if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "light");
}



let localData = localStorage.getItem("theme");

if(localData == "light"){
    icon.src = "images/moon.png";
    document.body.classList.remove("dark-theme");
}
else if (localData == "dark") {
    icon.src = "images/sun.png";
    document.body.classList.add("dark-theme");
}

icon.onclick = function() {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')){
        icon.src = 'images/sun.png';
        localStorage.setItem("theme", "dark");
    }else{
        icon.src = 'images/moon.png';
        localStorage.setItem("theme", "light");
    }
}


// hambergur manue using 

const manuclick = document.querySelector('.manuIcon');

manuclick.addEventListener('click', function () {
	
	
	const nev = document.querySelector('.nav-area');
	nev.classList.toggle('show-nav-area');
	this.querySelector('i').classList.toggle('fa-times');
	
})