from django.db import models
from django.contrib.auth.models import User

# https://www.youtube.com/watch?v=c-QsfbznSXI&t=1978s
class Quiz(models.Model):
    id = models.IntegerField(primary_key=True)
    question = models.TextField()
    answers = models.JSONField()

    def __str__(self):
        return self.id