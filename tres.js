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
	var vacunaCaliente;
	var temperaturaMasAlta;
	var primerIngreso;
	var personaCaliente;
	var mujeresSputnik;
	var noBinarioVacuna;
	var astraCaliente;
	var totalHombresFrios;
	var edadHombresFrios;
	var promedioEdadHombresFrios;


	comenzar=prompt("Desea comenzar el ingreso de datos? y (si) o n (no)");
	primerIngreso=true;
	mujeresSputnik=0;
	noBinarioVacuna=0;
	astraCaliente=0;
	totalHombresFrios=0;
	edadHombresFrios=0;

	while(comenzar=="y")
	{
		var nombreIngresado;
		var edadIngresada;
		var generoIngresado;
		var vacunaIngresada;
		var temperaturaCorporal;


		nombreIngresado=prompt("Ingrese el nombre");

		edadIngresada=prompt("Ingrese la edad");
		edadIngresada=parseInt(edadIngresada);

		generoIngresado=prompt("Ingrese su genero f (femenino), m (masculino) o nb (no binario)");

		while(generoIngresado!="f"&&generoIngresado!="m"&&generoIngresado!="nb")
		{
			generoIngresado=prompt("Error, dato ingresado inválido. Vuelva a ingresarlo");
		}

		vacunaIngresada=prompt("Ingrese la vacuna (SputnikV, AstraZeneca, Otra");

		while(vacunaIngresada!="SputnikV"&&vacunaIngresada!="AstraZeneca"&&vacunaIngresada!="Otra")
		{
			vacunaIngresada=prompt("Error, dato ingresado inválido. Vuelva a ingresarlo");
		}

		temperaturaCorporal=prompt("Ingrese la temperatura corporal (durante la primera noche)");
		temperaturaCorporal=parseInt(temperaturaCorporal);

		if(temperaturaCorporal>temperaturaMasAlta||primerIngreso)
		{
			temperaturaMasAlta=temperaturaCorporal;
			vacunaCaliente=vacunaIngresada;
			personaCaliente=nombreIngresado;
			primerIngreso=false;
		}

		switch(generoIngresado)
		{
			case "f":
				if(vacunaIngresada=="SputnikV")
				{
					mujeresSputnik=mujeresSputnik+1;
				}
				break;
			case "nb":
				if(vacunaIngresada=="Otra"||vacunaIngresada=="AstraZeneca")
				{
					noBinarioVacuna=noBinarioVacuna+1;
				}
				break;
			case "m":
				if(vacunaIngresada=="SputnikV"&&temperaturaCorporal<38)
				{
					totalHombresFrios=totalHombresFrios+1;
					edadHombresFrios=edadHombresFrios+edadIngresada;
				}
		}

		if(vacunaIngresada=="AstraZeneca"&&temperaturaCorporal>38)
		{
			astraCaliente=astraCaliente+1;
		}

		comenzar=prompt("Desea ingresar otro dato? y (si) o n (no)");

	}

	promedioEdadHombresFrios=edadHombresFrios/totalHombresFrios;

	alert("El nombre de la persona con mayor temperatura es " + personaCaliente 
	+ " y la vacuna que se dio es la " + vacunaCaliente);

	alert("La cantidad de mujeres que recibieron la vacuna SputnikV son " + mujeresSputnik);

	alert("La cantidad de persona con género no binario que recibieron la vacuna AstraZeneca u otra son " + 
	noBinarioVacuna);

	alert("La cantidad de personas que se aplicaron la vacuna AstraZeneca y presentaron una temperatura mayor a 38 es " + 
	astraCaliente);

	alert("El promedio de edad de los hombres que se aplicaron la Sputnik y no presentaron fiebre es de " +
	promedioEdadHombresFrios + " años");
}

