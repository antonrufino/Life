function GOL() {
	this.population = 0;
	this.currentGeneration = [];
	this.nextGeneration = [];
}

GOL.prototype.init = function (numRows, numColumns) {
	for(var i = 0; i <= numRows; ++i) {
		this.currentGeneration[i] = [];
		this.nextGeneration[i] = [];
		
		for(var j = 0; j <= numColumns; ++j) {
			this.currentGeneration[i][j] = false;
			this.nextGeneration[i][j] = false;
		}
	}
}

GOL.prototype.changeCell = function (generation, position) {
	generation[position.row][position.col] = !generation[position.row][position.col];
}