import React, { Component, ReactNode } from "react";
import { Button, Input, Select, Table, Tabs } from "antd";
//@ts-ignore
import { ButtonGroups, AdvancedSearch, DataTable, Panel } from "mcf-components";
import {
  IRListProps,
  IRListState
} from "../IList";

import {
  IProps,
  IState,
  IParams,
  PK
} from "../../Page/IPage";
import  RListPage from "../List.react";
import { TableProps } from "antd/lib/table";

export interface Model{
  id?:string
}

export interface ListProps<M extends Model> extends IRListProps<M> {
  reducer: Object;
}


export interface ListState<M extends Model> extends IRListState<M> {
  // value: number
}

export default class ListView<
  P extends IProps<ListProps<M>>,
  S extends IState<ListState<M>>,
  M extends Model
  //@ts-ignore
> extends RListPage<P, S, M> {

  mergeTableConfig(config: TableProps<M>): Object {
    return {};
  }

  componentDidMount(): void {
    // const { actionsType } = this.props.actions;
    // console.log(actionsType);
    this.handleFilter(this.searchParams());
  }
  handleFilter(value: Object) {
    const {
      actions,
      match: { params }
    } = this.props;
    actions.fetchPage()
    // actions.fetchPage()
    // this.clearSelectRows()
    // actions.fetchPage(Object.assign({}, value, params));
  }
  searchParams(): object {
    const { actions, querys } = this.props;
    const defaultParams: Object = {};

    // return Object.assign(defaultParams, querys("actions.fetchPage"));
    return {a:1}
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
      // actions.fetchDelete(rowkeys);
      // actions.
    }
    this.clearSelectRows();
  }
  renderOptionItem(item:{label:string,value:string}, idx: PK): ReactNode {
    return (
      <Select.Option key={idx} value={item.value}>
        {item.label}
      </Select.Option>
    );
  }
  renderSearchForm(): ReactNode {
    const { actions, spins, locale } = this.props;
    // this.props.items.map((t:M)=>t.)
    const query: IParams<M> = this.searchParams();
    return (
      <AdvancedSearch
        /*loading={spins("actions.fetchList")}  */
        filterSubmitHandler={this.handleFilter.bind(this)}
      >
        <Input
          /* label={locale("serverName.label")} */
          name="serverName"
          //@ts-ignore
          defaultValue={query.nickname}
        />
      </AdvancedSearch>
    );
  }
  render(): ReactNode {
    return (
      <Panel footer={false}>
        {this.renderSearchForm()}
        {/* {this.renderToolbar()} */}
        {this.renderDataTable()}
      </Panel>
    );
  }

  renderToolbar(): ReactNode {
    const { selectedRowKeys } = this.state;
    // this.state.selectedRowKeys[0];
    // this.state.selectedRows.map((it:M)=>it.name)
    const {  actions, locale } = this.props;

    return (
      <ButtonGroups handleClick={(actionType:string)=>this.handlerMenu.bind(selectedRowKeys,actionType)}>
        <Button type="primary">{locale("GLOBAL.NEW")} </Button>
        <Button /* loading={spins(actions.fetchDelete)} */>
          {locale("GLOBAL.REMOVE")}
        </Button>
      </ButtonGroups>
    );
  }
  renderTableButtonGroups(text:string, row:M): ReactNode {
    const { locale } = this.props;
    return (
      <ButtonGroups
        handleClick={(actionType:string)=>this.handlerMenu(row.id.toString(),actionType)}
        size="small"
      >
        <Button>{locale("GLOBAL.MODIFY")}</Button>
        <Button>{locale("GLOBAL.DETAIL")}</Button>
        <Button>{locale("GLOBAL.REMOVE")}</Button>
      </ButtonGroups>
    );
  }
  renderDataTable(): ReactNode {
    const {
      reducer: {},
      items,
      actions,
      spins,
      locale
    } = this.props;
    let tableConf: TableProps<M> = {
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

    return <DataTable {...tableConf} />;
  }
}
