import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import styles, { ExtendedStyles } from './styles';

class Product extends Component {
    constructor(props) {
        super(props);

        this.styles = this.props.isExtended ? ExtendedStyles : styles;
    }

    getPriceString(item) {
        return `$${item.price}`;
    }

    getOldPriceString(item) {
        return `$${item.oldPrice}`;
    }

    getDiscountString(item) {
        return `${item.discount}% Off`;
    }

    getStockButtonGSX() {
        return this.props.isExtended ? (
            <TouchableOpacity
                onPress={() => {
                    this.stock();
                }}>
                <View style={this.styles.stockWrapper}>
                    <Text style={this.styles.stock}>In Stock</Text>
                </View>
            </TouchableOpacity>
        ) : null;
    }

    stock() {}

    render() {
        return (
            <TouchableOpacity
                style={this.styles.wrapper}
                onPress={() => (this.props.isExtended ? null : this.props.gotoProductDetails(this.props.item))}>
                <View style={this.styles.imageWrapper}>
                    <Image source={{ uri: `http:${this.props.item.cell.thumb}` }} style={this.styles.image} />
                </View>
                {this.getStockButtonGSX()}
                {/* {this.getControlsGSX()} */}
                <Text style={this.styles.name}>{this.props.item.cell.name}</Text>
                <View style={this.styles.priceWrapper}>
                    <Text style={this.styles.price}>{this.getPriceString(this.props.item.cell)}</Text>
                    {/* <Text style={this.styles.oldPrice}>{this.getOldPriceString(this.props.item.cell)}</Text> */}
                    {/* <Text style={this.styles.discount}>{this.getDiscountString(this.props.item.cell)}</Text> */}
                </View>
            </TouchableOpacity>
        );
    }
}

export default Product;
