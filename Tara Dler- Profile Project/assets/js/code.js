function show(){
    var t1=document.getElementById("text").value;

    if(t1=='good'|| t1=='Good'){
    document.getElementById("text1").innerHTML="Thank you, now read the other catagories";
}
else if(t1=='bad'|| t1=='Bad')
document.getElementById("text1").innerHTML="Sorry,  you can read other catagories";

else
document.getElementById("text1").innerHTML="Please enter only good or bad";
}