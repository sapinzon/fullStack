function Calculadora(){
	var dg=this;
	var n1,n2;
   (function(){
   	 dg.n1=parseInt(document.getElementById('num1').value)
   	 dg.n2=parseInt(document.getElementById('num2').value);
   })();
   var sumando= function(){
	 var result= dg.n1+dg.n2;
	 console.log("Suma "+result);
	 return result;
	}
	var restando= function(){
	 var result= dg.n1-dg.n2;
	 console.log("Resta "+result);
	 return result;
	}
	var multi= function(){
	 var result= dg.n1*dg.n2;
	 console.log("Producto "+result);
	 return result;
	}
   dg.sumando=sumando;
   dg.restando= restando;
   dg.multi= multi;
   dg.toString=function(){
   	 return "datos capturados: \nNúmero 1: "+dg.n1+ "\nNúmero 2: "+dg.n2;
   }
}
function principal(boton){
var objC= new Calculadora();
if (boton.textContent=="+") {
	alert(objC.toString()+ "\nSuma: "+ objC.sumando());
}
else if (boton.textContent=="-") {
	alert(objC.toString()+ "\nResta: "+ objC.restando());
}
else if (boton.textContent=="*") {
	alert(objC.toString()+ "\nProducto: "+ objC.multi());
}
}
