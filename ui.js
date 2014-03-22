/*
    Copyright (C) 2014  Anton Rufino

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

var appUI;
var canvas, ctx;

function ui() {
	this.cellSize = 10;
}

ui.prototype.init = function() {
	setUpCanvas();
	
	ctx.fillStyle = '#000';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function setUpCanvas() {
	console.log('hello');
	canvas = document.getElementById('field');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	if (canvas.getContext) {
		ctx = canvas.getContext('2d');
	}
}

function setGUI() {
	var gui = new dat.GUI();
	gui.add(appUI, 'cellSize');
}

window.addEventListener('load', function () {
	appUI = new ui();
	appUI.init();
	setGUI();
}, false);