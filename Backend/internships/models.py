from django.db import models
from django.contrib.auth.models import User


class Internship(models.Model):

    STATUS_CHOICES = [
        ('Wishlist', 'Wishlist'),
        ('Applied', 'Applied'),
        ('OA', 'Online Assessment'),
        ('Interview', 'Interview'),
        ('Selected', 'Selected'),
        ('Rejected', 'Rejected'),
    ]

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="internships"
    )

    company_name = models.CharField(max_length=200)
    role = models.CharField(max_length=200)
    location = models.CharField(max_length=200)

    salary = models.CharField(max_length=100, blank=True)

    application_date = models.DateField()

    deadline = models.DateField(
        null=True,
        blank=True
    )

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="Wishlist"
    )

    job_link = models.URLField(blank=True)

    notes = models.TextField(blank=True)

    resume_name = models.CharField(
        max_length=100,
        blank=True
    )

    created_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.company_name} - {self.role}"