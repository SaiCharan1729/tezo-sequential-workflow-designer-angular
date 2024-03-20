import { CommonModule } from '@angular/common';
import { DesignerComponent } from './designer.component';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [DesignerComponent],
	imports: [CommonModule],
	exports: [DesignerComponent]
})
export class SequentialWorkflowDesignerModule {}
