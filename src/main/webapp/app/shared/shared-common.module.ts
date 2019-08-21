import { NgModule } from '@angular/core';

import { ShoppingCartAplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [ShoppingCartAplicationSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [ShoppingCartAplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ShoppingCartAplicationSharedCommonModule {}
