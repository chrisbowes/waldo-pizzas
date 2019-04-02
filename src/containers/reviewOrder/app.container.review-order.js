import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addToCartRequest, removeFromCartRequest, toggleOptionSelection } from '../../actions/app.actions.cart';
import ReviewOrder from '../../components/reviewOrder/app.component.review-order';

const mapStateToProps = state => {
  return ({
    cart: state.cart.items,
    isLoading: state.cart.isLoading
  })  
}

const mapDispatchToProps = dispatch => bindActionCreators({
  selectItem: ( item ) => addToCartRequest( item ),
  removeItem: ( itemIndex ) => removeFromCartRequest( itemIndex ),
  toggleOption: ( itemIndex, item, optionIndex ) => toggleOptionSelection( itemIndex, item, optionIndex )
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewOrder)