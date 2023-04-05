let name = prompt("What is your name?");
let goal = prompt("What is your goal for today?");
let quote = prompt("What is your inspirational quote for today?")
let source = prompt("Who was responsible for your quote?")
document.getElementById("nameSpan").innerHTML = name;
document.getElementById("focuSpan").innerHTML = goal;
document.getElementById("quoteSpan").innerHTML = quote;
document.getElementById("speakerSpan").innerHTML = source;
