import React, { Component } from 'react';

export class Pledge extends Component {
  render() {
    const { title, price, disabled, leftPledges } = this.props;
    return (
        <div className='pledge' disabled={ disabled }>
          <div className='upper-area'>
            <span className='pledge-title'>{ title }</span>
            <span className='pledge-price'>{ price }</span>
          </div>
          <div className="desc-area">
              { this.props.children }
          </div>
      </div>
    );
  }
}

export default Pledge;
