import { ReactNode } from "react";
import { AnyModel, SessionBoundModel } from "redux-orm/Model";
import { QuerySet } from "redux-orm";
import { match } from "react-router";
import { Location,History } from "history";

type IProps<Props = IPageProps> = {
  [P in keyof Props]: Props[P];
};

type IState<State = IPageState> = {
  [S in keyof State]: State[S];
};

interface Actions {
  [extraProps: string]: Function
}




type PK= number|string

export interface IPageProps {
  match: match;
  history: History;
  location: Location;
}

export interface IPageState{

}

export interface IRFormProps extends IPageProps {

}

export interface IRFromState extends IPageState {

}


export interface IRListState extends IPageState {
  selectedRows: Array<SessionBoundModel>;
  selectedRowKeys: string[];
}

export interface IRListProps extends IPageProps {
  actions: Actions;
  items: SessionBoundModel;
}
