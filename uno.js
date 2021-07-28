/*
AUTOR:Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com

Ejercicio 01

   Nos dedicamos a la venta exclusiva de Discos rígidos.
   Debemos realizar la carga de 5(cinco) productos, de cada uno debo obtener los 
   siguientes datos:
   Tipo: (validar "HDD", "SSD" o "SSDM2")
   Precio: (validar entre 5000 y 18000),
   Cantidad de unidades (no puede ser 0 o negativo y no debe superar las 50 Unidades).
   Marca: (validar “Seagate”, “Western Digital”, “Kingston”)
   Capacidad: (validar 250Gb, 500Gb, 1Tb, 2Tb)

   Se debe Informar al usuario lo siguiente:
   a) Del más barato de los SSD, la cantidad de unidades y marca.
   b) Del tipo HDD, el de mayor precio, capacidad de almacenamiento y cantidad de unidades
      disponibles. 
   c) Cuántas unidades de HDD hay en total.*/


function mostrar()
{
   var primerSsd;
   var precioDiscoBarato;
   var marcaDiscoBarato;
   var cantidadDiscoBarato;

   primerSsd=true;

	for(i=0;i<5;i=i+1)
   {
      var tipoProducto;
      var precioProducto;
      var cantidadProducto;
      var marcaProducto;
      var capacidadProducto;

      tipoProducto=prompt("Ingrese el tipo de disco (HDD, SSD o SSDM2)");

      while(tipoProducto!="HDD"&&tipoProducto!="SSD"&&tipoProducto!="SSDM2")
      {
         tipoProducto=prompt("Error, dato ingresado inválido");
      }

      precioProducto=prompt("Ingrese el precio del disco");
      precioProducto=parseInt(precioProducto);

      while(precioProducto<5000||precioProducto>18000)
      {
         precioProducto=prompt("Error, precio fuera de rango, vuelva a ingresarlo");
         precioProducto=parseInt(precioProducto);
      }

      cantidadProducto=prompt("Ingrese la cantidad de discos");
      cantidadProducto=parseInt(cantidadProducto);

      while(cantidadProducto<1||cantidadProducto>50)
      {
         cantidadProducto=prompt("Error, cantidad fuera de rango. Vuelva a ingresarla");
         cantidadProducto=parseInt(cantidadProducto);
      }

      marcaProducto=prompt("Ingrese la marca del producto (Seagate, Western Digital o Kingston)");

      while(marcaProducto!="Seagate"&&marcaProducto!="Western Digital"&&marcaProducto!="Kingston")
      {
         marcaProducto=prompt("Error, dato ingresado inválido. Vuelva a ingresarlo");
      }

      capacidadProducto=prompt("Ingrese la capacidad del disco (250Gb, 500Gb, 1Tb o 2Tb)");

      while(capacidadProducto!="250Gb"&&capacidadProducto!="500Gb"&&capacidadProducto!="1Tb"&&capacidadProducto!="2Tb")
      {
         capacidadProducto=prompt("Error, dato ingresado inválido. Vuelva a ingresarlo");
      }

      if(tipoProducto=="SSD")
      {
         if(precioProducto<precioDiscoBarato||primerSsd)
         {
            precioDiscoBarato=precioProducto;
            marcaDiscoBarato=marcaProducto;
            cantidadDiscoBarato=cantidadProducto;
            primerSsd=false;
         }
      }

   }

   alert("El disco SSD más barato es de la marca " + marcaDiscoBarato + " y se compraron " + cantidadDiscoBarato + " unidades");
}
