class Sketcher { 
   #size = 16;
   #color = 'black'
	generateGrid() {
		const grid = document.createElement('div');
		grid.classList.add("sketch");
		let gridElem;
		this.setCssGridSize(this.#size);
		console.log(this.#size)
		for (let i = 0; i < this.#size; i++) {
        	for (let j = 0; j < this.#size; j++) {
				gridElem = document.createElement('div');
				gridElem.classList.add("sketch_elem");

				grid.append(gridElem);
			}
		}
		const core = document.getElementsByClassName("content")[0];
		core.append(grid);
		this.setEventListeners();
		return grid;
	}

	setEventListeners() {
		
		let cells = document.getElementsByClassName("sketch_elem");
		
		[... cells].forEach((gridElem) => gridElem.addEventListener("mouseover", 
							(e) => e.buttons == 1 ? this.setGridElemColor(gridElem) :null , false));
	}
	setGridElemColor(gridElem) {
		gridElem.style.backgroundColor = this.#color;
	}
	setCssGridSize(size) {
		const r = document.querySelector(':root');
		r.style.setProperty('--size', size);
		console.log(this);
	}
	set setSize(size) {
		this.#size = size;
	}
	rangeValueChanger(grid) {
		const slider = document.getElementById("myRange");
		const output = document.getElementById("demo");
		output.innerHTML = slider.value;
		this.#size = slider.value;
		slider.oninput = function() {
			output.innerHTML = this.value;
		}
		slider.addEventListener('change', (e) => {
			const core = document.getElementsByClassName("content")[0];
			document.getElementsByClassName("sketch")[0].remove();
			this.#size = slider.value;
			grid  = this.generateGrid(this.#size);
			core.appendChild(grid);
			
		})
	}
	colorListener() {
		let input = document.getElementById('color_selector');
		input.addEventListener('change', (e) => {
			this.#color = e.target.value;
		})
	}
	 erazer() {
		const erazer = document.getElementsByClassName('erazer')[0];
		erazer.addEventListener('click', () => {this.#color = 'white' })
		
	 	
	}
	
}


function cleaner () {
	const core = document.getElementsByClassName("content")[0];
	const slider = document.getElementById("myRange");
	document.getElementsByClassName("sketch")[0].remove();
	const sketcher = new Sketcher();
	sketcher.setSize = slider.value;
	grid  = sketcher.generateGrid(sketcher.getSize);
			core.appendChild(grid);
}
function main() {

	const sketcher = new Sketcher();
	sketcher.colorListener();
	sketcher.setCssGridSize();
	sketcher.erazer();
	const grid = sketcher.generateGrid();
	sketcher.rangeValueChanger(grid);

	
}

main();




// document.body.append(grid);
