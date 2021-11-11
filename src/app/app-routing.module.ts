import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { RTL } from "@progress/kendo-angular-l10n";

const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  // Enable Right-to-Left mode for Kendo UI components
  providers: [{ provide: RTL, useValue: true }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
