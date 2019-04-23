
import React from 'react';
import {shallow,mount,render} from 'enzyme';
import ListPage from '../index'

class ListView extends ListPage{

  render(){

    return <div>1</div>
  }
}

describe('ListPage shallow render', () => {
  const setup = (props) => {

    const wrapper = shallow(
      <ListView {...props} items={[]} />
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

  it('ListPage method handleEditRoute',(done)=>{
    const { wrapper } = setup();
    wrapper.instance().goEdit=jest.fn()
    wrapper.instance().handleEditRoute(1)
    expect(wrapper.instance().goEdit.mock.calls.length).toBe(1)
    done()
  })

  it('ListPage method handleDetailRoute',(done)=>{
    const { wrapper } = setup();
    wrapper.instance().goDetail=jest.fn()
    wrapper.instance().handleDetailRoute(1)
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


  it('ListPage method handleDeleteRoute',(done)=>{
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

})
