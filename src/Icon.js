import React, { Component } from 'react';

var MdCancel = require('react-icons/lib/md/cancel');
var MdCheckCircle = require('react-icons/lib/md/check-circle');
var MdError = require('react-icons/lib/md/error-outline');
var MdInfo = require('react-icons/lib/md/info-outline');
var MdQuery = require('react-icons/lib/md/query-builder');
var MdWarning = require('react-icons/lib/md/warning');

let iconsMapping = new Map();
iconsMapping.set('cancel', MdCancel);
iconsMapping.set('check', MdCheckCircle);
iconsMapping.set('error', MdError);
iconsMapping.set('info', MdInfo);
iconsMapping.set('query', MdQuery);
iconsMapping.set('warning', MdWarning);
iconsMapping.set('default', null);

const Icon = (props) => {
    
    try {

        let type = 'default';
        if (iconsMapping.has(props.type)) type = props.type;
        
        //console.log('Icon is here. props are:' + type);
        return (
            <div className={('alert-box-icon' + '-' + type)}>
                {iconsMapping.get(type)()}
            </div>
        );

    } catch (err) {
        console.log('Icon error: ' + err)
        return null;
    }
}

export default Icon;