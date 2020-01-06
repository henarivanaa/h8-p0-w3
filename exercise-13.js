const targetTerdekat = arr => {
    // menentukan posisi x
    var posisiX = []
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === 'x') {
            posisiX[posisiX.length] = i
        }
    }
    if ( posisiX.length === 0) {
        return 0
    }
    // menentukan posisi o
    var posisiO = []
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            posisiO[posisiO.length] = i
        }
    }
    // jika o diujung atau tidak diapit x
    if (posisiO < posisiX[0]) {
        jarakTerdekat = posisiX[0] - posisiO
        return jarakTerdekat    
    } else if (posisiO > posisiX[posisiX.length-1]) {
        jarakTerdekat = posisiO - posisiX[posisiX.length-1]
        return jarakTerdekat
    }

    // jika o diapit x
    var selisih = []
    for (i = 0; i < posisiX.length; i++ ) {
        selisih[selisih.length] = Math.abs(posisiX[i] - posisiO)
    }
    // sorting array selisih
    for ( i = 0; i < selisih.length; i++) {
        for ( j = 0; j < selisih.length-1-i; j++) {
            if (selisih[j] > selisih[j+1]) {
                var simpenan = selisih[j]
                selisih[j] = selisih[j+1]
                selisih[j+1] = simpenan
            }
        }
    }
    return selisih[0]
    
}
//(tambahan) Test case o diapit x
console.log(targetTerdekat(['x', ' ', ' ', 'o', 'x', 'x', ' '])); // 1
console.log(targetTerdekat(['x', ' ', ' ', 'o', ' ', ' ', ' ', ' ', 'x', 'x', ' '])) // 3
console.log(targetTerdekat(['x', ' ', ' ', 'x', ' ', 'o', ' ', ' ', ' ', 'x', ' '])) // 2

// (asli)Test case o tidak diapit x
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2