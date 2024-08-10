// Create an array of objects, where each object contains the day of the week and the temperature for that day.
// The temperature should be a random number between 15 and 30.
// The array should contain 7 objects, one for each day of the week.
const weeklyTempData = [
    { day: 18, temp: Math.random() * 16 + 15 },
    { day: 19, temp: Math.random() * 16 + 15 },
    { day: 20, temp: Math.random() * 16 + 15 },
    { day: 21, temp: Math.random() * 16 + 15 },
    { day: 22, temp: Math.random() * 16 + 15 },
    { day: 23, temp: Math.random() * 16 + 15 },
    { day: 24, temp: Math.random() * 16 + 15 }
];

function convertRemToPixels(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

// Draw on the canvas when the document is ready
document.addEventListener('DOMContentLoaded', function () {
    onResize();
});

// Check for resize events
window.addEventListener('resize', onResize);

function onResize() {
    // Get the canvas and context
    const canvas = document.getElementById('canvas-test');
    const context = canvas.getContext('2d');

    // Get the width and height of the main div
    const width = document.getElementById("main-div").offsetWidth;
    const height = width * 0.5625;

    // Set the canvas width and height to the main div width and height * 0.5625
    canvas.width = width;
    canvas.height = height;

    // Set the canvas width and height in the HTML
    document.getElementById('width').innerText = canvas.width;
    document.getElementById('height').innerText = canvas.height;

    // Draw the grid
    drawGrid(context, width, height);
}


function drawGrid(context, width, height) {
    // Make the background yellow
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    // Set the inset for the grid
    const inset = 30;

    // Set the line width for the grid
    context.lineWidth = 0.75;

    // Set the colour of the grid to black
    context.strokeStyle = '#202020';

    // Draw graph axes
    context.beginPath();
    context.moveTo(inset, inset);
    context.lineTo(inset, height - inset);
    context.lineTo(width - inset, height - inset);
    context.stroke();

    // Draw the grid axis ticks
    drawTicks(context, inset, width, height);
}

function drawTicks(context, inset, width, height) {
    // Set the tick length to be the minimum of 10 and 1% of the width
    const tickLength = inset / 4;

    // Get the min and max temperatures for the weekly data
    const minTempWeekly = Math.floor(Math.min(...weeklyTempData.map(x => x.temp)));
    const maxTempWeekly = Math.ceil(Math.max(...weeklyTempData.map(x => x.temp)));

    // Set the font for the ticks and lower the font weight
    context.font = 'lighter 0.75rem Helvetica';

    // Set the colour of the text to black
    context.fillStyle = '#202020';

    // Draw the weekly data ticks
    for (let i = 0; i < weeklyTempData.length; i++) {
        const x = inset + (i / (weeklyTempData.length - 1)) * (width - (2 * inset));
        const text_x = x - convertRemToPixels(0.5);
        context.beginPath();
        context.moveTo(x, height - inset);
        context.lineTo(x, height - inset + tickLength);
        context.stroke();
        context.fillText(weeklyTempData[i].day, text_x, height - inset + tickLength + 15);
    }

    // Draw the weekly temperature data ticks with the min and max temperatures
    temperatureSteps = Math.ceil(maxTempWeekly - minTempWeekly);

    for (let i = 0; i <= temperatureSteps; i++) {
        // Set the colour of the grid to black
        context.strokeStyle = '#202020';
        const y = height - inset - (i / temperatureSteps) * (height - 2 * inset);
        const text_y = y + convertRemToPixels(0.25);
        context.beginPath();
        context.moveTo(inset, y);
        context.lineTo(inset - tickLength, y);
        context.stroke();
        context.fillText(minTempWeekly + i, inset / 3 - tickLength, text_y);

        if (i != 0) {
            // Draw light grey horizontal lines for the temperature data
            context.strokeStyle = 'lightgrey';
            context.beginPath();
            context.moveTo(inset, y);
            context.lineTo(width - inset, y);
            context.stroke();
        }
    }

    // Draw the graph
    drawGraph(context, inset, width, height);
}


// Draw the graph so that the x-axis is the day of the week and the y-axis is the temperature
// The data points should be centered between the x-axis ticks
function drawGraph(context, inset, width, height) {
    // Get the min and max temperatures for the weekly data
    const minTempWeekly = Math.floor(Math.min(...weeklyTempData.map(x => x.temp)));
    const maxTempWeekly = Math.ceil(Math.max(...weeklyTempData.map(x => x.temp)));

    // Set the line width for the graph
    context.lineWidth = 2;

    // Set the colour of the graph to blue
    context.strokeStyle = 'cornflowerblue';

    // Draw the weekly temperature data
    context.beginPath();
    for (let i = 0; i < weeklyTempData.length; i++) {
        const x = inset + (i / (weeklyTempData.length - 1)) * (width - (2 * inset));
        const y = height - inset - ((weeklyTempData[i].temp - minTempWeekly) / (maxTempWeekly - minTempWeekly)) * (height - 2 * inset);
        context.lineTo(x, y);
    }
    context.stroke();

}