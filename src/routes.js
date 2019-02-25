import DefaultLayout from './container/default-layout.cointainer'
import Dashboard from './pages/dashboard.page';

const routes = [
    { path: '/', exact: true, name: 'Início', component: DefaultLayout },
    { path: '/dashboard', name: 'Início', component: Dashboard },
];

export default routes;