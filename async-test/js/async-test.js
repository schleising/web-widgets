document.addEventListener('DOMContentLoaded', () => {
    // Sleep for 1 second to simulate a delay
    // await new Promise(resolve => setTimeout(resolve, 1000));
    document.getElementById('text').innerText = '2';
    loadData();
    document.getElementById('text').innerText = '4';

});

async function loadData() {
    // Sleep for 1 second to simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    document.getElementById('text').innerText = '3';
    await new Promise(resolve => setTimeout(resolve, 1000));
}
