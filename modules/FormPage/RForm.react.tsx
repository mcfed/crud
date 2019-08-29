import RPage from '../Page/Page.react'

export default class RForm extends RPage implements IForm{
  /**
   * 记录 form 对象，供于组件内部调用
   * @param {object} form form 对象
   */
  saveFormRef(form){
    this.form = form;
  }
  /**
   * 提交表单信息
   * @param {string} actionType 提交表单的动作类型
   */
  onSubmit(actionType){
    if(actionType ==='handleSubmit'){
      this.form.validateFieldsAndScroll({force:true},(err,values) => {
        if (err) {
          return;
        }
        this.handleSubmit(values)
      });
    }else{
      this[actionType].apply(this,[this.form.getFieldsValue()])
    }
  }
  /**
   * 渲染表单
   * @returns {object} Desc: Form 子节点
   */
  render() {
    // Normally, just render children
    return this.props.children;
  }
    
}

