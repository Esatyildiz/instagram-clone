import AuthLayout from "./pages/auth";
import Login from "./pages/login";
import PrivateRoute from './Components/PrivateRoute';

const routes = [
    {
        path: '/',
        auth: true
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            }
        ]
    }
]


const autchek = routes => routes.map(route => {
    if (route?.auth) {
        route.element = <PrivateRoute>{route.element}</PrivateRoute>
    }
    if (route?.children) {
        route.children = autchek(route.children)

    }
    return route
})

export default autchek(routes);