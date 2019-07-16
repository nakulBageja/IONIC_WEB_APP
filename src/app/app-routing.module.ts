import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'intoduction', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'intoduction', loadChildren: './intoduction/intoduction.module#IntoductionPageModule' },
  { path: 'add', loadChildren: './add/add.module#AddPageModule' },
  { path: 'saturday', loadChildren: './saturday/saturday.module#SaturdayPageModule' },
  { path: 'ta', loadChildren: './ta/ta.module#TAPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
