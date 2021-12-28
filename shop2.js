function henna_clicked(){
	document.form1.total.value ='25000';
	document.form1.quant.value = '1';
	calculateTotal();
	
}
function henna_calculation(){
	// var previous = document.form1.total.value;
	var quantity = document.form1.quant.value;
	var newprice = 25000 * parseInt(quantity);
	document.form1.total.value = newprice;
	calculateTotal(); 
}

function henna_doubleclicked() {
	var d=parseInt(document.form1.quant.value);
	
	document.form1.quant.value++;
if (d == 10){
document.form1.quant.value=1;
}
	henna_calculation();

}


function makeup_clicked(){
	document.form1.total2.value ='50000';
	document.form1.quant2.value = '1';
	calculateTotal();
	
}


function makeup_calculation(){
	// var previous = document.form1.total.value;
	var quantity = document.form1.quant2.value;
	var newprice = 50000 * parseInt(quantity);
	document.form1.total2.value = newprice;
	calculateTotal();
}


function calculateTotal(){
	var hennaCost = document.form1.total.value;
	var maekUpcost = document.form1.total2.value;
	if (hennaCost != '' && maekUpcost != ''){
		document.form1.sumtotal.value = parseInt(hennaCost) + parseInt(maekUpcost);
	}
}



function makeup_double_clicked() {
	var d=parseInt(document.form1.quant2.value);
	
	document.form1.quant2.value++;
if (d == 10){
document.form1.quant2.value=1;
}
makeup_calculation();

}

function purchaseClicked(){
	Tsum=Ttotal1+Ttotal2;
	var h=document.form1.sumtotal.value;
	if (h === ''){
		window.alert('Please select product');
	}
	else{
var tr =	window.prompt('Enter the amount you paid', 0);
	if(tr<Tsum){
		alert('Transaction failed, your money is not sufficient')
	}
	else{
		// alert('Transaction sucessfull');
	}

}
}