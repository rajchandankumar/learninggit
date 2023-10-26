const timeline = gsap.timeline();


gsap.from("#gh",{
    visibility:0,
    y:20,
    duration:2
}
)


timeline
.from("#hleft",{
    x:20,
    scale:1.2,
    duration:2
})


.from("#hcenter",{
    y:30,
    scale:1,
    duration:1

})

.from("#hright",{
    x:-20,
    scale:1.1,
    duration:2,
    repeat:-1,
    yoyo:"true"

})

gsap.from("#motive",{
    scale:1.2,
    duration:2
})





var btn = document.querySelector("#btn");
btn.addEventListener("mouseenter", function(){
    const vid = document.querySelector("#video");
    vid.style.visibility="visible";
})

btn.addEventListener("mouseleave",function(){
    const vid = document.querySelector("#video");
    vid.style.visibility="hidden";
})