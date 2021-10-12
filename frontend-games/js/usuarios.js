$.getScript("js/functions.js");

$(document).ready(function () {
    traerInformacion();
});

function traerInformacion() {
    $.ajax({
        url: BASE_URL_DB + "/ords/admin/client/client",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            imprimirTablaClientes(respuesta.items);
        }

    });
}

function imprimirTablaClientes(items) {

    let myTable2 = "<table class='table'>";
    myTable2 += "<thead>\
        <tr class='table-primary'>\
            <th scope='col'>#</th>\
            <th scope='col'>NAME</th>\
            <th scope='col'>EMAIL</th>\
            <th scope='col'>AGE</th>\
            <th scope='col'>ACTION</th>\
        </tr>\
    </thead>\
    <tbody>";
    for (i = 0; i < items.length; i++) {
        myTable2 += "<tr>";
        myTable2 += "<th scope='row'>" + items[i].id + "</th>";
        myTable2 += "<td>" + items[i].name + "</td>";
        myTable2 += "<td>" + items[i].email + "</td>";
        myTable2 += "<td>" + items[i].age + "</td>";
        myTable2 += "<td> <button onclick='borrarElemento(" + items[i].id + ")' class='btn btn-danger'>Borrar</button></td>";
        myTable2 += "</tr>";
    }
    myTable2 += "</tbody>";
    myTable2 += "</table>";
    $("#resultadoClientes").append(myTable2);
}

function borrarElemento(idElemento) {
    let myData = {
        id: idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: BASE_URL_DB + "/ords/admin/client/client",
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultadoClientes").empty();
            traerInformacion();
            alert("El registro ha sido eliminado")
        }
    });
}

function guardarInformacion() {
    let myData = {
        id: $("#id").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        age: $("#age").val(),
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: BASE_URL_DB + "/ords/admin/client/client",
        type: "POST",
        data: myData,
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultadoClientes").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacion();
            alert("El registro ha sido guardado")
        }
    });
}

function editarInformacion() {
    let myData = {
        id: $("#id").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        age: $("#age").val(),

    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: BASE_URL_DB + "/ords/admin/client/client",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultadoClientes").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacion();
            alert("El registro ha sido actualizado")
        }
    });
}
