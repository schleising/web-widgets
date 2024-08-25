// Create hourly test data for one day
// The data should be an array of objects containing:
// The name of the device
// The timestamp in timezone UTC in iso format, in one hour intervals
// The temperature in degrees Celsius between 15 and 25 degrees, smoothly changing, not random
// The humidity in percentage
// JS Doc for the hourlyTempData array
/**
 * @type {Array.<{device: string, timestamp: string, temp: number, humidity: number}>}
 * hourlyTempData
 * hourlyTempData is an array of objects containing hourly temperature and humidity data for a device
 * @property {string} device - The name of the device
 * @property {string} timestamp - The timestamp in timezone UTC in iso format, in one hour intervals
 * @property {number} temp - The temperature in degrees Celsius between 15 and 25 degrees, smoothly changing, not random
 * @property {number} humidity - The humidity in percentage
 * @example
 * 
 * hourlyTempData = [
 *    { device: 'device1', timestamp: '2024-08-11T00:00:00Z', temp: 1, humidity: 50 },
 *    { device: 'device1', timestamp: '2024-08-11T01:00:00Z', temp: 16, humidity: 51 },
 *    { device: 'device1', timestamp: '2024-08-11T02:00:00Z', temp: 17, humidity: 52 },
 *    { device: 'device1', timestamp: '2024-08-11T03:00:00Z', temp: 18, humidity: 53 }
 * ];
 */
const hourlyTempData = [
    { device: 'device1', timestamp: '2024-08-11T00:00:00Z', temp: 1, humidity: 50 },
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
    { device: 'device1', timestamp: '2024-08-11T23:00:00Z', temp: 18, humidity: 53 },

    { device: 'device2', timestamp: '2024-08-11T00:00:00Z', temp: 18, humidity: 50 },
    { device: 'device2', timestamp: '2024-08-11T01:00:00Z', temp: 17, humidity: 51 },
    { device: 'device2', timestamp: '2024-08-11T02:00:00Z', temp: 16, humidity: 52 },
    { device: 'device2', timestamp: '2024-08-11T03:00:00Z', temp: 15, humidity: 53 },
    { device: 'device2', timestamp: '2024-08-11T04:00:00Z', temp: 16, humidity: 54 },
    { device: 'device2', timestamp: '2024-08-11T05:00:00Z', temp: 17, humidity: 55 },
    { device: 'device2', timestamp: '2024-08-11T06:00:00Z', temp: 18, humidity: 56 },
    { device: 'device2', timestamp: '2024-08-11T07:00:00Z', temp: 19, humidity: 57 },
    { device: 'device2', timestamp: '2024-08-11T08:00:00Z', temp: 20, humidity: 58 },
    { device: 'device2', timestamp: '2024-08-11T09:00:00Z', temp: 21, humidity: 59 },
    { device: 'device2', timestamp: '2024-08-11T10:00:00Z', temp: 22, humidity: 60 },
    { device: 'device2', timestamp: '2024-08-11T11:00:00Z', temp: 23, humidity: 59 },
    { device: 'device2', timestamp: '2024-08-11T12:00:00Z', temp: 24, humidity: 58 },
    { device: 'device2', timestamp: '2024-08-11T13:00:00Z', temp: 24, humidity: 57 },
    { device: 'device2', timestamp: '2024-08-11T14:00:00Z', temp: 24, humidity: 56 },
    { device: 'device2', timestamp: '2024-08-11T15:00:00Z', temp: 23, humidity: 55 },
    { device: 'device2', timestamp: '2024-08-11T16:00:00Z', temp: 22, humidity: 54 },
    { device: 'device2', timestamp: '2024-08-11T17:00:00Z', temp: 21, humidity: 53 },
    { device: 'device2', timestamp: '2024-08-11T18:00:00Z', temp: 20, humidity: 52 },
    { device: 'device2', timestamp: '2024-08-11T19:00:00Z', temp: 19, humidity: 51 },
    { device: 'device2', timestamp: '2024-08-11T20:00:00Z', temp: 18, humidity: 50 },
    { device: 'device2', timestamp: '2024-08-11T21:00:00Z', temp: 17, humidity: 51 },
    { device: 'device2', timestamp: '2024-08-11T22:00:00Z', temp: 16, humidity: 52 },
    { device: 'device2', timestamp: '2024-08-11T23:00:00Z', temp: 15, humidity: 53 }
];

