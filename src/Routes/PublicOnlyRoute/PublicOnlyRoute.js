import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import "./PublicOnlyRoute.css";

function PublicOnlyRoute ({ component, ...props}) {
  const Component = component;
  return (
    <div className='PublicOnlyRoute'>
      <Route  
        {...props}
        render={componentProps => (
          <UserContext.Consumer>
            {userContext => 
              !!userContext.user.id ? (
                <Redirect to={"/"} />
              ) : (
                <Component {...componentProps} />
              )
            }
          </UserContext.Consumer>
        )}
      />
    </div>
  )
}

export default PublicOnlyRoute;