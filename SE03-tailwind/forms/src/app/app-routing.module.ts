import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

import { FormsComponent } from "./forms/forms.component";
import { HelloComponent } from "./hello/hello.component";
import { MatrixComponent } from "./hello/matrix/matrix.component";
import { PathComponent } from "./hello/path/path.component";
import { QueryComponent } from "./hello/query/query.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { DATA, ProductResolver } from "./resolve/product.resolve";
import { ResolveFromComponent } from "./resolve/resolve-from/resolve-from.component";
import { ResolveToComponent } from "./resolve/resolve-to/resolve-to.component";

const ROUTES: Route[] = [
  {
    path: 'hello', component: HelloComponent, children: [
      {path: 'path/:id/category/:type', component: PathComponent},
      {path: 'matrix/:type', component: MatrixComponent},
      {path: 'matrix/:type', component: MatrixComponent},
      {path: 'query', component: QueryComponent},
      {path: '', redirectTo: 'query', pathMatch: 'full'}
    ]
  },
  {
    path: 'resolve', children: [
      {path: 'from', component: ResolveFromComponent, data: {list: DATA}},
      {path: 'to/:id', component: ResolveToComponent, resolve: {product: ProductResolver}},
      {path: '', redirectTo: 'from', pathMatch: 'full'}
    ]
  },
  {path: 'form', component: FormsComponent},
  {path: '', redirectTo: '/form', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
