import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosListComponent } from './components/usuarios-list/usuarios-list.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioTarefasListComponent } from './components/usuario-tarefas-list/usuario-tarefas-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosListComponent,
    UsuarioTarefasListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
