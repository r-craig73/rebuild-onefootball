import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { AppHeadComponent } from './app-head/app-head.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent }   from './admin/admin.component';
import { WelcomeComponent } from './welcome/welcome.component';


const appRoutes: Routes = [
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
  path: '',
  component: WelcomeComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
