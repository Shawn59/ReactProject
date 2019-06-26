import React from 'react';
import './App.css';
import ToDoList from './components/todo-list';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import {isTSImportType} from "@babel/types";
import NavMenu from './components/nav-menu';
import {BrowserRouter as Router} from "react-router-dom";



function App() {

  const todoDate = [
      { id: 'dd',
        label: 'первый',
        important: true
      },

      {
          id: 'aa',
          label: 'второй',
          important: true
      },

      {
          id: 'ff',
          label: 'третий',
          important: false
      }
  ];

 /* return (
    <div className="App">
      <header className="App-header">
        <AppHeader/>
        <SearchPanel/>
        <ToDoList listDate={todoDate}/>
      </header>
    </div>
  );*/

    return (
        <div className="App">
            <header className="App-header">
                {/*<Router>
                    <NavMenu/>
                </Router>*/}
            </header>
        </div>
    );
}

export default App;
