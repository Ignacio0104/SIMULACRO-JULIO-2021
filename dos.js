/*
AUTOR: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com

Ejercicio 02 
  Realizar el algoritmo que permita ingresar los datos de una compra de productos alimenticios, 
  hasta que el cliente quiera. Por cada compra se ingresa:

  Tipo: (validar "Yerba", "Azúcar", "Café").
  Cantidad de bolsas. (más de cero).
  Precio por bolsa (más de cero).

  Si se compra más de 5 bolsas en total se obtiene un 10% de descuento sobre el total a pagar.
  Si se compra más de 10 bolsas en total se obtiene un 15% de descuento sobre el total a pagar.

  Se pide mostrar por pantalla:

  a)	El importe total a pagar bruto, sin descuento.
  b)	El importe total a pagar con descuento (solo si corresponde)
  c)	Informar el tipo con más cantidad de bolsas.
  d)	El tipo de la compra más barata. (sobre el Bruto sin descuento)
*/

function mostrar()
{
  var comenzar;
  var cantidadBolsas;
  var descuento;
  var precioFinal;
  var precioConDescuento;
  var cantidadYerba;
  var cantidadAzucar;
  var cantidadCafe;
  var tipoConMasCantidad;
  var primerProducto;
  var tipoMasBarato;
  var precioMasBarato;
  var precioCompra;


  comenzar=prompt("Desea iniciar la carga de productos? y (si) o n (no)");
  cantidadBolsas=0;
  descuento=1;
  precioFinal=0;
  cantidadYerba=0;
  cantidadAzucar=0;
  cantidadCafe=0;
  primerProducto=true;

  while(comenzar=="y")
  {
    var tipoProducto;
    var cantidadProducto;
    var precioProducto;

    tipoProducto=prompt("Ingrese el tipo de producto (Yerba, Azucar o Cafe)");

    while(tipoProducto!="Yerba"&&tipoProducto!="Azucar"&&tipoProducto!="Cafe")
    {
      tipoProducto=prompt("Error, dato ingresado inválido. Vuelva a ingresarlo");
    }

    cantidadProducto=prompt("Ingrese la cantidad de bolsas compradas");
    cantidadProducto=parseInt(cantidadProducto);

    while(cantidadProducto<1)
    {
      cantidadProducto=prompt("Error, la cantidad debe ser mayor a cero. Vuelva a ingresarla");
      cantidadProducto=parseInt(cantidadProducto);
    }

    precioProducto=prompt("Ingrese el precio por bolsa")
    precioProducto=parseInt(precioProducto);

    while(precioProducto<1)
    {
      precioProducto=prompt("Error, el precio debe ser mayor a cero. Vuelva a ingresarlo");
      precioProducto=parseInt(precioProducto);
    }

    switch(tipoProducto)
    {
      case "Yerba":
        cantidadYerba=cantidadYerba+cantidadProducto;
        break;
      case "Azucar":
        cantidadAzucar=cantidadAzucar+cantidadProducto;
        break;
      case "Cafe":
        cantidadCafe=cantidadCafe+cantidadProducto;
        break;
    }

    if(precioProducto<precioMasBarato||primerProducto)
    {
      precioMasBarato=precioProducto;
      tipoMasBarato=tipoProducto;
      primerProducto=false;
    }

    cantidadBolsas=cantidadBolsas+cantidadProducto;
    precioCompra=precioProducto*cantidadProducto;
    precioFinal=precioFinal+precioCompra;

    comenzar=prompt("Desea ingresar otro producto? y (si) o n (no)");
  }

  if(cantidadBolsas>10)
  {
    descuento=0.85;
  } else 
  {
    if(cantidadBolsas>5)
    {
      descuento=0.90;
    }
  }

  precioConDescuento=precioFinal*descuento;

  alert("El precio bruto de la compra es de $" + precioFinal);

  if(precioConDescuento<precioFinal)
  {
    alert("El precio final con descuento es de $ " + precioConDescuento);
  }

  if(cantidadCafe>cantidadAzucar&&cantidadCafe>cantidadYerba)
  {
    tipoConMasCantidad="Cafe";
  } else 
  {
    if(cantidadAzucar>cantidadYerba)
    {
      tipoConMasCantidad="Azucar";
    } else 
    {
      tipoConMasCantidad="Yerba";
    }
  }

  alert ("El tipo con mayor cantidad de bolsas es " + tipoConMasCantidad);

  alert ("El tipo de producto mas barato es " + tipoMasBarato);

}
