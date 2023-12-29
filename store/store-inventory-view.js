import React from 'react';
import PropTypes from 'prop-types';
import CardTile from '../../../coreView/common/card-tile';

export default function StoreView({itemState, fields, texts, labels, onChangeLogin,
  onChangeRegistration, fieldChangeEvent, onForgotPassword,
  fieldBlurEvent, buttonClick, handleChange, changeView }) {


    return (
     <div>
        <header className="bg-dark py-3">
            <div className="container px-4 px-lg-5 my-3">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Welcome to the Stores at XXX</h1>
                </div>
            </div>
        </header>
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                	<CardTile title="Sandy Bottom Nursary" pickupDesc="*Local Pickup Only*" imgSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" url="/member/ec-storeinventory" urlDesc="Shop"/>
                   	<CardTile title="Southern Seed Exchange Test" pickupDesc="*Local Pickup Only*" imgSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" url="/member/ec-storeinventory" urlDesc="Shop"/>
                   	<CardTile title="Lydia's Honey Pine Farm" pickupDesc="*Local Pickup Only*" imgSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" url="/member/ec-storeinventory" urlDesc="Shop"/>
                   	<CardTile title="Coral Eclipse" pickupDesc="*Online Pickup Only*" imgSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" url="/member/ec-storeinventory" urlDesc="Shop"/>
                   	<CardTile title="Pet Planet" pickupDesc="*Online Pickup Only*" imgSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" url="/member/ec-storeinventory" urlDesc="Shop"/>
                 	<CardTile title="Dogs and stuff" pickupDesc="*Online Pickup Only*" imgSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" url="/member/ec-storeinventory" urlDesc="Shop"/>
                    <CardTile title="Dyno Blaster" pickupDesc="*Online Pickup Only*" imgSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" url="/member/ec-storeinventory" urlDesc="Shop"/>
                    <CardTile title="Smoke and Flame" pickupDesc="*Online Pickup Only*" imgSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" url="/member/ec-storeinventory" urlDesc="Shop"/>
                </div>
            </div>
        </section>
      </div>
    );
}


StoreView.propTypes = {
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
