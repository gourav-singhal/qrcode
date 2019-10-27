import React from 'react';
import TestRenderer from 'react-test-renderer';

import { Picker } from '../index';

describe('Picker Component', () => {
  // it('renders as expected on datetime', () => {
  //   const props = {
  //     type: 'datetime',
  //     key: 1,
  //     placeholder: 'hello',
  //     inputValue: 123,
  //   };

  //   const wrapper = TestRenderer.create(<Picker {...props} />);
  //   expect(wrapper.toJSON()).toMatchSnapshot();
  // });

  it('renders as expected on picker', () => {
    const props = {
      type: 'picker',
      key: 1,
      items: [{ id: 1, label: 'hello' }, { id: 2, label: 'man' }],
    };

    const wrapper = TestRenderer.create(<Picker {...props} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
