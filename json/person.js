var text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';
//JSON = Javascript object notation
/* JSON syntax rules:
   -data is name/value pairs
   -data is separated by commas
   -curly braces holds ojects
   - square brackets hold arrays

   JSON Values:
   - number
   - string
   - boolean
   - array
   - object
   - null

   JSON parse is a method that converts strings into objects so that object's
   properties and values can manipulated in JS.

   */

obj = JSON.parse(text);
document.getElementById("demo").innerHTML =
obj.employees[0].firstName + " " + obj.employees[0].lastName;
