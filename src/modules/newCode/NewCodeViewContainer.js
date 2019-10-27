import { connect } from 'react-redux';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import analytics from '@react-native-firebase/analytics';

import { codeTypesList } from './NewCodeState';
import NewCodeView from './NewCodeView';

export default compose(
  connect(state => ({
    isPro: state.app.isPro,
  })),
  withState('activeCodeType', 'setCodeType', codeTypesList.TEXT),
  withState('fieldValues', 'setFielsValues', {}),
  withHandlers({
    updateField: props => (field, value) => {
      props.setFielsValues({
        ...props.fieldValues,
        [field]: value,
      });
    },
    changeCodeType: props => nextCodeType => {
      props.setCodeType(nextCodeType);
      props.setFielsValues({});
    },
  }),
  lifecycle({
    componentDidMount() {
      // analytics().setCurrentScreen('newСode', 'NewCodeView');
    },
  }),
)(NewCodeView);
