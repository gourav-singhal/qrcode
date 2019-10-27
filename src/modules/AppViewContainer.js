import { compose, lifecycle } from 'recompose';
import { Platform, UIManager } from 'react-native';

import AppView from './AppView';

export default compose(
  lifecycle({
    componentDidMount() {
      if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental &&
          UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    },
  }),
)(AppView);
