$.getScript("js/functions.js");

$(document).ready(function () {
    traerMensajes();
});

function traerMensajes() {
    $.ajax({
        url: BASE_URL_DB + "/ords/admin/message/message",//Plantilla
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            imprimirTablaMensajes(respuesta.items);
        }

    });
}

function imprimirTablaMensajes(items) {

    let myTable = "<table class='table'>";
    myTable += "<thead>\
        <tr class='table-primary'>\
            <th scope='col'>#</th>\
            <th scope='col'>MENSAJE</th>\
            <th scope='col'>ACTION</th>\
        </tr>\
    </thead>\
    <tbody>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<th scope='row'>" + items[i].id + "</th>";
        myTable += "<td>" + items[i].messagetext + "</td>";
        myTable += "<td> <button onclick='borrarMensajes(" + items[i].id + ")' class='btn btn-danger'>Borrar</button></td>";
        myTable += "</tr>";
    }
    myTable += "</tbody>";
    myTable += "</table>";
    $("#resultadoMensajes").append(myTable);

}

function borrarMensajes(idElemento) {
    let myData = {
        id: idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: BASE_URL_DB + "/ords/admin/message/message",
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultadoMensajes").empty();
            traerMensajes();
            alert("El registro ha sido eliminado")
        }
    });
}

function guardarMensajes() {
    let myData = {
        id: $("#idmensaje").val(),
        messagetext: $("#messagetext").val(),
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: BASE_URL_DB + "/ords/admin/message/message",
        type: "POST",
        data: myData,
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultadoMensajes").empty();
            $("#id").val(),
                $("#messagetext").val(),
                traerMensajes();
            alert("El registro ha sido guardado")
        }
    });
}

function editarMensajes() {
    let myData = {
        id: $("#idmensaje").val(),
        messagetext: $("#messagetext").val(),
    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: BASE_URL_DB + "/ords/admin/message/message",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultadoMensajes").empty();
            $("#id").val(),
                $("#messagetext").val(),
                traerMensajes();
            alert("El registro ha sido actualizado")
        }
    });
}






