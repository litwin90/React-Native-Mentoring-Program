import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import Header from '../common/header/header';
import Divider from '../common/divider/divider';
import Product from '../common/product/product';
import ColorSelect from './color-select/color-select';
import ProductDescription from './description/description';

class ProductDetails extends Component {
    getPriceString(item) {
        return `$${item.price}`;
    }

    getOldPriceString(item) {
        return `$${item.oldPrice}`;
    }

    getDiscountString(item) {
        return `${item.discount}% Off`;
    }

    addToWishList() {
        console.log('add to wish list');
    }

    addToCart() {
        console.log('add to cart');
    }
    render() {
        return (
            <ScrollView>
                <Header />
                <Product item={this.props.item} isExtended={true} />
                <Divider />
                <ColorSelect colors={this.props.item.colors} />
                <Divider />
                <ProductDescription
                    description={this.props.item.description}
                    wishList={() => {
                        this.addToWishList();
                    }}
                    addToCart={() => {
                        this.addToCart();
                    }}
                />
            </ScrollView>
        );
    }
}

export default ProductDetails;
