#FormPage

> FormPage是为编辑页提供父类继承于｀Page｀，并为编辑页方向扩展



| 参数 | 说明 | 参数 |  | 返回值 |
| - | :-: | -: | -:| -: |
| saveFormRef | 保存form ref | form引用| Form  | null  |
| onSubmit | 保存监听方法 |  values:object | object | null  |
| handleSubmit | onSubmit提交验证通过后调用提交方法 |  values:object | object | null  |



##USEAGE

```javascript

import {FormPage} from 'mcf-component'

class EditPage extends FormPage{
  handleSubmit(values){
    console.log(values)
    const { actions } = this.props
		actions.saveAction(values)
  }
  render(){
    return (
      <BaseForm  onSubmit={this.onSubmit.bind(this)} ref={this.saveFormRef.bind(this)}> jsx....
      </BaseForm>
    )
  }
}

```
