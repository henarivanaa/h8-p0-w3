const angkaPalindrome = num => {
    
    
    // do {
    //     num++
    //     var strNumBalik = ''
    //     var strNum = num.toString()
    //     for(let i = strNum.length; i>0; i--) {

    //         strNumBalik += strNum.substring(i-1,i);
    //     } 
          
    // } while (strNum !== strNumBalik);

    // return strNum

    do {
        num++
        var nomer = num
        reversed = 0

        while (nomer > 0) {
            var kanan = Math.floor(nomer % 10)
            reversed = reversed * 10 + kanan
            nomer = Math.floor(nomer/10)
        }
    } while (num !== reversed)

    return reversed
    
}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
