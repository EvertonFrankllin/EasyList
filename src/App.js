import './App.css';

function App() {
  return (
    <div className="App">
      <div class="container">
        
        <form id="itemForm">
            <input type="text" id="itemInput" placeholder="Adicionar item..." required />
            <button type="submit">Adicionar</button>
        </form>
        <ul id="itemList"></ul>
    </div>
    </div>
  );
}

export default App;
