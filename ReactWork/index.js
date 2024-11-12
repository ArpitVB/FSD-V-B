console.log("hello")


const parent = document.getElementById('root')
console.log(parent)
console.dir(parent)

const root = ReactDOM.createRoot(parent);

// let h1 = React.createElement("h1",{style:{color:"lightcoral"}},"Abes Engineering College")

// let l1 =React.createElement("li",{},"Orange")
// let l2 =React.createElement("li",{},"Apple")
// let ul =React.createElement("ul",{style:{backgroundColor:'red'}},l1,l2)

const element = <h1>Hello, world!</h1>

let l1 = <li>Orange</li>
let l2 = <li>Apple</li>
let ul = <ul>{l1}{l2}</ul>



const container =(
    <div style = {{backgroundColor:'cyan'}}>
    <div>{element}</div>
    <div>{ul}</div>
    </div>

)


root.render(container)