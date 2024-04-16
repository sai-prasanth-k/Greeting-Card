let greeting = '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Sai Prasanth","to":"The Amutham Tractors"}';

let greetingParsed = JSON.parse(greeting);


let greetTextElement = document.getElementById("greetText");
greetTextElement.textContent = greetingParsed.greetText;

let fromElement = document.getElementById("from");
fromElement.textContent ="From: " + greetingParsed.from;

let toElement = document.getElementById("to");
toElement.textContent = "To: " + greetingParsed.to;


