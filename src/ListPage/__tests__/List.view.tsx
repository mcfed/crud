import React, { Component, ReactNode } from "react";
import {
  IRListProps,
  IRListState
} from "../IList";

import {
  IParams,
  PK
} from "../../Page/IPage";
import  RListPage from "../List.react";

export interface Model{
  id:string,
  name:string
}

export interface ListProps<M> extends IRListProps{
  reducer: Object;
  items:any[];
}


export interface ListState<M> extends IRListState{
  selectedRows: any[];
  selectedRowKeys: PK[];
}

export default class ListView<M> extends RListPage<ListProps<M>,ListState<M>> {
  goRoutes(){

  }
  mergeTableConfig(config: any):object{
    return config;
  }

  ready(): void {
    this.handleFilter(this.searchParams());
  }
  handleFilter(value: Object) {
    const {
      actions,
    } = this.props;
    actions.fetchPage()
  }
  searchParams(): object {
    const { actions, querys } = this.props;
    const defaultParams: Object = {};

    return Object.assign(defaultParams, querys("actions.fetchPage"));
  }
  handlerMenu(rowkeys: string, actionType: string): void {
    const { actions } = this.props;
    if (actionType === "add") {
      this.goAdd();
    } else if (actionType === "edit") {
      this.goEdit(rowkeys);
    } else if (actionType === "detail") {
      this.goDetail(rowkeys);
    } else if (actionType === "delete") {
      actions.fetchDelete(rowkeys);
    }
    this.clearSelectRows();
  }
  renderOptionItem(item:{label:string,value:string}, idx: PK): ReactNode {
    return null;
  }
  renderSearchForm(): ReactNode {
    const { actions, spins, locale } = this.props;
    const query: IParams<M> = this.searchParams();
    return null;
  }
  render(): ReactNode {
    return null
  }

  renderToolbar(): ReactNode {
    const { selectedRowKeys } = this.state;
    const {  actions, locale } = this.props;
    return null
  }
  renderTableButtonGroups(text:string, row:M): ReactNode {
    const { locale } = this.props;
    return null;
  }
  renderDataTable(): ReactNode {
    const {
      reducer: {},
      items,
      actions,
      spins,
      locale
    } = this.props;
    let tableConf = {
      rowKey: "id",
      dataSource: [],
      columns: [
        {
          title: locale("label"),
          key: "label",
          dataIndex: "label"
        },
        {
          title: locale("GLOBAL.COLUMNS.OPTIONS"),
          key: "options",
          dataIndex: "options",
          width: 190,
          render: this.renderTableButtonGroups
        }
      ]
    };

    return null;
  }
}
