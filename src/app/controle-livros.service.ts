import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {

  livros: Livro[] = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'Livro 1',
      resumo: 'Resumo do livro 1',
      autores: ['Autor 1'],
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'Livro 2',
      resumo: 'Resumo do livro 2',
      autores: ['Autor 2'],
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'Livro 3',
      resumo: 'Resumo do livro 3',
      autores: ['Autor 3'],
    },
  ];

  obterLivros(): Livro[] {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const codigo = Math.max(...this.livros.map(l => l.codigo)) + 1;
    livro.codigo = codigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const indiceLivro = this.livros.findIndex(livro => livro.codigo === codigo);
    if (indiceLivro !== -1) {
      this.livros.splice(indiceLivro, 1);
    }
  }
}
