// console.log("2">1); 
// console.log(2>1);
// console.log(2>"1")
// console.log(2>"4")

// console.log(undefined=0);  //undefined not allowed 
// console.log(undefined>0);

// // ===   strict check
// console.log("2"===2);


//--reverse string
function reverse(str){
    return str.split('').reverse().join('');
    }
    console.log(reverse("hello")); // olleh
     
// }

// // ======================
// // 2. Palindrome
// // ======================
// function isPalindrome(str){
//   return str === str.split('').reverse().join('');
// }
// console.log("2 Palindrome:", isPalindrome("madam")); // true

// 3. Largest Number
// ======================
function max(arr){
  return Math.max(...arr);
}
console.log("3 Max:", max([1,5,3,9])); // 9


// ======================
// 4. Remove Duplicates
// ======================
function unique(arr){
  return [...new Set(arr)];
}
console.log("4 Unique:", unique([1,2,2,3])); // [1,2,3]


// ======================
// 5. Sum of Array
// ======================
function sum(arr){
  return arr.reduce((a,b)=>a+b,0);
}
console.log("5 Sum:", sum([1,2,3,4])); // 10

// ======================
// 6. Flatten Array
// ======================
function flat(arr){
  return arr.flat(Infinity);
}
console.log("6 Flat:", flat([1,[2,[3]]])); // [1,2,3]

// ======================
// 7. Count Characters
// ======================
function count(str){
  return str.split('').reduce((acc,c)=>{
    acc[c] = (acc[c]||0)+1;
    return acc;
  },{});
}
console.log("7 Count:", count("aab")); // {a:2,b:1}

// ======================
// 8. Debounce
// ======================
function debounce(fn, delay){
  let timer;
  return function(...args){
    clearTimeout(timer);
    timer = setTimeout(()=>fn.apply(this,args), delay);
  }
}
const debounced = debounce(()=>console.log("8 Debounced Call"),1000);
debounced(); debounced(); debounced(); // only one executes


// ======================
// 9. Throttle
// ======================
function throttle(fn, limit){
  let flag = true;
  return function(){
    if(flag){
      fn();
      flag = false;
      setTimeout(()=>flag=true, limit);
    }
  }
}
const throttled = throttle(()=>console.log("9 Throttled Call"),1000);
throttled(); throttled(); throttled();

// ======================
// 10. Deep Copy
// ======================
function deepCopy(obj){
  return JSON.parse(JSON.stringify(obj));
}
const obj1 = {x:1};
const obj2 = deepCopy(obj1);
console.log("10 Deep Copy:", obj2);

// ======================
// 11. Closure
// ======================
function counter(){
  let count = 0;
  return function(){
    return ++count;
  }
}
const c = counter();
console.log("11 Closure:", c(), c()); // 1 2

// ======================
// 12. Memoization
// ======================
function memo(fn){
  let cache = {};
  return function(n){
    if(cache[n]) return cache[n];
    return cache[n] = fn(n);
  }
}
const square = memo(n=>n*n);
console.log("12 Memo:", square(5), square(5)); // cached


// ======================
// 13. Anagram
// ======================
function isAnagram(a,b){
  return a.split('').sort().join('') === b.split('').sort().join('');
}
console.log("13 Anagram:", isAnagram("listen","silent")); // true


// ======================
// 14. Missing Number
// ======================
function missing(arr){
  let n = arr.length+1;
  let sum = n*(n+1)/2;
  return sum - arr.reduce((a,b)=>a+b,0);
}
console.log("14 Missing:", missing([1,2,4,5])); // 3

// ======================
// 15. Capitalize Words
// ======================
function cap(str){
  return str.split(' ')
    .map(w=>w[0].toUpperCase()+w.slice(1))
    .join(' ');
}
console.log("15 Capitalize:", cap("hello world"));

// ======================
// 16. Promise
// ======================
const p = new Promise((res)=>{
  setTimeout(()=>res("16 Promise Done"),1000);
});
p.then(console.log);

// ======================
// 17. Async/Await
// ======================
async function asyncExample(){
  return "17 Async/Await Done";
}
asyncExample().then(console.log);


// ======================
// 18. Event Loop
// ======================
console.log("18 Start");

setTimeout(()=>console.log("18 Timeout"),0);

Promise.resolve().then(()=>console.log("18 Promise"));

console.log("18 End");

// ======================
// 19. Custom Map
// ======================
Array.prototype.myMap = function(cb){
  let res=[];
  for(let i=0;i<this.length;i++){
    res.push(cb(this[i]));
  }
  return res;
}
console.log("19 Custom Map:", [1,2,3].myMap(x=>x*2));

