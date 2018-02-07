import React ,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Landing extends Component{
componentWillMount(){
  this.props.fetchLanding();
}

render(){
  const {
   title,
   imagetitle,
   imagevision,
   imagemission,
   imagevalues,
   imagecontact,
   featuredname,
   featuredimage,
   featureddate,
   featuredlink
 } = this.props.landing
    return(
      <div>{title}</div>
    )
  }
}

function mapStateToProps(state){
    return({landing:state.landing})
}

export default connect(mapStateToProps,actions)(Landing);
