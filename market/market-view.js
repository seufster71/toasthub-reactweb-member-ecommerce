import React from 'react';
import PropTypes from 'prop-types';
import CardTile from '../../../coreView/common/card-tile';

export default function ECMarketView({itemState, appPrefs, onListLimitChange,
	onSearchChange, onSearchClick, onPaginationClick, onOrderBy, onOption, 
	closeModal, session }) {

	let columns = [];
    if (itemState.prefLabels != null && itemState.prefLabels.EC_MARKET_PAGE != null) {
    	columns = itemState.prefLabels.EC_MARKET_PAGE;
    }
    let group = "TABLE1";

	let header = "";
	if (itemState.prefTexts.EC_MARKET_PAGE != null && itemState.prefTexts.EC_MARKET_PAGE.EC_MARKET_PAGE_HEADER != null) {
		header = itemState.prefTexts.EC_MARKET_PAGE.EC_MARKET_PAGE_HEADER.value;
	}
	
	let pickupDesc = "*Online Pickup Only*";
	let imgSrc = "https://dummyimage.com/450x300/dee2e6/6c757d.jpg";
	let code = "STORE";
	let urlDesc = "View Store";
	
	let rows = [];
	if (itemState != null && itemState.items != null && itemState.items.length > 0) {
		for (let i = 0; i < itemState.items.length; i++) {
			rows.push(<CardTile title={itemState.items[i].title} pickupDesc={pickupDesc} imgSrc={imgSrc} code={code} item={itemState.items[i]} urlDesc={urlDesc} onOption={onOption}/>);
		}
	}


    return (
	<div>
        <header className="bg-dark py-3">
            <div className="container px-4 px-lg-5 my-3">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">{header}</h1>
                </div>
            </div>
        </header>
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-2 row-cols-xl-2 justify-content-center">
                	{rows}
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
