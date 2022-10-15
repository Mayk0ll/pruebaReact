// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { Formulario } from './components/formulario/Formulario';
import { ListDocuments } from './components/listDocuments/ListDocuments';

function App() {

  return (
    <div className="App">
      <main>
        <Formulario />
      </main>
        <ListDocuments />
    </div>
  );
}

export default App;
