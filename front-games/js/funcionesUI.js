///Registro de clientes

function traerInformacion(){
    $.ajax({
        url:"URLDEAPIDECADAUSUARIO/ords/admin/client/client",//Plantilla
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            imprimirRespuesta(respuesta.items);
        }

    });
}


function imprimirRespuesta(items){

    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].age+"</td>";
        myTable+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable);

}
function guardarInformacion(){
    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"URLDEAPIDECADAUSUARIO/ords/admin/client/client",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacion();
            alert("El registro ha sido guardado")
        }
    });
}


function editarInformacion(){
    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"URLDEAPIDECADAUSUARIO/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacion();
            alert("El registro ha sido actualizado")
        }
    });
}

function borrarElemento(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"URLDEAPIDECADAUSUARIO/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacion();
            alert("El registro ha sido eliminado")
        }
    });
}





//Creacion de juegos

function traerJuegos(){
    $.ajax({
        url:"URLDEAPIDECADAUSUARIO/ords/admin/games/games",//Plantilla
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            imprimirRespuesta1(respuesta.items);
        }

    });
}


function imprimirRespuesta1(items){

    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].developer+"</td>";
        myTable+="<td>"+items[i].minage+"</td>";
        myTable+="<td>"+items[i].category_id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td> <button onclick='borrarJuegos("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoJuegos").append(myTable);

}
function guardarJuegos(){
    let myData={
        id:$("#idjuego").val(),
        developer:$("#developer").val(),
        minage:$("#minage").val(),
        category_id:$("#category_id").val(),
        name:$("#namejuego").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"URLDEAPIDECADAUSUARIO/ords/admin/games/games",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoJuegos").empty();
            $("#id").val(),
            $("#developer").val(),
            $("#minage").val(),
            $("#category_id").val(),
            $("#name").val(),
            traerJuegos();
            alert("El registro ha sido guardado")
        }
    });
}


function editarJuegos(){
    let myData={
        id:$("#idjuego").val(),
        developer:$("#developer").val(),
        minage:$("#minage").val(),
        category_id:$("#category_id").val(),
        name:$("#namejuego").val(),

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"URLDEAPIDECADAUSUARIO/ords/admin/games/games",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoJuegos").empty();
            $("#id").val(),
            $("#developer").val(),
            $("#minage").val(),
            $("#category_id").val(),
            $("#name").val(),
            traerJuegos();
            alert("El registro ha sido actualizado")
        }
    });
}

function borrarJuegos(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"URLDEAPIDECADAUSUARIO/ords/admin/games/games",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoJuegos").empty();
            traerJuegos();
            alert("El registro ha sido eliminado")
        }
    });
}

// function soloLectura(){
//     $("#id").prop("readonly",false);
// }
//html:readonly ondblclick="soloLectura()"



//Registro de Mensajes

function traerMensajes(){
    $.ajax({
        url:"URLDEAPIDECADAUSUARIO/ords/admin/message/message",//Plantilla
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            imprimirRespuesta2(respuesta.items);
        }

    });
}


function imprimirRespuesta2(items){

    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].messagetext+"</td>";
        myTable+="<td> <button onclick='borrarMensajes("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoMensajes").append(myTable);

}
function guardarMensajes(){
    let myData={
        id:$("#idmensaje").val(),
        messagetext:$("#messagetext").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"URLDEAPIDECADAUSUARIO/ords/admin/message/message",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoMensajes").empty();
            $("#id").val(),
            $("#messagetext").val(),
            traerMensajes();
            alert("El registro ha sido guardado")
        }
    });
}


function editarMensajes(){
    let myData={
        id:$("#idmensaje").val(),
        messagetext:$("#messagetext").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"URLDEAPIDECADAUSUARIO/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoMensajes").empty();
            $("#id").val(),
            $("#messagetext").val(),
            traerMensajes();
            alert("El registro ha sido actualizado")
        }
    });
}

function borrarMensajes(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"URLDEAPIDECADAUSUARIO/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoMensajes").empty();
            traerMensajes();
            alert("El registro ha sido eliminado")
        }
    });
}