$(document).ready(function(){
    customSlider('.productSlides','horizontal','ease-in-out',true,false,false,true,true,false,true,true,5,1,376,true,10,'bx-wrapper',true);
    customSlider(".detailSlides",'horizontal','ease-in',true,false,'short',true,true,false,true,true,1,1,440,true,0,'sliderList',false);
    panelControl();
    btnTop();
    toggleUi('.listContainer aside ol li a');
    numberComponent();
    load();
    dataSrc();
    dataGe("[id^='range']");
    popUp();
    toggle();
    cardBg();
    checkout(".deliveryInfo [id$='Container']");
    log();
});
function customSlider(slideName,slideMode,slideEasing,slideVideo,slidePager,slidePagerType,slideControls,slideAuto,slideAutoControls,slideAutoStart,slideAutoHover,slideMaxSlides,slideMinSlides,slideSlideWidth,slideShrinkItems,slideSlideMargin,slideWrapperClass,sliderRandom){
    $(slideName).bxSlider({
        mode: slideMode,
        easing: slideEasing,
        video: slideVideo,
        pager: slidePager,
        pagerType: slidePagerType,
        controls: slideControls,
        auto: slideAuto,
        autoControls: slideAutoControls,
        autoStart: slideAutoStart,
        autoHover: slideAutoHover,
        maxSlides: slideMaxSlides,
        minSlides: slideMinSlides,
        slideWidth: slideSlideWidth,
        shrinkItems: slideShrinkItems,
        slideMargin: slideSlideMargin,
        wrapperClass: slideWrapperClass,
        randomStart: sliderRandom,
        touchEnabled: false,
    });
}
function popUp(){
    var currentPopup = null;
    var del = $('.customerCart > div:first-child ul li button')
    $('.openPop').click(function(){
        currentPopup = "#" + $(this).attr("data-popup");
        $(currentPopup).addClass("active");
    });
    $('.closePop').click(function(){
        var address = $("#addressPopup div #city option:selected").val();
        $('.openPop').text(address);
        $(currentPopup).removeClass("active");
    });
    $(del).click(function(){
        $(this).parent('.cartItem').fadeOut();
    });
}
function panelControl(){
    var currentPanel = null;
    $('.openBtn').click(function(){
        currentPanel = "#" + $(this).attr("data-panel");
        $(currentPanel).addClass("active");
    });
    $('.closeBtn').click(function(){
        $(currentPanel).removeClass("active");
    });
}
function btnTop(){
    $('.btnTop > img').hide();
    
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $('.btnTop > img').fadeIn();
        }else{
            $('.btnTop > img').fadeOut();
        }
    });
    $('.btnTop > img').click(function(){
        $('html').animate({
            scrollTop : 0
        }, 500);
        return false;
    });
}
function numberComponent(){
    var Y = 229;
    var plusprice = 0;
    var result = 0
    $('.numberComponent > input.countDown').click(function(){
        var count = $(this).parent('.numberComponent').children('span').text();
        var val = $(".customerCart > div:first-child ul .cartItem > #price").text();
        var num = Number(count);
        var minPrice = val.slice(1,5);
        if(minPrice.includes('.')){
            minPrice = val.slice(1,4);
        }else{
            minPrice = val.slice(1,5);
        }
        num--;
        if(num<=0){
            num=1;
        }
        result = (minPrice-Y)
        if(result <= 229){
            result = 229
        }
        $(this).parent('.numberComponent').children('span').text(num);
        $('#subTotal').text("$" + result + ".00");
        $('#total').text("$" + (result + 100) + ".00");
        $('#price').text("$" + result + ".00");
    });

    $('.numberComponent > input.countUp').click(function(){
        var count = $(this).parent('.numberComponent').children('span').text();
        var num = Number(count);
        
        num++;
        if(num>=99){
            num=99;
        }
        $(this).parent('.numberComponent').children('span').text(num);
        plusprice = (Y*num);
        $('#subTotal').text("$" + plusprice + ".00");
        $('#total').text("$" + (plusprice + 100) + ".00");
        $('#price').text("$" + plusprice + ".00");
        return plusprice
    });
}
function toggleUi(btn){
    $(btn).click(function(){
        $(this).toggleClass("active");
    });
}
function toggle(){
    var panel = null
    var currentToggle = null;
    $(".opentog").click(function(){
        $(this).toggleClass("active");
        currentToggle = "#" + $(this).attr("data-toggle");
        $(currentToggle).toggleClass("active");
    });
    $(".opentoge").click(function(){
        $(this).toggleClass("active");
        currentToggle = "#" + $(this).attr("data-toggle");
        $(currentToggle).toggleClass("active");
        if($("#spec").hasClass("active")){
            $(this).css({"background-image":"url('https://kangjeongdo.github.io/evolve/images/bul_remove.svg')"});
        }else{
            $(this).css({"background-image":"url('https://kangjeongdo.github.io/evolve/images/bul_add.svg')"});
        }
    });
    $('.opentogi').click(function(){
        currentToggle = "#" + $(this).attr("data-toggle");
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(currentToggle ).removeClass("active");
            $(this).css({"background-image":"url('https://kangjeongdo.github.io/evolve/images/bul_add.svg')"});
        } else {
            $(this).addClass("active");
            $(currentToggle ).addClass("active");
            $(this).css({"background-image":"url('https://kangjeongdo.github.io/evolve/images/bul_remove.svg')"});
        }
    });
    $('.deleteBtn').click(function(){
        panel = $("#cartpanel");
        $(this).closest('ul').fadeOut();
        if(panel != null){
            $(this).closest('ul').fadeIn();
        }
    });
}
function load(){
    var x = 12
    var allList = $(".allList ul li");
    var but = $('.more')
    $('.productList ul li').slice(0,x).show();
    $(allList).slice(0,x).show();
    but.click(function(){
        x = x + 62;
        console.log(x)
        $('.productList ul li').slice(0,x).slideDown();
        $(allList).slice(0,x).slideDown();
        if(x == 74){
            $(this).css({"display" : "none"});
        }
    });
}
function dataSrc(){
    $('.productList ul li a img').mouseover(function(){
        $(this).attr('src',$(this).attr('src').replace(".webp","_hover.webp"));
    });
    $('.productList ul li a img').mouseleave(function(){
        $(this).attr('src',$(this).attr('src').replace("_hover.webp",".webp"));
    });
    $('.allList ul li a img').mouseover(function(){
        $(this).attr('src',$(this).attr('src').replace(".webp","_hover.webp"));
    });
    $('.allList ul li a img').mouseleave(function(){
        $(this).attr('src',$(this).attr('src').replace("_hover.webp",".webp"));
    });
}
function dataGe(range){
    var minValue = $('#valueL');
    var maxValue = $('#valueR');
    var rangeFill = $("[class^='rangeFill']")
    $(range).change(function(){
        var minPrice = $("#rangeL").val();
        var maxPrice = $("#rangeR").val();
        if(minPrice && maxPrice == 100){
            var tempValue = maxPrice;
            maxPrice = minPrice;
            minPrice = tempValue;
        }
        var minPercentage = ((minPrice - 0) / 300) * 100;
        if(minPercentage == 0){
            minPercentage = 5
        }
        var maxPercentage = ((maxPrice - 0) / 300) * 100;
        $(rangeFill).css({"left": minPercentage + "%"});
        $(rangeFill).css({"width": maxPercentage - minPercentage + "%"});
        $(minValue).text('$' + minPrice);
        $(maxValue).text('$' + maxPrice);
     });
}
function cardBg(){
    $(".deliveryInfo #pContainer #page2 fieldset > div:first-child > input:first-of-type").keyup(function(){
        var cardNum = $(this).val().substring(0,1);
        var card = $(".deliveryInfo #pContainer #page2 fieldset");

        switch(cardNum){
            case "4" :
                card.css("background-image","url('https://kangjeongdo.github.io/evolve/images/pic_visacard.svg')");
                break;
            case "5" :
                card.css("background-image","url('https://kangjeongdo.github.io/evolve/images/pic_master.svg')");
                break;
            default:
                card.css("background-image","url('https://kangjeongdo.github.io/evolve/images/pic_american.svg')");
                break;
        }
    });
}
function checkout(panel){
    var currentPanel = null;
    var currentForm = null;

    $(".deliveryInfo [id$='Container'] input[type='submit']").click(function(){
        currentForm = "#" + $(this).closest("form").attr("id");
        currentPanel = "#" + $(this).attr("data-page");
        console.log(currentPanel);
        if (currentForm != null){
            $(currentForm).submit(function(e){
                e.preventDefault();
                $(panel).removeClass("active");
                $(currentPanel).addClass("active");
            });
        }
    });
    $(".deliveryInfo [id$='Container'] mark").click(function(){
        currentPanel = "#" + $(this).attr("data-page");
        $(panel).removeClass("active");
        $(currentPanel).addClass("active"); 
    });
}
function log(){
    $("#loginContainer > #sContainer p > .openStep").click(function(){
        var block = "#" + $(this).attr("data-step");

        $("#sContainer").removeClass("active");
        $(block).addClass("active");
    });

    $("#loginContainer > #lContainer p > .closeStep").click(function(){
        var block = "#" + $(this).attr("data-step");

        $("#lContainer").removeClass("active");
        $(block).addClass("active");
    });

    $("#loginContainer [id$='Container'] > div:first-of-type > .openEmail").click(function(){
        var block = "#" + $(this).attr("data-email");

        $(this).parent("div").removeClass("active");
        $(block).addClass("active");
    });

    $("#loginContainer > #lContainer > #leContainer .openStep").click(function(){
        var block = "#" + $(this).attr("data-step");

        $("#lContainer").removeClass("active");
        $(block).addClass("active");
    });

    $(".openBtn").click(function(){
        var block = "#" + $(this).attr("data-panel");

       if(block != "cartpaenl"){
        $("#loginContainer > #lContainer").removeClass("active");
        $("#loginContainer > #fContainer").removeClass("active");
        $("#loginContainer > [id$='Container'] > div:last-of-type").removeClass("active");
        $("#loginContainer > #sContainer").addClass("active");
        $("#loginContainer > [id$='Container'] > div:first-of-type").addClass("active");
       }
    });
}