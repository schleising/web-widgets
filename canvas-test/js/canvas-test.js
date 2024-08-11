// Create hourly test data for one day
// The data should be an array of objects containing:
// The name of the device
// The timestamp in timezone UTC in iso format, in one hour intervals
// The temperature in degrees Celsius between 15 and 25 degrees, smoothly changing, not random
// The humidity in percentage
const hourlyTempData = [
    { device: 'device1', timestamp: '2024-08-11T00:00:00Z', temp: 15, humidity: 50 },
    { device: 'device1', timestamp: '2024-08-11T01:00:00Z', temp: 16, humidity: 51 },
    { device: 'device1', timestamp: '2024-08-11T02:00:00Z', temp: 17, humidity: 52 },
    { device: 'device1', timestamp: '2024-08-11T03:00:00Z', temp: 18, humidity: 53 },
    { device: 'device1', timestamp: '2024-08-11T04:00:00Z', temp: 19, humidity: 54 },
    { device: 'device1', timestamp: '2024-08-11T05:00:00Z', temp: 20, humidity: 55 },
    { device: 'device1', timestamp: '2024-08-11T06:00:00Z', temp: 21, humidity: 56 },
    { device: 'device1', timestamp: '2024-08-11T07:00:00Z', temp: 22, humidity: 57 },
    { device: 'device1', timestamp: '2024-08-11T08:00:00Z', temp: 23, humidity: 58 },
    { device: 'device1', timestamp: '2024-08-11T09:00:00Z', temp: 24, humidity: 59 },
    { device: 'device1', timestamp: '2024-08-11T10:00:00Z', temp: 25, humidity: 60 },
    { device: 'device1', timestamp: '2024-08-11T11:00:00Z', temp: 24, humidity: 59 },
    { device: 'device1', timestamp: '2024-08-11T12:00:00Z', temp: 23, humidity: 58 },
    { device: 'device1', timestamp: '2024-08-11T13:00:00Z', temp: 22, humidity: 57 },
    { device: 'device1', timestamp: '2024-08-11T14:00:00Z', temp: 21, humidity: 56 },
    { device: 'device1', timestamp: '2024-08-11T15:00:00Z', temp: 20, humidity: 55 },
    { device: 'device1', timestamp: '2024-08-11T16:00:00Z', temp: 19, humidity: 54 },
    { device: 'device1', timestamp: '2024-08-11T17:00:00Z', temp: 18, humidity: 53 },
    { device: 'device1', timestamp: '2024-08-11T18:00:00Z', temp: 17, humidity: 52 },
    { device: 'device1', timestamp: '2024-08-11T19:00:00Z', temp: 16, humidity: 51 },
    { device: 'device1', timestamp: '2024-08-11T20:00:00Z', temp: 15, humidity: 50 },
    { device: 'device1', timestamp: '2024-08-11T21:00:00Z', temp: 16, humidity: 51 },
    { device: 'device1', timestamp: '2024-08-11T22:00:00Z', temp: 17, humidity: 52 },
    { device: 'device1', timestamp: '2024-08-11T23:00:00Z', temp: 18, humidity: 53 }
];

var xScale = 0;
var yScale = 0;
var xTrans = 0;
var yTrans = 0;

function convertRemToPixels(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

// Draw on the canvas when the document is ready
document.addEventListener('DOMContentLoaded', function () {
    onResize();
});

// Check for resize events
window.addEventListener('resize', onResize);

// Scale and translate the x value to the canvas
function scaleAndTranslateX(time) {
    return time * xScale + xTrans;
}

// Scale and translate the y value to the canvas
function scaleAndTranslateY(temp) {
    return temp * yScale + yTrans;
}

// On resize, draw the grid and the chart
function onResize() {
    // Get the canvas and context
    const canvas = document.getElementById('canvas-device1');
    const context = canvas.getContext('2d');

    // Get the width and height of the main div
    const width = document.getElementById("main-div").offsetWidth;
    const height = width * 0.5625;

    // Set the canvas width and height to the main div width and height * 0.5625
    canvas.width = width;
    canvas.height = height;

    // Clear the canvas and make the background white
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);

    const inset = 30;
    const gridWidth = width - 2 * inset;
    const gridHeight = height - 2 * inset;

    // Set the canvas width and height in the HTML
    document.getElementById('width').innerText = canvas.width;
    document.getElementById('height').innerText = canvas.height;

    // Get the minimum and maximum time as milliseconds since epoch
    const minTime = new Date(hourlyTempData[0].timestamp).getTime();
    const maxTime = new Date(hourlyTempData[hourlyTempData.length - 1].timestamp).getTime();

    // Get the difference in time in milliseconds
    const timeDiff = maxTime - minTime;

    // Get the minimum and maximum temperature floor and ceiling
    const minTemp = Math.floor(Math.min(...hourlyTempData.map(data => data.temp)));
    const maxTemp = Math.ceil(Math.max(...hourlyTempData.map(data => data.temp)));

    // Get the difference in temperature
    const tempDiff = maxTemp - minTemp;

    // Calculate the x and y scaling factors
    xScale = gridWidth / timeDiff;
    yScale = -gridHeight / tempDiff;

    // Calculate the x and x translation factors after scaling
    xTrans = -minTime * xScale + inset;
    yTrans = -maxTemp * yScale + inset;

    // Draw the grid in temperature and time scaling to the canvas
    drawGrid(context, minTime, maxTime, minTemp, maxTemp);

    // Draw the ticks on the grid in temperature and time scaling to the canvas
    drawTicks(context, minTime, maxTime, minTemp, maxTemp);

    // Draw the temperature data on the grid in temperature and time scaling to the canvas
    drawTemperatureData(context, inset, height - inset);
}

