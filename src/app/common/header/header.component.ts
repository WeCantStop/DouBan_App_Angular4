import {Component, OnInit, Input} from '@angular/core';
import {Location} from '@angular/common';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

/**
 * 头部组件：
 * title: 中间的title，不写则不显示
 * headerImg: 中间的logo，或者图片
 * showBack: 显示左边的返回图片
 * clickLeft: 传入function,点击左边事件
 */
export class HeaderComponent implements OnInit {
    @Input() title;
    @Input() headerImg;
    @Input() showBack;
    @Input() leftText;
    @Input() clickLeft;

    constructor(public $location: Location) {
    }

    ngOnInit() {
        if (!!this.showBack){
            this.clickLeft = function() {
                this.$location.back();
            }
        }
        if (!this.clickLeft){
            this.clickLeft = function(){};
        }
    }


}
