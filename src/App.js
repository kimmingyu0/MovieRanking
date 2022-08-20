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
/*function App() {
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
        <h1>TheCoins {loading? "" : `(${coins.length})`}</h1>
        {loading ? <strong>Loading...</strong> : <select>
            {
                coins.map((coin)=>
                    <option>
                        {coin.name} ({coin.symbol}) : {coin.quotes.USD.price}USD
                    </option>)
            }
        </select>}

    </div>
    )
}*/
function App(){
    const [loading,setLoading] = useState(true);
    const [movies,setMovies] = useState([]);
    const getMovies = async ()=> {
        const response = await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
        );
        const json = await  response.json();
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(()=>{
        /*fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
        )
            .then(response => response.json())
            .then((json) =>{
                setMovies(json.data.movies);
                setLoading(false);
            });*/
        getMovies()
    },[])
    console.log(movies)
    return(
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) :  (
                <div>{movies.map((movie) => (
                    <div key={movie.id}>
                        <img src={movie.medium_cover_image} />
                        <h2>{movie.title}</h2>
                        <p>{movie.summary}</p>
                        <ul>
                            {movie.genres.map(g =>(
                                <li key={g}>{g}</li>
                            ))}
                        </ul>
                    </div>
                ))}
                </div>)}
        </div>
    );
}

export default App;
