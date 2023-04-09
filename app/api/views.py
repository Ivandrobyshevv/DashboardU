from django.db.models import Sum
from django.shortcuts import redirect
from rest_framework.generics import ListAPIView

from .models import User, Exam
from . import serializers


def redirect_react(request):
    return redirect("http://localhost:3000")


class ProgressListData(ListAPIView):
    serializer_class = serializers.UserListSerializer

    def get_queryset(self):
        exam_list = Exam.objects.all()
        max_sum_grate = 5 * exam_list.count()
        users = User.objects.all().annotate(total_grate=(Sum("performances__grade") * 100 / max_sum_grate))
        return users


class ExamListData(ListAPIView):
    queryset = Exam.objects.all()
    serializer_class = serializers.ExamListSerializer


class ExamMarksList(ListAPIView):
    queryset = Exam.objects.all()
    serializer_class = serializers.ExamMarksListSerializer
