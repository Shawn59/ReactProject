import React from 'react';
import TextField from '@material-ui/core/TextField';
import CustomChip from '../customItems/chip'
import {connect} from "react-redux";
import PropTypes from 'prop-types'
import {getGitUsers, getGitProjects} from "../../service/actions";
import Button from '@material-ui/core/Button';
import CustomSelect from '../customItems/select'
import UserReducer from "../../service/reducers/user-reducer";


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
        const {users, projects} = this.props;
        return (
            <div className='operation-block-content flex-center'>
                <div className='row flex-center'>
                    {/*<Label value={'Название группы:'} classStyle={props.classStyle}/>*/}
                    <TextField className={'textField'} label={'Введите название группы'}/>
                </div>
                {/*<span>{users && users[0]? users[0].name : 'NOT'}</span>*/}
                <div className='row flex-center'>
                    <CustomSelect data={projects ? projects: []}/>
                </div>

                <div className='row flex-center'>
                    <CustomChip label={'Посоны'} data={users ? users : []}/>
                   {/* <div>{Api.users[0] ? Api.users[0].name : ''}</div>*/}
                </div>
            </div>
        );
    }
};

class FooterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1
        };
    }

    onBtnClick = () => {
        this.props.getPhotos(); // setYear -> getPhotos
    };

    render() {
        const {parentProps} = this.props;
        return (
            <div className={'titlePage'}>
                <Button variant="outlined" onClick={this.onBtnClick} size="medium" color="secondary">
                    Medium
                </Button>
            </div>
        );
    }
};

class GroupsOperationPage extends React.Component {
    constructor (props) {
        super(props);
        this.PropTypes = {
            users: PropTypes.array.isRequired
        };
    }
    render() {
        const { users, projects } = this.props;
        return (
            <div className='operation-block'>
                <HeaderPage title={'Операция над группами'}/>
                <ContentPage users={users} projects={projects}/>
                <FooterPage/>
            </div>
        );
    }
}



// Отлавливает возвращаемое значение из редьюсера, который возвращает state
// и добавляет свойство users в props для оборачиваемого компонента коннектом, в данном случаи GroupsOperationPage
// И подписывается(subscribe) на изменения этих данных
const mapStateToProps = (reducerState) => {
    //console.log(reducerState.page.users);
    return {
        users: reducerState.PageReducer.users,
        projects: reducerState.PageReducer.projects,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getGitUsersDispatch: dispatch(getGitUsers()),
        getGitProjectsDispatch: dispatch(getGitProjects()),
        //передаём ссылку на функцию
       // getPhotosDispatch: () => dispatch(getPhotos())
    }
};

// connect - компонент высшего порядка, который внутри себя создаёт новый компонент, которые оборачивает наш компонент
//например APP
// экспортируем новый компонент APP со связанным редаксом

export default connect(mapStateToProps, mapDispatchToProps)(GroupsOperationPage);