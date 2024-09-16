from django.urls import path
from . import views
urlpatterns=[

    path('',views.usersignup,name='signup'),
    path('login/',views.userlogin,name='login'),
    path('admin_home/',views.loadadminhome,name='adminhome'),
    path('logout/', views.secure_logout, name='secure_logout'),
     path('user_home/',views.loaduserhome,name='userhome'),
   ]