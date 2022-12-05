class Sketcher { 
   #size = 16;

	constructor(size) {
		size = this.size;
	}

	generateGrid() {
		console.log(size);
		const grid = document.createElement('div');
		grid.classList.add("sketch");
		let gridElem;
		this.setCssGridSize(this.size);
		for (let i = 0; i < this.size; i++) {
        	for (let j = 0; j < this.size; j++) {
				gridElem = document.createElement('div');
				gridElem.classList.add("sketch_elem");
				grid.append(gridElem);
			}
		}
		return grid;
	}

	static setEventListeners(color) {
		if (color == null) color = 'black';
		let cells = document.getElementsByClassName("sketch_elem");
		console.log(color);
		[... cells].forEach((gridElem) => gridElem.addEventListener("mouseover", 
							(e) => e.buttons == 1 ? this.setGridElemColor(gridElem,color) :null , false));
	}
	setGridElemColor(gridElem, color) {
		gridElem.style.backgroundColor = color;
	}
	setCssGridSize(size) {
		const r = document.querySelector(':root');
		r.style.setProperty('--size', size);
	}
	rangeValueChanger(grid) {
		const slider = document.getElementById("myRange");
		const output = document.getElementById("demo");
		output.innerHTML = slider.value;
		slider.oninput = function() {
			output.innerHTML = this.value;
		}
		slider.addEventListener('change', (e) => {
			const core = document.getElementsByClassName("content")[0];
			size = slider.value;
			grid.remove();	
			grid  = generateGrid(size);
			core.appendChild(t);
			setEventListeners();
		})
	}
	
}
class ColorEvent {
	#color = 'black';
	constructor(color) {
		color = this.color;
	}
	setColor(color) {
		color = this.color;
	}
	getColor() {
		return this.color;
	}
	colorListener() {
		let input = document.getElementById('color_selector');
		input.addEventListener('change', (e) => {
			Sketcher.setEventListeners(e.target.value);
		})
	}
}



function main() {
	const sketcher = new Sketcher();
	const colorEvent = new ColorEvent();
	colorEvent.colorListener();
	sketcher.generateGrid();
	size = slider.value;
	let t  = generateGrid(size);
	const core = document.getElementsByClassName("content")[0];
	core.appendChild(t);
	setEventListeners();
	console.log(input);
}





// document.body.append(grid);
