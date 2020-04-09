import React, {Component, ReactNode} from 'react';

import {IProps, IState, IParams, PK, IPageProps} from '../IPage';
import RPage from '../Page.react';

export interface Model {
  id: string;
  name: string;
}

export interface PageProps<M> extends IProps {}

export interface PageState<M> extends IState {}

export default class PageView<M extends Model> extends RPage<
  IProps<PageProps<M>>,
  IState<PageState<M>>
> {
  componentDidMount(): void {
    throw new Error('Method not implemented.');
  }
  render(): React.ReactNode {
    throw new Error('Method not implemented.');
  }
}
