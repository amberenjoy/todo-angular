import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { RoutesModule } from './routes/routes.module'

import { AppComponent } from './app.component';

/** config ng-zorro-antd icon **/
import * as AllIcons from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import { NZ_ICONS } from 'ng-zorro-antd/icon';

const antDesignIcons = AllIcons as {
    [key: string]: IconDefinition;
};

const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => {
    const i = antDesignIcons[key];
    return i;
});


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        SharedModule,
        RoutesModule,
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule
    ],
    providers: [
        { provide: NZ_ICONS, useValue: icons }
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }