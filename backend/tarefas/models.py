from django.db import models
from usuarios.models import Usuario

class Tarefa(models.Model):
    ESTADO_OPTION = (
        ('feito', 'Feito'),
        ('pendente', 'Pendente')
    )
    descricao = models.CharField(max_length=250)
    estado = models.CharField(max_length=50, choices=ESTADO_OPTION, blank=False, null=False, default='pendente')
    user = models.ForeignKey(Usuario, on_delete = models.CASCADE)
    def __str__(self):
        return self.descricao
