let count = 0;

function incrementCounter() {
    count++;
    document.getElementById('countDisplay').innerText = count;
}

function resetCounter() {
    count = 0;
    document.getElementById('countDisplay').innerText = count;
}
