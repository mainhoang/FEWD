var Compare = function(){

    // Get the value stored in #a
    var a = document.getElementById('a').value;
    a = parseFloat(a);

    // Get the value stored in #b
    var b = document.getElementById('b').value;
    b = parseFloat(b);

    // Set up a variable to store the comparison operator
    var comparison;

    // TODO: Set `comparison` string based on relationship between a and b
    if(a > b) {
      comparison = '>';
    } else if(a < b) {
      comparison = '<';
    } else {
      comparison = '=';
    }

    // Print `comparison` string on the page
    document.getElementById('comparison').innerHTML = comparison;


};

document.getElementById("submit").addEventListener("mousedown",Compare);
