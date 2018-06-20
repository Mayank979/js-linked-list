let list;

function setup(){
    noCanvas();
    list = new LinkedList();
    for (let i = 0; i < 10; i++){
        list.addValue(floor(random(10)));
    }
    console.log(list);
    list.traverse();
    list.search(100);
}
