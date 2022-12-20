class Sketcher { 
   #size = 16;
   #color = 'black';
   #modeColorFlag = false;
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
		if(this.#modeColorFlag === false) {
			gridElem.style.backgroundColor = this.#color;
		}else {
			gridElem.style.backgroundColor = this.randomRGB();
		}
	}
	setCssGridSize(size) {
		const r = document.querySelector(':root');
		r.style.setProperty('--size', size);
		console.log(this);
	}

	rangeValueChanger() {
		const slider = document.getElementById("myRange");
		const output = document.getElementById("demo");
		const val = document.getElementById("val");
		val.innerHTML = slider.value;
		output.innerHTML = slider.value;
		this.#size = slider.value;
		slider.oninput = function() {
			output.innerHTML = this.value;
			val.innerHTML = this.value;
		}
		slider.addEventListener('change', (e) => {
			const core = document.getElementsByClassName("content")[0];
			document.getElementsByClassName("sketch")[0].remove();
			this.#size = slider.value;
			let grid  = this.generateGrid(this.#size);
			core.appendChild(grid);
			
		})
	}
	colorListener() {
		let input = document.getElementById('color_selector');
		this.#color = input.value;
		input.addEventListener('change', (e) => {
			this.#color = e.target.value;
		})
	}
	 erazer() {
		const erazer = document.getElementsByClassName('erazer')[0];
		erazer.addEventListener('click', () => {this.#color = 'white' })	
	}
	randomRGB() {
		
			var x = Math.floor(Math.random() * 256);
	  		var y = Math.floor(Math.random() * 256);
	   	var z = Math.floor(Math.random() * 256);
	  		var RGBColor = "rgb(" + x + "," + y + "," + z + ")";  
	  		
	  		return RGBColor;	
	
	}
	colorMode() {
		const color_mode = document.getElementsByClassName('color_mode')[0];
		color_mode.addEventListener('click', () => this.#modeColorFlag = false );
	}
	randomMode() {
		const random = document.getElementsByClassName('random')[0];
		random.addEventListener('click', () => this.#modeColorFlag = true);
	}
	 cleaner () {
	 	const cleaner = document.getElementsByClassName('cleaner')[0];
	 	cleaner.addEventListener('click', () => {
	 		const core = document.getElementsByClassName("content")[0];
			const slider = document.getElementById("myRange");
			document.getElementsByClassName("sketch")[0].remove();
			this.#size = slider.value;
			let grid = this.generateGrid();
			core.appendChild(grid);
	 	})
		
	}
	
}



function main() {
	const sketcher = new Sketcher();
	sketcher.rangeValueChanger();
	sketcher.colorListener();
	sketcher.setCssGridSize();
	sketcher.randomMode();
	sketcher.colorMode();
	sketcher.erazer();
	sketcher.cleaner();
	const grid = sketcher.generateGrid();
}

main();



