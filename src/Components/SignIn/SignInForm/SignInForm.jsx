import React from 'react';
import './SignInForm.css';
import authApiService from '../../../services/auth-api-service';
import UserContext from '../../../contexts/UserContext';

class SignInForm extends React.Component {
  static defaultProps = {
    onLoginSuccess: () => { },
  }

  static contextType = UserContext;

  state = {
    username: '',
    password: '',
    error: null,
  }

  firstInput = React.createRef();

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { username, password } = this.state;
    this.setState({ error: null });

    authApiService.postLogin({username, password})
      .then(res => {
        this.setState({
          username: '',
          password: ''
        });
        this.context.processLogin(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  componentDidMount() {
    this.firstInput.current.focus();
  }

  render = () => {
    const { error } = this.state;
    return (     
      <form 
        className="SignInForm"
        onSubmit={this.handleSubmit}>

        <div role='alert' className='italic'>
          {error && <p className='alert'>{error}</p>}
        </div>
        
        <label htmlFor='login-username-input'
        >
          Username
        </label>
        <input  
          ref={this.firstInput}
          onChange={(ev) => this.setState({ username: ev.target.value })}
          id='login-username-input'
          autoComplete='username'
          required
        ></input>

        <label htmlFor='login-password-input'>
          Password
        </label>
        <input 
          onChange={(ev) => this.setState({ password: ev.target.value })}
          type="password"
          id='login-password-input'
          autoComplete='current-password'
          required
          ></input>

        <button type='submit'>
          Magic
        </button>
      </form>
    )
  }
}

export default SignInForm;