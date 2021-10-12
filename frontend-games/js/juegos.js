$.getScript("js/functions.js");

$(document).ready(function () {
    traerJuegos();
});


function traerJuegos() {
    $.ajax({
        url: BASE_URL_DB + "/ords/admin/games/games",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            imprimirTablaJuegos(respuesta.items);
        }
    });
}

function imprimirTablaJuegos(items) {

    let myTable = "<table class='table'>";
    myTable += "<thead>\
        <tr class='table-primary'>\
            <th scope='col'>#</th>\
            <th scope='col'>DEVELOPER</th>\
            <th scope='col'>MINAGE</th>\
            <th scope='col'>ID CATEGORIA</th>\
            <th scope='col'>NAME</th>\
            <th scope='col'>ACTION</th>\
        </tr>\
    </thead>\
    <tbody>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<th scope='row'>" + items[i].id + "</th>";
        myTable += "<td>" + items[i].developer + "</td>";
        myTable += "<td>" + items[i].minage + "</td>";
        myTable += "<td>" + items[i].category_id + "</td>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td> <button onclick='borrarJuegos(" + items[i].id + ")' class='btn btn-danger'>Borrar</button></td>";
        myTable += "</tr>";
    }
    myTable += "</tbody>";
    myTable += "</table>";
    $("#resultadoJuegos").append(myTable);
}

function borrarJuegos(idElemento) {
    let myData = {
        id: idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: BASE_URL_DB + "/ords/admin/games/games",
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultadoJuegos").empty();
            traerJuegos();
            alert("El registro ha sido eliminado")
        }
    });
}

function guardarJuegos() {

    let myData = {
        id: $("#idjuego").val(),
        developer: $("#developer").val(),
        minage: $("#minage").val(),
        category_id: $("#category_id").val(),
        name: $("#namejuego").val(),
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: BASE_URL_DB + "/ords/admin/games/games",
        type: "POST",
        data: myData,
        datatype: "JSON",
        success: function (respuesta) {
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

function editarJuegos() {
    let myData = {
        id: $("#idjuego").val(),
        developer: $("#developer").val(),
        minage: $("#minage").val(),
        category_id: $("#category_id").val(),
        name: $("#namejuego").val(),

    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: BASE_URL_DB + "/ords/admin/games/games",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
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

