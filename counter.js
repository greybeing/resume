window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});


const funcApi = 'https://countfunc.azurewebsites.net/api/id/1';


const getVisitCount = () => {
    let count = 0;
    fetch(funcApi)
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
