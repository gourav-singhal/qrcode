import React from 'react';
import TestRenderer from 'react-test-renderer';

import { Button } from '../index';

describe('Button Component', () => {
  it('renders as expected', () => {
    const wrapper = TestRenderer.create(
      <Button onPress={null} radius={5} textColor="primary">
        hello
      </Button>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  // it('calls onPress callback when pressed', () => {
  //   const onPress = jest.fn();
  //   const wrapper = TestRenderer.create(
  //     <Button onPress={onPress} radius={5} textColor="primary">
  //       hello
  //     </Button>,
  //   );

  //   wrapper
  //     .find('TouchableOpacity')
  //     .first()
  //     .simulate('press');

  //   expect(onPress).toHaveBeenCalled();
  // });
});
