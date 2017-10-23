/**
 * 自定义属性组件
 * 模块解释:
 * Directive => 定义一个指令组件
 * ElementRef => 用于获取DOM,用于DOM操作  需要依赖注入
 * HostListener => 用于监听宿主元素的点击事件  不需要依赖注入
 * Renderer => 调用renderer对象提供的API设置元素的背景颜色 需要依赖注入
 */
import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
    selector: '[heightLight]'
})

export class HighLightDirective {
    @Input('heightLight') backgroundColor: string;

    private _defaultColor = 'yellowgreen';
    private flag = true;

    constructor(
        private el: ElementRef,
        private render: Renderer2) {
    }

    @HostListener('click')
    onclick() {
        if (this.flag) {
            this.setColor(this.backgroundColor || this._defaultColor);
            this.flag = false;
        } else {
            this.setColor('white');
            this.flag = true;
        }
    }

    private setColor(color: string) {
        this.render.setStyle(this.el.nativeElement, 'backgroundColor', color);
    }
}
