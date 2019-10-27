import React from 'react';
import TestRenderer from 'react-test-renderer';

import PricingView from '../PricingView';

describe('Pricing View', () => {
  it('should render properly', () => {
    const wrapper = TestRenderer.create(<PricingView />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
