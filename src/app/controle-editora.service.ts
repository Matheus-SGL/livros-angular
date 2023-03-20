import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})

export class ControleEditoraService {
  public editoras: Array<Editora> = [
  { codEditora: 1, nome: 'Editora A' },
  { codEditora: 2, nome: 'Editora B' },
  { codEditora: 3, nome: 'Editora C' }
];

public getEditoras(): Array<Editora> {
    return this.editoras;
  }

  public getNomeEditora(codEditora: number): string {
    const editoraEncontrada = this.editoras.filter(editora => editora.codEditora === codEditora)[0];
    return editoraEncontrada.nome;
  }
}
