import React, { ReactNode } from "react";
import { Input } from "antd";
//@ts-ignore
import { BaseForm, FormItem, Panel } from "mcf-components";
import {match} from 'react-router';
import {  IProps, IState, IParams } from "../../Page/IPage";
import {IRFormProps, IRFormState, } from '../IForm';
import RFormPage from '../Form.react'
// import { SessionBoundModel} from "redux-orm/Model";

export class Model{

}


class Actions {
  fetchItem(payload: {id: string}) {}
  fetchSave(payload:any){}
}

export interface FormProps<M extends Model> extends IRFormProps {
  actions: Actions;
  match: match<{id: string}>;
  reducer: Object;
  item: any;
}

export interface FormState<M extends Model> extends IRFormState{
  value: number;
}

export default class FormView<M extends Model> extends RFormPage<IProps<FormProps<M>>,IState<FormState<M>>> {
  componentDidMount(): void {
    const { actions } = this.props;
    const params = this.props.match.params;
    if (params.id) {
      actions.fetchItem({ id: params.id });
    }
  }

  handleSubmit(values:Object): void {
    const { actions } = this.props;
    // this.state.value

    actions.fetchSave(values);
  }
  handleCancel(values:Object): void {
    this.goBack();
  }

  render(): ReactNode {
    const { item, actions, locale, spins } = this.props;
    const saveSpin = spins(actions.fetchSave);
    const itemSpin = spins(actions.fetchItem);
    return (
      <Panel
        confirmLoading={saveSpin}
        loading={itemSpin}
        onOk={this.onSubmit.bind(this, "handleSubmit")}
        onCancel={this.handleCancel.bind(this, "handleCancel")}
      >
        <BaseForm
          onSubmit={this.onSubmit.bind(this)}
          ref={this.saveFormRef.bind(this)}
        >
          <FormItem>
            <Input type="hidden" name="id" defaultValue={item.id} />
          </FormItem>
          <FormItem>
            <Input
            /*  label={locale("{@name@}.label")} */
              name="{@name@}"
              defaultValue={item.name}
            />
          </FormItem>
        </BaseForm>
      </Panel>
    );
  }
}
