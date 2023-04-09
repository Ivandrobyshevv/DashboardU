from django.urls import path

from . import views

urlpatterns = [
    path("", views.redirect_react),
    path('exams/', views.ExamListData.as_view(), name="exam_list"),
    path("progress/", views.ProgressListData.as_view(), name="progress"),
    path("marks/", views.ExamMarksList.as_view(), name="marks"),
]
