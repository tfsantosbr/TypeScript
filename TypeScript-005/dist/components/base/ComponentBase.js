"use strict";
var ComponentBase = (function () {
    function ComponentBase(service) {
        this.service = service;
    }
    ComponentBase.prototype.create = function () {
        try {
            var result = this.service.create(this.entity);
            if (result)
                console.info('Entidade criada com sucesso!');
        }
        catch (e) {
            console.error(e);
        }
    };
    ComponentBase.prototype.update = function () {
        try {
            var result = this.service.update(this.entity.id, this.entity);
            if (result)
                console.info('Entidade atualizada com sucesso!');
        }
        catch (e) {
            console.error(e);
        }
    };
    ComponentBase.prototype.delete = function (id) {
        try {
            var result = this.service.delete(id);
            if (result)
                console.info('Entidade deletada com sucesso!');
        }
        catch (e) {
            console.error(e);
        }
    };
    ComponentBase.prototype.read = function (id) {
        try {
            var entity = this.service.read(id);
            if (entity != null)
                console.info(entity);
        }
        catch (e) {
            console.error(e);
        }
    };
    ComponentBase.prototype.list = function () {
        try {
            var objList = this.service.list();
            if (objList != null)
                console.info(objList);
        }
        catch (e) {
            console.error(e);
        }
    };
    return ComponentBase;
}());
exports.ComponentBase = ComponentBase;
//# sourceMappingURL=ComponentBase.js.map