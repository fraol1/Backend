function refreshPage(){
    return refresh();
}

async function refresh() {
    const response = await fetch('http://localhost:3000/refresh', {
        method: 'GET', 
        headers: {
            'Content-type': 'application/json'
        },
    });

    const data = await response.json();
    console.log(data);

    document.getElementById('watchlist_list').innerHTML = '';
    for (let item of data['watchlist']){
        document.getElementById('watchlist_list').innerHTML += '<div class="list mb-3 overflow-hidden rounded-2 d-flex w-100" style="height: 200px;background: #333;"><div class="list-img h-100" style="width: 20%;">' + item.split('<button')[0].split('</div>')[0] + '</div></div>' + `<div class="list-description mx-2 p-2 w-50" style="background: rgb(46, 44, 44);font-size: 13px;">${item.split('<button')[0].split('</div>')[1]}<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam similique consectetur, aliquam accusantium esse nulla corrupti dolorem alias perferendis corporis sed quae, porro cum exercitationem. Voluptatem eos, facere dolor modi voluptatibus in ipsam quam dolorum assumenda consequuntur. Sed itaque quasi harum nostrum nesciunt dolore temporibus deserunt quam ullam sint atque sit, accusantium ducimus ex architecto. Reprehenderit error magni mollitia porro!</p></div><div class="list-audio p-3 d-flex flex-column justify-content-center" style="width: 10%;">
            <audio class=" my-3" controls>
                <source src="./audio/Demon_Slayer_OP_Full__Gurenge__by_LiSA(256k).mp3" type="audio/mp3">
            </audio>
        </div>`;    
    }
    
    

}