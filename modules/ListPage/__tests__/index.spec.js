
import React from 'react';
import {shallow,mount,render} from 'enzyme';
import ListPage from '../index'



describe('ListPage shallow render', () => {
  const setup = () => {
    // 模拟 props
    const props = {
      // Jest 提供的mock 函数
      items:[],
      actions:{},
      actionsType:{}
    }

    // 通过 enzyme 提供的 shallow(浅渲染) 创建组件
    const wrapper = shallow(
      <ListPage {...props} />
    );

    return {
      props,
      wrapper
    }
  }

  const { wrapper, props } = setup();
  it('ListPage render initial', (done) => {
    expect(wrapper.state('selectedRows')).toEqual([])
    expect(wrapper.state('selectedRowKeys')).toEqual([])
    done()
  })


  it.skip('ListPage render set state ', (done) => {
    wrapper.state('selectedRows')
    expect(wrapper.state('selectedRowKeys')).toEqual([])
    done()
  })

})
