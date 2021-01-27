import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioTarefasListComponent } from './usuario-tarefas-list.component';

describe('UsuarioTarefasListComponent', () => {
  let component: UsuarioTarefasListComponent;
  let fixture: ComponentFixture<UsuarioTarefasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioTarefasListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioTarefasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
