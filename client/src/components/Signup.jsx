import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  }


  render() {
    return (
      <div>
        <form>
          <label>
            Username:
            <input type="text" name="username" onChange={(e) => this.setState({ username: e.target.value})}/>
          </label>
          <label>
            Password:
            <input type="text" name="password" onChange={(e) => this.setState({ password: e.target.value})}/>
          </label>
          <input type="submit" value="Submit" onClick={() => this.props.signupUsers(this.state)}/>
        </form>
      </div>
    )
  }
}

export default Signup;
