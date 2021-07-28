jsarray = JSON.parse(sessionStorage.getItem("jsArray"));
console.log(jsarray);

$(".chumma").text("Hey "+jsarray[1]);
$(".chumma1").text("Your Score is : "+jsarray[0]+" / 10");
