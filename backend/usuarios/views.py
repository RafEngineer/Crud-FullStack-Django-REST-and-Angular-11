from rest_framework import viewsets
from usuarios.models import Usuario
from api.serializer import UsuarioSerializer

class UsuariosViewSet(viewsets.ModelViewSet):
    """ View all users """
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer
