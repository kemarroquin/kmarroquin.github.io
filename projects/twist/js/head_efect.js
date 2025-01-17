function funcppal(){
	window.addEventListener("scroll",scrollefect);
	function scrollefect(){
		var papu =  window.pageYOffset;
		if (papu > 130){
			document.getElementById("cont_menu").style.background="#fff";
			document.getElementById("cont_menu").style.top="0px";
			document.getElementById("img_menu").style.opacity="0";
			document.getElementById("img_menu").style.zIndex="2";
			document.getElementById("p_menu").style.opacity="1";
			document.getElementById("p_menu").style.zIndex="3";
			document.getElementById("img_menu_loq").style.opacity="1";
			document.getElementById("img_menu_loq").style.zIndex="3";
			document.getElementById("img_menu_loq").style.display="block";
		}else{
			document.getElementById("cont_menu").style.background="transparent";
			document.getElementById("cont_menu").style.top="75px";
			document.getElementById("img_menu").style.opacity="1";
			document.getElementById("img_menu").style.zIndex="3";
			document.getElementById("p_menu").style.opacity="0";
			document.getElementById("p_menu").style.zIndex="2";
			document.getElementById("img_menu_loq").style.opacity="0";
			document.getElementById("img_menu_loq").style.display="none";
		}
	}
	document.getElementById("enviar").addEventListener("click", validar)
	function validar() {
		var nombre, apellido, correo, telefono, prefijo, asunto, mensaje, expEM, expPRE1, expPRE2;

		nombre = document.getElementById("nombre").value;
		apellido = document.getElementById("apellido").value;
		correo = document.getElementById("correo").value;
		telefono = document.getElementById("telefono").value;
		prefijo = document.getElementById("prefijo").value;
		asunto = document.getElementById("asunto").selectedIndex;
		mensaje = document.getElementById("mensaje").value;
		expEM = /\w+@\w+\.+[a-z]/;
		expPRE1 = /^\+\d{1,3}$/;
		expPRE2 = /^\+\d{1}-\d{2,3}$/;

		/*---------------------------------GENERAL----------------------------------------*/
		if (nombre === "" || apellido === "" || correo === "" || telefono === "" || prefijo === "" || asunto == null || asunto == 0 || mensaje === "") {
			document.getElementById("error-n1").style.display = "block";
			document.getElementById("error-a1").style.display = "block";
			document.getElementById("error-c1").style.display = "block";
			document.getElementById("error-t1").style.display = "block";
			document.getElementById("error-p1").style.display = "block";
			document.getElementById("error-as1").style.display = "block";
			document.getElementById("error-tt1").style.display = "block";
		}else{
			document.getElementById("error-n1").style.display = "none";
			document.getElementById("error-a1").style.display = "none";
			document.getElementById("error-c1").style.display = "none";
			document.getElementById("error-t1").style.display = "none";
			document.getElementById("error-p1").style.display = "none";
			document.getElementById("error-as1").style.display = "none";
			document.getElementById("error-tt1").style.display = "none";
		}
		/*---------------------------------GENERAL----------------------------------------*/

		/*---------------------------------NOMBRE----------------------------------------*/
		if (nombre === "") {
			document.getElementById("nombre").focus();
			document.getElementById("error-n1").style.display = "block";
			return false;
		}else{
			document.getElementById("error-n1").style.display = "none";
		}
		/*---------------------------------NOMBRE----------------------------------------*/

		/*---------------------------------APELLIDO----------------------------------------*/
		if (apellido === "") {
			document.getElementById("apellido").focus();
			document.getElementById("error-a1").style.display = "block";
			return false;
		}else{
			document.getElementById("error-a1").style.display = "none";
		}
		/*---------------------------------APELLIDO----------------------------------------*/

		/*---------------------------------CORREO----------------------------------------*/
		if (correo === "") {
			document.getElementById("correo").focus();
			document.getElementById("error-c1").style.display = "block";
			return false;
		}else{
			document.getElementById("error-c1").style.display = "none";
		}
		if (!expEM.test(correo)) {
			document.getElementById("correo").focus();
			document.getElementById("error-c2").style.display = "block";
			return false;
		}else{
			document.getElementById("error-c2").style.display = "none";
		}
		/*---------------------------------CORREO----------------------------------------*/

		/*---------------------------------PREFIJO----------------------------------------*/
		if (prefijo === "") {
			document.getElementById("prefijo").focus();
			document.getElementById("error-p1").style.display = "block";
			return false;
		}else{
			document.getElementById("error-p1").style.display = "none";
		}

		if (!expPRE1.test(prefijo) && !expPRE2.test(prefijo)) {
			document.getElementById("prefijo").focus();
			document.getElementById("error-p2").style.display = "block";
			return false;
		}else{
			document.getElementById("error-p2").style.display = "none";
		}
		/*---------------------------------PREFIJO----------------------------------------*/

		/*---------------------------------TELEFONO----------------------------------------*/
		if (telefono === "") {
			document.getElementById("telefono").focus();
			document.getElementById("error-t1").style.display = "block";
			return false;
		}else{
			document.getElementById("error-t1").style.display = "none";
		}
		if (isNaN(telefono)) {
			document.getElementById("telefono").focus();
			document.getElementById("error-t2").style.display = "block";
			return false;
		}else{
			document.getElementById("error-t2").style.display = "none";
		}
		if (telefono.length>16 || telefono.length<8){
			document.getElementById("telefono").focus();
			document.getElementById("error-t3").style.display = "block";
			return false;
		}else{
			document.getElementById("error-t3").style.display = "none";
		}
		/*---------------------------------TELEFONO----------------------------------------*/

		/*---------------------------------ASUNTO----------------------------------------*/
		if (asunto == null || asunto == 0) {
			document.getElementById("asunto").focus();
			document.getElementById("error-as1").style.display = "block";
			return false;
		}else{
			document.getElementById("error-as1").style.display = "none";
		}
		/*---------------------------------ASUNTO----------------------------------------*/

		/*---------------------------------MENSAJE----------------------------------------*/
		if (mensaje === "") {
			document.getElementById("mensaje").focus();
			document.getElementById("error-tt1").style.display = "block";
			return false;
		}else{
			document.getElementById("error-tt1").style.display = "none";
		}
		/*---------------------------------MENSAJE----------------------------------------*/
	}

}

window.onload = funcppal();