import {IPageState, IPageProps} from '../Page/IPage';

export interface IRFormProps extends IPageProps {
  actions: any;
}

export interface IRFormState extends IPageState {}


export default interface IForm{
  onSubmit(actionType:string):void
  handleSubmit(value:any):any
}
