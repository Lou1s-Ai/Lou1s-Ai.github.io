const svg = document.getElementById('mySvg');
const defs = svg.appendChild(document.createElementNS('http://www.w3.org/2000/svg', 'defs'));

function randomGradient() {
    const randomAngle = Math.random() * 360;
    const gradient = defs.appendChild(document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient'));
    gradient.setAttribute('id', 'randomGradient');
    gradient.setAttribute('gradientTransform', `rotate(${randomAngle})`);

    const colors = ['#DA22FF', '#F54EA2', '#FF7676', '#FFE47A', '#00F260'];
    for (let i = 0; i < colors.length; i++) {
        const stop = gradient.appendChild(document.createElementNS('http://www.w3.org/2000/svg', 'stop'));
        stop.setAttribute('offset', `${i * 100 / (colors.length - 1)}%`);
        stop.setAttribute('stop-color', colors[i]);
    }
    return gradient;
}

const rect = svg.appendChild(document.createElementNS('http://www.w3.org/2000/svg', 'path'));
rect.setAttribute('x', '0');
rect.setAttribute('y', '0');
rect.setAttribute('width', '200');
rect.setAttribute('height', '200');
rect.setAttribute('fill', `url(#${randomGradient().getAttribute('id')})`);