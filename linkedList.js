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