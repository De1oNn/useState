
import './App.css';

// const click = (nice) => {
//   console.log(nice);
// }
// const [state, setState] = useState(["test", 1, 4]);

// const updatestate = () => {
//   const newState = state.map((useState) => {
//   if(useState === 1) {
//       return useState
//       }
//     });
//     setState(newState);
//   };
//   updatestate();





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>this is my state {state}</div>
        <p class = "font-bold">hello world</p>
        <button onClick={click}>click me</button>
      </header>
    </div>
  );
}

export default App;
