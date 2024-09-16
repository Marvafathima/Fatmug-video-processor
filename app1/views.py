
from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from .models import CustomUser
from django.views.decorators.cache import cache_control,never_cache
from django.http import HttpResponseForbidden
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_protect
from django.middleware.csrf import rotate_token
from django.contrib.auth.signals import user_logged_out
from django.contrib.sessions.models import Session
from django.utils import timezone
def usersignup(request):
    """Handles user signup."""
    if request.method == 'POST':
        email = request.POST.get('email')
        password1 = request.POST.get('password1')
        password2 = request.POST.get('password2')
        name = request.POST.get('name')

        # Check if required fields are filled
        if not email or not password1 or not password2 or not name:
            messages.error(request, 'Please fill in all the fields.')
            return redirect('signup')

        # Validate password matching
        if password1 != password2:
            messages.error(request, "Passwords do not match.")
            return redirect('signup')

        # Check if email is already registered
        if CustomUser.objects.filter(email=email).exists():
            messages.error(request, "This email is already registered.")
            return redirect('signup')

        # Create the user
        try:
            user = CustomUser.objects.create_user(
                email=email, 
                password=password1, 
                name=name, 
                is_active=True
            )
            messages.success(request, 'Your account has been created successfully!')
            
            # Automatically log in the user after signup
            user = authenticate(request, email=email, password=password1)
            if user is not None:
                login(request, user)
                return render(request, 'adminhome.html')  
            else:
                messages.error(request, 'There was an issue logging you in. Please try again.')
                return redirect('login')
        except Exception as e:
          
            print(f"Error during user signup: {e}")
            messages.error(request, 'An error occurred during signup. Please try again.')
            return redirect('signup')

    return render(request, 'signup.html')


def userlogin(request):
    """Handles user login."""
    if request.method == "POST":
        email = request.POST.get('email')
        password = request.POST.get('password')

        # Authenticate user
        user = authenticate(request, username=email, password=password)
        if user is not None:
            login(request, user)
            return redirect('adminhome')
          
        else:
            messages.error(request, "Invalid credentials. Please try again.")
            return render(request, 'signup.html') 
    
    return render(request, 'signup.html') 



@require_POST
@csrf_protect
def secure_logout(request):
    if request.user.is_authenticated:
        user = request.user
        logout(request)
        rotate_token(request)
        Session.objects.filter(expire_date__gte=timezone.now(), 
                               session_key__contains=user.id).delete()
        user_logged_out.send(sender=user.__class__, request=request, user=user)
        response = JsonResponse({"status": "success", "message": "Logged out successfully"})
        response['Cache-Control'] = 'no-cache, no-store, must-revalidate, max-age=0'
        response['Pragma'] = 'no-cache'
        response['Expires'] = '0'
        
        return response
    else:
        return JsonResponse({"status": "error", "message": "No user to log out"}, status=400)

@login_required
@cache_control(no_cache=True, must_revalidate=True, no_store=True)
def loadadminhome(request):
    if not request.user.is_authenticated:
        return HttpResponseForbidden("You are not authorized to view this page.")
    """Loads the admin home page."""
    return render(request, "adminhome.html")


@login_required
def loaduserhome(request):
    """Loads the user home page."""
    if not request.user.is_authenticated:
        return HttpResponseForbidden("You are not authorized to view this page.")
    return render(request, 'home.html')