// ======================
// 20. Second Largest
// ======================
function secondLargest(arr){
  return [...new Set(arr)].sort((a,b)=>b-a)[1];
}
console.log("20 Second Largest:", secondLargest([1,5,3,9]));

// ======================
// 21. Group By
// ======================
function groupBy(arr,key){
  return arr.reduce((acc,obj)=>{
    let k = obj[key];
    acc[k] = acc[k] || [];
    acc[k].push(obj);
    return acc;
  },{});
}
console.log("21 Group By:", groupBy(
  [{age:20},{age:20},{age:30}],
  "age"
));

//22. Currying Function
function curry(a){
  return function(b){
    return function(c){
      return "22 ans: " + (a + b + c);
    }
  }
}

console.log(curry(1)(2)(3)); // 6

//23. Polyfill for map()
Array.prototype.myMap = function(callback){
  let result = [];

  for(let i=0; i<this.length; i++){
    result.push(callback(this[i], i, this));
  }

  return result;
}

const arr = [1,2,3];

const output = arr.myMap(x => x * 2);

console.log(("23 ")+output); // [2,4,6]

//24. Polyfill for filter()
Array.prototype.myFilter = function(callback){
  let result = [];

  for(let i=0; i<this.length; i++){
    if(callback(this[i], i, this)){
      result.push(this[i]);
    }
  }

  return result;
}

const nums = [1,2,3,4];

console.log(("24 ") +nums.myFilter(x => x > 2));
// [3,4]

//25. Polyfill for reduce()
Array.prototype.myReduce = function(callback, initial){
  let acc = initial;

  for(let i=0; i<this.length; i++){
    acc = callback(acc, this[i]);
  }

  return acc;
}

const nums1 = [1,2,3];

const sum1 = nums1.myReduce((a,b)=>a+b,0);

console.log(sum1); // 6

//26. Implement Promise.all

function myPromiseAll(promises){

  return new Promise((resolve, reject)=>{

    let results = [];
    let completed = 0;

    promises.forEach((p,index)=>{

      Promise.resolve(p)
      .then(data=>{

        results[index] = data;
        completed++;

        if(completed === promises.length){
          resolve(results);
        }

      })
      .catch(reject);

    });

  });

}

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);

myPromiseAll([p1,p2])
.then(console.log); // [1,2]

//27. Custom EventEmitter

class EventEmitter{

  constructor(){
    this.events = {};
  }

  on(event, callback){
    if(!this.events[event]){
      this.events[event] = [];
    }

    this.events[event].push(callback);
  }

  emit(event, data){
    if(this.events[event]){
      this.events[event].forEach(cb => cb(data));
    }
  }

}

const emitter = new EventEmitter();

emitter.on("message", data=>{
  console.log(data);
});

emitter.emit("message","Hello");

//27. Custom EventEmitter
class EventEmitter1{

  constructor(){
    this.events = {};
  }

  on(event, callback){
    if(!this.events[event]){
      this.events[event] = [];
    }

    this.events[event].push(callback);
  }

  emit(event, data){
    if(this.events[event]){
      this.events[event].forEach(cb => cb(data));
    }
  }

}

const emitter1= new EventEmitter();

emitter1.on("message", data=>{
  console.log(data);
});

emitter1.emit("message","27  "+"Hello");

//28. Deep Clone with Recursion

function deepClone(obj){

  if(obj === null || typeof obj !== "object"){
    return obj;
  }

  let copy = Array.isArray(obj) ? [] : {};

  for(let key in obj){
    copy[key] = deepClone(obj[key]);
  }

  return copy;
}

const obj = {
  a:1,
  b:{c:2}
};

const cloned = deepClone(obj);

console.log(("28 Deep Clone:") + JSON.stringify(cloned));

//29. Call, Apply, Bind

const person = {
  name:"Shriniwas"
};

function greet(city){
  console.log(

    ("29:  ")+
    `Hello ${this.name} from ${city}`
  );
}

greet.call(person,"Pune");

greet.apply(person,["Mumbai"]);

const bindFn = greet.bind(person,"Nagpur");

bindFn();

//30. Output-Based Closure Question

for(var i=0; i<3; i++){

  setTimeout(()=>{
    console.log(("30  ")+i);
  },1000)

}

//31. Fix Closure Problem
for(let i=0; i<3; i++){

  setTimeout(()=>{
    console.log(("31  ")+ i);
  },1000);

}

//32. Implement once() Function

function once(fn){

  let called = false;

  return function(){

    if(!called){
      called = true;
      return fn();
    }

  }

}

