from rest_framework import serializers
from .models import User, Exam, Performance


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name', 'surname')


class PerformanceSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Performance
        fields = ('id', 'grade', 'user')


class ExamMarksListSerializer(serializers.ModelSerializer):
    performance = PerformanceSerializer(source='performances_exam', many=True)

    class Meta:
        model = Exam
        fields = ('id', 'name', 'performance')


class ExamListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exam
        fields = "__all__"


class UserListSerializer(serializers.ModelSerializer):
    total_grate = serializers.IntegerField()

    class Meta:
        model = User
        fields = ('id', 'name', 'surname', 'total_grate')
