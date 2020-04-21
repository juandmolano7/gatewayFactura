import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewayFacturaSharedModule } from 'app/shared/shared.module';
import { FacturaDetalleComponent } from './factura-detalle.component';
import { FacturaDetalleDetailComponent } from './factura-detalle-detail.component';
import { FacturaDetalleUpdateComponent } from './factura-detalle-update.component';
import { FacturaDetalleDeleteDialogComponent } from './factura-detalle-delete-dialog.component';
import { facturaDetalleRoute } from './factura-detalle.route';

@NgModule({
  imports: [GatewayFacturaSharedModule, RouterModule.forChild(facturaDetalleRoute)],
  declarations: [
    FacturaDetalleComponent,
    FacturaDetalleDetailComponent,
    FacturaDetalleUpdateComponent,
    FacturaDetalleDeleteDialogComponent
  ],
  entryComponents: [FacturaDetalleDeleteDialogComponent]
})
export class GatewayFacturaFacturaDetalleModule {}
