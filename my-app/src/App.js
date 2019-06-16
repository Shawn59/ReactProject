import React from 'react';
import './App.css';
import ToDoList from './components/todo-list';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';



function App() {

  const todoDate = [
      {
        label: 'первый',
        important: true
      },

      {
          label: 'второй',
          important: true
      },

      {
          label: 'третий',
          important: false
      }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <AppHeader/>
        <SearchPanel/>
        <ToDoList listDate={todoDate}/>
      </header>
    </div>
  );
}

export default App;
