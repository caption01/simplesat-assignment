from django.db import models

class TodoItem(models.Model):
    name = models.CharField(max_length=100)
    order = models.IntegerField(null=False)
    is_done = models.BooleanField(default=False)

    def __str__(self):
        return self.name
    
    @property
    def shift_up(self):
        return self.order - 1

    @property
    def shift_down(self):
        return self.order + 1