var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Output, Input, NgZone } from '@angular/core';
import tinymce from 'tinymce/tinymce';
import 'tinymce/themes/modern/theme';
import 'tinymce/plugins/paste/plugin';
import 'tinymce/plugins/link/plugin';
import 'tinymce/plugins/autoresize/plugin';
import { EmailTplService } from '../api/email_tpl/email-tpl.service';
var RichTextComponent = (function () {
    function RichTextComponent(zone, emailTplService) {
        this.zone = zone;
        this.emailTplService = emailTplService;
        this.onEditorKeyup = new EventEmitter();
    }
    RichTextComponent.prototype.ngOnInit = function () {
    };
    RichTextComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.emailTplService.hasTpl() ? this.init() : this.emailTplService.read('latest').subscribe(function (email_tpl) {
            _this.emailTplService.email_tpl = email_tpl;
            _this.init();
        }, function (error) { return console.error(error) || _this.init(); });
    };
    RichTextComponent.prototype.init = function () {
        var _this = this;
        tinymce.init({
            selector: "#" + this.elementId,
            plugins: ['link', 'paste' /*, 'table'*/],
            skin_url: 'assets/skins/lightgray',
            setup: function (editor) {
                _this.editor = editor;
                editor.on('init', function (ed2) {
                    if (_this.emailTplService.hasTpl()) {
                        ed2.target.setContent(_this.emailTplService.email_tpl.tpl);
                    }
                });
                editor.on('keyup change', function () {
                    _this.zone.run(function () {
                        var content = editor.getContent();
                        _this.emailTplService.email_tpl.tpl = content;
                        _this.onEditorKeyup.emit(content);
                    });
                });
            },
        });
    };
    RichTextComponent.prototype.ngOnDestroy = function () {
        tinymce.remove(this.editor);
    };
    return RichTextComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], RichTextComponent.prototype, "elementId", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], RichTextComponent.prototype, "onEditorKeyup", void 0);
RichTextComponent = __decorate([
    Component({
        selector: 'app-richtext',
        templateUrl: './richtext.component.html',
        styleUrls: ['./richtext.component.css']
    }),
    __metadata("design:paramtypes", [NgZone, EmailTplService])
], RichTextComponent);
export { RichTextComponent };
//# sourceMappingURL=/home/samuel/repos/glaucoma_risk_calculator/glaucoma-risk-calc-web-frontend/src/src/app/richtext/richtext.component.js.map