// Convert time since epoch from milliseconds to seconds
const timeScale = 1000;

document.addEventListener('DOMContentLoaded', () => {
    // Fetch the hourly data for the device as a map of device name to hourly data
    fetchHourlyData()
        .then(deviceData => {
            let localDeviceData = deviceData;

            // Create an identity matrix map for the devices
            let localDeviceMatrix = new Map();
            deviceData.forEach((_, device) => {
                localDeviceMatrix.set(device, new DOMMatrix());
            });

            // Iterate over the devices drawing the chart for each device
            window.addEventListener('resize', () => {
                document.querySelectorAll('.chart-svg').forEach(svg => {
                    // Iterate over the devices drawing the chart for each device
                    for (const [device, deviceData] of localDeviceData) {
                        // Draw the chart for the device
                        drawChart(device, deviceData);
                    }
                });    
            });    

            // Call the resize event to set the initial width and height of the svg
            window.dispatchEvent(new Event('resize'));
        });
});

/**
 * Fetch the hourly temperature and humidity data as a map of device name to hourly data
 * @returns {Map.<string, Array.<{device: string, timestamp: string, temp: number, humidity: number}>>} - The hourly temperature and humidity data for the device
 */
async function fetchHourlyData() {
    // Create a map of device name to hourly data
    const deviceData = new Map();

    // Iterate over the hourly temperature data
    for (const data of hourlyTempData) {
        // Get the device name
        const device = data.device;

        // Get the hourly data for the device
        let deviceHourlyData = deviceData.get(device);

        // If the hourly data is undefined, create a new array
        if (deviceHourlyData === undefined) {
            deviceHourlyData = [];
            deviceData.set(device, deviceHourlyData);
        }

        // Add the hourly data to the array
        deviceHourlyData.push(data);
    }

    // Return the device data as a promise
    return new Promise((resolve, _) => {
        resolve(deviceData);
    });
}

/**
 * Draw a line chart of the temperature and humidity data for a device
 * @param {string} device - The name of the device
 * @param {Array.<{device: string, timestamp: string, temp: number, humidity: number}>} deviceData - The hourly temperature and humidity data for a device
 */
