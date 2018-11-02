import React, {Component} from 'react'

export default(ModalAndView) => (InnerComponent) => {
  return class extends Component {
    handleBackRoute() {
      let {actions, history,router} = this.props
      console.log("onCancel",this.props)
    //  actions.backRoute(router)
    }
    handleSaveRoute(){
      console.log("onSure",this.props)
      // let { formView } =this.refs
      //console.log(formView)
      // formView.onSubmit()
    }
    render() {
      const {children,...otherProps}=this.props
      return React.createElement(ModalAndView,
        {
          title:"titl",
          visible:true,
          maskClosable:false,
          onCancel:this.handleBackRoute.bind(this),
          onOk:this.handleSaveRoute.bind(this),
          ...otherProps
        }
        ,React.createElement(InnerComponent,{...otherProps}))
    }
  }
}


/*
class ModalAndView extends Component {

  handleBackRoute() {
    let {actions, history,router} = this.props
  //  actions.backRoute(router)
  }
  handleSaveRoute(){
    // let { formView } =this.refs
    //console.log(formView)
    // formView.onSubmit()
  }

  render() {
    var {route, children,...otherProps} = this.props
//	console.log(this.props)
    return (
      <Modal title={"titl"} visible={true} maskClosable={false} onCancel={this.handleBackRoute.bind(this)} onOk={this.handleSaveRoute.bind(this)} {...otherProps}>
        {
          React.cloneElement(children,Object.assign({},otherProps,{
             // ref:"formView"
          }))
        }
      </Modal>
    )
  }
}
*/

//export default withRouter(ModalAndView)
// export default ModalAndView
