
const getWidth = function ()  {
    let width = $(".banner").width();
    console.log(width);
    numLights = Math.floor(width / 30);
    console.log(numLights);
    let lightId = 1;
    $(".banner").empty();
    for(let i = 0; i < numLights; i++) {
        $(".banner").append(`<div class="light" id=light${lightId}></div>`);
        lightId++;
        if(lightId == 6) lightId = 1;
    }
}
let op = 100;
const flash = () => {
    if(op === 100) {
        op = 50;
    } else {
        op = 100;
    }
    $(".light").css("opacity", `${op}%` );
}

setInterval(flash, 500);
window.onresize = getWidth;
