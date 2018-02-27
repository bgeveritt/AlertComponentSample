("use strict");

function externalAlert(alertWithType) {
    alertWithType('info', 'External', 'Alert triggered externally');
}
exports.externalAlert = externalAlert;