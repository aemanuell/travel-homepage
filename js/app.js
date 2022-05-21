var imageChildrenList = $(".slide__images").children();
var contentChildrenList = $(".slide__contents").children();

$(".btn--next").click(function(){
    var activeIndex = $(".slide__image").toArray().indexOf($(".slide__image.active")[0]);
    if ( activeIndex != imageChildrenList.length - 1){
        $(imageChildrenList[activeIndex + 1]).addClass("active");
        $(contentChildrenList[activeIndex + 1]).addClass("active");
        $(imageChildrenList[activeIndex]).removeClass("active");
        $(contentChildrenList[activeIndex]).removeClass("active");
    }
})

$(".btn--prev").click(function(){
    var activeIndex = $(".slide__image").toArray().indexOf($(".slide__image.active")[0]);
    if ( activeIndex != 0){
        $(imageChildrenList[activeIndex - 1]).addClass("active");
        $(contentChildrenList[activeIndex - 1]).addClass("active");
        $(imageChildrenList[activeIndex]).removeClass("active");
        $(contentChildrenList[activeIndex]).removeClass("active");
    }
})

// Hamburger function
$(".hamburger").click(function(){
    $(this).addClass("display");
    $(".navigation").addClass("visible z-index padding");
})

$(".navigation__close").click(function(){
    $(".hamburger").removeClass("display");
    $(".navigation").removeClass("visible z-index padding");
})