import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivrosListaComponent } from './livros-lista/livros-lista.component';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';
import { ControleEditoraService } from './controle-editora.service';
import { ControleLivrosService } from './controle-livros.service';

@NgModule({
  declarations: [
    AppComponent,
    LivrosListaComponent,
    LivroDadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ControleEditoraService, ControleLivrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
