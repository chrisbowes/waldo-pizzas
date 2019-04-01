import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addToCartRequest } from '../../actions/app.actions.cart';
import ReviewOrder from '../../components/reviewOrder/app.component.review-order';

const mapStateToProps = state => {
  return ({
    cart: state.cart.items,
    isLoading: state.cart.isLoading
  })  
}

const mapDispatchToProps = dispatch => bindActionCreators({
  selectItem: ( item ) => addToCartRequest( item )
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewOrder)