var btn = document.querySelector('#b');
var btn2 = document.querySelector('#bb');
var front = document.querySelector('.front');
var back = document.querySelector('.back');

btn.addEventListener('click', function () {
	front.style.transform = "perspective(900px) rotateY(180deg)";
	//prednju stranu na klik okrenem za 180 stepeni

	back.style.transform = "perspective(900px) rotateY(0deg)";
	//zadnju stranu na klik okrenem na 0 stepeni (pocetno)
})

btn2.addEventListener('click', function(){
	back.style.transform = "perspective(900px) rotateY(-180deg)";
	front.style.transform = "perspective(900px) rotateY(0deg)";
})