const hello = once(()=>{
  console.log(("   ")+"Hello");
});

hello();
hello();

//33. Array Chunking
function chunk(arr,size){

  let result = [];

  for(let i=0; i<arr.length; i+=size){
    result.push(arr.slice(i,i+size));
  }

  return result;
}

console.log(("33    ")+
  chunk([1,2,3,4,5],2)
);

//34. Infinite Currying

function sum(a){

  return function(b){

    if(b){
      return sum(a+b);
    }

    return a;

  }

}

console.log(("34    ")+sum(1)(2)(3)(4)());

//35. Retry API Calls

async function retry(fn, retries){

  try{
    return await fn();
  }
  catch(err){

    if(retries === 0){
      throw err;
    }

    return retry(fn, retries-1);

  }

}//Retries failed API requests automatically.

//36. Implement a Simple Pub/Sub System

class PubSub{

  constructor(){
    this.events = {};
  }

  subscribe(event, callback){
    if(!this.events[event]){
      this.events[event] = [];
    }

    this.events[event].push(callback);
  }

  publish(event, data){
    if(this.events[event]){
      this.events[event].forEach(cb => cb(data));
    }
  }

}

const pubsub = new PubSub();

pubsub.subscribe("news", data=>{
  console.log(("36   ")+data);
});

pubsub.publish("news","Breaking News!");

// 37   
// Implement a Simple LRU Cache
// LRU (Least Recently Used) Cache evicts the least recently used item when capacity is exceeded.


class LRUCache{

  constructor(capacity){
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key){
    if(!this.cache.has(key)){
      return -1;
    }

    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value){
    if(this.cache.has(key)){
      this.cache.delete(key);
    }
    else if(this.cache.size === this.capacity){
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, value);
  }

}

const lru = new LRUCache(2);

lru.put(1,1);
lru.put(2,2);
console.log(("37   ")+lru.get(1));
lru.put(3,3);
console.log(("37   ")+lru.get(2));
lru.put(4,4);
console.log(("37   ")+lru.get(3));
console.log(("37   ")+lru.get(4));

//38. Implement a Simple Event Loop
// A simple event loop can be implemented using a queue to manage tasks and a function to process them.

class SimpleEventLoop{

  constructor(){
    this.queue = [];
    this.processing = false;
  }

  enqueue(task){
    this.queue.push(task);
    this.process();
  }

  async process(){
    if(this.processing) return;

    this.processing = true;

    while(this.queue.length > 0){
      const task = this.queue.shift();
      await task();
    }

    this.processing = false;

  }
}

const eventLoop = new SimpleEventLoop();

eventLoop.enqueue(async ()=>{
  console.log(("38   ")+ "Task 1");

  await new Promise(res => setTimeout(res, 1000));
}

);


eventLoop.enqueue(async ()=>{
  console.log(("38   ")+ "Task 2");

  await new Promise(res => setTimeout(res, 500));
}

);

eventLoop.enqueue(async ()=>{
  console.log(("38   ")+ "Task 3");
}
);

//39. Implement a Simple Observable Pattern
// The Observable pattern allows you to create a stream of data that can be observed and reacted to.

class Observable{

  constructor(){
    this.observers = [];
  }

  subscribe(observer){
    this.observers.push(observer);
  }

  notify(data){
    this.observers.forEach(observer => observer(data));
  }

}

const observable = new Observable();

observable.subscribe(data=>{
  console.log(("39   ")+ "Observer 1: " + data);
});

observable.subscribe(data=>{
  console.log(("39   ")+ "Observer 2: " + data);
});

observable
.notify("Hello Observers!");

//40. Implement a Simple State Management System

// A simple state management system can be implemented using a class 
// that holds the state and allows components to subscribe to changes.

class StateManager{

  constructor(initialState){
    this.state = initialState;
    this.listeners = [];
  }

  subscribe(listener){
    this.listeners.push(listener);
  }

  setState(newState
  ){
    this.state = {...this.state, ...newState};
    this.listeners.forEach(listener => listener(this.state));
  }

}

const stateManager = new StateManager({count:0});

stateManager.subscribe(state=>{
  console.log(("40   ")+ "Count: " + state.count);
});

stateManager.setState({count:1});
stateManager.setState({count:2});

// These questions cover a wide range of JavaScript concepts and can help you prepare for interviews effectively. 
// Make sure to understand the underlying principles and practice coding these solutions to solidify your knowledge.

// Note: The above code snippets are meant for demonstration purposes and may not cover all edge cases or optimizations.

//41. Implement a Simple Binary Search Tree

// A binary search tree is a data structure that allows 
//for efficient searching, insertion, and deletion of elements.

