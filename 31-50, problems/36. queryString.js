/*
036 - queryString

A query string, is a way to send data in an HTTP request, you may see it in a URL
starting with a question mark. Write a function called toQueryString, which accepts
an object and returns a string with each key and value separated by a = and each pair
separated by a &. If the value is an array, add another pair to the string with each value

Examples:
toQueryString({}) // ""
toQueryString({"bar": [ 2, 3], "foo": 1 }) // "bar=2&bar=3&foo=1"
toQueryString({name: "Elie", "nums": [1,2,3,4]}) // "name=Elie&nums=1&nums=2&nums=3&nums=4"

Credit - https://www.codewars.com/kata/do-you-know-how-to-make-query-string
*/

function toQueryString(obj) {
  let output = "";
  for(let key in obj) {
    if(Array.isArray(obj[key])) {
      for(i = 0; i < obj[key].length; i++) {
        output = output + key + "=" + obj[key][i] + "&";// array logic
      }
    } else {
      output = output + key + "=" + obj[key] + "&"; // single element
    }
  }
  return output.slice(0,output.length-1); // remove last &
}