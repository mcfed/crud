import Model, { SessionBoundModel } from "redux-orm";
import {match} from 'react-router';
import {IActions, IPageState, IPageProps} from '../Page/IPage';

export interface IRFormProps<M extends Model = any> extends IPageProps<M> {
  actions: IActions;
  match: match<any>;
  item: SessionBoundModel<M>;
}

export interface IRFormState<M extends Model = any> extends IPageState<M> {}


export default interface IForm<M>{
  onSubmit(actionType:string):void
  handleSubmit(value:any):any
}
