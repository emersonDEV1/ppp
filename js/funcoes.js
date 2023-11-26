
let selectbarbeiro = document.getElementById('barbeiro');
let selectdata = document.getElementById('no-spin'); //ID DATA

selectdata.onchange = () => {
    let selectdatas = document.getElementById('no-spin');
    let valor = selectdata.value;

    fetch("selecthorario.php?no-spin="+ valor)
    .then(response => {
        return response.text();
    })
    .then(texto => {
        selectdatas.innerHTML = texto;
    });
  


}
selectbarbeiro.onchange = () => {
    let selecthorario = document.getElementById('horario');
    let valor = selectbarbeiro.value;
    let data = selectdata.value;

    fetch("selecthorario.php?no-spin="+ data + "&barbeiro="+ valor)
    .then(response => {
        return response.text();
    })
    .then(texto => {
        selecthorario.innerHTML = texto;
    });
  


}