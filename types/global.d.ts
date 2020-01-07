import { ReactNode } from "react";
import { AnyModel, SessionBoundModel } from "redux-orm/Model";
import { QuerySet } from "redux-orm";
import { match } from "react-router";
import { Location, History } from "history";

type IProps<Props = IPageProps> = {
  [P in keyof Props]: Props[P];
};

type IState<State = IPageState> = {
  [S in keyof State]: State[S];
};

type IParams<Params = {}> = {
  [S in keyof Params]?: Params[S];
};

type IValues = {
  [extraProps: string]: any
}

interface Actions {
  [extraProps: string]: Function
}

type PK = number | string

export interface IPageProps<M> {
  match: match<M>;
  history: History;
  location: Location;
  actions: Actions;
  locale: Function
  querys: Function
  spins: Function
}

export interface IPageState<M> {
}

export interface IRFormProps<M> extends IPageProps<M> {
  actions: Actions;
  item: SessionBoundModel<M>
}

export interface IRFormState<M> extends IPageState<M> {

}

export interface IRListState<M> extends IPageState<M> {
  selectedRows: SessionBoundModel<M>[];
  selectedRowKeys: string[];
}

export interface IRListProps<M> extends IPageProps<M> {
  items: SessionBoundModel<M>[];
}
