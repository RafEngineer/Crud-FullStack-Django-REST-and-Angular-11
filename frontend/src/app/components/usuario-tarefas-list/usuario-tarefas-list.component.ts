import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/models/tarefa.model';
import { TarefasService } from 'src/app/services/tarefas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-tarefas-list',
  templateUrl: './usuario-tarefas-list.component.html',
  styleUrls: ['./usuario-tarefas-list.component.css']
})
export class UsuarioTarefasListComponent implements OnInit {  
  message = '';
  /**
   * Add new taks by user
   */
  tarefa: Tarefa = {
    descricao: '',
    estado: ''
  }
  submitted = false;

  /**
   * List All Tasks by User
   */
  tarefas?:Tarefa[];
  currentTarefas?: Tarefa;
  currentIndex = -1;
  descricao = '';
  estado = '';

  constructor(
    private tarefasService: TarefasService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.retrieveTarefas(this.route.snapshot.params.id); 
  }

  saveTarefa(): void {
    let user_id = this.route.snapshot.params.id;
    const data = {
      descricao: this.tarefa.descricao,
      estado: this.tarefa.estado,
      user: user_id
    }
    
    this.tarefasService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.refreshList(user_id);
        },
        error => {
          console.log(error)
        });
  }

  newTarefa(): void {
    this.submitted = false;
    this.tarefa = {
      descricao: '',
      estado: '',
    };
  }

  retrieveTarefas(id: string): void {
    this.tarefasService.getAllTasksByIdUser(id)
      .subscribe(
        data => {
          this.tarefas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(id: string): void {
    this.retrieveTarefas(id);
    this.currentTarefas = undefined;
    this.currentIndex = -1;
  }

  setActiveTarefa(tarefa: Tarefa, index: number): void {
    this.currentTarefas = tarefa;
    this.currentIndex = index;
  }

  deleteTarefa(): void {  
    let user_id = this.route.snapshot.params.id;
    this.tarefasService.delete(this.currentTarefas?.id)
      .subscribe(
        response => {
          console.log(response); 
          this.refreshList(user_id);
        },
        error => {
          console.log(error);
        });
  }

  updateTarefa(): void {
    let user_id = this.route.snapshot.params.id; 
    const data = {
      descricao: this.currentTarefas?.descricao,
      estado: this.currentTarefas?.estado,
      user: user_id
    };

    this.tarefasService.update(this.currentTarefas?.id, data)
      .subscribe(
        response => { 
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }
}
