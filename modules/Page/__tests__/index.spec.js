
import React from 'react';
import {shallow,mount,render} from 'enzyme';
import Page from '../Page.react'


describe('ListPage shallow render', () => {
  const setup = () => {
    // 模拟 props
    const props = {
      // Jest 提供的mock 函数
      history:{
        goBack:jest.fn(),
        push:jest.fn()
      },
      match:{
        url:"test"
      },
      items:[],
      actions:{},
      type:{}
    }

    // 通过 enzyme 提供的 shallow(浅渲染) 创建组件
    const wrapper = shallow(
      <Page {...props} />
    );

    return {
      props,
      wrapper
    }
  }

  const { wrapper, props } = setup();
  it('Page method goBack()', (done) => {

    wrapper.instance().goBack()
    expect(props.history.goBack.mock.calls.length).toBe(1)
    done()
  })


  it('Page method goRoutes()', (done) => {
    wrapper.instance().goRoutes("add")
    expect(props.history.push.mock.calls.length).toBe(1)
    done()
  })

  it('Page method goList()', (done) => {
    wrapper.instance().goList()
    expect(props.history.push.mock.calls.length).toBe(2)
    done()
  })

  it('Page method goDetail()', (done) => {
    wrapper.instance().goDetail()
    expect(props.history.push.mock.calls.length).toBe(3)
    done()
  })

  it('Page method goAdd()', (done) => {
    wrapper.instance().goAdd()
    expect(props.history.push.mock.calls.length).toBe(4)
    done()
  })

  it('Page method goEdit()', (done) => {
    wrapper.instance().goEdit()
    expect(props.history.push.mock.calls.length).toBe(5)
    done()
  })

  it("page method render()",(done)=>{
    expect(wrapper.instance().render()).toBe(null)
    done()
  })
})
