"use strict";
var ServiceBase = (function () {
    function ServiceBase() {
    }
    ServiceBase.prototype.create = function (entity) {
        var result = this.entityList.push(entity);
        return result > 0;
    };
    ServiceBase.prototype.update = function (id, entity) {
        var index = this.entityList.map(function (x) { return x.id; }).indexOf(id);
        if (index == -1)
            return false;
        this.entityList[index] = entity;
        return true;
    };
    ServiceBase.prototype.delete = function (id) {
        var index = this.entityList.map(function (x) { return x.id; }).indexOf(id);
        if (index == -1)
            return false;
        this.entityList.splice(index);
        return true;
    };
    ServiceBase.prototype.read = function (id) {
        var index = this.entityList.map(function (x) { return x.id; }).indexOf(id);
        if (index == -1)
            return null;
        return this.entityList[index];
    };
    ServiceBase.prototype.list = function () {
        return this.entityList;
    };
    return ServiceBase;
}());
exports.ServiceBase = ServiceBase;
//# sourceMappingURL=ServiceBase.js.map