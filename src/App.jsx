import { useState } from "react";

function App() {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div>
      <button onClick={() => setMostrar(!mostrar)}>Mostrar/Ocultar</button>
      {mostrar && <p>Este texto aparece e some ):</p>}
    </div>
  );
}

export default App;
