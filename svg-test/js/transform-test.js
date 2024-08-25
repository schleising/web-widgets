document.addEventListener('DOMContentLoaded', () => {
    // Get the svg element
    const svg = document.getElementById('chart-device1');

    // Set the background color of the svg to light blue
    svg.style.backgroundColor = 'lightblue';

    // Draw a red circle at the center of the svg
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setattr
    circle.setAttribute('cx', '0');
    circle.setAttribute('cy', '0');
    circle.setAttribute('fill', 'red');
    circle.setAttribute('r', 10);
    svg.appendChild(circle);

    // Translate the red circle to the mouse pointer location
    svg.addEventListener('mousemove', event => {
        // Get the x, y coordinates of the mouse pointer in the svg
        const cursorPt = new DOMPointReadOnly(event.clientX, event.clientY)
            .matrixTransform(svg
                .getScreenCTM()
                .inverse());

        // Get the x, y coordinates of the red circle
        const currentCirclePt = new DOMPointReadOnly(
            circle.cx.baseVal.value,
            circle.cy.baseVal.value
        );

        // Calculate the translation values from the mouse pointer to the red circle
        const translation = {
            x: cursorPt.x - currentCirclePt.x,
            y: cursorPt.y - currentCirclePt.y
        };

        // Convert the DOMMatrix to an SVGMatrix
        const domMatrix = new DOMMatrixReadOnly()
            .translate(translation.x, translation.y)
            .rotate(22.5)
            .scale(2, 1);

        // Apply the transformation matrix to the red circle
        circle.setAttribute('transform', domMatrix.toString());

        svg.addEventListener('mouseleave', () => {
            // Reset the transformation matrix to the identity matrix
            circle.setAttribute('transform', new DOMMatrixReadOnly().toString());
        });
    });

    window.addEventListener('resize', () => {
        // Get the width of the main-div
        const width = document.getElementById('main-div').offsetWidth;

        // Set the height of the svg to maintain a 16:9 aspect ratio
        const height = width * 9 / 16;

        // Set the width and height of the svg to the width and height of the main-div
        svg.setAttribute('width', width);
        svg.setAttribute('height', height);
    });

    // Call the resize event to set the initial width and height of the svg
    window.dispatchEvent(new Event('resize'));
});
