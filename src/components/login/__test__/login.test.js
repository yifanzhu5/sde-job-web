import React from 'react';
import TodoItem from './index.js';
import { shallow } from 'enzyme';

const setup = () => {
  // 模拟props
  const props = {
    todo: {
      id: 1,
      text: 'TEST',
      completed: false
    },
    deleteTodo: jest.fn()
  };

  const wrapper = shallow(<TodoItem {...props} />);

  return {
    props,
    wrapper
  }
}

describe('components', () => {
  describe('TodoItem', () => {
    it('should render correctly', () => {
      const { wrapper } = setup();

      expect(wrapper.find('input').length).toBe(1);
      expect(wrapper.find('span').length).toBe(1);
    })

    it('input onChange should call deleteTodo', () => {
      const { wrapper, props } = setup();
      
      wrapper.find('input').simulate('change');
      expect(props.deleteTodo).toBeCalledWith(1);
    })

    it('should render todo title ', () => {
      const { wrapper, props } = setup();

      expect(wrapper.find('.todo-title').text()).toBe(props.todo.text);
    })
  })
})

describe('my sweet test', () => {
    it('clicks it', () => {
      
       const wrapper = shallow(<Login />);
       const updatedEmailInput = simulateChangeOnInput(wrapper, 'input#email-input', 'blah@gmail.com')
       const updatedPasswordInput = simulateChangeOnInput(wrapper, 'input#password-input', 'death'); 

       expect(updatedEmailInput.props().value).toEqual('blah@gmail.com');
       expect(updatedPasswordInput.props().value).toEqual('death');

       const instance = wrapper.instance()
       const spy = jest.spyOn(instance, 'handleSubmit')
   
       instance.forceUpdate();    
   
       const submitBtn = app.find('#sign-in')
       submitBtn.simulate('click')
       expect(spy).toHaveBeenCalled()

    })
    
  })