function drawChart(device, deviceData) {
    const xBorder = 30;
    const yBorder = 50;
    try {
        // Get the svg element
        svgElement = document.getElementById('chart-' + device);

        //  Clear the svg element
        while (svgElement.firstChild) {
            svgElement.removeChild(svgElement.firstChild);
        }

        // Close the svg element and replace the original svg element with the cloned svg element
        const svgClone = svgElement.cloneNode(true);
        svgElement.parentNode.replaceChild(svgClone, svgElement);

        // Get the width of the main-div
        const width = document.getElementById('main-div').offsetWidth;

        // Set the height of the svg to maintain a 16:9 aspect ratio
        const height = width * 9 / 16;

        // Set the width and height of the svg to the width and height of the main-div
        svgClone.setAttribute('width', width);
        svgClone.setAttribute('height', height);

        // Set the background color of the svg to light blue
        svgClone.style.backgroundColor = 'lightblue';


        // Get the minimum and maximum temperature values
        const minTemp = Math.min(...deviceData.map(data => data.temp));
        const maxTemp = Math.max(...deviceData.map(data => data.temp));

        // Get the minimum and maximum timestamp values
        const minTimestamp = new Date(deviceData[0].timestamp).getTime() / timeScale;
        const maxTimestamp = new Date(deviceData[deviceData.length - 1].timestamp).getTime() / timeScale;

        // Calculate the translation values for the temperature data
        const tempTranslation = {
            x: -minTimestamp,
            y: -maxTemp
        };

        // Calculate the scale values for the temperature data
        const tempScale = {
            x: (svgClone.clientWidth - 2 * xBorder) / (maxTimestamp - minTimestamp),
            y: (svgClone.clientHeight - 2 * yBorder) / (maxTemp - minTemp)
        };

        // Create a tranlation for the borders
        const borderTranslation = {
            x: xBorder,
            y: yBorder
        };

        // Create the transfomation matrix for the temperature data to fit the svg
        const tempMatrix = new DOMMatrixReadOnly()
            .translate(borderTranslation.x, borderTranslation.y)
            .scale(tempScale.x, -tempScale.y)
            .translate(tempTranslation.x, tempTranslation.y);

        // Draw the axes
        const topLeft = new DOMPointReadOnly(minTimestamp, maxTemp).matrixTransform(tempMatrix);
        const bottomLeft = new DOMPointReadOnly(minTimestamp, minTemp).matrixTransform(tempMatrix);
        const bottomRight = new DOMPointReadOnly(maxTimestamp, minTemp).matrixTransform(tempMatrix);

        // Create a polyline element for the axes
        const axesPolyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
        axesPolyline.setAttribute('class', 'axes-polyline');
        axesPolyline.setAttribute('fill', 'none');
        axesPolyline.setAttribute('stroke', 'black');
        axesPolyline.setAttribute('stroke-width', 1);
        axesPolyline.setAttribute('points', `${topLeft.x},${topLeft.y} ${bottomLeft.x},${bottomLeft.y} ${bottomRight.x},${bottomRight.y}`);
        svgClone.appendChild(axesPolyline);

        // Create the x-axis label
        const xAxisLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        xAxisLabel.setAttribute('x', bottomRight.x);
        xAxisLabel.setAttribute('y', bottomRight.y + 40);
        xAxisLabel.setAttribute('text-anchor', 'end');
        xAxisLabel.setAttribute('font-size', 12);
        xAxisLabel.textContent = 'Time';
        svgClone.appendChild(xAxisLabel);

        // Create the y-axis label
        const yAxisLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        yAxisLabel.setAttribute('x', topLeft.x - 10);
        yAxisLabel.setAttribute('y', topLeft.y - 25);
        yAxisLabel.setAttribute('text-anchor', 'middle');
        yAxisLabel.setAttribute('font-size', 12);
        yAxisLabel.textContent = 'Temp';
        svgClone.appendChild(yAxisLabel);

        // Draw the y axis ticks
        for (let temp = minTemp; temp <= maxTemp; temp += 1) {
            const pt = new DOMPointReadOnly(minTimestamp, temp).matrixTransform(tempMatrix);

            // Create a polyline element for the y axis ticks
            const yAxisTick = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
            yAxisTick.setAttribute('class', 'y-axis-tick');
            yAxisTick.setAttribute('fill', 'none');
            yAxisTick.setAttribute('stroke', 'black');
            yAxisTick.setAttribute('stroke-width', 1);
            yAxisTick.setAttribute('points', `${pt.x - 5},${pt.y} ${pt.x},${pt.y}`);
            svgClone.appendChild(yAxisTick);

            // Create a text element for the y axis labels
            const yAxisLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            yAxisLabel.setAttribute('x', pt.x - 15);
            yAxisLabel.setAttribute('y', pt.y + 5);
            yAxisLabel.setAttribute('text-anchor', 'middle');
            yAxisLabel.setAttribute('font-size', 12);
            yAxisLabel.textContent = temp;
            svgClone.appendChild(yAxisLabel);
        }

        // Draw the x axis ticks
        for (let timestamp = minTimestamp; timestamp <= maxTimestamp; timestamp += 3600) {
            const pt = new DOMPointReadOnly(timestamp, minTemp).matrixTransform(tempMatrix);

            // Create a polyline element for the x axis ticks
            const xAxisTick = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
            xAxisTick.setAttribute('class', 'x-axis-tick');
            xAxisTick.setAttribute('fill', 'none');
            xAxisTick.setAttribute('stroke', 'black');
            xAxisTick.setAttribute('stroke-width', 1);
            xAxisTick.setAttribute('points', `${pt.x},${pt.y} ${pt.x},${pt.y + 5}`);
            svgClone.appendChild(xAxisTick);

            // Create a text element for the x axis labels
            const xAxisLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            xAxisLabel.setAttribute('x', pt.x);
            xAxisLabel.setAttribute('y', pt.y + 20);
            xAxisLabel.setAttribute('text-anchor', 'middle');
            xAxisLabel.setAttribute('font-size', 12);
            xAxisLabel.textContent = new Date(timestamp * timeScale).toLocaleTimeString([], { hour: '2-digit' });
            svgClone.appendChild(xAxisLabel);
        }

        // Transform the data to fit the svg
        const transformedData = deviceData.map(data => {
            const timestamp = new Date(data.timestamp).getTime() / timeScale;
            const temp = data.temp;
            const humidity = data.humidity;

            const transformedPt = new DOMPointReadOnly(timestamp, temp)
                .matrixTransform(tempMatrix);

            return {
                timestamp: transformedPt.x,
                temp: transformedPt.y,
                humidity: humidity
            };
        });

        // Create a polyline element for the temperature data
        const tempPolyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
        tempPolyline.setAttribute('class', 'temp-polyline');
        tempPolyline.setAttribute('id', 'temp-polyline-' + device);
        tempPolyline.setAttribute('fill', 'none');
        tempPolyline.setAttribute('stroke', 'red');
        tempPolyline.setAttribute('stroke-width', 1);
        tempPolyline.setAttribute('points', transformedData.map(data => `${data.timestamp},${data.temp}`).join(' '));
        svgClone.appendChild(tempPolyline);

        // Create the mouse move event listener for the svg
        addMouseMoveListener(svgClone, tempMatrix);
    } catch (e) {
        console.log(e);
        return;
    }
}

