let n = 'no1'
let now = 'now'
let ntnow = 'nt-now'
function change(path, nd){
    document.getElementById("mod").setAttribute('src', path);
    document.getElementById(n).classList.remove(now);
    document.getElementById(n).classList.add(ntnow);
    n = nd;
    document.getElementById(nd).classList.remove(ntnow);
    document.getElementById(nd).classList.add(now);
    transition
}
