import { connect } from 'react-redux';
import Homes from 'js/components/pages/Home';
import { actions } from 'js/store/modules/home/action';

function mapStateToProps(state) {
  return {
    text: state.home.text,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    reset: () => {
      dispatch(actions.reset());
    },
    setText: (text) => {
      dispatch(actions.setText(text));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homes);