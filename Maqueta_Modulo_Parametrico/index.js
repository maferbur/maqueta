
var scoreInput = document.getElementById("score");
var zonaInput = document.getElementById("zona");
var reglaElicitaInput = document.getElementById("reglaElicita");
var sucursalInput = document.getElementById("Sucursal");
var divisionInput = document.getElementById("division");
var referenciaInput = document.getElementById("referencia");
var economiaInput = document.getElementById("economia");
var edadInput = document.getElementById("edad");
var ratioInput = document.getElementById("ratio");
var claveInput = document.getElementById("clave");
var saldosInput = document.getElementById("saldos");
var bscInput = document.getElementById("bsc");
var cciInput = document.getElementById("cci");
var montoInput = document.getElementById("monto");
var creditoInput = document.getElementById("credito");
var productoInput = document.getElementById("producto");
var procesoInput = document.getElementById("proceso");
var capacidadInput = document.getElementById("capacidad");
var bancaInput = document.getElementById("Banca");
var evaluarButton = document.getElementById("evaluarButton");


evaluarButton.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Clic en el botón");
    
    var scoreValue = scoreInput.value;
    var zonaValue = zonaInput.value;
    var reglaElicitaValue = reglaElicitaInput.value;
    var sucursalValue = sucursalInput.value;
    var divisionValue = divisionInput.value;
    var referenciaValue = referenciaInput.value;
    var economiaValue = economiaInput.value;
    var edadValue = edadInput.value;
    var ratioValue = ratioInput.value;
    var claveValue = claveInput.value;
    var saldosValue = saldosInput.value;
    var bscValue = bscInput.value;
    var cciValue = cciInput.value;
    var montoValue = montoInput.value;
    var creditoValue = creditoInput.value;
    var productoValue = productoInput.value;
    var procesoValue = procesoInput.value;
    var capacidadValue = capacidadInput.value;
    var bancaValue = bancaInput.value;
 
    console.log("Score:", scoreValue);
    console.log("Zona:", zonaValue);
    console.log("Regla Elicita:", reglaElicitaValue);
    console.log("Sucursal:", sucursalValue);
    console.log("División:", divisionValue);
    console.log("Referencia de Crédito:", referenciaValue);
    console.log("Economía:", economiaValue);
    console.log("Edad:", edadValue);
    console.log("Ratio CP:", ratioValue);
    console.log("Clave de Buro:", claveValue);
    console.log("Saldos Vencidos:", saldosValue);
    console.log("BSC:", bscValue);
    console.log("CCI:", cciValue);
    console.log("Monto de Crédito:", montoValue);
    console.log("Tipo de Crédito:", creditoValue);
    console.log("Tipo de Producto:", productoValue);
    console.log("Proceso:", procesoValue);
    console.log("Capacidad de Pago:", capacidadValue);
    console.log("Banca:", bancaValue);

    if (
        (scoreValue == "720" && edadValue == "25" && ratioValue == "1.2" && productoValue == "NOM")||
        (scoreValue == "760" && edadValue == "50" && bscValue == "0999" && cciValue == "0007" && productoValue == "PPI")||
        (scoreValue == "610" && referenciaValue == "CR" && ratioValue == "1.1" && cciValue == "0300")||
        (scoreValue == "500" && divisionValue == "OCCIDENTE" && edadValue == "20" && creditoValue == "NPA" && productoValue == "NOM" && procesoValue == "NVO")||
        (scoreValue == "700" && ratioValue == "1.2" && creditoValue == "NPA" && productoValue == "PPI")||
        (scoreValue == "600" && referenciaValue == "SR" && economiaValue == "COMNES" && edadValue == "30")||
        (scoreValue == "710" && reglaElicitaValue == "RV03" && divisionValue == "METROPOLITANA NORTE" && saldosValue == "5000")||
        (scoreValue == "680" && montoValue == "150000" && claveValue == "RV")||
        (sucursalValue == "0010" && creditoValue == "PA" && bancaValue == "RC")||
        (economiaValue == "ADMPUB" && creditoValue == "RECO" && capacidadValue == "NO" && bancaValue == "RP")
        ){
        //alert("RECHAZADO");
        Swal.fire({
            icon: 'error',
            title: 'Rechazado',
          })
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Elevado'
        })
        //alert("APROBADO");
    }
    
});
