import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
  dataRequested, 
  orderAddToCartRequest
} from '../../actions/order';
import SelectOrder from '../../components/selectOrder';

const mapStateToProps = state => {
  return ({
    data: state.order.data,
    cart: state.order.cart,
    message: state.order.message,
    isLoading: state.order.isLoading
  })  
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchOptions: () => dataRequested(),
  selectItem: ( item ) => orderAddToCartRequest( item )
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectOrder)