
import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import RPage from '../Page.react'
import {IProps,IState} from '../IPage'
import PageView, { Model,PageProps,PageState } from './Page.view';

describe('ListPage shallow render', () => {
  const defaultProps = {
    // Jest 提供的mock 函数
    history: {
      goBack: jest.fn(),
      push: jest.fn()
    },
    match: {
      url: 'test'
    },
    items: [],
    actions: {
      fetchItem:jest.fn()
    },
    type: {}
  };
  const setup = (
    props: Object = defaultProps
  ): {
    props:any,
    wrapper: ShallowWrapper<
      IProps<PageProps<Model>>,
      IState<PageState<Model>>,
      PageView<Model>
    >;
  } => {
    // 通过 enzyme 提供的 shallow(浅渲染) 创建组件
    //@ts-ignore
    const wrapper = shallow<PageView<Model>>(React.createElement(PageView, props));

    return {
      props,
      wrapper
    };
  };

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
    wrapper.instance().goDetail("1")
    expect(props.history.push.mock.calls.length).toBe(3)
    done()
  })

  it('Page method goAdd()', (done) => {
    wrapper.instance().goAdd()
    expect(props.history.push.mock.calls.length).toBe(4)
    done()
  })

  it('Page method goEdit()', (done) => {
    wrapper.instance().goEdit(1)
    expect(props.history.push.mock.calls.length).toBe(5)
    done()
  })

  it("page method render()",(done)=>{
    expect(wrapper.instance().render()).toBe(null)
    done()
  })
})
