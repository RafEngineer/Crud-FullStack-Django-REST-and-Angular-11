# Generated by Django 3.1.5 on 2021-01-26 03:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tarefas', '0002_auto_20210126_0025'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tarefa',
            name='estado',
            field=models.CharField(choices=[('feito', 'Feito'), ('pendente', 'Pendente')], default='pendente', max_length=50),
        ),
    ]
