console.log ("Your index.js file is loaded correctly!");



const btnScrollToBottom = document.querySelector(".arrow-down");
btnScrollToBottom.addEventListener("click", function() {
    window.scrollTo(758, 758);

});

$(".background").ripples({
    resolution: 200,
    perturnance: 0.04,
});
