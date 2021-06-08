import { Directive, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { AntdModule } from './antd.module';

const CORE_MODULES = [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
];

const THIRD_MODULES = [
    TranslateModule,
    AntdModule
];

const DIRECTIVES: Directive[] = [];
const PIPES: any[] = [];

@NgModule({
    declarations: [...DIRECTIVES, ...PIPES],
    imports: [
        ...CORE_MODULES,
        ...THIRD_MODULES,
    ],
    exports: [
        ...CORE_MODULES,
        ...THIRD_MODULES,
    ]
})

export class SharedModule { }
