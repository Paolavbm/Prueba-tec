import { useDispatch } from "react-redux";
import ListPokemon from "../components/ListPokemon";
import EnviarAFirebase from "../firebase/EnviarAFirebase";

function App() {
  const dispatch = useDispatch()

  return (
    <div className="App">
     <ListPokemon/>
    
    </div>
  );
}

export default App;
