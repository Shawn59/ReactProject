import React from 'react';
import TextField from '@material-ui/core/TextField';
import { fade, withStyles, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import MyChip from '../customItems/chip'

import {connect} from "react-redux";
import {getGitUserList} from "../../service/actions";

const HeaderPage = (props) => {
  return (
      <div className='operation-block-header'>
          <span> {props.title} </span>
      </div>
  );
};


class ContentPage extends React.Component {
    constructor (props) {
        super();
        this.state = {
            users: []
        }
    }

    render() {
        return (
            <div className='operation-block-content flex-center'>
                <div className='row flex-center'>
                    {/*<Label value={'Название группы:'} classStyle={props.classStyle}/>*/}
                    <TextField className={'textField'} label={'Введите название группы'}/>
                </div>

                <div className='row flex-center'>
                    <MyChip label={'Посоны'} data={[]}/>
                   {/* <div>{Api.users[0] ? Api.users[0].name : ''}</div>*/}
                </div>
            </div>
        );
    }
};

const FooterPage = (props) => {
    return (
        <div className={'titlePage'}>
            <span> titleText </span>
        </div>
    );
};

class GroupsOperationPage extends React.Component {
    constructor (props) {
        super();
    }
    render() {
        const { classes } = this.props;
        return (
            <div className='operation-block'>
                <HeaderPage title={'Операция над группами'}/>
                <ContentPage/>
                <FooterPage/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        inc: dispatch(getGitUserList())
    }
};

// connect - компонент высшего порядка, который внутри себя создаёт новый компонент, которые оборачивает наш компонент
//например APP
// экспортируем новый компонент APP со связанным редаксом

export default connect(mapStateToProps, mapDispatchToProps)(GroupsOperationPage);