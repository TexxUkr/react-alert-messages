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
var Default = require ('react-icons/lib/fa/flask')

// mapping icons and colors to type of alert

let iconsMapping = new Map();
iconsMapping.set('cancel', { icon: MdCancel, color: 'white' });
iconsMapping.set('check', { icon: MdCheckCircle, color: 'rgb(74, 199, 100)' });
iconsMapping.set('error', { icon: MdError, color: 'rgb(234,79, 107)' });
iconsMapping.set('info', { icon: MdInfo, color: 'lightblue' });
iconsMapping.set('query', { icon: MdQuery, color: 'rgb(248,167, 64)' });
iconsMapping.set('warning', { icon: MdWarning, color: 'rgb(248,167, 64)' });
iconsMapping.set('default', { icon: Default, color: 'grey'});

const AlertIcon = props => (
        <section className={props.className} type= { iconsMapping.has(props.type) ? props.type : 'default'}>
            { 
                iconsMapping.get( 
                    iconsMapping.has(props.type) ? props.type : 'default'
                ).icon()
            }
        </section>
    )

const AlertIconStyled = styled(AlertIcon) `
  font-size: 16px;
  line-height: 18px;
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  align-self: flex-start;
  color: ${ props => { return iconsMapping.get(props.type).color }};
  `

export default AlertIconStyled;