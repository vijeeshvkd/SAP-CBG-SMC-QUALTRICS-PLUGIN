import React, { useState } from 'react';

import { TaskFields, FieldItem } from '@qualtrics/plugin-ui-react';
import { MenuItem, SelectMenu } from '@qualtrics/ui-react';

import './task-fields-example.scss';

export function TaskFieldsExample(props) {
  const[fields, setFields] = useState([
    { id: 'summary_field', name: 'Summary', value: 'This is a brief summary.' },
    { id: 'custom_menu', name: 'Custom Menu'}
  ]);
  const fieldItems = [
    { name: 'Summary', required: true, id: 'summary_field', valueTooltip: 'Provide a Brief Summary', valuePlaceholder: 'enter the summary here...' },
    { name: 'ID', required: false, id: 'id_field', valueTooltip: 'Provide a Unique ID', valuePlaceholder: '12345' },
    { name: 'Amount', required: false, id: 'amount_field', valueTooltip: 'The Total Amount in American Dollars', valuePlaceholder: 'enter the dollar amount here...' },
    {
      name: 'Custom Menu',
      required: false,
      id: 'custom_menu',
      valueTooltip: 'Custom Dropdown Menu',
      valuePlaceholder: 'Custom Menu...',
      dropdownLabel: 'Custom Field Menu',
      dropdownOptions: [
        { id: 'optionA', value: 'OptionA', text: 'Option A' },
        { id: 'optionB', value: 'OptionB', text: 'Option B' },
        { id: 'optionC', value: 'OptionC', text: 'Option C' },
      ],
    },
  ];

  const onFieldAdd = (fieldId) => {
    let nextFields = fields.slice();
    let field = fieldItems.find(field => {
      return field.id === fieldId;
    });
    nextFields.push({ value: '', id: fieldId, name: field.name });
    setFields(nextFields);
  };

  const onFieldRemove = (fieldId) => {
    let newFields = fields.slice();
    let fieldIndex = newFields.findIndex(field => {
      return field.id === fieldId;
    });
    if(fieldIndex >= 0) {
      newFields.splice(fieldIndex, 1);
      setFields(newFields);
    }
  };

  const onFieldValueChange = (fieldId, value, event) => {
    let newFields = fields.slice();
    let fieldIndex = newFields.findIndex(field => {
      return field.id === fieldId;
    });
    if(fieldIndex >= 0) {
      let newField = Object.assign({}, newFields[fieldIndex]);
      newField.value = value;
      newFields[fieldIndex] = newField;
      setFields(newFields);
    }
  };

  const onFieldSwitch = (oldFieldId, newFieldId) => {
    let newFields = fields.slice();
    let newField = fieldItems.find(field => {
      return field.id === newFieldId;
    });
    let fieldToInclude = { value: '', id: newFieldId, name: newField.name };
    let oldFieldIndex = newFields.findIndex(field => {
      return field.id === oldFieldId;
    });
    if(oldFieldIndex >= 0) {
      newFields[oldFieldIndex] = fieldToInclude;
    }

    setFields(newFields);
  }

  const handleCustomDropdownChange = (value) => {
    console.log(value);
  };

  const pipedTextItems = [
    { label: 'First Name', value: { locator: '~{aed://firstName}' } },
    { label: 'Last Name', value: { locator: '~{aed://lastName}' } },
  ];

  let values = fields.map(field => {
    return { value: field.value, name: field.name, id: field.id };
  });

  return (
    <TaskFields
      addFieldLabel="Add Field"
      pipedTextItems={pipedTextItems}
      onFieldAdd={onFieldAdd}
      onFieldRemove={onFieldRemove}
      onFieldInputChange={onFieldValueChange}
      onFieldSwitch={onFieldSwitch}
      values={values} >
      
      {fieldItems.map(option => {
        if(option.dropdownOptions !== undefined) {
          const menuItems = option.dropdownOptions.map((item, idx) => {
            return (
              <MenuItem
                value={{
                  id: item.id,
                  value: item.value,
                }}
                key={idx}
              >
                {item.text}
              </MenuItem>
            )
          });
          return (
            <FieldItem
              name={option.name}
              key={option.id}
              id={option.id}
              required={option.required}
              valuePlaceholder={option.valuePlaceholder}
              valueTooltip={option.valueTooltip} >
                <SelectMenu
                  className="custom-dropdown-menu"
                  onChange={handleCustomDropdownChange}
                  defaultLabel={option.dropdownLabel}>
                  {menuItems}
                </SelectMenu>
            </FieldItem>
          );
        } else {
          return (
            <FieldItem
              name={option.name}
              key={option.id}
              id={option.id}
              required={option.required}
              valuePlaceholder={option.valuePlaceholder}
              valueTooltip={option.valueTooltip} >
            </FieldItem>
          );
        }
      })
    }
    </TaskFields>
  );
}
