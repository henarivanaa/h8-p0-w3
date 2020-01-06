var kata = ''
function balikKata(kata) {
    var s = '';
    for (i=0; i < kata.length; i++) {
        s += kata[kata.length-1-i];
        
    }
    return s;
}


console.log(balikKata('Hello World')); // dlroW olleH
