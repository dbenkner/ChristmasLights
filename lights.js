const getWidth = function ()  {
    let width = $(".banner").width();
    console.log(width);
    let numLights = Math.floor(width / 32);
    console.log(numLights);
    let lightId = 1;
    $(".banner").empty();
    for(let i = 0; i < numLights; i++) {
        $(".banner").append(`<div class="light light${lightId}"</div>`);
        lightId++;
        if(lightId === 7) lightId = 1;
    }
}

let op = 100;
let lightId = 1;
let lastLight = lightId;
const flash = () => {
    $(`.light${lastLight}`).css("opacity", `100%` );
    $(`.light${lightId}`).css("opacity", `25%` );
    lastLight = lightId;
    lightId ++;
    if(lightId === 7) {
        lightId = 1;
    }
}
var sound = new Howl({
    src: ['song.mp3']
});
$(document).ready(getWidth());
sound.play();
setInterval(flash, 500);
window.onresize = getWidth;
