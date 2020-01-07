import RForm from "./Form.react";
import { ReactNode } from "react";

import { Model, QuerySet, SessionBoundModel, attr } from "redux-orm";
import { IProps, IState, IRFormProps,  IRListState, IRListProps, Actions, IRFormState } from "../../types/global.d";
import { AnyModel } from "redux-orm/Model";
import RList from "../ListPage/List.react";

class Abc extends Model {
  a: string | any = "";
  b: string = "";
  c: string = "";
}

interface InstanceProp<M extends Abc> extends IRFormProps<M> {
  actions: Actions
  name: {
    a: string,
    b: number
  }
}

interface InstanceState<M extends Abc> extends IRFormState<M> {
  value: number
}

class Instance<P extends IProps<InstanceProp<M>>, S extends IState<InstanceState<M>>,M extends Abc> extends RForm<P, S,M> {
  componentDidMount(): void {
    throw new Error("Method not implemented.");
  }

  handleSubmit(value: any) {
    // this.setState({
    //   value:"1"
    // })
    throw new Error('Method not implemented.');
  }
  render(): ReactNode {
    const { item } = this.props;
    item.delete()
    // item.getId()
    // this.setState({
    //   value:1
    // })
    //item.b
    this.props.item.b

    return null
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
