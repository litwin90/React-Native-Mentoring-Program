import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import styles, { ExtendedStyles } from './styles';

export default class Product extends Component {
    constructor(props) {
        super(props);

        this.styles = this.props.isExtended ? ExtendedStyles : styles;
        this.currentImage = this.props.item.images[1];
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

    isActiveImage(image) {
        return image.id === this.currentImage.id;
    }

    showImage(image) {
        console.log(this.currentImage.id);

        return (this.currentImage = image);
    }

    getControlsGSX() {
        return this.props.isExtended ? (
            <View style={this.styles.controlsWrapper}>
                {this.props.item.images.map(image => (
                    <View key={image.id}>{this.getControlGSX(image)}</View>
                ))}
            </View>
        ) : null;
    }

    getControlGSX(image) {
        return (
            <TouchableOpacity
                onPress={() => {
                    this.showImage(image);
                }}>
                {image.id === this.currentImage.id ? (
                    <View style={this.styles.controlActive} />
                ) : (
                    <View style={this.styles.control} />
                )}
            </TouchableOpacity>
        );
    }

    stock() {}

    render() {
        return (
            <View style={this.styles.wrapper}>
                <View style={this.styles.imageWrapper}>
                    <Image source={this.currentImage.source} style={this.styles.image} />
                </View>
                <TouchableOpacity
                    onPress={() => {
                        this.stock();
                    }}>
                    <View style={this.styles.stockWrapper}>
                        <Text style={this.styles.stock}>In Stock</Text>
                    </View>
                </TouchableOpacity>
                {this.getControlsGSX()}
                <Text style={this.styles.name}>{this.props.item.name}</Text>
                <View style={this.styles.priceWrapper}>
                    <Text style={this.styles.price}>{this.getPriceString(this.props.item)}</Text>
                    <Text style={this.styles.oldPrice}>{this.getOldPriceString(this.props.item)}</Text>
                    <Text style={this.styles.discount}>{this.getDiscountString(this.props.item)}</Text>
                </View>
            </View>
        );
    }
}
