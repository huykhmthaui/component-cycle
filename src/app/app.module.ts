import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ViewEncapComponent } from './components/view-encap/view-encap.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeroChildComponent } from './components/hero-child/hero-child.component';
import { ComponentInteractionComponent } from './interaction/component-interaction/component-interaction.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ViewEncapComponent,
    HeroComponent,
    HeroChildComponent,
    ComponentInteractionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
