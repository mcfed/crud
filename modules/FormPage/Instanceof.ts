import RForm from "./Form.react";
import { ReactNode } from "react";

import { Model, QuerySet, SessionBoundModel, attr } from "redux-orm";
import { IProps, IState, IRFormProps, IRFromState, IRListState, IRListProps, Actions } from "global";
import { AnyModel } from "redux-orm/Model";
import RList from "../ListPage/List.react";

class Abc extends Model {
  a: string | any = "";
  b: string = "";
  c: string = "";
}

// Abc.create({id:"1"})


interface InstanceProp<M extends AnyModel> extends IRFormProps {
  actions: Actions
  name: {
    a: string,
    b: number
  }
  item: SessionBoundModel<M>,
}

interface InstanceState extends IRFromState {
  value: number
}

class Instance<P extends IProps<InstanceProp<Abc>>, S extends IState<InstanceState>> extends RForm<P, S> {
  handleSubmit(value: any) {
    // this.setState({
    //   value:"1"
    // })
    throw new Error('Method not implemented.');
  }
  render(): ReactNode {
    const { item } = this.props;
    item.delete()
    this.props.name.b
    // item.getId()
    // this.setState({
    //   value:1
    // })
    //item.b
    this.props.item.b

    return null
  }
}


interface InstanceListProp<M extends AnyModel> extends IRListProps {
  actions: Actions,
  items: SessionBoundModel<M>[],
}

interface InstanceListState<M extends AnyModel> extends IRListState {

  selectedRows: Array<SessionBoundModel<M>>;
  value: number
}

class InstanceList< P extends IProps<InstanceListProp<Abc>>, S extends IState<InstanceListState<Abc>> >
  extends RList<P, S>{

  searchParams(): Object {
    // this.props.match.params
    this.state.selectedRows.map((it:Abc)=>it.b)
    this.props.items.map((it: Abc) => it.b)
    throw new Error("Method not implemented.");
  }
  handleFilter(value: any): void {
    // this.props.match.params
    throw new Error("Method not implemented.");
  }
  mergeTableConfig(config: any): Object {
    throw new Error("Method not implemented.");
  }
  render(): ReactNode {
    throw new Error("Method not implemented.");
  }
}
