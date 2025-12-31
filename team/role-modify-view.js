import React from 'react';
import PropTypes from 'prop-types';
import FormBuilder from '../../../coreView/common/form-builder';

export default function ECRoleModifyView({itemState, appPrefs, onSave, onCancel, inputChange}) {
    
	let formName = "EC_TEAM_ROLE_FORM";
	if (itemState.parentType == "MEMBER") {
		formName = "EC_MEMBER_ROLE_FORM";
	}
	let formTitle = "Role";
	let formGroup = "FORM1";
    
    return (
    	<FormBuilder itemState={itemState} formName={formName} formTitle={formTitle} 
    	formGroup={formGroup} appPrefs={appPrefs} onSave={onSave} onCancel={onCancel} 
    	inputChange={inputChange}/>
    );
}


ECRoleModifyView.propTypes = {
  itemState: PropTypes.object.isRequired,
  appPrefs: PropTypes.object,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  inputChange: PropTypes.func
};
