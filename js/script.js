document.querySelector ('.nadpis').textContent = 'Nadpis H1 změněný Javascriptem';

// Prepinani obrazku

let flip;
let scale;

window.onload = function () {
	flip = document.getElementsByClassName("webp-flip")
	flip.onclick = change;
	scale = document.getElementsByClassName("object-scale")
	scale.onclick = fit;
}

function change() {
	let i;
	for (i = 0; i < flip.length; i++) {
		if (flip[i].srcset == "https://raw.githubusercontent.com/Georgincz/Devstack/main/img/car.webp") {
			flip[i].srcset = "https://raw.githubusercontent.com/Georgincz/Devstack/main/img/face.webp";
		} else {
			flip[i].srcset = "https://raw.githubusercontent.com/Georgincz/Devstack/main/img/car.webp";
		}
	}
}

/* --------------------- */

function fit() {
	let i;
	for (i = 0; i < scale.length; i++) {
		scale[i].classList.toggle("object-fit");
	}
}

// End - Prepinani obrazku