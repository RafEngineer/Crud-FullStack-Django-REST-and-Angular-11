from rest_framework import viewsets, generics
from tarefas.models import Tarefa
from usuarios.models import Usuario
from api.serializer import TarefaSerializer, ListaTarefasUsuarioSerializer

class TarefasViewSet(viewsets.ModelViewSet):
    """ View all tasks """
    queryset = Tarefa.objects.all()
    serializer_class = TarefaSerializer

class ListaTarefasUsuario(generics.ListAPIView):
    """ View all tasks by user id"""
    def get_queryset(self):
        queryset = Tarefa.objects.filter(user_id=self.kwargs['pk'])
        return queryset
    serializer_class = ListaTarefasUsuarioSerializer