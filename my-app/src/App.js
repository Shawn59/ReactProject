import React from 'react';
import './App.css';
import './components/css';
import NavMenu from './components/nav-menu';
import MyRouters from "./service/routers";
import {Route, Switch} from "react-router";

function App() {
    const style = {
        background: `url(${require('./images/andruha.jpg')}) `, //no-repeat
    };
    return (
        <div className="App">
            <header className="App-header" style={style}>
                <NavMenu/>
                <Switch>
                    {MyRouters.map((item) => (
                        <Route key={item.id} path={item.url} exact={item.exact} component={item.component}/>
                    ))}
                    <Route render={() => <h2> Страница не найдена </h2>}/>
                </Switch>
            </header>
        </div>
    );
}

export default App;
