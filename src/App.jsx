import { useState, useEffect } from "react";
import BotaoContador from "./components/BotaoContador";

function App() {
  const [quantidade, setQuantidade] = useState(0);

  return (
    <div>
      <BotaoContador
        valor={quantidade}
        onClick={() => setQuantidade(quantidade + 1)}
      />
    </div>
  );
}
export default App;
