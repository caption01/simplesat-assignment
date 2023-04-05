from django.db import models

class TodoItem(models.Model):
    name = models.CharField(max_length=100)
    order = models.IntegerField(null=False, unique=True)
    is_done = models.BooleanField(default=False)