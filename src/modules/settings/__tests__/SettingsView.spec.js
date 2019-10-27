import React from 'react';
import SettingsView, {
  SettingSwitch,
  generateCodePreviewColors,
} from '../SettingsView';
import TestRenderer from 'react-test-renderer';
import { colors } from '../../../styles';

describe('Settings View', () => {
  it('should render as expected', () => {
    const props = {
      navigation: {
        navigate: () => {},
      },
      settings: {
        batch: true,
        vibrate: true,
        beep: true,
        history: false,
        duplicate: false,
        backgroundColor: '#ffffff',
        foregroundColor: '#000000',
      },
      goPricingPage: () => {},
      isBackgroundModalVisible: false,
      isForegroundModalVisible: false,
      toggleBackgroundColorModal: () => {},
      toggleForegroundColorModal: () => {},
      handleBackgroundColorPick: () => {},
      handleForegroundColorPick: () => {},
      setSettingValue: () => {},
    };

    const wrapper = TestRenderer.create(<SettingsView {...props} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});

describe('Setting View => Switch', () => {
  it('should render as expected', () => {
    const props = {
      value: true,
      onChange: () => {},
      name: 'batch',
    };

    const wrapper = TestRenderer.create(<SettingSwitch {...props} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});

describe('Setting View => generateCodePreviewColors', () => {
  it('should return expected result', () => {
    const color = '#ffffff';
    expect(generateCodePreviewColors(color)).toEqual({
      backgroundColor: color,
      borderColor: colors.lightGray,
    });
  });
});
