function groupAnimals(animals) {
    // create looping that doesnt mutate input
    var input = []
    for (i = 0; i < animals.length; i++) {
        input[input.length] = animals[i]
    }
    // sorting "input" huruf pertama saja
    for (i = 0; i < input.length; i++) {
        for (j = 0; j < input.length-1-i; j++) {
            if (input[j][0] > input[j+1][0]) {
                var simpenan = input[j]
                input[j] = input[j+1]
                input[j+1] = simpenan
            }
        }
    } 
    // grouping
    var hasil = [[input[0]]]
    for (i = 1; i < input.length; i++) {
        if (input[i][0] === input[i-1][0]) {
            hasil[hasil.length-1][hasil[hasil.length-1].length] = input[i]
            
        } else {
            hasil[hasil.length] = [input[i]]
        }
    } 
    return hasil
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
