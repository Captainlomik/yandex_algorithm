let fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8').trim().toString().split(/\r?\n/);
let heap = []


function insert(elem) { 
    heap.push(+elem)
    let index = heap.length - 1

    while (index !== 0 && heap[index] > heap[parent(index)]) {
        swap(index, parent(index))
        index = parent(index)
    }
}

function extract() { 
    let root = heap.shift()
    heap.unshift(heap.at(-1))
    heap.pop()

    heapify(0)
    return root
}

function heapify(index) { 
    let left = leftChild(index)
    let right = rightChild(index)
    let smallest = index

    if (left < heap.length && heap[smallest] < heap[left]) {
        smallest = left
    }
    if (right < heap.length && heap[smallest] < heap[right]) {
        smallest = right
    }

    if (smallest != index) {
        swap(smallest, index)
        heapify(smallest)
    }
    return heap
}

function swap(indexOne, indexTwo) {
    const tmp = heap[indexOne];
    heap[indexOne] = heap[indexTwo];
    heap[indexTwo] = tmp;
    return heap
}

function leftChild(index) {return  index * 2 + 1 };
function rightChild(index) { return index * 2 + 2 }
function parent(index) {return  Math.floor((index - 1) / 2); }


function maxHeap(num) {
    let count = +num[0]
    for (let i = 1; i < num.length; i++) {
        if (num[i].startsWith('0')) {
            insert(num[i].split(' ')[1])
        }
        if (num[i] == '1') console.log(extract())
    }
}

maxHeap(fileContent)