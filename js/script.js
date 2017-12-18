var figuros = [
    {ilgis: 2, plotis: 5, aukstis: 3},
    {ilgis: 3, plotis: 2, aukstis: 6},
    {ilgis: 1, plotis: 5, aukstis: 5}
];
var headerAuto = ['Figuros Ilgis', 'Figuros plotis', 'Figuros aukstis'];
var table = document.createElement("TABLE");
table.border = "1";
var columnCount = figuros[0].length;
var row = table.insertRow(-1);
for (var i = 0; i < columnCount; i++) {
    var headerAuto = document.createElement("TH");
    headerAuto.innerHTML = figuros[0][i];
    row.appendChild(headerCell);
}