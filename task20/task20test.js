let fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8').trim().toString().split(/\r?\n/);



function heapSort(n, arr) {
    let i = Math.floor(n / 2)
    let j, k, t

    if (arr.length == 0) return [];

    while (true) {
        if (i > 0) t = arr[--i];
        else {
            n--;
            if (n == 0) return arr;
            t = arr[n];
            arr[n] = arr[0];
        }

        j = i;
        k = j * 2 + 1;

        while (k < n) {
            if (k + 1 < n && arr[k + 1] > arr[k]) k++;

            if (arr[k] > t) {
                arr[j] = arr[k];
                j = k;
                k = j * 2 + 1;
            }
            else break;
        }
        arr[j] = t;
    }
}

console.log(heapSort(+fileContent[0], fileContent[1].split(' ')))