var yourScore=0;

$(".btn").click(function(){
  if($("input").val()===""){
    alert("Kindly give your name to Continue...");
  }
  else{
    $(this).attr("href","#q1");
  }
})

$(".ronaldo").one("click",function(){
  yourScore+=1;
  $(this).addClass("atag");
  $(".Messi").addClass("atag");
})

$(".Messi").one("click",function(){
  $(this).addClass("atag");
  $(".ronaldo").addClass("atag");
  $('.ronaldo').off('click');
})

$(".insta").one("click",function(){
  yourScore+=1;
  $(this).addClass("atag");
  $(".fb").addClass("atag");
})

$(".fb").one("click",function(){
  $(this).addClass("atag");
  $(".insta").addClass("atag");
  $('.insta').off('click');
})

$(".non-veg").one("click",function(){
  yourScore+=1;
  $(this).addClass("atag");
  $(".veg").addClass("atag");
})

$(".veg").one("click",function(){
  $(this).addClass("atag");
  $(".non-veg").addClass("atag");
  $('.non-veg').off('click');
})

$(".cycle").one("click",function(){
  yourScore+=1;
  $(this).addClass("atag");
  $(".swim").addClass("atag");
})

$(".swim").one("click",function(){
  $(this).addClass("atag");
  $(".cycle").addClass("atag");
  $('.cycle').off('click');
})


$(".bungee").one("click",function(){
  yourScore+=1;
  $(this).addClass("atag");
  $(".sky").addClass("atag");
})

$(".sky").one("click",function(){
  $(this).addClass("atag");
  $(".bungee").addClass("atag");
  $('.bungee').off('click');
})


$(".mountain").one("click",function(){
  yourScore+=1;
  $(this).addClass("atag");
  $(".beach").addClass("atag");
})

$(".beach").one("click",function(){
  $(this).addClass("atag");
  $(".mountain").addClass("atag");
  $('.mountain').off('click');
})

$(".home").one("click",function(){
  yourScore+=1;
  $(this).addClass("atag");
  $(".theatre").addClass("atag");
})

$(".theatre").one("click",function(){
  $(this).addClass("atag");
  $(".home").addClass("atag");
  $('.home').off('click');
})

$(".iron").one("click",function(){
  yourScore+=1;
  $(this).addClass("atag");
  $(".cap").addClass("atag");
})

$(".cap").one("click",function(){
  $(this).addClass("atag");
  $(".iron").addClass("atag");
  $('.iron').off('click');
})

$(".sj").one("click",function(){
  yourScore+=1;
  $(this).addClass("atag");
  $(".angelina").addClass("atag");
})


$(".angelina").one("click",function(){
  $(this).addClass("atag");
  $(".sj").addClass("atag");
  $('.sj').off('click');
})

$(".darj").one("click",function(){
  $(this).addClass("atag");
  $(".gangtok").addClass("atag");
  jsarray = [yourScore,$("input").val()];
sessionStorage.setItem("jsArray", JSON.stringify(jsarray));
})

$(".gangtok").one("click",function(){
  yourScore+=1;
  jsarray = [yourScore,$("input").val()];
sessionStorage.setItem("jsArray", JSON.stringify(jsarray));
$(this).addClass("atag");
$(".darj").addClass("atag");
})
