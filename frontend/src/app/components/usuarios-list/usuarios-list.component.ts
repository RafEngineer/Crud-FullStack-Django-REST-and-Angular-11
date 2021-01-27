import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent implements OnInit {
  /**
   * Add new User
   */
  usuario: Usuario = {
    nome: ''
  }
  submitted = false;

  /**
   * Get List Users
   */
  usuarios?:Usuario[];
  currentUsuario?: Usuario;
  currentIndex = -1;
  nome = '';

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.retrieveUsuarios();
  }

  saveUsuario(): void {
    const data = {
      nome: this.usuario.nome
    }

    this.usuarioService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.refreshList();
        },
        error => {
          console.log(error)
        });
  }

  newUsuario(): void {
    this.submitted = false;
    this.usuario = {
      nome: ''
    };
  }

  retrieveUsuarios(): void {
    this.usuarioService.getAll()
      .subscribe(
        data => {
          this.usuarios = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveUsuarios();
    this.currentUsuario = undefined;
    this.currentIndex = -1;
  }

  setActiveUsuario(usuario: Usuario, index: number): void {
    this.currentUsuario = usuario;
    this.currentIndex = index;   
    if(confirm(`Deseja realmente deletar o usuário ${usuario.nome}?`))
    {
      this.deleteUsuario();
    }
  }
  
  deleteUsuario(): void {  
    this.usuarioService.delete(this.currentUsuario?.id)
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

}
