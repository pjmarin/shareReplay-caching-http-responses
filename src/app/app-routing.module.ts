import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnotherdummyComponent } from './anotherdummy/anotherdummy.component';
import { AppComponent } from './app.component';
import { DummyComponent } from './dummy/dummy.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'dummy',
    component: DummyComponent,
  },
  {
    path: 'anotherdummy',
    component: AnotherdummyComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}