from django.contrib import admin
from .models import Job, JobPost, JobApplication

admin.site.register(JobPost)
admin.site.register(JobApplication)
admin.site.register(Job)
