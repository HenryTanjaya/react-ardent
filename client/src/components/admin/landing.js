import React,{Component} from 'react';
import { reduxForm , Field, change } from 'redux-form';
import {connect} from 'react-redux';
import jQuery from 'jquery';
import * as actions from '../../actions';

class AdminLanding extends Component {
  constructor(props){
    super(props)
    this.state={update:true};
  }

  handleFormSubmit(values){
    const newPortfolio = {...values};
    if(values.featuredname instanceof Array){
      newPortfolio.featuredname=values.featuredname
    } else {
      newPortfolio.featuredname=values.featuredname.split(',');
    }
    if(values.featureddate instanceof Array){
      newPortfolio.featureddate=values.featureddate
    } else {
      newPortfolio.featureddate=values.featureddate.split(',');
    }
    if(values.featuredlink instanceof Array){
      newPortfolio.featuredlink=values.featuredlink
    } else {
      newPortfolio.featuredlink=values.featuredlink.split(',');
    }
    this.props.updateLanding(newPortfolio);
  }

  renderField(field){
    return (
      <div>
      <input {...field.input} type={field.type} className="form-control"/>
      </div>
    )
  }

  componentDidUpdate(){
    if(this.state.update){
      this.props.change('landing', 'imagetitle', this.props.landing.imagetitle);
      this.props.change('landing', 'imagevision', this.props.landing.imagevision);
      this.props.change('landing', 'imagemission', this.props.landing.imagemission);
      this.props.change('landing', 'imagevalues', this.props.landing.imagevalues);
      this.props.change('landing', 'imagecontact', this.props.landing.imagecontact);
      this.props.change('landing', 'featuredname', this.props.landing.featuredname);
      this.props.change('landing', 'featureddate', this.props.landing.featureddate);
      this.props.change('landing', 'featuredlink', this.props.landing.featuredlink);
      this.setState({update:false})
    }
  }

  componentWillMount(){
    this.props.fetchLanding();
  }

  render(){
    const {handleSubmit} = this.props
    return(
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Image Title:</label>
          <Field name="imagetitle" component={this.renderField}  type="text" />
        </fieldset>
        <fieldset className="form-group">
          <label>Image Vision : </label>
          <Field name="imagevision" component={this.renderField} type="text" />
        </fieldset>
        <fieldset className="form-group">
          <label>Image Mission : </label>
          <Field name="imagemission" component={this.renderField} type="text" />
        </fieldset>
        <fieldset className="form-group">
          <label>Image Values:</label>
          <Field name="imagevalues" component={this.renderField} type="text" />
        </fieldset>
        <fieldset className="form-group">
          <label>Image Contact:</label>
          <Field name="imagecontact" component={this.renderField} type="text" />
        </fieldset>
        <fieldset className="form-group">
          <label>Featured Name:</label>
          <Field name="featuredname" component={this.renderField} type="text" />
        </fieldset>
        <fieldset className="form-group">
          <label>Featured Date:</label>
          <Field name="featureddate" component={this.renderField} type="text" />
        </fieldset>
        <fieldset className="form-group">
          <label>Featured Link:</label>
          <Field name="featuredlink" component={this.renderField} type="text" />
        </fieldset>
        <button action="submit" className="btn btn-primary">Update Landing</button>
      </form>
    )
  }
}

function mapStateToProps(state,ownProps){
  return({
    landing:state.landing
  })
}

export default reduxForm({
  form:'landing',
  fields:['imagetitle','imagevision','imagemission','imagevalues','imagecontact','featuredname','featureddate','featuredlink']
})(connect(mapStateToProps,{...actions,change})(AdminLanding));
