function add(){
    const usd = document.getElementById("ievade");
    const listitem = document.createElement('li');
    listitem.textContent = usd;
    document.getElementById('list').appendChild(listitem);
}