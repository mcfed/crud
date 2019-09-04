import RPage, { IPageProps } from '../Page/Page.react'
import IForm from './IForm';

export default class RForm extends RPage implements IForm{
  form:any
  /**
   * 记录 form 对象，供于组件内部调用
   * @param {object} form form 对象
   */

  handleSubmit(value:any){
    
  }
  saveFormRef(form:any){
    this.form = form;
  }
  /**
   * 提交表单信息
   * @param {string} actionType 提交表单的动作类型
   */
  onSubmit(actionType:string){
    if(actionType ==='handleSubmit'){
      this.form.validateFieldsAndScroll({force:true},(err:any,values:any) => {
        if (err) {
          return;
        }
        this.handleSubmit(values)
      });
    }else{
      //@ts-ignore
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