class TreeNode{

  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }

}

class BinarySearchTree{

  constructor(){
    this.root = null;
  }

  insert(value
  ){
    const newNode = new TreeNode(value);

    if(!this.
root){
      this.root = newNode;
      return;
    }

    let current = this.root;

    while(true){
      if(value < current.value){
        if(!current.left){
          current.left = newNode;
          return;
        }
        current = current.left;
      }
      else{
        if(!current.right){
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  search(value){
    let current = this.root;

    while(current){
      if(value === current.value){
        return true;
      }
      else if(value < current.value){
        current = current.left;
      }
      else{
        current = current.right;
      }
    }

    return false;
  }

}

const bst = new BinarySearchTree();

bst.insert(5);
bst.insert(3);
bst.insert(7);

console.log(("41   ")+ bst.search(3)); // true
console.log(("41   ")+ bst
.search(4)); // false



// 42. Implement a Simple Graph Data Structure

// A graph is a collection of nodes (vertices) and edges that connect them. 
// It can be used to represent various real-world problems like social networks, transportation systems, etc.

class Graph{

  constructor(){
    this.adjacencyList = {};
  }

  addVertex(vertex){
    if(!this.adjacencyList[vertex]){
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2){
    this.addVertex(v1);
    this.addVertex(v2);
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  getNeighbors(vertex){
    return this.adjacencyList[vertex] || [];
  }

}

const graph = new Graph();

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");

console.log(("42   ")+ graph.getNeighbors
("A")); // ["B", "C"]
console.log(("42   ")+ graph.getNeighbors("B")); // ["A", "D"]



//43. Implement a Simple Depth-First Search (DFS) Algorithm

// Depth-First Search is a graph traversal algorithm that explores as far as possible along each branch before backtracking.

function dfs(graph, start, visited = new Set()){

  if(visited.has(start)){
    return;
  }

  console.log(("43   ")+ start);
  visited.add(start);

  graph.getNeighbors(start).forEach(neighbor => {
    dfs(graph, neighbor, visited);
  });

}

dfs(graph, "A"); // A B D C

//44. Implement a Simple Breadth-First Search (BFS) Algorithm

// Breadth-First Search is a graph traversal algorithm 
// that explores all neighbors at the present depth before moving on to the nodes at the next depth level.

function bfs(graph, start){

  let visited = new Set();
  let queue = [start];

  while(queue.length > 0){
    let vertex = queue.shift();

    if(!visited.has(vertex)){
      console.log(("44   ")+ vertex);
      visited.add(vertex);
      queue.push(...graph.getNeighbors(vertex));
    }
  }

}

bfs(graph, "A"); // A B C D


//45. Implement a Simple Topological Sort Algorithm


// Topological Sort is a linear ordering of vertices in a directed acyclic graph (DAG) 
// such that for every directed edge uv, vertex u comes before v in the ordering.

function topologicalSort(graph){

  let visited = new Set();
  let stack = [];

  function 
dfs(vertex){
    visited.add(vertex);

    graph.getNeighbors(vertex).forEach(neighbor => {
      if(!visited.has(neighbor)){
        dfs(neighbor);
      }
    });

    stack.push(vertex);
  }

  Object.keys(graph.adjacencyList).forEach(vertex => {
    if(!visited.has(vertex)){
      dfs(vertex);
    }
  });

  return stack.reverse();
}

const dag = new Graph();

dag.addEdge("A", "B");
dag.addEdge("A", "C");
dag.addEdge("B", "D");
dag.addEdge("C", "D");

console.log(("45   ")+ topologicalSort(dag)); // A C B D or A B C D

//46. Implement a Simple Dijkstra's Algorithm

// Dijkstra's Algorithm is a graph algorithm that finds the shortest path between nodes in a graph, 
// which may represent, for example, road networks.

function dijkstra(graph, start){

  let distances = {};
  let visited = new Set();
  let pq = new MinPriorityQueue();

  Object.keys(graph.adjacencyList).forEach(vertex => {
    distances[vertex] = Infinity;
  });

  distances[start] = 0;
  pq.enqueue(start, 0);

  while(!pq.isEmpty()){
    let {element: vertex} = pq.dequeue();

    if(visited.has(vertex)){
      continue;
    }

    visited.add(vertex);

    graph.getNeighbors(vertex).forEach(neighbor => {
      let alt = distances[vertex] + 1; // Assuming all edges have weight 1

      

      if(alt < distances[neighbor]){
        distances[neighbor] = alt;
        pq.enqueue(neighbor, alt);
      }
    }
    );

  }

  return distances;

}

// Note: The MinPriorityQueue is a simple implementation of a priority queue that can be used for Dijkstra's algorithm. 
// You can implement it using a binary heap or any other efficient data structure.

class MinPriorityQueue{

  constructor(){
    this.queue = [];
  }

  enqueue(element, priority){
    this.queue.push({element, priority});
    this.queue.sort((a,b) => a.priority - b.priority);

  }

  dequeue(){
    return this.queue.shift();
  }

  isEmpty(){
    return this.queue.length === 0;
  }

}

const graph2 = new Graph();

graph2.addEdge("A", "B");
graph2.addEdge("A", "C");
graph2.addEdge("B", "D");
graph2.addEdge("C", "D");

console.log(("46   ")+ dijkstra(graph2, "A")); // {A:0, B:1, C:1, D:2}

//47 Implement a Simple A* Search Algorithm

// A* Search is a graph traversal and path search algorithm that finds the shortest path between nodes in a graph,

// which may represent, for example, road networks. It uses heuristics to improve performance.

function aStar(graph, start, goal, heuristic){

  let openSet = new MinPriorityQueue();
  let cameFrom = {};
  let gScore = {};
  let fScore = {};

  Object.keys(graph.adjacencyList).forEach(vertex => {
    gScore[vertex] = Infinity;
    fScore[vertex] = Infinity;
  });

  gScore[start] = 0;
  fScore[start] = heuristic(start, goal);
  openSet.enqueue(start, fScore[start]);

  while(!openSet.isEmpty()){

    let {element: current} = openSet.dequeue();

    if(current === goal){
      let path = [];
      while(current){
        path.unshift(current);
        current = cameFrom[current];
      }
      return path;
    }


    graph.getNeighbors(current).forEach(neighbor => {
      let tentativeGScore = gScore[current] + 1; // Assuming all edges have weight 1

      if(tentativeGScore < gScore[neighbor]){
        cameFrom[neighbor] = current;
        gScore[neighbor] = tentativeGScore;
        fScore[neighbor] = gScore[neighbor] + heuristic(neighbor, goal);

        if(!openSet.queue.some(item => item.element === neighbor)){
          openSet.enqueue(neighbor, fScore[neighbor]);
        }
      }
    }
    );

  }

  return null; // No path found

}
// Note: The heuristic function should be defined based on the specific problem domain.

function heuristic(vertex, goal){
  // Example
  const heuristics = {
    A: 3,
    B: 2,
    C: 1,
    D: 0
  };
  return heuristics[vertex] || 0;
}

const graph3 = new Graph();

graph3.addEdge("A", "B");
graph3.addEdge("A", "C");
graph3.addEdge("B", "D");
graph3.addEdge("C", "D");

console.log(("47   ")+ aStar(graph3, "A", "D", heuristic)); // A C D or A B D

//48. Implement a Simple Knapsack Problem Solution

// The Knapsack Problem is a combinatorial optimization problem that asks for the maximum value
// that can be put in a knapsack of a given capacity, given a list of items with weights and values.

function knapsack(weights, values, capacity){

  let dp = Array(weights.length + 1).fill(0).map(() => Array(capacity + 1).fill(0));

  for(let i=1; i<=weights.length; i++){
    for(let w=1; w<=capacity; w++){
      if(weights[i-1] <= w){
        dp[i][w] = Math.max(dp[i-1][w], dp[i-1][w - weights[i-1]] + values[i-1]);
      }
      else{
        dp[i][w] = dp[i-1][w];
      }
    }
  }

  return dp[weights.length][capacity];

}

const weights = [2,3,4];
const values = [3,4,5];
const capacity = 5;

console.log(("48   ")+ knapsack(weights, values, capacity)); // 7 (items with weight 2 and 3)

//49. Implement a Simple Longest Common Subsequence (LCS) Algorithm

// The Longest Common Subsequence problem is to find the longest subsequence common to two sequences.

function lcs(str1, str2){

  let dp = Array(str1.length + 1).fill(0).map(() => Array(str2.length + 1).fill(0));

  for(let i=1; i<=str1.length; i++){
    for(let j=1; j<=str2.length; j++){
      if(str1[i-1] === str2[j-1]){
        dp[i][j] = dp[i-1][j-1] + 1;
      }
      else{
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
      }
    }
    
  }

  return dp[str1.length][str2.length];

}

const str1 = "AGGTAB";
const str2 = "GXTXAYB";

console.log(("49   ")+ lcs(str1, str2)); // 4 (LCS is "GTAB")

//50. Implement a Simple Edit Distance Algorithm

// The Edit Distance (Levenshtein distance) is the minimum number of operations required to transform one string 
// into another, where the allowed operations are insertion, deletion, or substitution of a single character.

function editDistance(str1, str2){

  
  let dp = Array(str1.length + 1).fill(0).map(() => Array(str2.length + 1).fill(0));

  for(let i=0; i<=str1.length; i++){
    for(let j=0; j<=str2.length; j++){
      if(i === 0){
        dp[i][j] = j;
      }
      else if(j === 0){
        dp[i][j] = i;
      }
      else if(str1[i-1] === str2[j-1]){
        dp[i][j] = dp[i-1][j-1];
      }
      else{
        dp[i][j] = 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
      }
    }
  }

  return   dp[str1.length][str2.length];

  
}

const str3 = "kitten";


const str4 = "sitting";

console.log(
  ("50   ")+ editDistance(str3, str4)); // 3 (substitute 'k' with 's', substitute 'e' with 'i', insert 'g')

  //51. Implement a Simple Trie Data Structure

// A Trie (prefix tree) is a tree-like data structure that stores a dynamic set of strings, 

// where the keys are usually strings. It is used for efficient retrieval of a key in a dataset of strings.

class TrieNode{

  constructor(){
    this.children = {};
    this.isEndOfWord = false;
  }

}

class Trie{

  constructor(){
    this.root = new TrieNode();
  }

  insert(word){
    let current = this.root;

    for(let char of word){
      if(!current.children[char]){
        current.children[char] = new TrieNode();
      }
      current = current.children[char];
    }

    current.isEndOfWord = true;
  }

  search(word){
    let current = this.root;

    for(let char of word){
      if(!current.children[char]){
        return false;
      }
      current = current.children[char];
    }

    return current.isEndOfWord;
  }

}

const trie = new Trie();

trie.insert("hello");
trie.insert("world");

console.log(("51   ")+ trie.search("hello"));//true

console.log(("51   ")+ trie.search("world"));//true

console.log(("51   ")+ trie.search("hi")); // false

//52. Implement a Simple Heap Data Structure

// A Heap is a specialized tree-based data structure that satisfies the heap property. 
// In a max heap, for any given node C, if P is a parent node of C, then the key (the value) of P is greater than
//  or equal to the keyof C. In a min heap, the key of P is less than or equal to the key of C.

class MaxHeap{

  constructor(){
    this.heap = [];
  }

  insert(value){

    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);

  }

  bubbleUp(index){

    while(index > 0){
      let parentIndex = Math.floor((index - 1) / 2);

      if(this.heap[parentIndex] >= this.heap[index]){
        break;
      }

      [this.heap[parentIndex
], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];

      index = parentIndex;
    }

  }

  extractMax(){

    if(this.heap.length === 0){
      return null;
    }

    if(this.heap.length === 1){
      return this.heap.pop();
    }

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);

    return max;
  }

  bubbleDown(index){

    while(index < this.heap.length){
      let leftChild = 2 * index + 1;
      let rightChild = 2 * index + 2;
      let largest = index;

      if(leftChild < this.heap.length && this.heap[leftChild] > this.heap[largest]){
        largest = leftChild;
      }

      if(rightChild < this.heap.length && this.heap[rightChild] > this.heap[largest]){
        largest = rightChild;
      }

      if(largest === index){
        break;
      }

      [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
      index = largest;
    }

  }

}

const maxHeap = new MaxHeap();

maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(5);

console.log(("52   ")+ maxHeap.extractMax());

//53. Implement a Simple Min Heap Data Structure

class MinHeap{

  constructor(){
    this.heap = [];
  }

  insert(value){

    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);

  }

  bubbleUp(index){

    while(index > 0){
      let parentIndex = Math.floor((index - 1) / 2);

      if(this.heap[parentIndex] <= this.heap[index]){

        break;
      }

      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];

      index = parentIndex;
    }

  }

  extractMin(){

    if(this.heap.length === 0){
      return null;
    }

    if(this.heap.length === 1){
      return this.heap.pop();
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);

    return min;
  }


  bubbleDown(index){

    while(index < this.heap.length){
      let leftChild = 2 * index + 1;
      let rightChild = 2 * index + 2;
      let smallest = index;
      
      if(leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]){
        smallest = leftChild;
      }

      if(rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]){
        smallest = rightChild;
      }

      if(smallest === index){
        break;
      }

      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }

  }

}

const minHeap = new MinHeap();

minHeap.insert(10);
minHeap.insert(20);
minHeap.insert(5);

console.log(("53   ")+ minHeap.extractMin());

//54. Implement a Simple Priority Queue

class PriorityQueue{

