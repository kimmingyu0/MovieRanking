import Button from "./Button";
import styles from "./App.module.css"
import {useEffect, useState} from "react";

//function App() {
    //part 1 ToDoList
    // const [toDo,setToDo] = useState("");
    // const [toDos,setToDos] = useState([]);
    // const onChange = (event) => setToDo(event.target.value);
    // const onSubmit = (event) => {
    //     event.preventDefault();
    //     if(toDo===""){
    //         return;
    //     }
    //     setToDos(currentArrays =>[toDo,...toDos]);
    //     setToDo("");
    //
    // }
    //return (
        //part 1 ToDoList
        // <div>
        //
        //     <h1>My To DoS ({toDos.length})</h1>
        //     <form onSubmit={onSubmit}>
        //         <input
        //             onChange={onChange}
        //             value={toDo}
        //             placeholder="Write your to do..."
        //         />
        //         <button>Add To Do</button>
        //     </form>
        //     <hr />
        //     <ul>
        //         {toDos.map((item, index)=> (
        //             <li key={index}>{item}</li>
        //         ))}
        //     </ul>
        // </div>
    //)
//}
function App() {
    const [loading,setLoading] = useState(true);
    const [coins,setCoins] = useState([])
    useEffect(()=>{
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json)=>{
                setCoins(json);
                setLoading(false);
            });
    },[])
    return (
    <div>
        <h1>TheCoins {coins.length}</h1>
        {loading ? <strong>Loading...</strong> : null}
        <ul>
            {
                coins.map((coin)=>
                    <li>
                        {coin.name} ({coin.symbol}) : {coin.quotes.USD.price}USD
                    </li>)
            }
        </ul>
    </div>
    )
}

export default App;
