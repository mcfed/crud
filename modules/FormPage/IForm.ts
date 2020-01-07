
export default interface IForm<M>{
  onSubmit(actionType:string):void
  handleSubmit(value:any):any
}