function drawGrid(context, minTime, maxTime, minTemp, maxTemp) {
    // Set the line width for the grid
    context.lineWidth = 0.75;

    // Set the colour of the grid to black
    context.strokeStyle = '#202020';

    // Draw graph axes
    context.beginPath();
    context.moveTo(scaleAndTranslateX(minTime), scaleAndTranslateY(maxTemp));
    context.lineTo(scaleAndTranslateX(minTime), scaleAndTranslateY(minTemp));
    context.lineTo(scaleAndTranslateX(maxTime), scaleAndTranslateY(minTemp));
    context.stroke();
}

function drawTicks(context, minTime, maxTime, minTemp, maxTemp) {
    // Set the tick length to be the minimum of 10 and 1% of the width
    const tickLength = 10;

    // Set the font for the ticks and lower the font weight
    context.font = 'lighter 0.65rem Helvetica';

    // Set the colour of the text to black
    context.fillStyle = '#202020';

    // Draw the hourly data ticks
    for (let i = 0; i < hourlyTempData.length; i++) {
        const t = new Date(hourlyTempData[i].timestamp);
        const x = scaleAndTranslateX(t.getTime());
        context.beginPath();
        context.moveTo(x, scaleAndTranslateY(minTemp));
        context.lineTo(x, scaleAndTranslateY(minTemp) + tickLength);
        context.stroke();
        hourText = t.getHours();
        hourWidth = context.measureText(hourText).width;
        context.fillText(hourText, x - (hourWidth / 2), scaleAndTranslateY(minTemp) + tickLength + 15);
    }

    // Draw the hourly temperature data ticks with the min and max temperatures
    temperatureSteps = Math.ceil(maxTemp - minTemp);

    for (let i = 0; i <= temperatureSteps; i++) {
        // Set the colour of the grid to black
        context.strokeStyle = '#222';
        const y = scaleAndTranslateY(minTemp + i);
        context.beginPath();
        context.moveTo(scaleAndTranslateX(minTime), y);
        context.lineTo(scaleAndTranslateX(minTime) - tickLength, y);
        context.stroke();

        // Set the colour of the grid to grey and draw a thin line at the temperature tick
        context.strokeStyle = '#ddd';
        context.beginPath();
        context.moveTo(scaleAndTranslateX(minTime), y);
        context.lineTo(scaleAndTranslateX(maxTime), y);
        context.stroke();


        tempText = minTemp + i;
        tempHeight = context.measureText(tempText).actualBoundingBoxAscent - context.measureText(tempText).actualBoundingBoxDescent;
        context.fillText(tempText, scaleAndTranslateX(minTime) - tickLength - 15, y + (tempHeight / 2));
    }
}

function drawTemperatureData(context, minHeight, maxHeight) {
    // Create a path for the temperature data to check if the mouse is over the line
    const path = new Path2D();

    // Draw the temperature data
    path.moveTo(scaleAndTranslateX(new Date(hourlyTempData[0].timestamp).getTime()), scaleAndTranslateY(hourlyTempData[0].temp));
    for (let i = 1; i < hourlyTempData.length; i++) {
        // Draw the temperature data
        path.lineTo(scaleAndTranslateX(new Date(hourlyTempData[i].timestamp).getTime()), scaleAndTranslateY(hourlyTempData[i].temp));
    }    
    // Set the line width for the temperature data
    context.lineWidth = 1.5;

    // Set the colour of the temperature data to red
    context.strokeStyle = '#ff0000';

    // Draw the temperature data
    context.stroke(path);

    let canvas = document.getElementById('canvas-device1');

    canvas.addEventListener('mousemove', function (event) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;

        // Work out the intercept of the path with a vertical line at x
        for (let y = minHeight; y < maxHeight; y++) {
            if (context.isPointInStroke(path, x, y)) {
                // Populate the temperature and humidity values into the width and height fields
                // Convert the x and y values back to the original values
                const time = (x - xTrans) / xScale;
                const temp = (y - yTrans) / yScale;
                document.getElementById('width').innerText = new Date(time).toLocaleString([], { weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' });
                document.getElementById('height').innerText = temp.toFixed(1) + '°C';
                break;
            }
        }
    });

    canvas.addEventListener('mouseleave', function (_) {
        // Clear the width and height fields
        document.getElementById('width').innerText = '';
        document.getElementById('height').innerText = '';
    });
}
