/*
AUTOR: Ignacio Smirlian
E-mail: ignaciosmirlian@gmail.com

Ejercicio -3
	Luego de la campaña de vacunación “COVID19” se realizó un censo sobre la población para 
	obtener distintos datos estadísticos:

	Se ingresará hasta que usuario decida:

	Nombre.
	Edad.
	Género: “F”, “M”, “NB”.
	Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
	Temperatura corporal (durante la primera noche).

	Se pide:  
	a) El nombre y vacuna de la persona con mayor temperatura.
	b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
	c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
	d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°.
	e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos)
	*/

function mostrar()
{
	var comenzar;

	comenzar=prompt("Desea comenzar el ingreso de datos? y (si) o n (no)")

	while(comenzar=="y")
	{
		var nombreIngresado;
		var edadIngresada;
		var generoIngresado;
		var vacunaIngresada;
		var temperaturaCorporal;


		nombreIngresado=prompt("Ingrese el nombre");
		edadIngresada=prompt("Ingrese la edad");
	}
}
