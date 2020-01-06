// Buat function dan gunakan splice

let input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

const dataHandling2 = input => {
    for (let i = 1; i < input.length; i++) {
        if (i === 1) {
            input.splice(i,2, "Roman Alamsyah Elsharawy","Provinsi Bandar Lampung")
        } else if (i === 4) {
            input.splice(i,1, "Pria", "SMA Internasional Metro")
        }
    }
    console.log(input)
    var ttl = input[3].split('/')
    var bulan = Number(input[3].split('/')[1])

    switch (bulan) {
        case 1:
        bulan = 'Januari';
        break;
    
        case 2:
        bulan = 'Februari';
        break;
    
        case 3:
        bulan = 'Maret';
        break;
    
        case 4:
        bulan = 'April';
        break;
    
        case 5:
        bulan = 'Mei';
        break;
    
        case 6:
        bulan = 'Juni';
        break;
    
        case 7:
        bulan = 'Juli';
        break;
    
        case 8:
        bulan = 'Agustus';
        break;
    
        case 9:
        bulan = 'September';
        break;

        case 10:
        bulan = 'Oktober';
        break;
    
        case 11:
        bulan = 'November';
        break;
    
        case 12:
        bulan = 'Desember';
        break;
    
    }


    console.log(bulan)


    var sortedTTL = []
    sortedTTL.push(ttl[0], ttl[1], ttl[2])
    for ( let i = 0; i < ttl.length; i++) {
        for ( let j = 0; j < ttl.length-1-i; j++) {
            if (Number(sortedTTL[j]) < Number(sortedTTL[j+1])) {
                var simpenan = sortedTTL[j]
                sortedTTL[j] = sortedTTL[j+1]
                sortedTTL[j+1] = simpenan 
            }
        }
    }

    console.log(sortedTTL)
    console.log(ttl.join('-'))
    console.log(input[1].slice(0,15))
}

dataHandling2(["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"])