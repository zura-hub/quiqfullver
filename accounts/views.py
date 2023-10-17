from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages



def sign_up(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data['username']
            password = form.cleaned_data['password1']
            user = authenticate(username=username,  password=password)
            login(request, user)
            messages.success(request, "Registration Success")
            return redirect('home')
    else:
        form = UserCreationForm()
    return render(request, 'accounts/signup.html', {'form': form})


def login_user(request):
    if request.method == 'POST':
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')

    else:
        messages.success(request, ('Error login, Make sure thet usernam an passord is correct'))

    return render(request, 'accounts/login.html')



def logout_user(request):
    logout(request)
    return render(request, 'main/index.html')


def accounts(request):
    return render(request, 'accounts/account.html')