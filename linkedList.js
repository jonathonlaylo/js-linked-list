/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var head = null;

  function getHead(){
    return head;
  }

  function getTail(){
    var curNode = head;
    // curNode could be null
    while (curNode !== null){
      //curNode is a node, its not null
      //check if curNode has next node
      if (curNode.next !== null){
      //if it does, set curNode to next, beacuse its not tail
        curNode = curNode.next;
      } else {
        //else return curNode, beacuse its a tail
        return curNode;
      }
    }
    return curNode;
  }

  function add(newValue){
    var tail = getTail();
    //tail could be null
    var newNode = {
      value : newValue,
      next : null
    };
    if (head === null) {
      head = newNode;
      tail = head;
      return head;
    } else {
      //set tails next to newNode
      tail.next = newNode;
    }
    tail = newNode;
    return tail;
  }

  function remove(num){
    var previousNode = get(num - 1);
    var curNode = get(num);
    var nextNode = curNode.next;
    // var removeNode = null;
    // var previousNode = get(index - 1);
    // var i = 0;

    if (head === null || curNode === false){
      return false;
    } else if (num === 0){
      head = head.next;
    } else {
      previousNode.next = nextNode;
    }
  }

  function get(num){
    var curNode = head;
    var i = 0;

    while (i < num){
      curNode = curNode.next;
      if (curNode === null){
        curNode = false;
        break;
      }
      i++;
    }
    return curNode;
  }

  function insert(value, index){
    var previousNode = get(index - 1);
    var curNode = get(index);
    var newNode = {
      value : value,
      next : curNode
    };

    if (index === 0){
      head = newNode;
    } else if(curNode === false || index < 0) {
      return false;
    } else {
      previousNode.next = newNode;
    }
  }

  return{
    getHead : getHead,
    getTail : getTail,
    add : add,
    remove : remove,
    get : get,
    insert : insert
  };
}