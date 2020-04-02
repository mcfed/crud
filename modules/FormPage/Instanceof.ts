import RForm from "./Form.react";
import { ReactNode } from "react";

import { Model, QuerySet, SessionBoundModel, attr } from "redux-orm";
import { IProps, IState,  IActions } from "../Page/IPage";
import { IRListState, IRListProps } from "../ListPage/IList";
import { IRFormProps,  IRFormState } from "../FormPage/IForm";
import { AnyModel } from "redux-orm/Model";
import RList from "../ListPage/List.react";
import { match } from "react-router";
import { Action } from "history";

class Abc extends Model {
  a: string | any = "";
  b: string = "";
  c: string = "";
}

class AbcActions {
  add(action:any){

  }
  sub(action:any){}
}
const LOCALE={
  'delete.confirm': {
    id: 'shieldrevert.buttons.delete.confirm',
    defaultMessage: '是否确定删除?'
  },
  'objName.label': {
    id: 'shieldrevert.field.objName.label',
    defaultMessage: '数据库名'
  },

  'activity.label': {
    id: 'shieldrevert.field.activity.label',
    defaultMessage: '操作类型'
  },

  'actObjName.label': {
    id: 'shieldrevert.field.actObjName.label',
    defaultMessage: '对象名称'
  },

  'hasRevert.label': {
    id: 'shieldrevert.hasRevert.label',
    defaultMessage: '已恢复'
  }
}

interface Locale {
  [extraProps: string]: any
}

const defaultProps = {
  actions: new AbcActions()
}

function querysFn(action:Function):string{
  return "abc"
}

function spinsFn(action:Function):boolean{
  return false
}

function localeFn(key: Locale): string {
  return 'abdef';
}

interface ContainerProps{
  message:Locale
  locale: Function
  querys: Function
  spins: Function
  actions:IActions
}


interface InstanceProp<M extends Abc> extends IRFormProps<M>,ContainerProps{
  name: {
    a: string,
    b: number
  }
}

interface InstanceState<M extends Abc> extends IRFormState<M> {
  value: number
}

class Instance<
  P extends IProps<InstanceProp<M>>,
  S extends IState<InstanceState<M>>,
  M extends Abc
> extends RForm<P, S, M> {

  componentDidMount(): void {
    const {actions,querys,spins,locale,message} = this.props
    querys(actions.add)
    spins(actions.sub)
    locale(message["objName.label"]);
    throw new Error('Method not implemented.');
  }

  handleSubmit(value: any) {
    // this.setState({
    //   value:"1"
    // })
    throw new Error('Method not implemented.');
  }
  render(): ReactNode {
    const {item} = this.props;
    item.delete();
    // item.getId()
    // this.setState({
    //   value:1
    // })
    //item.b
    this.props.item.b;

    return null;
  }
}


interface InstanceListProp<M extends Abc> extends IRListProps<M> {
}

interface InstanceListState<M extends Abc> extends IRListState<M> {
}

class InstanceList<P extends IProps<InstanceListProp<M>>, S extends IState<InstanceListState<M>>,M extends Abc >
  extends RList<P, S,M>{
  componentDidMount(): void {
    throw new Error("Method not implemented.");
  }

  searchParams(): IProps<M> {
    // this.props.match.params
    this.state.selectedRows.map((it:Abc)=>it.b)
    this.props.items.map((it: Abc) => it.b)
    throw new Error("Method not implemented.");
  }
  handleFilter(value: any): void {
    throw new Error("Method not implemented.");
  }
  mergeTableConfig(config: any): Object {
    throw new Error("Method not implemented.");
  }
  render(): ReactNode {
    throw new Error("Method not implemented.");
  }
}
