import React, { Component } from 'react';
import Pledge from './Pledge';

export class ProductInfo extends Component {
  render() {
    return (
      <section className='info-project'>
        <h3 className='about-project'>About this project</h3>
        <p className='desc-project'>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand. Featuring artisan craftsmanship, the
          simplicity of design creates extra desk space below your computer to
          allow notepads, pens, and USB sticks to be stored under the stand.
        </p>
        <Pledge title='Bamboo Stand' price='$25' leftPledges='101'>
          <p>
            You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and you’ll be added to a special
            Backer member list.
          </p>
        </Pledge>
        <Pledge title='Black Edition Stande' price='$75' leftPledges='64'>
          <p>
            You get a Black Special Edition computer stand and a personal thank
            you. You’ll be added to our Backer member list. Shipping is
            included.
          </p>
        </Pledge>
        <Pledge
          title='Mahogany Special Edition'
          price='$200'
          leftPledges='0'
          disabled={true}
        >
          <p className='pledge-desc'>
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
            personal thank you. You’ll be added to our Backer member list.
            Shipping is included.
          </p>
        </Pledge>
      </section>
    );
  }
}

export default ProductInfo;
