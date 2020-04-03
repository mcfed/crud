import RPage from '../Page/Page.react';
import IForm from './IForm';
import {IRFormProps, IRFormState} from '../FormPage/IForm';
import {IProps, IState} from '../Page/IPage';
import { AnyModel } from 'redux-orm';

export default abstract class RForm<
  P extends IProps<IRFormProps<M>>,
  S extends IState<IRFormState<M>>,
  M extends AnyModel
> extends RPage<P, S> implements IForm<M> {
  constructor(props: P, state: S) {
    super(props, state);
  }
  form: any;
  // props:RFormProps
  /**
   * 记录 form 对象，供于组件内部调用
   * @param {object} form form 对象
   */

  abstract handleSubmit(value: any): any;

  protected saveFormRef(form: any) {
    this.form = form;
  }
  /**
   * 提交表单信息
   * @param {string} actionType 提交表单的动作类型
   */
  public onSubmit(actionType: string) {
    if (actionType === 'handleSubmit') {
      this.form.validateFieldsAndScroll(
        {force: true},
        (err: any, values: any) => {
          if (err) {
            return;
          }
          this.handleSubmit(values);
        }
      );
    } else {
      //@ts-ignore
      this[actionType].apply(this, [this.form.getFieldsValue()]);
    }
  }
}
