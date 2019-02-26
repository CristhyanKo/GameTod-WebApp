import DefaultLayout from './container/default-layout.cointainer'
import Dashboard from './pages/dashboard.page';
import Profile from './pages/profile.page';

const routes = [
    { path: '/', exact: true, name: 'Início', component: DefaultLayout },
    { path: '/dashboard', name: 'Início', component: Dashboard },
    { path: '/profile', name: 'Perfil', component: Profile },
];

export default routes;