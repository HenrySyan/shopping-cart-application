import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ShoppingCartAplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ShoppingCartAplicationSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [ShoppingCartAplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShoppingCartAplicationSharedModule {
  static forRoot() {
    return {
      ngModule: ShoppingCartAplicationSharedModule
    };
  }
}
