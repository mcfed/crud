

import React from 'react';
import {shallow,mount,render} from 'enzyme';
import FormPage from '../index'



describe('FormPage shallow render', () => {
  const setup = () => {
    // 模拟 props
    const props = {
      // Jest 提供的mock 函数
      items:[],
      actions:{},
      type:{}
    }

    // 通过 enzyme 提供的 shallow(浅渲染) 创建组件
    const wrapper = shallow(
      <FormPage {...props} />
    );

    return {
      props,
      wrapper
    }
  }

  const { wrapper, props } = setup();
  it('FormPage render initial', (done) => {
//    expect(wrapper.state('selectedRows')).toEqual([])
 //   expect(wrapper.state('selectedRowKeys')).toEqual([])
    done()
  })



})
