import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class PortfolioIndex extends Component {

  render(){
    return(
      <div>Portfolio Index</div>
    )
  }
}


export default connect(null,actions)(PortfolioIndex);
