var Life;

function App() {
	this.pause = false;

	this.UI = new UI();
	
	this.mouseDown = false;
}

App.prototype.init = function() {
	this.UI.init()
	this.run();
	
	setGUI();
	
	canvas.addEventListener('mousedown', mouseDownHandler, false);
	canvas.addEventListener('mouseup', mouseUpHandler, false);
	canvas.addEventListener('mousemove', mouseMoveHandler, false);
}

App.prototype.run = function() {	
	ctx.fillStyle = this.UI.background;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	//window.requestAnimFrame(App.prototype.run)
}

function mouseDownHandler(e) {
	Life.mouseDown = true;
}

function mouseUpHandler(e) {
	Life.mouseDown = false;
}

function mouseMoveHandler(e) {
	if (Life.mouseDown) {
		Life.UI.fillCell(e.clientX, e.clientY, Life.UI.cellColor);
	}
}

function setGUI() {
	var gui = new dat.GUI();
	gui.add(Life.UI, 'cellSize');
}

window.addEventListener('load', function () {
	Life = new App();
	Life.init();
}, false);