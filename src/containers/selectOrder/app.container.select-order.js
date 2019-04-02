import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { dataRequested, } from '../../actions/app.actions.menu';
import { addToCartRequest } from '../../actions/app.actions.cart';
import SelectOrder from '../../components/selectOrder/app.component.select-order';

const mapStateToProps = state => {
  return ({
    data: state.menu.data,
    isLoading: state.menu.isLoading
  })  
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchOptions: () => dataRequested(),
  selectItem: ( data, index ) => addToCartRequest( JSON.parse ( JSON.stringify ( data[ index ] ) ) )
}, dispatch )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( SelectOrder )