  constructor(){
    this.queue = [];
  }

  enqueue(element, priority){
    this.queue.push({element, priority});
    this.queue.sort((a,b) => a.priority - b.priority);
  }

  dequeue(){
    return this.queue.shift();
  }

  isEmpty(){
    return this.queue.length === 0;
  }

}

const pq = new PriorityQueue();

pq.enqueue("Task 1", 2);
pq.enqueue("Task 2", 1);
pq.enqueue("Task 3", 3);

console.log(("54   ")+ pq.dequeue().element);

//55. Implement a Simple Circular Queue

class CircularQueue{

  constructor(size){
    this.queue = new Array(size);
    this.head = -1;
    this.tail = -1;
    this.size = size;
  }

  enqueue(value){

    if((this.tail + 1) % this.size === this.head){
      throw new Error("Queue is full");
    }

    if(this.head === -1){
      this.head = 0;
    }

    this.tail = (this.tail + 1) % this.size;
    this.queue[this.tail] = value;

  }

  dequeue(){

    if(this.head === -1){

      throw new Error("Queue is empty");
    }

    const value = this.queue[this.head];

    if(this.head === this.tail){
      this.head = -1;
      this.tail = -1;
    }
    else{
      this.head = (this.head + 1) % this.size;
    }

    return value;

  }

}

const cq = new CircularQueue(3);

cq.enqueue(1);
cq.enqueue(2);
cq.enqueue(3);

console.log(("55   ")+ cq.dequeue());
console.log(("55   ")+ cq.dequeue());

cq.enqueue(4);

console.log(("55   ")+ cq.dequeue());
console.log(("55   ")+ cq.dequeue());


//56. Implement a Simple Deque (Double-Ended Queue)

class Deque{

