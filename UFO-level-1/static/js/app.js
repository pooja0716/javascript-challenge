// from data.js
var table_data = data;

// YOUR CODE HERE!

// Use D3 to select the table
var table = d3.select("table");

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Generate HTML Table with all data
function results(items) {
    // Iterate through each item object
    items.forEach((item) => {

        // Append one table row `tr` to the table body
        var row = tbody.append("tr");

        // Iterate through each key and value
        Object.entries(item).forEach(([key, value]) => {    
  
          // Use the key to determine which array to push the value to
            if (key === "datetime") {
                row.append("td").text(value);
            }
            else if (key === "city") {
                row.append("td").text(value);
            }
            else if (key === "state") {
                row.append("td").text(value);
            }
            else if (key === "country") {
                row.append("td").text(value);
            }
            else if (key === "shape") {
                row.append("td").text(value);
            }
            else if (key === "durationMinutes") {
                row.append("td").text(value);
            }
            else if (key === "comments") {
                row.append("td").text(value);
            }
        });
    });
}

results(table_data);

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers 
button.on("click", input);
form.on("submit", input);

var filtered_data = table_data;

// Complete the event handler function for the form
function input() {

    // Prevent the page from refreshing so the progress is not lost
    d3.event.preventDefault();
    
    // Create JS Object for multiple input values
    var input_value = {};
    // Input for date time
    input_value.datetime = d3.select("#datetime").property("value");
    // Input for city
    input_value.city = d3.select("#city").property("value").toLowerCase();
    // Input for state
    input_value.state = d3.select("#state").property("value").toLowerCase();
    // Input for country
    input_value.country = d3.select("#country").property("value").toLowerCase();
    // Input for shape
    input_value.shape = d3.select("#shape").property("value").toLowerCase();
    // Input for duration
    input_value.duration_minutes = d3.select("#durationMinutes").property("value");
    // Input for comments
    input_value.comments = d3.select("#comments").property("value");
    
    
    // Iterate JS Object
    var filtered_data = table_data;
 
    // Filter on each input value if one exists
    Object.entries(input_value).forEach(([key, value]) => {
        if (value.length > 0) {
            filtered_data = filtered_data.filter(item => item[key] === value); 	
            console.log(filtered_data);
        }

    });
     console.log(filtered_data);

    // Clears HTML table body and provide filtered results
    tbody.html("");
    results(filtered_data);
      
};
