
import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import RPage from '../Page.react'
import {IProps,IState} from '../IPage'
import PageView, { Model,PageProps,PageState } from './Page.view';

describe('ListPage shallow render', () => {
  const url = 'test';
  const defaultProps = {
    // Jest 提供的mock 函数
    history: {
      goBack: jest.fn(),
      push: jest.fn()
    },
    match: {
      url
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
    const wrapper = shallow<PageView<Model>>(React.createElement(PageView, props)) as ShallowWrapper<
      IProps<PageProps<Model>>,
      IState<PageState<Model>>,
      PageView<Model>
    >;

    return {
      props,
      wrapper
    };
  };

  let { wrapper, props } = setup();
  it('Page method goBack()', (done) => {
    wrapper.instance().goBack()

    expect(props.history.goBack.mock.calls.length).toBe(1)
    done()
  })


  it('Page method goRoutes()', (done) => {
    wrapper.instance().goRoutes("add")
    expect(props.history.push.mock.calls.length).toBe(1)
    expect(props.history.push.mock.calls[0][0]).toBe(`${url}/add`)
    done()
  })

  it('Page method goRoutes() with root url', (done) => {
    ({wrapper, props} = setup({
      ...defaultProps,
      match: {url: '/'}, 
      history: {
        goBack: jest.fn(),
        push: jest.fn()
      },
    }))
    wrapper.instance().goRoutes("add")
    expect(props.history.push.mock.calls.length).toBe(1)
    expect(props.history.push.mock.calls[0][0]).toBe('/add')
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