  constructor(){
    this.items = [];
  }

  addFront(value){
    this.items.unshift(value);
  }

  addRear(value){
    this.items.push(value);
  }

  removeFront(){
    return this.items.shift();
  }

  removeRear(){
    return this.items.pop();
  }

  isEmpty(){
    return this.items.length === 0;
  }

  size(){
    return this.items.length;
  }

}

const deque = new Deque();

deque.addRear(1);
deque.addRear(2);
deque.addFront(0);

console.log(("56   ")+ deque.removeFront());
console.log(("56   ")+ deque.removeRear());

//57 Implement a Simple Hash Table

class HashTable{

  constructor(size){
    this.table = new Array(size);
  }

  hash(key){
    let hash = 0;
    for(let char of key){
      hash += char.charCodeAt(0);
    }
    return hash % this.table.length;
  }

  set(key, value){
    const index = this.hash(key);
    if(!this.table[index]){
      this.table[index] = [];
    }
    this.table[index].push([key, value]);
  }

  get(key){
    const index = this.hash(key);
    if(this.table[index]){
      for(let [k, v] of this.table[index]){
        if(k === key){
          return v;
        }
      }
    }
    return undefined;
  }

}

const ht = new HashTable(10);

ht.set("name", "Shriniwas");
ht.set("age", 30);

console.log(("57   ")+ ht.get("name"));
console.log(("57   ")+ ht.get("age"));
console.log(("57   ")+ ht.get("gender")); // undefined


//58 Implement a Simple Bloom Filter

// A Bloom Filter is a space-efficient probabilistic data structure that is used to test whether 
//an element is a member of a set. It can return false positives but never false negatives.


class BloomFilter{

