"use strict";

function popup(num, name) {
	

	document.getElementById("popup").style.visibility= "visible";
	document.getElementById("amount").innerHTML = num
	document.getElementById("desk").innerHTML = name
	document.getElementById("subtotal").innerHTML = "Subtotal: " + num;
	

}

function exit() {
	document.getElementById("popup").style.visibility= "hidden";
}




function subtotal() {
   	let amount	= document.getElementById("quantity").value;
	   if (amount != "" && amount < 1 || amount > 420 || amount % 1 != 0) {
		amount = 1;
		document.getElementById("quantity").value = 1;
		let money = document.getElementById("amount").innerHTML;
		money = money.slice(1,money.length);
		Number(money);
		document.getElementById("subtotal").innerHTML = "Subtotal: R" + amount * money + ".00";
	   } else if (amount == "") {
		
	   }else {
		let money = document.getElementById("amount").innerHTML;
		money = money.slice(1,money.length);
		Number(money);
		document.getElementById("subtotal").innerHTML = "Subtotal: R" + amount * money + ".00";
	}		   
  }



function checkout() {
	window.location.href="Checkout.html";
	// console.log(34567)

  }


function thanks(){
	window.location.href="Thanks.html";
}


function message() {
	event.preventDefault();
	document.getElementById("messagebox").style.visibility= "visible";
	document.getElementById("shop_now").style.display = "block";;
}


document.getElementById("close").onclick = function() {close()};

function close(){
	document.getElementById("messagebox").style.visibility= "hidden";
	document.getElementById("shop_now").style.display = "none";
	// console.log(34567);
}


// console.log()





