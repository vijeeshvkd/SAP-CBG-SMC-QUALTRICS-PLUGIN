import React, { useState, useEffect } from 'react';
import { Button, Menu, MenuItem } from '@qualtrics/ui-react';
import ComponentRouter from './components/componentRouter';
import './plugin-app.scss';

import { PluginSdkService, PipedTextInput } from '@qualtrics/plugin-ui-react';

const pluginClient = PluginSdkService.getPluginSdkClient();

export function PluginApp(props) {
  function onFieldChange(e) {

  }
  function loadSMCResponseFields() {
    return <ComponentRouter
        pluginClient={props.pluginClient}
      />
  }
  return (
    <div className="plugin-app">
      <div className="action-task-list">
        
      </div>
      <div className="plugin-section">
          <div className="plugin-body">
            {loadSMCResponseFields()}
          </div>
      </div>
    </div>      
  );
}

