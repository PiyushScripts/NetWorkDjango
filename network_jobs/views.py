from django.shortcuts import render, redirect
from .models import Job
from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404

@login_required
def job_detail(request, job_id):
    job = get_object_or_404(Job, id=job_id)
    return render(request, 'network_jobs/job_detail.html', {'job': job})


@login_required
def job_list(request):
    jobs = Job.objects.all().order_by('-posted_at')
    return render(request, 'network_jobs/job_list.html', {'jobs': jobs})

@login_required
def post_job(request):
    if request.method == 'POST':
        title = request.POST['title']
        company = request.POST['company']
        description = request.POST['description']
        location = request.POST['location']
        Job.objects.create(
            title=title,
            company=company,
            description=description,
            location=location,
            posted_by=request.user
        )
        return redirect('job_list')
    return render(request, 'network_jobs/post_job.html')
