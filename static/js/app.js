// from data.js
var tableData = data;

// YOUR CODE HERE!

var filter_table = d3.select("#filter-btn");


var tbody = d3.select("tbody");

tableData.forEach((aliens) => {
  var row = tbody.append("tr");
  Object.entries(aliens).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

var submit = d3.select("#filter-btn");

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = data.filter(data => data.datetime === inputValue);

    console.log(filteredData);
  
    var table = document.getElementById("ufo-table");
    //or use :  var table = document.all.tableid;
    for(var i = table.rows.length - 1; i > 0; i--)
    {
        table.deleteRow(i);
    }   
  
    
    filteredData.forEach((aliens) => {
      var row = tbody.append("tr");
      Object.entries(aliens).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });    
 
});

var reset = d3.select("#reset-btn");

reset.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    var table = document.getElementById("ufo-table");
    //or use :  var table = document.all.tableid;
    for(var i = table.rows.length - 1; i > 0; i--)
    {
        table.deleteRow(i);
    }  

    tableData.forEach((aliens) => {
  var row = tbody.append("tr");
  Object.entries(aliens).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});
 
});

