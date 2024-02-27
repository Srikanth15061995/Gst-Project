

function result(){
    alert("Get Result")
    var userName = document.getElementById("Name").value;
    var userEmail = document.getElementById("Email").value;
    var userphoneNo = document.getElementById("phoneno").value;
    var userLocation = document.getElementById("Location").value;

// personal section inputs

let chickenBurgerAmount = document.getElementById("ch-B").value;
let onionBurgerAmount = document.getElementById("veg-B").value;
let HickoryburgerAmount = document.getElementById("H-B").value;
let BBQBurgerAmount = document.getElementById("B-B").value;
let gst = document.getElementById("gst").value;




let menuitem =[ parseInt(chickenBurgerAmount), parseInt(onionBurgerAmount), parseInt(HickoryburgerAmount), parseInt(BBQBurgerAmount ), parseInt(gst)];
let sum=0;
for (let i=0; i < menuitem.length - 1; i++){
    sum = sum + menuitem[i];

}

let gstpersentage = gst;
gst = (sum * gst)/100;
let gsttotal = gst + sum;
const tip = 1000;
let totalAmount= tip+gsttotal;

document.getElementById("result").innerHTML =  "Personal Detail"+"<br> <br>" +
                                               "Name : &nbsp" +   userName + "<br>" +
                                                "Email : &nbsp" +  userEmail +"<br>"+
                                                "phone No :&nbsp " + userphoneNo + "<br>"+
                                                "Location : &nbsp " + userLocation + "<br> <br>"+
                                               "Menu <br><br>"+
                                               
                                               "Total Amount : "+ sum + "<br>" +
                                               "GST persentage &nbsp " + gstpersentage+"%"+ "&nbsp"+
                                               " GST Ammout : "+  gst+"<br>"+
                                               " Total : "+  gsttotal + "<br>"+
                                               " Tip amount is : " + tip + "<br>" + "Total Amount with Tip : " + totalAmount;

}


function navSlide(){
    const nav = document.querySelector(".navbar");
    const menu = document.querySelector(".nav-links");
    const burger = document.querySelector(".burger");


    burger.addEventListener("click", ()=>{
        menu.classList.toggle("active");

        document.querySelector("#line1").classList.toggle("line1")
        document.querySelector("#line2").classList.toggle("line2")
        document.querySelector("#line3").classList.toggle("line3")
    });
}


navSlide();






