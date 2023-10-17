from django.shortcuts import render, get_object_or_404, redirect
from .models import Review, Comment
from .forms import ReviewForm, CommentForm

def reviews(request):
    reviews = Review.objects.all()
    return render(request, 'main/reviews.html', {'reviews': reviews})

def review_detail(request, pk):
    review = get_object_or_404(Review, pk=pk)
    return render(request, 'main/review_detail.html', {'review': review})

def add_review(request):
    if request.method == "POST":
        form = ReviewForm(request.POST)
        if form.is_valid():
            review = form.save(commit=False)
            review.author = request.user
            review.save()
            return redirect('review_detail', pk=review.pk)
    else:
        form = ReviewForm()
    return render(request, 'main/add_review.html', {'form': form})

def add_comment(request, pk):
    review = get_object_or_404(Review, pk=pk)
    if request.method == "POST":
        form = CommentForm(request.POST)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.review = review
            comment.author = request.user
            comment.save()
            return redirect('review_detail', pk=review.pk)
    else:
        form = CommentForm()
    return render(request, 'main/add_comment.html', {'form': form})

def delete_review(request, pk):
    review = get_object_or_404(Review, pk=pk)

    # Check if the request method is POST
    if request.method == 'POST':
        review.delete()
        return redirect('review_list')  # Redirect to the list of reviews or wherever you want

    return render(request, 'reviews/review_confirm_delete.html', {'review': review})

def index(request):
    return render(request, 'main/index.html')


def location(request):
    return render(request, 'main/location.html')


def services(request):
    return render(request, 'main/services.html')