export default function initialValue(actionIndex, Client) {
    return [{
        id: 'firstName',
        name: 'FirstName',
        value: '${m://FirstName}',
        valueTooltip: Client.getText('fld_tooltip_firstName'),
        valuePlaceholder: Client.getText('fld_name_firstName'),
    }, {
        id: 'lastName',
        name: 'LastName',
        value: '${m://LastName}',
        valueTooltip: Client.getText('fld_tooltip_lastName'),
        valuePlaceholder: Client.getText('fld_name_lastName'),
    }, {
        id: 'email',
        name: 'Email',
        value: '${m://Email}',
        valueTooltip: Client.getText('fld_tooltip_email'),
        valuePlaceholder: Client.getText('fld_name_email'),
    }, {
        id: 'phone',
        name: 'Phone',
        value: '${m://Phone}',
        valueTooltip: Client.getText('Phone'),
        valuePlaceholder: Client.getText('Phone'),
    }]

}