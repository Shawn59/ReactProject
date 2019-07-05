import React from 'react';
import TextField from '@material-ui/core/TextField';
import MyChip from '../customItems/chip'
import {connect} from "react-redux";
import {getGitUsers} from "../../service/actions";

const HeaderPage = (props) => {
  return (
      <div className='operation-block-header'>
          <span> {props.title} </span>
      </div>
  );
};


class ContentPage extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        const {users} = this.props.data;
        console.log(this.props.users);
        return (
            <div className='operation-block-content flex-center'>
                <div className='row flex-center'>
                    {/*<Label value={'Название группы:'} classStyle={props.classStyle}/>*/}
                    <TextField className={'textField'} label={'Введите название группы'}/>
                </div>
                <span>{users ? users[0].name : 'NOT'}</span>

                <div className='row flex-center'>
                    <MyChip label={'Посоны'} data={users ? users : []}/>
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
        super(props);
    }
    render() {
        //console.log(this.props.users);
        return (
            <div className='operation-block'>
                <HeaderPage title={'Операция над группами'}/>
                <ContentPage data={this.props}/>
                <FooterPage/>
            </div>
        );
    }
}

const mapStateToProps = ({users}) => {
    return {users};
};

/*const mapDispatchToProps = (dispatch) => {
    return {
        getGitUsers: dispatch(getGitUsers())
    }
};*/

// connect - компонент высшего порядка, который внутри себя создаёт новый компонент, которые оборачивает наш компонент
//например APP
// экспортируем новый компонент APP со связанным редаксом

export default connect(mapStateToProps)(GroupsOperationPage);