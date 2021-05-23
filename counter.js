window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});


const localApi = 'https://resumecountfunc.azurewebsites.net';


const getVisitCount = () => {
    let count = 30;
    fetch(localApi)
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById('counter').innerText = count;
    }).catch(function(error) {
        console.log(error);
      });
    return count;
}
