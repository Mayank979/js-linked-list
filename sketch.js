let list;

function setup(){
    noCanvas();
    list = new LinkedList();
    for (let i = 0; i < 2; i++){
        list.addValue(floor(random(10)));
    }
    console.log(list);
    list.traverse();
    list.search(100);
    list.reverse();
    list.traverse();
}
