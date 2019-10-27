// @flow
import { connect } from 'react-redux';
import { compose, withStateHandlers, withHandlers, lifecycle } from 'recompose';
import analytics from '@react-native-firebase/analytics';

import { setIsPro } from '../AppState';
import { setSettingValue } from './SettingsState';
import SettingsView from './SettingsView';

export const enhance = compose(
  connect(
    state => ({
      settings: state.settings,
      isPro: state.app.isPro,
    }),
    dispatch => ({
      setSettingValue: (setting, value) => {
        analytics().logEvent('toggleSettings', { setting, value });
        dispatch(setSettingValue({ setting, value }));
      },
      setIsPro: value => dispatch(setIsPro(value)),
    }),
  ),
  withStateHandlers(
    { isBackgroundModalVisible: false, isForegroundModalVisible: false },
    {
      toggleBackgroundColorModal: ({ isBackgroundModalVisible }) => () => ({
        isBackgroundModalVisible: !isBackgroundModalVisible,
      }),
      toggleForegroundColorModal: ({ isForegroundModalVisible }) => () => ({
        isForegroundModalVisible: !isForegroundModalVisible,
      }),
    },
  ),
  withHandlers({
    goPricingPage: props => () => {
      props.navigation.navigate('Pricing');
    },
    handleBackgroundColorPick: props => color => {
      props.setSettingValue('backgroundColor', color);
      props.toggleBackgroundColorModal();
    },
    handleForegroundColorPick: props => color => {
      props.setSettingValue('foregroundColor', color);
      props.toggleForegroundColorModal();
    },
  }),
  lifecycle({
    componentDidMount() {
      analytics().setCurrentScreen('settings', 'SettingsView');
    },
  }),
);

export default enhance(SettingsView);