function addMouseMoveListener(svgElement, transformationMatrix) {
    // Add an event listener to the svg to display the temperature and humidity data
    svgElement.addEventListener('mousemove', event => {
        handleMouseMove(event, svgElement, transformationMatrix);
    });

    // Add touch event listeners to the svg
    svgElement.addEventListener('touchstart', event => {
        handleMouseMove(event.touches[0], svgElement, transformationMatrix);
        console.log('touchstart');
    }, { passive: true });



    svgElement.addEventListener('mouseleave', () => {
        // Clear all circles from the svg
        document.querySelectorAll('circle').forEach(circle => {
            circle.remove();
        });

        // Clear the line-x and line-y elements
        document.getElementById('line-x').innerText = '';
        document.getElementById('line-y').innerText = '';
    });
}

// Handle the mouse move event for the svg
function handleMouseMove(event, svgElement, transformationMatrix) {
    // Clear all circles from the svg
    document.querySelectorAll('circle').forEach(circle => {
        circle.remove();
    });

    // Get the x, y coordinates of the mouse pointer in the svg
    const cursorPt = new DOMPointReadOnly(event.clientX, event.clientY)
        .matrixTransform(svgElement
            .getScreenCTM()
            .inverse());

    // Get the closest point on the polyline to the mouse pointer in the x axis
    const polyline = svgElement.querySelector('.temp-polyline');

    // Iterate over the polyline to find the closest point to the mouse pointer in the x axis
    let closestPt = null;
    let closestDist = Number.MAX_VALUE;

    for (let i = 0; i < polyline.getTotalLength(); i++) {
        const pt = polyline.getPointAtLength(i);
        const dist = Math.abs(pt.x - cursorPt.x);

        if (dist < closestDist) {
            closestPt = pt;
            closestDist = dist;
        }
    }

    // Create a circle element for the closest point on the polyline
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', closestPt.x);
    circle.setAttribute('cy', closestPt.y);
    circle.setAttribute('r', 5);
    circle.setAttribute('fill', 'blue');
    svgElement.appendChild(circle);

    // Transform the closest point to the original data
    const originalPt = new DOMPointReadOnly(closestPt.x, closestPt.y)
        .matrixTransform(transformationMatrix.inverse());

    // Update the line-x and line-y elements to the closest point on the polyline
    document.getElementById('line-x').innerText = new Date(originalPt.x * timeScale).toLocaleString([], { weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' });
    document.getElementById('line-y').innerText = originalPt.y.toFixed(1);
}
