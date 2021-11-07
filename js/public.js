$(document).ready(function() {
    


    //shgft angiz box efect
    var j=0;
    var shgftef=setInterval(()=>{
        $(".shr").eq(j).siblings().removeClass("border-shgft");
        $(".shr").eq(j).addClass("border-shgft");
        $("#sgftimg").attr("src",$(".shr").eq(j).children("img").attr("src"));
        $("#shftdesc").text($(".shr").eq(j).children("p").text());
        j++;
        if(j>4) {
            j = 0;
        }
    },3000);



    $(".plusme").click(function(){
        let num=Number($(this).siblings("input").val());
        $(this).siblings("input").val(num+1);
    });

    $(".minme").click(function(){
        let num=Number($(this).siblings("input").val());
        if(num<=1){
            $(this).siblings("input").val(0);
        }else{
        $(this).siblings("input").val(num-1);
         }
    });




    $("#accgh-ch").click(function(){
        if(document.getElementById("accgh-ch").checked==true){
            $("#btnozviat").removeClass("disabled");
        }else {
            $("#btnozviat").addClass("disabled");
        }
    });




    /*--------------------------category efect sub menu-------------------------------*/
    $(".cutom-parent-li").click(function(){
        $(this).children("ul").slideToggle(200);
        $(this).siblings("li").children("ul").slideUp(100);
    });
    //end category sub menu


    $(".mrun").click(function(){
        $("#sgftimg").attr("src",$(this).children("img").attr("src"));
        $("#shftdesc").html($(this).children("p").text());
        $(this).siblings().removeClass("border-shgft");
        $(this).addClass("border-shgft");
    });


    $(window).scroll(function(){
        if($(window).scrollTop()>5){
            $("#navbar").css("background-color","#ff0044cc");
        }
        else {
             $("#navbar").css("background-color","#ff0044");
        }
    });





});