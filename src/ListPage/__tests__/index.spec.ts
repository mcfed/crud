import React, {ReactNode} from 'react';
import {shallow, mount, render, ShallowWrapper} from 'enzyme';
import ListView, {ListProps, ListState, Model} from './List.view';
import {TableProps} from 'antd/lib/table';
import {IProps,IState} from '../../Page/IPage';

describe('ListPage shallow render', () => {
  //@ts-ignore
  const defaultValue:IProps<ListProps<Model>>={
    actions:{
      fetchPage:jest.fn(),
      fetchSave:jest.fn(),
      deleteRoute: jest.fn()
    },
    spins:jest.fn(),
    locale:jest.fn(),
    querys:jest.fn(),
    location: {
      pathname:"",
      state:{},
      hash:"",
      search: '?aa=1&bb=2'
    },
    match:{
      isExact:true,
      url:"aaa",
      path:"module",
      params:{
        id:"1"
      }
    },
    items:[{
      id:1,
      name:"name"
    }]
  }
  const setup = (
    props: IProps<ListProps<Model>>=defaultValue
  ): {
    props: IProps<ListProps<Model>>;
    wrapper: ShallowWrapper<
      IProps<ListProps<Model>>,
      IState<ListState<Model>>,
      ListView<Model>
    >;
  } => {

    const wrapper = shallow<ListView<Model>>(React.createElement(ListView, props));
    return {
      props,
      wrapper
    };
  };

  it('ListPage render initial', done => {
    const {wrapper} = setup();
    expect(wrapper.state('selectedRows')).toEqual([]);
    expect(wrapper.state('selectedRowKeys')).toEqual([]);
    done();
  });

  it('ListPage', done => {
    const {wrapper} = setup();
    wrapper.setState({selectedRows: [{id: 1}]});
    // expect(wrapper.state('selectedRowKeys')).toEqual([])
    done();
  });

  xit('LIstPage method mergeTableConfig rowSelection null', done => {
    const {wrapper} = setup();
    const config: TableProps<any> = {
      rowSelection: undefined
    };
    expect(wrapper.instance().mergeTableConfig(config)).toHaveProperty(
      'rowSelection',
      null
    );
    done();
  });

  xit('LIstPage method mergeTableConfig rowSelection {}', done => {
    const {wrapper} = setup();
    const onChangeMock = jest.fn();
    const defaultConfig = {
      rowSelection: {
        onChange: onChangeMock.bind(wrapper.instance()),
        selectedRowKeys: [1, 2, 3]
      }
    };
    const config = {
      rowSelection: {
        selectedRowKeys: []
      }
    };

    wrapper.instance().onSelectChange = onChangeMock;
    expect(
      //@ts-ignore
      wrapper.instance().mergeTableConfig(config).rowSelection.selectedRowKeys
    ).toEqual(
      Object.assign(defaultConfig.rowSelection, config.rowSelection)
        .selectedRowKeys
    );
    done();
  });

  it('ListPage method onSelectChange', done => {
    const {wrapper} = setup();
    const selector = {selectedRowKeys: [1, 3], selectedRows: [{}, {}]};
    wrapper
      .instance()
      .onSelectChange(selector.selectedRowKeys, selector.selectedRows);
    expect(wrapper.state('selectedRowKeys')).toEqual(selector.selectedRowKeys);
    expect(wrapper.state('selectedRows')).toEqual(selector.selectedRows);
    done();
  });

  it('ListPage method selectMultiple reverse', done => {
    const {wrapper} = setup();
    expect(wrapper.instance().selectMultiple()).toBe(true);
    done();
  });

  it('ListPage method selectSingle reverse', done => {
    const {wrapper} = setup();
    expect(wrapper.instance().selectSingle()).toBe(true);
    done();
  });

  it('ListPage method isSelectMultiple', done => {
    const {wrapper} = setup();
    expect(wrapper.instance().isSelectMultiple()).toBe(false);
    done();
  });

  it('ListPage method isSelectSingle', done => {
    const {wrapper} = setup();
    expect(wrapper.instance().isSelectSingle()).toBe(false);
    done();
  });

  it('ListPage method getSelectRows', done => {
    const {wrapper} = setup();
    expect(wrapper.instance().getSelectRows()).toEqual(
      wrapper.state('selectedRows')
    );
    done();
  });

  it('ListPage method getSelectKeys', done => {
    const {wrapper} = setup();
    expect(wrapper.instance().getSelectKeys()).toEqual(
      wrapper.state('selectedRowKeys')
    );
    done();
  });

  it('ListPage method getSelectLength', done => {
    const {wrapper} = setup();
    expect(wrapper.instance().getSelectLength()).toEqual(
      wrapper.state('selectedRowKeys').length
    );
    done();
  });

  it('ListPage method getSearchParams', done => {

    const {wrapper} = setup();
    const searchParams = wrapper.instance().getSearchParams();
    expect(searchParams.getAll('aa')).toEqual(['1']);
    expect(searchParams.getAll('bb')).toEqual(['2']);
    done();
  });

  it('ListPage method clearSelectRows', done => {
    const {wrapper} = setup();
    wrapper.instance().clearSelectRows();
    expect(wrapper.state('selectedRowKeys')).toEqual([]);
    expect(wrapper.state('selectedRows')).toEqual([]);
    done();
  });

  it('ListPage method handleAddRoute', done => {
    const {wrapper} = setup();
    wrapper.instance().goAdd = jest.fn();
    wrapper.instance().handleAddRoute();
    //@ts-ignore
    expect(wrapper.instance().goAdd.mock.calls.length).toBe(1);
    done();
  });

  it('ListPage method handleEditRoute has id', done => {
    const {wrapper} = setup();
    wrapper.instance().goEdit = jest.fn();
    wrapper.instance().handleEditRoute('1');
    //@ts-ignore
    expect(wrapper.instance().goEdit.mock.calls.length).toBe(1);
    done();
  });

  xit('ListPage method handleEditRoute no id', done => {
    const {wrapper} = setup();
    wrapper.instance().goEdit = jest.fn();
    //@ts-ignore
    wrapper.instance().handleEditRoute(undefined);
    //@ts-ignore
    expect(wrapper.instance().goEdit.mock.calls.length).toBe(1);
    done();
  });

  it('ListPage method handleDetailRoute has id', done => {
    const {wrapper} = setup();
    wrapper.instance().goDetail = jest.fn();
    wrapper.instance().handleDetailRoute(1);
    //@ts-ignore
    expect(wrapper.instance().goDetail.mock.calls.length).toBe(1);
    done();
  });

  xit('ListPage method handleDetailRoute no id', done => {
    const {wrapper} = setup();
    wrapper.instance().goDetail = jest.fn();
    //@ts-ignore
    wrapper.instance().handleDetailRoute();
    //@ts-ignore
    expect(wrapper.instance().goDetail.mock.calls.length).toBe(1);
    done();
  });

  xit('ListPage method handleBackRoute', done => {
    const {wrapper} = setup();
    wrapper.instance().goBack = jest.fn();
    wrapper.instance().handleBackRoute();
    //@ts-ignore
    expect(wrapper.instance().goBack.mock.calls.length).toBe(1);
    done();
  });

  it('ListPage method handleDeleteRoute has id', done => {

    const {wrapper,props} = setup();
    wrapper.instance().handleDeleteRoute('1');
    expect(props.actions.deleteRoute.mock.calls.length).toBe(1);
    done();
  });

  xit('ListPage method handleDeleteRoute no id', done => {

    const {wrapper,props} = setup();
    //@ts-ignore
    wrapper.instance().handleDeleteRoute();
    expect(props.actions.deleteRoute.mock.calls.length).toBe(1);
    done();
  });

  it('ListPage method handleFilter', done => {

    const {wrapper,props} = setup();
    //@ts-ignore
    wrapper.instance().handleFilter(undefined);
    expect(wrapper.state('selectedRowKeys')).toEqual([]);
    expect(wrapper.state('selectedRows')).toEqual([]);
    expect(props.actions.fetchPage.mock.calls.length);
    done();
  });

  it('List method onChange', done => {
    const {wrapper} = setup();
    wrapper.instance().handleFilter = jest.fn();
    wrapper.instance().onChange({}, {}, {});
    //@ts-ignore
    expect(wrapper.instance().handleFilter.mock.calls.length).toBe(1);
    done();
  });

  it('list method renderSearchBar', done => {
    const {wrapper} = setup();
    expect(wrapper.instance().renderSearchBar());
    done();
  });

  it('list method render', done => {
    const {wrapper} = setup();
    expect(wrapper.instance().render())
    done();
  });
});
