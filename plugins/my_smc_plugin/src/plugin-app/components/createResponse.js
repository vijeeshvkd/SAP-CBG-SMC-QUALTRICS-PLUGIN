import React, { useState, useEffect } from 'react';
import { Button, Menu, MenuItem, Tooltip } from '@qualtrics/ui-react';

import '../plugin-app.scss';
import { PipedTextInput } from '@qualtrics/plugin-ui-react';

export default function CreateResponse(props) {
    const pipedFields = props.pipedFields;
    const pluginClient = props.pluginClient;
    const [currentFields, setCurrentFields] = useState(props.currentFields);

    function onFirstNameChange(value, event) {
      const newCurrentFields = [...currentFields];
      newCurrentFields.find(x => x.id === "firstName").value = value;
      setCurrentFields(newCurrentFields);
    }
    function onLastNameChange(value, event) {
      const newCurrentFields = [...currentFields];
      newCurrentFields.find(x => x.id === "lastName").value = value;
      setCurrentFields(newCurrentFields);
    }
    function onEmailChange(value, event) {
      const newCurrentFields = [...currentFields];
      newCurrentFields.find(x => x.id === "email").value = value;
      setCurrentFields(newCurrentFields);
    }
    function onPhoneChange(value, event) {
      const newCurrentFields = [...currentFields];
      newCurrentFields.find(x => x.id === "phone").value = value;
      setCurrentFields(newCurrentFields);
    }
    _isDataValid();
    function _isDataValid() {
      let isDataValid = false;
      isDataValid = _checkRequiredFields(currentFields);
      pluginClient.postMessage('valid', isDataValid);
    }
    function _checkRequiredFields() {
      const requiredFields = currentFields.filter(fieldOption => {
        return fieldOption.hasOwnProperty('required') && fieldOption.required === true;
      });

      return requiredFields.every(requiredField => {
        return requiredField.value !== "";
      });
    }
    return (
        // <p>{props.pluginClient.getText('intro')}</p>
        <div>
            <div className="action-heading">{pluginClient.getText('actionHeading')}</div>
            <div className="field-rows">
            <div className="field-row">
                <div className="field-selector">
                    <Button className="customcss">{pluginClient.getText('firstName')}</Button>
                </div>
                <div className="required-indicator">
                    <div className="required-indicator-container">*</div>
                </div>
                <Tooltip
                    content={<label>{currentFields.find(x => x.id === "firstName").valueTooltip}</label>}
                    placement="top"
                    children={<div className="field-input">
                        <PipedTextInput
                            onChange={onFirstNameChange}
                            items={pipedFields}
                            value={currentFields.find(x => x.id === "firstName").value}
                            placeholder={currentFields.find(x => x.id === "firstName").valuePlaceholder}
                        /> </div>}
                />
            </div>

            <div className="field-row">
                <div className="field-selector">
                    <Button className="customcss">{pluginClient.getText('lastName')}</Button>
                </div>
                <div className="required-indicator">
                    <div className="required-indicator-container">*</div>
                </div>
                <Tooltip
                    content={<label>{currentFields.find(x => x.id === "lastName").valueTooltip}</label>}
                    placement="top"
                    children={<div className="field-input">
                        <PipedTextInput
                            onChange={onLastNameChange}
                            items={pipedFields}
                            value={currentFields.find(x => x.id === "lastName").value}
                            placeholder={currentFields.find(x => x.id === "lastName").valuePlaceholder}
                        /> </div>}
                />
            </div>

            <div className="field-row">
                <div className="field-selector">
                    <Button className="customcss">{pluginClient.getText('Email')}</Button>
                </div>
                <div className="required-indicator">
                    <div className="required-indicator-container">*</div>
                </div>
                <Tooltip
                    content={<label>{currentFields.find(x => x.id === "email").valueTooltip}</label>}
                    placement="top"
                    children={<div className="field-input">
                        <PipedTextInput
                            onChange={onEmailChange}
                            items={pipedFields}
                            value={currentFields.find(x => x.id === "email").value}
                            placeholder={currentFields.find(x => x.id === "email").valuePlaceholder}
                        /> </div>}
                />
            </div>

            <div className="field-row">
                <div className="field-selector">
                    <Button className="customcss">{pluginClient.getText('Phone')}</Button>
                </div>
                <div className="required-indicator">
                    <div className="required-indicator-container"></div>
                </div>
                <Tooltip
                    content={<label>{currentFields.find(x => x.id === "email").valueTooltip}</label>}
                    placement="top"
                    children={<div className="field-input">
                        <PipedTextInput
                            onChange={onPhoneChange}
                            items={pipedFields}
                            value={currentFields.find(x => x.id === "phone").value}
                            placeholder={currentFields.find(x => x.id === "phone").valuePlaceholder}
                        /> </div>}
                />
            </div>
          </div>
      </div>
    );
}
function PipedTextInputSubmenusExample() {
    return (
      <PipedTextInput
        items={[
          {
            label: 'First Name',
            value: {  
              locator: '~{aed://firstName}'
            }
          },
          {
            label: 'Account',
            submenu: {
              items: [
                {
                  label: 'Email',
                  value: {
                    locator: '~{aed://email}'
                  }
                },
                {
                  label: 'Profile',
                  submenu: {
                    items: [
                      {
                        label: 'Profile Picture',
                        value: {
                          locator: '~{aed://profilePicture}'
                        }
                      },
                      {
                        label: 'Profile ID',
                        value: {
                          locator: '~{aed://profileId}'
                        }
                      },
                    ]
                  }
                },
              ]
            }
          },
          {
            label: 'Last Name',
            value: {  
              locator: '~{aed://lastName}'
            }
          },
          
        ]}>
      </PipedTextInput>
    );
  }