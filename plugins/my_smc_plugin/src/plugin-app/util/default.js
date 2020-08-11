export default function initialValue(actionIndex, Client) {
    return [{
        id: 'system_url',
        name: 'CPI System URL',
        required: true,
        value: '',
        valueTooltip: Client.getText('fld_tooltip_system_url')
    },{
        id: 'firstName',
        name: 'FirstName',
        value: '${m://FirstName}',
        required: true,
        valueTooltip: Client.getText('fld_tooltip_firstName'),
        valuePlaceholder: Client.getText('fld_placeholder_firstName'),
    }, {
        id: 'lastName',
        name: 'LastName',
        value: '${m://LastName}',
        required: true,
        valueTooltip: Client.getText('fld_tooltip_lastName'),
        valuePlaceholder: Client.getText('fld_placeholder_lastName'),
    }, {
        id: 'email',
        name: 'Email',
        value: '${m://Email}',
        required: true,
        valueTooltip: Client.getText('fld_tooltip_email'),
        valuePlaceholder: Client.getText('fld_placeholder_email'),
    }, {
        id: 'phone',
        name: 'Phone',
        value: '',
        required: false,
        valueTooltip: Client.getText('Phone'),
        valuePlaceholder: Client.getText('Phone'),
    }]

}