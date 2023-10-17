

from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='home'),
    path('location', views.location, name='location'),
    path('reviews', views.reviews, name='reviews'),
    path('services', views.services, name='services'),
    path('reviews/<int:pk>/', views.review_detail, name='review_detail'),
    path('add', views.add_review, name='add_review'),
    path('reviews/<int:pk>/comment/', views.add_comment, name='add_comment'),
    path('reviews/<int:pk>/delete/', views.delete_review, name='delete_review'),
]