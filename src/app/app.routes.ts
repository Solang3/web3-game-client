import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ShopComponent } from './components/shop/shop.component';
import { PlantCareComponent } from './components/plant-care/plant-care.component';
import { StakingComponent } from './components/staking/staking.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'plant-care', component: PlantCareComponent },
  { path: 'staking', component: StakingComponent }
];
