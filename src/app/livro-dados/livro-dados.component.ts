import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livros-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {

  public livro: Livro = new Livro(0, 0, '', '', []);
  public autoresForm = '';
  public editoras: Array<Editora> = [];

  constructor(private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router) { }

    ngOnInit(): void {
      this.editoras = this.servEditora.getEditoras();
    }
  
    incluir = () => {
      this.livro.autores = this.autoresForm.split('\n');
      this.servLivros.incluir(this.livro);
      this.router.navigateByUrl('/lista');
    }
}
