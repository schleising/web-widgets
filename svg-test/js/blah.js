document.addEventListener('DOMContentLoaded', function () {
    const svg = document.getElementById('svg-device1');
    const polyline = svg.getElementById('polyline01');

    svg.addEventListener('mousemove', event => {
        // Remove any existing circle elements
        document.querySelectorAll('circle').forEach(circle => circle.remove());

        // Report the x, y coordinates of the nearest point on the y axis to the polyline
        const pt = svg.createSVGPoint();
        pt.x = event.clientX;
        pt.y = event.clientY;
        const cursorPt = pt.matrixTransform(svg.getScreenCTM().inverse());
        const pathLength = polyline.getTotalLength();
        let minDistance = Number.MAX_VALUE;
        let nearestPoint = null;
        for (let i = 0; i < pathLength; i++) {
            const pathPt = polyline.getPointAtLength(i);
            const distance = Math.abs(cursorPt.x - pathPt.x);
            if (distance < minDistance) {
                minDistance = distance;
                nearestPoint = pathPt;
            }
        }
        
        // Update the line-x and line-y elements to show the nearest point
        document.getElementById('line-x').innerText = nearestPoint.x.toFixed(0);
        document.getElementById('line-y').innerText = nearestPoint.y.toFixed(0);

        // Draw a dodgerblue circle at the nearest point on the y axis
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', nearestPoint.x);
        circle.setAttribute('cy', nearestPoint.y);
        // Make the circle 5 pixels in radius in screen coordinates, not in user coordinates
        const pt2 = pt.matrixTransform(svg.getScreenCTM().inverse());
        const pt3 = pt.matrixTransform(svg.getScreenCTM().inverse().translate(5, 0));
        const radius = Math.sqrt(Math.pow(pt3.x - pt2.x, 2) + Math.pow(pt3.y - pt2.y, 2));
        circle.setAttribute('r', radius);
        circle.setAttribute('fill', 'dodgerblue');
        circle.setAttribute("fill-opacity", 0.75);
        svg.appendChild(circle);

        // Find absolute the nearest point to the cursor
        const ptAbs = svg.createSVGPoint();
        ptAbs.x = event.clientX;
        ptAbs.y = event.clientY;
        const cursorPtAbs = ptAbs.matrixTransform(svg.getScreenCTM().inverse());
        const pathLengthAbs = polyline.getTotalLength();
        let minDistanceAbs = Number.MAX_VALUE;
        let nearestPointAbs = null;
        for (let i = 0; i < pathLengthAbs; i++) {
            const pathPtAbs = polyline.getPointAtLength(i);
            const distanceAbs = Math.sqrt(Math.pow(cursorPtAbs.x - pathPtAbs.x, 2) + Math.pow(cursorPtAbs.y - pathPtAbs.y, 2));
            if (distanceAbs < minDistanceAbs) {
                minDistanceAbs = distanceAbs;
                nearestPointAbs = pathPtAbs;
            }    
        }

        // Draw a red circle at the nearest point to the cursor
        const circleAbs = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circleAbs.setAttribute('cx', nearestPointAbs.x);
        circleAbs.setAttribute('cy', nearestPointAbs.y);
        // Make the circle 5 pixels in radius in screen coordinates, not in user coordinates
        const absPt2 = ptAbs.matrixTransform(svg.getScreenCTM().inverse());
        const absPt3 = ptAbs.matrixTransform(svg.getScreenCTM().inverse().translate(5, 0));
        const absRadius = Math.sqrt(Math.pow(absPt3.x - absPt2.x, 2) + Math.pow(absPt3.y - absPt2.y, 2));
        circleAbs.setAttribute('r', absRadius);
        circleAbs.setAttribute('fill', 'red');
        circleAbs.setAttribute("fill-opacity", 0.75);
        svg.appendChild(circleAbs);
    });

    // Add a resize event listener to the window
    window.addEventListener("resize", onResize);

    // Call the resize event to set the initial stroke width of the polyline
    onResize();
});

function onResize() {
    const svg = document.getElementById('svg-device1');
    const polyline = svg.getElementById('polyline01');

    // Set the stroke width of the polyline to 1 pixel in screen coordinates
    const pt = svg.createSVGPoint();
    pt.x = 0;
    pt.y = 0;
    const pt2 = pt.matrixTransform(svg.getScreenCTM().inverse());
    const pt3 = pt.matrixTransform(svg.getScreenCTM().inverse().translate(1, 0));
    const strokeWidth = Math.abs(pt3.x - pt2.x);
    polyline.setAttribute('stroke-width', strokeWidth);

    // Set the radius of the circles to 5 pixels in screen coordinates
    document.querySelectorAll('circle').forEach(circle => {
        const pt = svg.createSVGPoint();
        pt.x = circle.getAttribute('cx');
        pt.y = circle.getAttribute('cy');
        const pt2 = pt.matrixTransform(svg.getScreenCTM().inverse());
        const pt3 = pt.matrixTransform(svg.getScreenCTM().inverse().translate(5, 0));
        const radius = Math.sqrt(Math.pow(pt3.x - pt2.x, 2) + Math.pow(pt3.y - pt2.y, 2));
        circle.setAttribute('r', radius);
    });
}
