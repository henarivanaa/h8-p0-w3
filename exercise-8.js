const pasanganTerbesar = num => {
    var strNumArr = num.toString()
    var pasangan = []
    for (i = 0; i < strNumArr.length-1; i++) {
        pasangan[pasangan.length] = strNumArr[i]+strNumArr[i+1]
    }
    var kosong = ''
    for (i = 0; i < pasangan.length; i++) {
        for (j = 1; j < pasangan.length; j++) {
            if (Number(pasangan[j]) > Number(pasangan[i])) {
                kosong = 'salah'
            }
        } if (kosong === '') {
            return Number(pasangan[i])
        } else {
            kosong = ''
        }
    }

     return strNumArr
    
    
}

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99