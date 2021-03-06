import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';


class Header extends Component {
  renderLinks(){
    if(this.props.authenticated){
      return [
        <li className="nav-item" key={4}>
          <Link className="nav-link" to="/admin">Dashboard</Link>
        </li>,
        <li className="nav-item" key={5}>
          <Link className="nav-link" to="/signout">Sign out</Link>
        </li>
        ]
    } else {
      return [
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/signin">Sign in</Link>
        </li>,
        <li className="nav-item" key={3}>
          <Link className="nav-link" to="/signup">Sign up</Link>
        </li>,

      ];
    }
  }

  render(){
    return(
      <nav className="navbar navbar-light">
        <Link to="/" className="navbar-brand">React Ardent</Link>
        <ul className="nav navbar-nav">
          <li className="nav-item" key={1}>
            <Link className="nav-link" to="/portfolio">Our Works</Link>
          </li>
          {this.renderLinks()}
        </ul>
      </nav>
    )
  }
}

function mapStateToProps(state){
  return {
    authenticated:state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Header);
