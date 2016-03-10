System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2;
    var TodoItemRender;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            TodoItemRender = (function () {
                function TodoItemRender() {
                    this.toggle = new core_1.EventEmitter();
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TodoItemRender.prototype, "todo", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], TodoItemRender.prototype, "toggle", void 0);
                TodoItemRender = __decorate([
                    core_1.Component({
                        encapsulation: core_2.ViewEncapsulation.Native,
                        selector: 'todo-item-render',
                        template: "<style>.completed{text-decoration:line-through;}</style><div><span [ngClass]=\"todo.status\">{{todo.title}}</span>  <button (click)=\"toggle.emit(todo)\">Toggle</button></div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoItemRender);
                return TodoItemRender;
            }());
            exports_1("TodoItemRender", TodoItemRender);
        }
    }
});
//# sourceMappingURL=todo-item-render.js.map