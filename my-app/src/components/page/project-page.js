import React from 'react';
import {connect} from "react-redux";
import TextField from "@material-ui/core/TextField";
import CustomSelect from "../customItems/select";
import CustomChip from "../customItems/chip";
import Button from "@material-ui/core/Button";
import {getGitProjects, getGitUsers} from "../../service/actions";

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
        this.props.addProject(this.props.projects, this.props.users); // setYear -> getPhotos
    };

    render() {
        const {users, projects, addProject} = this.props;
        return (
            <div className={'titlePage'}>
                <Button variant="outlined" onClick={this.onBtnClick} size="medium" color="secondary">
                    Medium
                </Button>
            </div>
        );
    }
};

class ProjectPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            style: {
                color: 'blue'
            }
        };
    }
    render() {
        const { users, projects, addProject } = this.props;
        return (
            <div className='operation-block'>
                <HeaderPage title={'Добавление проекта'}/>
                <ContentPage users={users}
                             projects={projects}
                />
                <FooterPage users={users}
                            projects={projects}
                            addProject={addProject}
                />
            </div>
        )
    }
}

// Отлавливает возвращаемое значение из редьюсера, который возвращает state
// и добавляет свойство users в props для оборачиваемого компонента коннектом, в данном случаи GroupsOperationPage
// И подписывается(subscribe) на изменения этих данных
const mapStateToProps = (reducerState) => {
    //console.log(reducerState.page.users);
    return {
        users: reducerState.GitReducer.users,
        projects: reducerState.GitReducer.projects,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getGitUsersDispatch: dispatch(getGitUsers()),
        getGitProjectsDispatch: dispatch(getGitProjects()),
        //addProject: (projects, users) => dispatch(addProjects(projects, users)),

        //передаём ссылку на функцию
        // getPhotosDispatch: () => dispatch(getPhotos())
    }
};

// connect - компонент высшего порядка, который внутри себя создаёт новый компонент, которые оборачивает наш компонент
//например APP
// экспортируем новый компонент APP со связанным редаксом

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);