from django.contrib import admin

from .models import Review
from .models import Comment

admin.site.register(Review)

admin.site.register(Comment)