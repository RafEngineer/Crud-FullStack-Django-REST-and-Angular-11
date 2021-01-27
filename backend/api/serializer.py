from rest_framework import serializers
from tarefas.models import Tarefa
from usuarios.models import Usuario

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'


class TarefaSerializer(serializers.ModelSerializer): 
    class Meta:
        model = Tarefa
        fields = '__all__'

class ListaTarefasUsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tarefa
        fields = ['id', 'descricao', 'estado']