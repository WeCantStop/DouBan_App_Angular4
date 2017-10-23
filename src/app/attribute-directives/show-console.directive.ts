import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[showConsole]'
})
export class showConsoleDirective {

  constructor() { }

  @Input() showConsole: string;

  @HostListener('mouseenter')
  onmouseenter() {
    console.log('开始');
    console.log(this.showConsole || '没有hello语句');
    console.log('结束');
  }

}
