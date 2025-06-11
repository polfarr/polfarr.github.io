let numeroRand = Math.floor(Math.random()*100)+1;
	let contador = 0;
	
	function compara_numero (){
	let boton = document.getElementById("field-submit");
	let mi_numero_input = document.getElementById("campo-numero");
	let mi_numero = mi_numero_input.value;
	let resultado = document.getElementById("resultado");
	let submit_input = document.getElementById("field-submit");
	
	mi_numero_input.classList.remove("field-error");
	
	
	if (mi_numero == "") {
			mi_numero_input.classList.add("field-error");
			resultado.innerHTML = "<em class=\"error\">No has introducido ningun numero</em>";
			return;
		}
		else if (mi_numero < 1 || mi_numero > 100) {
			mi_numero_input.classList.add("field-error");
			resultado.innerHTML = "<em class=\"error\">Tu numero esta fuera del rango permitido</em>";
			return;
		}
		else {					
		contador++;
				if (contador > 10) {
				boton.disabled = true; 
				resultado.innerHTML = "<em class=\"error\">Ya has realizado el maximo de intentos posibles, el numero era "+numeroRand+"</em>";
				return;
				}
						if (mi_numero > numeroRand){
						resultado.innerHTML = "<em class=\"error\">El numero a adivinar es mas pequeño que "+mi_numero+"</em>";
						//resultado.style.color = "#ff0000"
						}
						else if (mi_numero < numeroRand){
						resultado.innerHTML = "<em class=\"error\">El numero a adivinar es mas grande que "+mi_numero+"</em>";
						//resultado.style.color = "#ff0000"
						}
						else {
						resultado.innerHTML = "<em class= \"you-win\">Felicidades has ganado, el numero era "+numeroRand+"!</em>";
						//resultado.style.color = "#00ff00"
						}
						mi_numero_input.value = "";
						mi_numero_input.focus();
						boton.value = "Adivina! ("+contador+")";
					}

}
