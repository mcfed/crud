import React, {Component, ReactNode} from 'react';

import {IProps, IState, IParams, PK, IPageProps} from '../IPage';
import RPage from '../Page.react';

export interface Model {
  id: string;
  name: string;
}

class Actions{
  fetchItem(){}
}

export interface PageProps<M> extends IProps {
  actions:Actions
}

export interface PageState<M> extends IState {}

export default class PageView<M extends Model> extends RPage<
  IProps<PageProps<M>>,
  IState<PageState<M>>
> {
  componentDidMount(): void {
    const {actions} = this.props
    actions.fetchItem()
  }
  render(): React.ReactNode {
    return null
  }
}
