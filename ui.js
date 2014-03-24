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
var canvas, ctx;

function setUpCanvas() {
	canvas = document.getElementById('field');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	if (canvas.getContext) {
		ctx = canvas.getContext('2d');
	}
}

function UI() {
	this.cellSize = 10;
	this.background = '#2a2a2a';
	this.cellColor = '#2222ee';
}

UI.prototype.init = function() {
	setUpCanvas();
}

UI.prototype.fillCell = function (mouseX, mouseY, color) {
	var cellX = Math.floor(mouseX / this.cellSize) * this.cellSize; 
	var cellY = Math.floor(mouseY / this.cellSize) * this.cellSize;
	
	ctx.fillStyle = color;
	ctx.fillRect(cellX, cellY, this.cellSize, this.cellSize);
	
	return {
		row: cellY / this.cellSize,
		col: cellX / this.cellSize
	};
}