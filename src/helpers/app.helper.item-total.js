const itemTotal = ( item ) => {
    let total = item.basePrice;
    for ( let option of item.toppings ) {
        if ( option.selected ) {
            total += option.topping.price;
        }
    }
    return total.toFixed(2);
}

export default itemTotal;