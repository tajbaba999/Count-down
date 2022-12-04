const enddate = "01 May 2023 12:00 PM"

document.getElementById("end-date").innerText = enddate;

const inputs = document.querySelectorAll("input")



function clock(){
    const end = new Date(enddate);
    const now =  new Date();
    // console.log(end);
    // console.log(now);
    const diff = (end - now) / 1000;
    // console.log(diff);
    // console.log(Math.floor(diff/ 3600 / 24) );
    if(diff < 0) return;
    inputs[0].value = Math.floor(diff/ 3600 / 24);
    //convert into hours
    inputs[1].value = Math.floor((diff/ 3600 ) % 24);
    // console.log(Math.floor(diff / 3600)% 24 );
    //convert into minutes
    console.log((diff / 60) % 60)
    inputs[2].value = Math.floor((diff / 60) % 60 )

    inputs[3].value = Math.floor(diff % 60 )

}

//intial call
clock()

/*
    1 day = 24 hrs
    1 hr = 60 Min
    1 min = 60 sec

*/

setInterval(() => {
    clock()
},1000
)