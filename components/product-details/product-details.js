import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { XmlEntities } from 'html-entities';
import htmlToText from 'html-to-text';

import Header from '../common/header/header';
import Divider from '../common/divider/divider';
import Product from '../common/product/product';
import ProductDescription from './description/description';

const entities = new XmlEntities();

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

    addToWishList() {}

    addToCart() {}

    goBack() {
        this.props.navigation.goBack();
    }

    getTitle() {
        return this.props.route.params.product.cell.name;
    }

    render() {
        return (
            <>
                <Header
                    title={this.getTitle()}
                    goBack={() => {
                        this.goBack();
                    }}
                />

                <ScrollView>
                    <Product item={this.props.route.params.product} isExtended={true} />
                    <Divider />
                    <Divider />
                    <ProductDescription
                        description={htmlToText.fromString(
                            entities.decode(this.props.route.params.product.cell.description),
                        )}
                        wishList={() => {
                            this.addToWishList();
                        }}
                        addToCart={() => {
                            this.addToCart();
                        }}
                    />
                </ScrollView>
            </>
        );
    }
}

export default ProductDetails;