  constructor(size, hashCount){
    this.size = size;
    this.hashCount = hashCount;
    this.bitArray = new Array(size).fill(false);
  }

  hash(value, seed){
    let hash = 0;
    for(let char of value){
      hash = (hash * seed + char.charCodeAt(0)) % this.size;
    }
    return hash;
  }

  add(value){
    for(let i=0; i<this.hashCount; i++){
      const index = this.hash(value, i + 1);
      this.bitArray[index] = true;
    }
  }

  contains(value){
    for(let i=0; i<this.hashCount; i++){
      const index = this.hash(value, i + 1);
      if(!this.bitArray[index]){
        return false;
      }
    }
    return true;
  }

}

const bloomFilter = new BloomFilter(100, 3);

bloomFilter.add("hello");
bloomFilter.add("world");

console.log(("58   ")+ bloomFilter.contains("hello")); // true
console.log(("58   ")+ bloomFilter.contains("world")); // true
console.log(("58   ")+ bloomFilter.contains("test")); // false (may return true due to false positive)

//59 Implement a Simple Trie with Prefix Search

class TrieNode1{
  
  constructor(){
    this.children = {};
    this.isEndOfWord = false;
  }

}

class Trie1{

  constructor(){
    this.root = new TrieNode1();



  }  insert(word){
    let current = this.root;

    for(let char of word){
      if(!current.children[char]){
        current.children[char] = new TrieNode1();
      }
      current = current.children[char];
    }

    current.isEndOfWord = true;
  }

