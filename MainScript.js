
let linkedlist = new Object();
linkedlist.head = node;
linkedlist.tail = null;
function sort(a){
    a.foreach((element, index) =>
    {
        new_node = new Object();
        new_node.value = element;
        if(index == 0){    
            new_node.next = null;
            new_node.prev = null;
            linkedlist.head = new_node;
        }
        else if(element.length<=2){
            new_node.next = linkedlist.head;
            linkedlist.head.prev = new_node;
            if(linkedlist.tail = null){
                linkedlist.tail = linkedlist.head;
            }
            linkedlist.head = new_node;
        }
        else{
            if(linkedlist.tail == null){
                linkedlist.tail = new_node;
                linkedlist.head.next = new_node;
            }
            else{
                new_node.prev = linkedlist.tail;
                linkedlist.tail.next = new_node;
                linkedlist.tail = new_node;
            }
        }
    })
    let returned_array = [];
    while(linkedlist.head != null){
        returned_array.push(linkedlist.head);
        linkedlist.head = linkedlist.head.next;
    }
}
let a = [[1,2,3][1,2],[1]];
sort(a);
