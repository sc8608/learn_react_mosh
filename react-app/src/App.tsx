import ListGroup from "./components/ListGroup";

function App() {
  let city_items = ["NewY", "SanF", "Tokyo"];
  return (
    <div>
      <ListGroup items={city_items} heading="Cities" />
    </div>
  );
}

export default App;
