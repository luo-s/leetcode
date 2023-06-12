/*
Design your implementation of the linked list. You can choose to use a singly or 
doubly linked list.
A node in a singly linked list should have two attributes: val and next. val is 
the value of the current node, and next is a pointer/reference to the next node.
If you want to use the doubly linked list, you will need one more attribute prev
 to indicate the previous node in the linked list. Assume all nodes in the 
 linked list are 0-indexed.

Implement the MyLinkedList class:

MyLinkedList() Initializes the MyLinkedList object.

int get(int index) Get the value of the indexth node in the linked list. 
If the index is invalid, return -1.

void addAtHead(int val) Add a node of value val before the first element of the 
linked list. After the insertion, the new node will be the first node of the 
linked list.

void addAtTail(int val) Append a node of value val as the last element of the 
linked list.

void addAtIndex(int index, int val) Add a node of value val before the indexth 
node in the linked list. If index equals the length of the linked list, the 
node will be appended to the end of the linked list. If index is greater than 
the length, the node will not be inserted.

void deleteAtIndex(int index) Delete the indexth node in the linked list, if 
the index is valid.

*/

var MyNode = function (val, next = null) {
  this.val = val;
  this.next = next;
};

var MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.length) return -1;
  return this._getNode(index).val;
};

MyLinkedList.prototype._getNode = function (index) {
  if (index < 0 || index >= this.length) return null;
  let curNode = this.head;
  for (let i = 0; i < index; i++) {
    curNode = curNode.next;
  }
  return curNode;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = new MyNode(val);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head = newNode;
  }
  this.length++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = new MyNode(val);
  if (!this.tail) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.length++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.length) return null;
  if (index === 0) return this.addAtHead(val);
  if (index === this.length) return this.addAtTail(val);
  const newNode = new MyNode(val);
  const curNode = this._getNode(index - 1);
  const nextNode = this._getNode(index);
  curNode.next = newNode;
  newNode.next = nextNode;
  this.length++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.length) return null;
  if (index === 0) {
    this.head = this.head.next;
  } else if (index === this.length - 1) {
    const curNode = this._getNode(index - 1);
    curNode.next = null;
    this.tail = curNode;
  } else {
    const curNode = this._getNode(index - 1);
    const nextNode = this._getNode(index + 1);
    curNode.next = nextNode;
  }
  this.length--;
};

MyLinkedList.prototype.print = function () {
  const li = [];
  let curNode = this.head;
  while (curNode !== null) {
    li.push(curNode.val);
    curNode = curNode.next;
  }
  console.log(li);
};
