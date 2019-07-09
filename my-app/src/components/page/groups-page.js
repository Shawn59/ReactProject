import React from 'react';
import ConfigJS from '../config/config';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import {BrowserRouter as Router, Route, NavLink, Link, Switch} from 'react-router-dom';

/*import Connect from '../config/connect'*/
const Config = ConfigJS;

const useStyles = makeStyles(theme => ({
   margin: {
       marginTop: '20px',
   }
}));


class GroupsPage extends React.Component {
    constructor (props) {
        super();
        this.state = {
            style: {
                color: 'red'
            },
            users: [],
            projects: [],
            groups: []
        };
        this.classes = useStyles;
    }

    render() {
        return (
            <div>
                <h3 style={this.state.style}>'Драсте пиплы'</h3>
                <div>
                    <span>Группы :</span>
                    <Fab size="medium"
                         color="secondary"
                         aria-label="Add"
                         className={this.classes.hey}
                         component={Link}
                         to={'groupsOperation'}>
                        <AddIcon />
                    </Fab>
                    <ul>
                        {this.state.groups.map(item => (
                            <li key={item.id}> {item.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default GroupsPage;