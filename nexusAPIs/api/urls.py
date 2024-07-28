from django.urls import path
from . import views

urlpatterns = [
    path('', views.demo_data),
    path('demo/', views.demo_data)
]