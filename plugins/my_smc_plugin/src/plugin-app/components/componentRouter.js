import React, { useState, useEffect } from 'react';
import '../plugin-app.scss';

import initialValue from '../util/default';
import CreateResponse from './createResponse'; 

export default function ComponentRouter(props) {
    const pluginClient = props.pluginClient;
    const pluginContext = pluginClient.getContext();

    pluginClient.registerHandler('save', save);

    const [currentFields, setCurrentFields] = useState(_getDefaultFields());
    const [pipedFields, setPipedFields] = useState(pluginContext.pipedText);

    // Get Default Fields
    function _getDefaultFields() {
        // Checking if plugin task has already been saved
        if (pluginContext.config.hasOwnProperty('actionId') && pluginContext.config.hasOwnProperty('currentFields')) {
            return pluginContext.config.currentFields;
        }
        return initialValue(props.actionIndex, pluginClient);
    }

    // Ensures the configuration is complete before permitting the user to save
    function save() {
        const config = _getPluginConfig();
        return (config);
    }

    function _getPluginConfig() {
        const credential = _getCredentials();
        const requestBodyParameters = {};
        requestBodyParameters.surveyID = pluginContext.userMeta.surveyId;
        //requestBodyParameters.responseID = "${e://Field/ResponseID}";

        var systemUrl;

        return {
            url: systemUrl, //  CPI URL
            requestType: 'POST', // method
            contentType: 'JSON',
            keyValues: requestBodyParameters,
            credential: credential,
            triggerAction: 'WebService',
            currentFields: currentFields, // Using this to store previous state in config
            actionIndex: props.actionIndex
        };
    }
    function _getCredentials() {
        const credentials = pluginClient.getContext().availableCredentials;

        return {
            id: credentials.credentialId,
            paramFormat: 'header',
            paramTemplate: 'Bearer %s',
            paramName: 'Authorization'
        };
    }
    return (
        <CreateResponse actionIndex = {
            props.actionIndex
          }
          pipedFields = {
              pipedFields
          }
          currentFields = {
              currentFields
          }
          pluginClient = {
              pluginClient
          } 
        />
    )
}