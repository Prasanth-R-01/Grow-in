from django.urls import path
from . import views

urlpatterns=[
    path('',views.index,name="index"),
    path('login',views.login,name='login'),
    path('signup',views.signup,name="signup"),
    path('logout',views.logout,name='logout'),
    path('about',views.about,name='about'),
    path('crop',views.crop,name='crop'),
    path('amaranth',views.amaranth,name='amaranth'),
    path('dp',views.dp,name='dp'),
    path('crop_rec',views.crop_rec,name='crop_rec'),
    path('dpForm' , views.dp_Img , name="dpForm"),
    path('cropInfo' , views.cropInfo , name="cropInfo"),
]