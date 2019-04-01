import { connect } from 'react-redux';
import MiniCart from '../../components/minicart/app.component.minicart';
import cartTotal from '../../helpers/app.helper.cart-total';

const mapStateToProps = state => {
  return ({
    totalItems: state.cart.items.length,
    totalPrice: cartTotal( state.cart.items )
  })  
}

export default connect(
  mapStateToProps
)(MiniCart)