let nombresUsuario=document.getElementById("Nombre")
let CorreoUsuario=document.getElementById("Correo")
let TelefonoUsuario=document.getElementById("Telefono")
let botonEnvio=document.getElementById("botonFormulario")


//vamos a escuchar el clic en el boton
botonEnvio.addEventListener("click", function(evento){
    evento.preventDefault()
    let Nombres=nombresUsuario.value
    let Correo=CorreoUsuario.value
    let Telefono=TelefonoUsuario.value

    let errores=[]

    if(!Nombres){
        errores.push("error en el nombre")
        nombresUsuario.classList.add("is-invalid")
    }
    if(!Correo){
        errores.push("error en el correo")
        CorreoUsuario.classList.add("is-invalid")
    }
    if(!Telefono){
        errores.push("error en el telefono")
        TelefonoUsuario.classList.add("is-invalid")
    }

    if(errores.length>0){

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })

    }else{

        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )

        //PREGUNTANDO SI TENGO DATOS EN MEMORIA
        let datosMemoria=JSON.parse(localStorage.getItem("datosMemoria"))
        let reservas
        if(datosMemoria==null){
            reservas =[]
        }else{
            reservas=datosMemoria
        }
        let reserva={
            Nombres,
            Correo,
            Telefono
        }
        reservas.push(reserva)
        localStorage.setItem("datosMemoria",JSON.stringify(reservas))

    
    }
    
            
})