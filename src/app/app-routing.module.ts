import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./components/main/main.component";
import {PlanetsResolver} from "./resolvers/planets.resolver";

const routes: Routes = [
  {
    path: 'planets',
    component: MainComponent,
    resolve: {
      planets: PlanetsResolver,
    }
  },
  {
    path: '',
    redirectTo: '/planets',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
