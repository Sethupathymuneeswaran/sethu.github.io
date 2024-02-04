/* preloder /
document.body.onload = function () {

	setTimeout(function () {
		let preloader = document.getElementById('page-preloader');
		if (!preloader.classList.contains('done')) {
			preloader.classList.add('done');
		}
	},900);
}
*/document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        // Hide the preloader when the page is fully loaded
        document.querySelector('.preloader').style.display = 'none';
      }
    };

let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});