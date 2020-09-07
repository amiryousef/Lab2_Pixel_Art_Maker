/*
Amir Yousef
Lab2: Pixel Art Maker Project
Created design.js file to control the HTM index.html file.
*/

// Declare variables
var grid = document.getElementById ("pixelCanvas");
var size = document.getElementById ("sizePicker");
var color = document.getElementById ("colorPicker");
var cell = document.getElementsByClassName('cell');

// Add click event function to select the cell color
function addClickEvent () 
{
    for (var square = 0; square < cell.length; square++) 
	{
		cell[square].addEventListener("click", function (event)
											   {
											   var click = event.target;
											   click.style.background = color.value;
											   });
    }
}

// Select size input
function makeGrid (width, height) 
{
	var design = '';
    for (var row = 0; row < height; row++) 
	{
		design += '<tr class = "row-' + row + '">';
		for (var column = 0; column < width; column++ ) 
		{
			design += '<td class = "cell" id = "row-' + column + '_cell-' + column + '"></td>';
        }
		design += '</tr>';
    }
	grid.innerHTML = design;
	addClickEvent ()
}

// When size is submitted by the user, call makeGrid()
function submitGrid () 
{
var gridWidth = document.getElementById("inputWidth").value;
var gridHeight = document.getElementById("inputHeight").value;
event.preventDefault();
makeGrid(gridWidth, gridHeight);
}

// Call submitGrid to start the canvas
document.getElementById('sizePicker').onsubmit = function () 
{
	submitGrid ();
};

// Call makeGrid to default the canvas size to 1 cell
makeGrid(1, 1);