  search(word){
    let current = this.root;

    for(let char of word){
      if(!current.children[char]){
        return false;
      }
      current = current.children[char];
    }

    return current.isEndOfWord;
  }
  
  startsWith(prefix){
    let current = this.root;  
    
    for(let char of prefix){
      if(!current.children[char]){
        return false;
      }
      current = current.children[char];
    }

    return true;
  }

}

const trie2 = new Trie1();

trie2.insert("hello");
trie2.insert("world");

console.log(("59   ")+ trie2.search("hello")); // true
console.log(("59   ")+ trie2.search("world")); // true
console.log(("59   ")+ trie2.search("hi")); // false
console.log(("59   ")+ trie2.startsWith("he")); // true
console.log(("59   ")+ trie2.startsWith("wo")); // true
console.log(("59   ")+ trie2.startsWith("hi")); // false      

//60 Implement a Simple Graph with Adjacency Matrix

class GraphMatrix{

  constructor(size){
    this.size = size;
    this.matrix = new Array(size).fill().map(() => new Array(size).fill(false));
  }

  addEdge(v1, v2){
    this.matrix[v1][v2] = true;
    this.matrix[v2][v1] = true; // For undirected graph
  }

  hasEdge(v1, v2){
    return this.matrix[v1][v2];
  }

}

const graphMatrix = new GraphMatrix(5);

graphMatrix.addEdge(0, 1);
graphMatrix.addEdge(0, 2);
graphMatrix.addEdge(1, 3);

console.log(("60   ")+ graphMatrix.hasEdge(0, 1)); // true
console.log(("60   ")+ graphMatrix.hasEdge(0, 3)); // false 

//61 Implement a Simple Graph with Adjacency List

class GraphList{

  constructor(){
    this.adjacencyList = {};
  }

  addVertex(vertex){
    if(!this.adjacencyList[vertex]){
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2){
    this.addVertex(v1);
    this.addVertex(v2);
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1); // For undirected graph
  }

  getNeighbors(vertex){
    return this.adjacencyList[vertex] || [];
  }

}

const graphList = new GraphList();

graphList.addEdge("A", "B");
graphList.addEdge("A", "C");
graphList.addEdge("B", "D");

console.log(("61   ")+ graphList.getNeighbors("A")); // ["B", "C"]
console.log(("61   ")+ graphList.getNeighbors("B")); // ["A", "D"]
console.log(("61   ")+ graphList.getNeighbors("E")); // [] (no neighbors)

//62 Implement a Simple Graph with Edge List

class GraphEdgeList{

  constructor(){
    this.edges = [];
  }

  addEdge(v1, v2){
    this.edges.push([v1, v2]);
  }

  getEdges(){
    return this.edges;
  }

}

const graphEdgeList = new GraphEdgeList();

graphEdgeList.addEdge("A", "B");
graphEdgeList.addEdge("A", "C");
graphEdgeList.addEdge("B", "D");

console.log(("62   ")+ JSON.stringify(graphEdgeList.getEdges())); // [["A","B"],["A","C"],["B","D"]]

//63 Implement a Simple Graph with Incidence Matrix

class GraphIncidenceMatrix{

  constructor(vertices, edges){
    this.vertices = vertices;
    this.edges = edges;
    this.matrix = new Array(vertices.length).fill().map(() => new Array(edges.length).fill(0));
  }

  addEdge(edgeIndex, v1Index, v2Index){
    this.matrix[v1Index][edgeIndex] = 1;
    this.matrix[v2Index][edgeIndex] = 1; // For undirected graph
  }

  getIncidenceMatrix(){
    return this.matrix;
  }

}

const vertices = ["A", "B", "C", "D"];
const edges = ["e1", "e2", "e3"];

const graphIncidenceMatrix = new GraphIncidenceMatrix(vertices, edges);

graphIncidenceMatrix.addEdge(0, 0, 1); // e1 connects A and B
graphIncidenceMatrix.addEdge(1, 0, 2); // e2 connects A and C
graphIncidenceMatrix.addEdge(2, 1, 3); // e3 connects B and D

console.log(("63   ")+ JSON.stringify(graphIncidenceMatrix.getIncidenceMatrix())); 
// [[1,1,0],[1,0,1],[0,1,0],[0,0,1]]



  







  
  



                                                                                      














