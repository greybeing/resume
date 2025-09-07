// counter function to fetch visitor count from API and display it in the HTML element with id 'counter'
async function fetchVisitorCount() {
    const response = await fetch('https://api.oluwagbenga.com/visitors/');
    const data = await response.json();
    document.getElementById('counter').innerText = data.count;
}

fetchVisitorCount();

