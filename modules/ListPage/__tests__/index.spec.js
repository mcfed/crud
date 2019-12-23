
import React from 'react';
import {shallow,mount,render} from 'enzyme';
import RList from '../List.react'
const defaultState={
  selectedRows: [],
  selectedRowKeys: []
}
class ListPage extends RList {
  state = defaultState
  constructor(props,state=defaultState){
    super(props,state)
  }
  mergeTableConfig(config){
    return Object.assign({
      size:'small',
      pagination:{
          showQuickJumper:true,
          showSizeChanger:true,
          pageSizeOptions:['10','20','50','100'],
          size:"small",
          // showTotal:this.showTotal(this),
      },
      style:{
        width:'100%'
      },
    },config,config.rowSelection===null?{}:{
      rowSelection:{
        onChange: this.onSelectChange.bind(this),
        selectedRowKeys:this.state.selectedRowKeys,
        ...config.rowSelection
      }
    })
  }
  handleFilter(value) {
    let {actions} = this.props
    this.clearSelectRows()
    actions.fetchPage(value)
  }
  searchParams(){
    // const  {querys} = this.props
    // console.info("override searchPrams method!")
    return {}
  }
  render(){
    return null
  }
}

describe('ListPage shallow render', () => {
  const setup = (props) => {

    const wrapper = shallow(
      <ListPage {...props} items={[]} />
    );

    return {
      props,
      wrapper
    }
  }

  it('ListPage render initial', (done) => {
    const { wrapper } = setup();
    expect(wrapper.state('selectedRows')).toEqual([])
    expect(wrapper.state('selectedRowKeys')).toEqual([])
    done()
  })


  it('ListPage', (done) => {
    const { wrapper } = setup();
    wrapper.setState({'selectedRows':[{id:1}]})
    // expect(wrapper.state('selectedRowKeys')).toEqual([])
    done()
  })

  it("LIstPage method mergeTableConfig rowSelection null",(done)=>{

    const { wrapper } = setup();
    const config={
      rowSelection:null
    }
    expect(wrapper.instance().mergeTableConfig(config)).toHaveProperty("rowSelection",null)
    done()
  })

  it("LIstPage method mergeTableConfig rowSelection {}",(done)=>{

    const { wrapper } = setup();
    const onChangeMock=jest.fn()
    const defaultConfig={
      rowSelection:{
        onChange: onChangeMock.bind(wrapper.instance()),
        selectedRowKeys:[1,2,3],
      }
    }
    const config={
      rowSelection:{
        selectedRowKeys:[]
      }
    }
    wrapper.instance().onSelectChange=onChangeMock
    // expect(wrapper.instance().mergeTableConfig(config)).toHaveProperty("rowSelection",Object.assign(defaultConfig.rowSelection,config.rowSelection))
    expect(wrapper.instance().mergeTableConfig(config).rowSelection.selectedRowKeys).toEqual(Object.assign(defaultConfig.rowSelection,config.rowSelection).selectedRowKeys)
    done()
  })

  it('ListPage method onSelectChange',(done)=>{
    const { wrapper } = setup();
    const selector={selectedRowKeys:[1,3],selectedRows:[{},{}]}
    wrapper.instance().onSelectChange(selector.selectedRowKeys,selector.selectedRows)
    expect(wrapper.state('selectedRowKeys')).toEqual(selector.selectedRowKeys)
    expect(wrapper.state('selectedRows')).toEqual(selector.selectedRows)
    done()
  })

  it('ListPage method selectMultiple reverse',(done)=>{
    const { wrapper } = setup();
    // wrapper.state('selectedRows',[{id:1},{id:2}])
    // console.log(wrapper.instance().getSelectRows())
    expect(wrapper.instance().selectMultiple()).toBe(true)
    done()
  })

  it('ListPage method selectSingle reverse',(done)=>{
    const { wrapper } = setup();
    expect(wrapper.instance().selectSingle()).toBe(true)
    done()
  })

  it('ListPage method isSelectMultiple',(done)=>{
    const { wrapper } = setup();
    expect(wrapper.instance().isSelectMultiple()).toBe(false)
    done()
  })

  it('ListPage method isSelectSingle',(done)=>{
    const { wrapper } = setup();
    expect(wrapper.instance().isSelectSingle()).toBe(false)
    done()
  })

  it('ListPage method getSelectRows',(done)=>{
    const { wrapper } = setup();
    expect(wrapper.instance().getSelectRows()).toEqual(wrapper.state('selectedRows'))
    done()
  })

  it('ListPage method getSelectKeys',(done)=>{
    const { wrapper } = setup();
    expect(wrapper.instance().getSelectKeys()).toEqual(wrapper.state('selectedRowKeys'))
    done()
  })

  it('ListPage method getSelectLength',(done)=>{
    const { wrapper } = setup();
    expect(wrapper.instance().getSelectLength()).toEqual(wrapper.state('selectedRowKeys').length)
    done()
  })


  it('ListPage method getSearchParams',(done)=>{

    const props={
      location:{
        search:"?aa=1&bb=2"
      }
    }
    const { wrapper } = setup(props);
    const searchParams=wrapper.instance().getSearchParams()
    expect(searchParams.getAll('aa')).toEqual(['1'])
    expect(searchParams.getAll('bb')).toEqual(['2'])
    done()
  })

  it('ListPage method clearSelectRows',(done)=>{
    const { wrapper } = setup();
    wrapper.instance().clearSelectRows()
    expect(wrapper.state('selectedRowKeys')).toEqual([])
    expect(wrapper.state('selectedRows')).toEqual([])
    done()
  })


  it('ListPage method handleAddRoute',(done)=>{
    const { wrapper } = setup();
    wrapper.instance().goAdd=jest.fn()
    wrapper.instance().handleAddRoute()
    expect(wrapper.instance().goAdd.mock.calls.length).toBe(1)
    done()
  })

  it('ListPage method handleEditRoute has id',(done)=>{
    const { wrapper } = setup();
    wrapper.instance().goEdit=jest.fn()
    wrapper.instance().handleEditRoute(1)
    expect(wrapper.instance().goEdit.mock.calls.length).toBe(1)
    done()
  })

  it('ListPage method handleEditRoute no id',(done)=>{
    const { wrapper } = setup();
    wrapper.instance().goEdit=jest.fn()
    wrapper.instance().handleEditRoute()
    expect(wrapper.instance().goEdit.mock.calls.length).toBe(1)
    done()
  })

  it('ListPage method handleDetailRoute has id',(done)=>{
    const { wrapper } = setup();
    wrapper.instance().goDetail=jest.fn()
    wrapper.instance().handleDetailRoute(1)
    expect(wrapper.instance().goDetail.mock.calls.length).toBe(1)
    done()
  })

  it('ListPage method handleDetailRoute no id',(done)=>{
    const { wrapper } = setup();
    wrapper.instance().goDetail=jest.fn()
    wrapper.instance().handleDetailRoute()
    expect(wrapper.instance().goDetail.mock.calls.length).toBe(1)
    done()
  })

  it('ListPage method handleBackRoute',(done)=>{
    const { wrapper } = setup();
    wrapper.instance().goBack=jest.fn()
    wrapper.instance().handleBackRoute(1)
    expect(wrapper.instance().goBack.mock.calls.length).toBe(1)
    done()
  })


  it('ListPage method handleDeleteRoute has id',(done)=>{
    const props={
      actions:{
        deleteRoute:jest.fn()
      }
    }
    const { wrapper } = setup(props);
    wrapper.instance().handleDeleteRoute(1)
    expect(props.actions.deleteRoute.mock.calls.length).toBe(1)
    done()
  })

  it('ListPage method handleDeleteRoute no id',(done)=>{
    const props={
      actions:{
        deleteRoute:jest.fn()
      }
    }
    const { wrapper } = setup(props);
    wrapper.instance().handleDeleteRoute()
    expect(props.actions.deleteRoute.mock.calls.length).toBe(1)
    done()
  })

  it('ListPage method handleFilter',(done)=>{
    const props={
      actions:{
        fetchPage:jest.fn()
      }
    }
    const { wrapper } = setup(props);
    wrapper.instance().handleFilter(undefined)
    expect(wrapper.state('selectedRowKeys')).toEqual([])
    expect(wrapper.state('selectedRows')).toEqual([])
    expect(props.actions.fetchPage.mock.calls.length).toBe(1)
    done()
  })


  it("List method onChange",(done)=>{
    const { wrapper } = setup();
    wrapper.instance().handleFilter=jest.fn()
    wrapper.instance().onChange({},{},{})
    expect(wrapper.instance().handleFilter.mock.calls.length).toBe(1)
    done()
  })

  it('list method renderSearchBar',(done)=>{
    const { wrapper } = setup();
    expect(wrapper.instance().renderSearchBar()).toBe(null)
    done()
  })

  it('list method render',(done)=>{
    const { wrapper } = setup();
    expect(wrapper.instance().render()).toBe(null)
    done()
  })


})
