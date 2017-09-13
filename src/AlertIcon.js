import React from 'react';
import styled from 'styled-components';

/*
    a stateless and self styled element that returns an icon corresponds to the alert type
    icon is a react icon that could be loaded from react-icons
    mapping of icons and types are done as iconsMapping Map objects
*/

// defining icons

var MdCancel = require('react-icons/lib/md/cancel');
var MdCheckCircle = require('react-icons/lib/md/check-circle');
var MdError = require('react-icons/lib/md/error-outline');
var MdInfo = require('react-icons/lib/md/info-outline');
var MdQuery = require('react-icons/lib/md/query-builder');
var MdWarning = require('react-icons/lib/md/warning');

// mapping icons to type of alert

let iconsMapping = new Map();
iconsMapping.set('cancel', MdCancel);
iconsMapping.set('check', MdCheckCircle);
iconsMapping.set('error', MdError);
iconsMapping.set('info', MdInfo);
iconsMapping.set('query', MdQuery);
iconsMapping.set('warning', MdWarning);
iconsMapping.set('default', null);

const AlertIcon = (props) => {
        let type = 'default';
        if (iconsMapping.has(props.type)) type = props.type;
        
        //console.log('Icon is here. props are:' + type);
        return (
            <AlertBoxIconTypeStyle type={type}>
                {iconsMapping.get(type)()}
            </AlertBoxIconTypeStyle>
        );
}

const AlertBoxIconTypeStyle = styled.section`
  font-size: 16px;
  line-height: 18px;
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  align-self: flex-start;
  color: ${props => {
      if (props.type === 'error') return ('rgb(234,79, 107)')
      if (props.type === 'check') return ('rgb(74, 199, 100)')
      if (props.type === 'query') return ('rgb(248,167, 64)')
      if (props.type === 'warning') return ('rgb(248,167, 64)')
      if (props.type === 'info') return ('white')
    }};
  `

export default AlertIcon;