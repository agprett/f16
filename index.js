class Node {
  constructor(data, next) {
    this.data = data,
    this.next = next
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head
  }

  size() {
    let count = 0
    let node = this.head
    
    while(node){
      count++
      node = node.next
    }
    
    return count
  }

  getLast() {
    let lastNode = this.head

    if(lastNode){
      while(lastNode.next){
        lastNode = lastNode.next
      }
    }

    return lastNode
  }

  getAverage() {
    let node = this.head
    let avrRating = 0

    while(node){
      avrRating += node.data.rating
      node = node.next
    }

    return (avrRating / this.size())
  }
}

// let nodeA = new Node('A')
// let nodeB = new Node('B')
// nodeA.next = nodeB

// let list = new LinkedList(nodeA)

// let nodeC = new Node('C')
// nodeB.next = nodeC

let watermelon = new Node({name: 'Watermelon', rating: 4}, null)
let oranges = new Node({name: 'Oranges', rating: 4}, watermelon)
let strawberries = new Node({name: 'Strawberries', rating: 5}, oranges)
strawberries.next = oranges
oranges.next = watermelon

let grapes = new Node({name: 'Grapes', rating: 5}, oranges)
strawberries.next = grapes

let apples = new Node({name: 'Apples', rating: 3}, null)
watermelon.next = apples

let favoriteFruit = new LinkedList(strawberries)

// console.log(favoriteFruit.getAverage())

class Line {
  constructor(){
    this.queue = []
  }

  enqueue(item){
    this.queue.push(item)
  }

  dequeue(){
    this.queue.shift()
  }

  logLine(){
    return this.queue
  }
}

let groceryLine = new Line()

groceryLine.enqueue('Alec')
groceryLine.enqueue('Jeddy')
groceryLine.enqueue('Vadzim')

groceryLine.dequeue()

console.log(groceryLine.logLine())

let mainSupport = new Line()
let techSupport = new Line()