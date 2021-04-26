import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';

import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        BrowserAnimationsModule,
        MatInputModule
    ],
    exports: [],
    declarations: [
        HomeComponent,
        HeaderComponent,
        InputsComponent,
        CardComponent
    ],
    providers: [],
})
export class HomeModule { }
