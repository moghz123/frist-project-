import { Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  {path:'',redirectTo:'about',pathMatch:'full'},
  {path:'portfolio',title:'portfolio',component:PortfolioComponent},
  {path:'about',title:'about',component:AboutComponent},
  {path:'contact',title:'contact',component:ContactComponent},
  {path:'**',title:'not found',component:AboutComponent}

];
