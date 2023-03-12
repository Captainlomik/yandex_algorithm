let fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8').trim().toString().split(/\r?\n/);

let heap = []
let heapLength


function heapify(index) {
    let left = leftChild(index)
    let right = rightChild(index)
    let max = index

    if (left < heapLength && heap[max] < heap[left]) {
        max = +left
    }
    if (right < heapLength && heap[max] < heap[right]) {
        max = +right
    }

    if (max != index) {
        swap(index, max)
        heapify(max)
    }
}

function swap(indexOne, indexTwo) {
    [heap[indexOne], heap[indexTwo]] = [heap[indexTwo], heap[indexOne]]
}

function leftChild(index) { return index * 2 + 1 };
function rightChild(index) { return index * 2 + 2 }

function heapSort(num, arr) {
    heap = arr.map(el => +el)
    heapLength = num


    for (let i = Math.floor(heapLength / 2); i >= 0; i--) {
        heapify(i);
    }
  
    for (i = heap.length - 1; i > 0; i--) {
        swap(0, i);
        heapLength--;
        heapify(0)
    }
    
    return heap.join(' ')
}

console.log(heapSort(+fileContent[0], fileContent[1].split(' ')))