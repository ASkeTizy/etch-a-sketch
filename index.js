

let size;
function generateGrid(size) {
	console.log(size);
	const grid = document.createElement('div');
	grid.classList.add("sketch");
	let gridElem;
	setCssGridSize(size);
	for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
			gridElem = document.createElement('div');
			gridElem.classList.add("sketch_elem");
			grid.append(gridElem);
		}
	}
	return grid;
}
function setEventListeners() {
	let cells = document.getElementsByClassName("sketch_elem");
	[... cells].forEach((gridElem) => gridElem.addEventListener("mouseover", 
						(e) => e.buttons == 1 ? setGridElemColor(gridElem,'black') :null , false));
}
function setGridElemColor(gridElem, color) {
	gridElem.style.backgroundColor = color;
}


function setCssGridSize(size) {
	const r = document.querySelector(':root');
	r.style.setProperty('--size', size)
}

const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
	output.innerHTML = this.value;
	

}
size = slider.value;
console.log(size);
let t  = generateGrid(size);
const core = document.getElementsByClassName("content")[0];
core.appendChild(t);
setEventListeners(t);

// document.body.append(grid);