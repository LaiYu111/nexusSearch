from django.db import models


# Create your models here.
class BaseModel(models.Model):
    timestamp = models.DateTimeField(auto_now_add=True)
    description = models.TextField(default="Demo")

    def __str__(self):
        return self.description
