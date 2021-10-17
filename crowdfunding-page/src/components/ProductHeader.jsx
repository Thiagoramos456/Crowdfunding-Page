import React, { Component } from 'react'
import logoMastercraft from '../images/logo-mastercraft.svg';

export class ProductHeader extends Component {
    render() {
        return (
            <section className="product-header">
                <img className="logo-mastercraft" src={ logoMastercraft } alt="Mastercraft logo" />
                <div className="product-header-titles">
                    <h1 className="product-title">Mastercraft Bamboo Monitor Rises</h1>
                    <p className="product-subtitle">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
                </div>
                <div className="product-header-options">
                    <button className="btn-back">Back this project</button>
                    <button className="btn-bookmark">Bookmark</button>
                </div>
            </section>
        )  
    }
}

export default ProductHeader
