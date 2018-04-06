import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { AppHeadComponent } from './app-head/app-head.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  {
     path: '',
     component: NewsComponent
   },
   {
      path: '',
      component: AppHeadComponent
    },
    {
       path: '',
       component: FooterComponent
     },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
