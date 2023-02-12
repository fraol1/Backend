function addToWatchList(num){
    const added = document.getElementById(`${num}`).innerHTML;
    add(added);
    
}
async function add(data) {
    const response = await fetch('http://localhost:3000/add', {
        method: 'POST', 
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            first: data,
        }),
    });
}