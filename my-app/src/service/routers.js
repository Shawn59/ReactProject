import ProjectPage from "../components/page/project-page";
import GroupsPage from "../components/page/groups-page";
import HomePage from "../components/page/home-page";
import GroupsOperationPage from "../components/page/groups-operation-page";

export default [
    {
        id: 'project',
        url: '/project',
        component: ProjectPage,
    },
    {
        id: 'groups',
        url: '/groups',
        component: GroupsPage,
    },
    {
        id: 'home',
        exact: true, // Только точно совпадение (?)
        url: '/',
        component: HomePage,
    },
    {
        id: 'groupsOperation',
        url: '/groupsOperation',
        component: GroupsOperationPage,
    },
];