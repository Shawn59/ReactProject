import React from 'react';
import './App.css';
import './components/css';
import NavMenu from './components/nav-menu';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import MyRouters from "./service/routers";
import ApiRest from './components/api/api'

function App() {
    /*const Api = new ApiRest();
    const methodList = ['getGitUsers'];
    for (let i = 0; i < methodList.length; i++) {
        Api[methodList[i]]();
    }*/

    const style = {
        background: `url(${require('./images/andruha.jpg')}) `, //no-repeat
    };

    return (
        <div className="App">

            <header className="App-header" style={style}>
                <Router>
                    <NavMenu/>

                    <Switch>
                        {MyRouters.map((item) => (
                            <Route key={item.id} path={item.url} exact={item.exact} component={item.component}/>
                        ))}
                        <Route render={() => <h2> Страница не найдена </h2>}/>
                    </Switch>

                </Router>
            </header>

        </div>
    );
}

export default App;
