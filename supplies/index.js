const prevBut = document.querySelector(".left-button");
const nextBut = document.querySelector(".right-button");
const slides = document.querySelectorAll(".card");


console.log(prevBut);
console.log(nextBut);
console.log(slides);


let counter = 0;

function slideChange(direction) {
	counter += direction;
	counter += counter == -1 ? 3 
			  :counter == 3 ? -3 : 0;
	for (const i of slides){
		i.style.transform = 'translateX(' + counter*-100 + '%)';
		console.log(counter);
	}
}


prevBut.addEventListener("click", () => slideChange(-1));
nextBut.addEventListener("click", () => slideChange(1));