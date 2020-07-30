
import React from 'react';
import ReactDOM from 'react-dom';
import { UIProvider } from '@qualtrics/ui-react';
import i18n from '@qualtrics/ui-i18n';
import { PluginSdkService, languageCodeAdapter } from '@qualtrics/plugin-ui-react';

import { PluginApp } from './plugin-app/plugin-app';

import '@qualtrics/base-styles/dist/base-styles.css';

(() => {
  const clientPromise = PluginSdkService.getPluginSdkClient('actions_task');
  clientPromise.then(client => {
    const context = client.context;
    const languageCode = languageCodeAdapter(context.language);
    const i18nConfig = {
      localizedText: i18n[languageCode].QualtricsDesignSystemUI,
    };
    const Index = () => {
      return (
        <UIProvider config={i18nConfig}>
          <PluginApp pluginClient={client}/>
        </UIProvider>
      );
    };
  
    ReactDOM.render(<Index/>, document.getElementById('app-root'));
    // client.postMessage('valid', false);
  });
})();
