import { connect } from 'react-redux';
import About from 'js/components/pages/About';

function mapStateToProps(state) {
  return {
    text: state.home.text,
  };
}

function mapDispatchToProps() {
  return {}
  // return (
  //   functions
  // );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);