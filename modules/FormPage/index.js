import React,{Component} from 'react'
//import PropTypes from 'prop-types'

export default class FormPage extends Component{
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  componentDidCatch(error, errorInfo) {
    // Display fallback UI
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    // You can also log the error to an error reporting service
    // console.log(error, errorInfo);
  }
  saveFormRef (form){
    this.form = form;
  }
  onSubmit(){
    this.form.validateFieldsAndScroll({force:true,first:true},(err,values) => {
       if (err) {
         return;
       }
        this.handleSubmit(values)
       //actions.saveAction(values)
       //form.resetFields();
     });
  }
  handleSubmit(values){
    let {actions} = this.props;
  }

  render() {
    // Normally, just render children
    return this.props.children;
  }
}
