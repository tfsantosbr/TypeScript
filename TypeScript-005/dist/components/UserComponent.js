"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require('./base');
var UserService_1 = require('services/UserService');
var UserComponent = (function (_super) {
    __extends(UserComponent, _super);
    function UserComponent() {
        _super.call(this, new UserService_1.UserService());
    }
    return UserComponent;
}(base_1.ComponentBase));
//# sourceMappingURL=UserComponent.js.map