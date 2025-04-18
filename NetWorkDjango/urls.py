from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static  # ✅ Required for media handling

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('network_auth.urls')),
    path('profile/', include('network_core.urls')),
    path('jobs/', include('network_jobs.urls')),

]

# ✅ Serve media files during development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS[0])    
