var _this = this;
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
export var handleError = function (error) {
    if (!(error instanceof Response))
        throw TypeError("error " + error + " can't be handled as it's not Response type, it is: " + typeof error);
    var body = error.json() || error.text();
    return Observable.throw({
        body: body.error && body.error_message ?
            error.status + " - " + body.error + ": " + body.error_message : error.status + " - " + error,
        status: error.status, _resp: error, _parsed: body
    });
};
export var subHandleError = function (error) {
    _this.alertsService.alerts.push({
        type: 'danger',
        msg: error.message ? (error.message.startsWith('JSON.parse') ? 'API offline' : error.message) : error.body
    });
};
//# sourceMappingURL=/home/samuel/repos/glaucoma-australia/glaucoma-risk-calc-web-frontend/src/src/app/api/service-utils.js.map