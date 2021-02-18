import Apples from "./Apples";

function App() {
  const name = "Jane Doe";
  const day = "Friday";

  return (
    <div>
      <h1>
        Shopping List for {name} to be bought on {day}
      </h1>
      <ul>
        <li>Instagram</li>
        <li>WhatsApp</li>
        <li>Oculus</li>
      </ul>
      <Apples />
    </div>
  );
}

export default App;
