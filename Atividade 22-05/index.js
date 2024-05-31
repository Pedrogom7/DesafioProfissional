let counter = 0
let counter2 = counter
counter2++

console.log('counter', counter)
console.log('counter 2', counter2)

const item = { counter: 0 }
const item2 = item

item2.counter++
console.log(item2)

item.counter++
console.log(item)


let a = 10
let b = 20
let c = [1, 2]
let d = c

d.push(3)