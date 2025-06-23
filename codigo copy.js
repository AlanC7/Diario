

const titulo=document.querySelector('#titulo')
const apunte=document.querySelector('#apunte')
const lista=document.querySelector('#lista')
const botonAgg=document.querySelector('#btn-agregar')
const botonEli=document.querySelector('#btn-eliminar')
const botonDelete=document.querySelector('.Eliminar')
const fecha=document.querySelector('#fecha')
const objeto=document.querySelector('#objeto')



function FechaSistema()
{
	var Dia;
	var dianum, mes, anio; 
	var ObtenerFecha=new Date();
	Dia=ObtenerFecha.getDay();
	dianum=ObtenerFecha.getDate();
	mes=ObtenerFecha.getMonth();
	anio=ObtenerFecha.getFullYear();
	var Dias=["Domingo","Lunes","martes","miercoles","Juesves", "Viernes","Sabado"]
	fecha.innerHTML= Dias[Dia] + ",   " + dianum +"/"+ mes+"/"+anio;


} 
setInterval(FechaSistema(),1000)

function AgregarTarea(t,a)
{
	const elementos=`<li id="objeto">
	<h4 class="Titulo-tarea">${t}</h4>
	<div class=" Contenedor-terea-agg  " >							
		<textarea class="lista contenidoAP" readonly>${a}</textarea>
		<button id="btn-eliminar" class="Eliminar">Eliminar</button>			
	</div>			
	</li>`		
					

	lista.insertAdjacentHTML("beforeend",elementos)
}


botonAgg.addEventListener('click',()=>
{
	//alert("el campo titulo o el apunte estan vacios")
	const t=titulo.value
	const a=apunte.value
	if (t && a )
	{
		AgregarTarea(t,a)
		titulo.value=""
		apunte.value=""		
	}
	else 
	{ 
		alert("el campo titulo o el apunte estan vacios")
	}
})

function EliminarNota(elemento)
{
	elemento.parentNode.parentNode.removeChild(elemento.parentNode)
} 

lista.addEventListener('click',function(event)
	{
		const elemento=event.target
		const borrar=elemento.parentNode
		console.log(event.target.tagName)
		if(elemento && event.target.tagName==='BUTTON')	
		{
			EliminarNota(borrar)
		}			
	})




document.getElementById("imagenInput").addEventListener("change", function(event) {
    var imagen = document.getElementById("imagenMostrada");
    var archivo = event.target.files[0];

    if (archivo) {
        imagen.src = URL.createObjectURL(archivo);
        imagen.style.display = "block";
    }
});

//boron forma para hacer clic 
/*botonEli.onclick=function(e)
{
		
}*/



