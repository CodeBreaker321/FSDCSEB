// console.log("hiii")
// let div = document.querySelector('#content');
// let h2 = document.createElement("h2")
// div.appendChild(h2)
// h2.innerHTML="<span style='color: red;'>WELCOME TO REACT"
// h2.style.color="green"

console.log("Hello React");
const parent = document.getElementById("content");
const root = ReactDOM.createRoot(parent);
// const h2 = React.createElement("h2",{ style: { color: "red" } },"Welcome to React Js");
const list = React.createElement("li",{},"orange")
const list2 = React.createElement("li",{style:{color:'red'}},"apple")
const list3 = React.createElement("li",{},"grape")
const list4 = React.createElement("li",{style:{color:'gold'}},"banana")
const ul = React.createElement("ul",{},list,list2,list3,list4)
// root.render(ul)
// root.render(h2);
const lst1=<li>apple</li>
const lst2=<li>guava</li>
const lst3=<li>peach</li>
const lst4=<li>banana</li>
const ulst=<ul>{lst1}{lst2}{lst3}{lst4}</ul>

const mystyle={
    backgroundcolor:'yellow'
}
const container=(
    <div style={mystyle}>
        <div>Welcome</div>
        <div>{ulst}</div>
        <div>{ul}</div>
    </div>
)
root.render(container)
// const h1 = <h1>welcome</h1>
// root.render(h1)