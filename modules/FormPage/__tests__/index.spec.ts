

import {shallow,mount,render, ShallowWrapper} from 'enzyme';
import FormPage from '../Form.react';
import FormView, {FormProps, FormState, Model} from './Form.view';

describe.skip('FormPage shallow render', () => {
  const setup = (): {
    props: Object,
    wrapper: ShallowWrapper<FormProps<Model>, FormState<Model>, FormView<Model>>;
  } => {
    //@ts-ignore
    const wrapper = shallow<FormView<Model>>(FormView, props);
    return {
      props,
      wrapper
    };
  };

  const { wrapper, props } = setup();
  it('FormPage render initial', (done) => {
    expect(wrapper.instance().render()).toBe(null)
    done()
  })

  it('formPage saveFormRef',(done)=>{
    const form = {}
    //@ts-ignore
    wrapper.instance().saveFormRef(form)
    expect(wrapper.instance().form).toBe(form)
    done()
  })

  it('FormPage onSubmit handleCancel', (done) => {
    wrapper.instance().form={
      getFieldsValue:jest.fn(),
      validateFieldsAndScroll:jest.fn()
    }
    wrapper.instance().handleCancel=jest.fn()
    wrapper.instance().onSubmit('handleCancel')
    //@ts-ignore
    expect(wrapper.instance().handleCancel.mock.calls.length).toBe(1)
    done()
  })


  it('FormPage onSubmit handleSubmit validateFieldsAndScroll error', (done) => {
    wrapper.instance().form={
      getFieldsValue:jest.fn(),
      validateFieldsAndScroll:jest.fn()
    }
    wrapper.instance().handleSubmit=jest.fn()
    wrapper.instance().onSubmit('handleSubmit')
    expect(wrapper.instance().form.validateFieldsAndScroll.mock.calls[0][1].apply(wrapper.instance(),[true,{a:1}])).toBe(undefined)
    expect(wrapper.instance().form.validateFieldsAndScroll.mock.calls.length).toBe(1)
    done()
  })

  it('FormPage onSubmit handleSubmit validateFieldsAndScroll pass validate', (done) => {
    wrapper.instance().form={
      getFieldsValue:jest.fn(),
      validateFieldsAndScroll:jest.fn()
    }
    wrapper.instance().handleSubmit=jest.fn()
    wrapper.instance().onSubmit('handleSubmit')
    wrapper.instance().form.validateFieldsAndScroll.mock.calls[0][1].apply(wrapper.instance(),[undefined,{a:1}])
    expect(wrapper.instance().form.validateFieldsAndScroll.mock.calls.length).toBe(1)
    //@ts-ignore
    expect(wrapper.instance().handleSubmit.mock.calls.length).toBe(1)
    done()
  })
})
