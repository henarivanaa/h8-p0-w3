function palindrome(kata) {
    var reversed = ''
    for (i = 0; i < kata.length; i++) {
        reversed += kata[kata.length-1-i]
    }
    if (kata === reversed) {
        return true 
    } else {
        return false
    }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false