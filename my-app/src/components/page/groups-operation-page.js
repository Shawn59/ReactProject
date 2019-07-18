import React from 'react';
import {connect} from "react-redux";
import TextField from "@material-ui/core/TextField";
import CustomSelect from "../customItems/select";
import CustomChip from "../customItems/chip";
import Button from "@material-ui/core/Button";
import {
    getGitProjects,
    getGitUsers,
    addGroup,
    getGitUsersForProject
} from "../../service/actions";

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
        const {usersForProject, projects, getGitUsersForProject} = this.props;
        return (
            <div className='operation-block-content flex-center'>
                <div className='row flex-center'>
                    {/*<Label value={'Название группы:'} classStyle={props.classStyle}/>*/}
                    <TextField className={'textField'} label={'Введите название группы'}/>
                </div>
                {/*<span>{users && users[0]? users[0].name : 'NOT'}</span>*/}
                <div className='row flex-center'>
                    <CustomSelect data={projects ? projects: []} callback={getGitUsersForProject}/>
                </div>

                <div className='row flex-center'>
                    <CustomChip label={'Посоны'} data={usersForProject ? usersForProject : []}/>
                    {/* <div>{Api.users[0] ? Api.users[0].name : ''}</div>*/}
                </div>
            </div>
        );
    }
};

class FooterPage extends React.Component {
    constructor(props) {
        super(props);
    }

    onBtnClick = () => {
        this.props.addGroup(this.props.projects, this.props.users);
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
    }
    render() {
        const { users, projects, usersForProject } = this.props;
        return (
            <div className='operation-block'>
                <HeaderPage title={'Добавление проекта'}/>
                <ContentPage usersForProject={usersForProject}
                             projects={projects}
                             getGitUsersForProject={this.props.getGitUsersForProject}
                />
                <FooterPage users={users}
                            projects={projects}
                            addGroup={this.props.addGroup}
                />
            </div>
        )
    }
}

export default ProjectPage;