import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import './PrivateRoute.css';

function PrivateRoute({ component, ...props }) {
  const Component = component;
  return (
    <div className='PrivateRoute'>
      <Route
        {...props}
        render={componentProps => (
          <UserContext.Consumer>
            {userContext => 
              !!userContext.user.id
                ? <Component {...componentProps} />
                : (
                  <Redirect
                    to={{
                      pathname: '/signin',
                      state: { from: componentProps.location },
                    }}
                  />
                )
            }
          </UserContext.Consumer>
        )}
      />  
    </div>
  )
}

export default PrivateRoute;