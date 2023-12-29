import React from 'react';
import PropTypes from 'prop-types';
import CardTile from '../../../coreView/common/card-tile';

export default function ECMarketView({itemState, fields, texts, labels, onChangeLogin,
  onChangeRegistration, fieldChangeEvent, onForgotPassword,
  fieldBlurEvent, buttonClick, handleChange, changeView }) {



    return (
	<div>
        <header className="bg-dark py-3">
            <div className="container px-4 px-lg-5 my-3">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Welcome to the Market</h1>
                </div>
            </div>
        </header>
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-2 row-cols-xl-2 justify-content-center">
                    <CardTile title="Local Street Market" pickupDesc="*Local Pickup Only*" imgSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" url="/member/ec-store" urlDesc="View Store"/>
                    <CardTile title="South Side Market" pickupDesc="*Local Pickup Only*" imgSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" url="/member/ec-store" urlDesc="View Store"/>
                    <CardTile title="World Bazzare" pickupDesc="*Online Pickup Only*" imgSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" url="/member/ec-store" urlDesc="View Store"/>
                    <CardTile title="Pet Imporium" pickupDesc="*Online Pickup Only*" imgSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" url="/member/ec-store" urlDesc="View Store"/>
               		<CardTile title="Mega Flee Market" pickupDesc="*Online or Local Pickup*" imgSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" url="/member/ec-store" urlDesc="View Store"/>
                    <CardTile title="Another Time Market" pickupDesc="*Online or Local Pickup*" imgSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" url="/member/ec-store" urlDesc="View Store"/>
                </div>
            </div>
        </section>
      </div>
    );
}


ECMarketView.propTypes = {
  itemState: PropTypes.object,
  fields: PropTypes.object,
  texts: PropTypes.object,
  labels: PropTypes.object,
  onChangeLogin: PropTypes.func,
  onChangeRegistration: PropTypes.func,
  onForgotPassword: PropTypes.func,
  fieldChangeEvent: PropTypes.func,
  fieldBlurEvent: PropTypes.func,
  buttonClick: PropTypes.func,
  handleChange: PropTypes.func,
  changeView: PropTypes.func
};
