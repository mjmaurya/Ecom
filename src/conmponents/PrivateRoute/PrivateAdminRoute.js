import { Route,Redirect } from "react-router-dom";
const PrivateAdminRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            localStorage.user!=='null' && localStorage.role === 'admin' ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);

export default PrivateAdminRoute;