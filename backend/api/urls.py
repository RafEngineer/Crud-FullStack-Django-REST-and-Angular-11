from django.urls import path, include
from usuarios.views import UsuariosViewSet
from tarefas.views import TarefasViewSet, ListaTarefasUsuario
from rest_framework import routers

router = routers.DefaultRouter()
router.register('usuarios', UsuariosViewSet, basename="Usuarios")
router.register('tarefas', TarefasViewSet, basename="Tarefas")

urlpatterns = [ 
    path('', include(router.urls)),
    path('usuario/<int:pk>/tarefas/', ListaTarefasUsuario.as_view())
]
