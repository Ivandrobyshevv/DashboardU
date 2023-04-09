import json

from django.contrib import admin
from django.db.models import Sum, Avg
from django.utils.html import format_html
from jet.admin import CompactInline

from . import models

admin.site.site_title = "Dashboard UFANET"
admin.site.site_header = 'Dashboard UFANET'


class InlinePerformance(CompactInline):
    model = models.Performance
    extra = 1
    show_change_link = True


@admin.register(models.User)
class UserAdmin(admin.ModelAdmin):
    list_display = ("show_full_name", "show_sum_grade", 'show_count_exam', 'show_success_rate')
    list_display_links = ("show_full_name",)
    ordering = ['name', 'surname']

    def show_success_rate(self, user):
        count_exam = models.Exam.objects.count()
        try:
            sum_grate = models.Performance.objects.filter(user=user).aggregate(Sum("grade"))['grade__sum']
            value = (sum_grate * 100) / (count_exam * 5)
        except Exception as e:
            value = 0
        return format_html('<b>{}</b>', value)

    show_success_rate.short_description = "%"

    def show_sum_grade(self, user):
        try:
            result = models.Performance.objects.filter(user=user).aggregate(Sum("grade"))['grade__sum']
        except IndexError:
            result = 0
        return format_html('<b>{}</b>', result)

    show_sum_grade.short_description = "Сумма оценок"

    def show_full_name(self, user):
        return format_html('<h2>{}</h2>', user.get_full_name())

    show_full_name.short_description = "Полное имя"

    def show_count_exam(self, user):
        result = models.Performance.objects.filter(user=user).count()
        return format_html('<b>{}</b>', result)

    show_count_exam.short_description = "Сдано экзаменов"


@admin.register(models.Exam)
class ExamAdmin(admin.ModelAdmin):
    list_display = ("name", 'date_exam', "show_description", 'show_number_ratings_given')
    list_display_links = ("name",)
    list_filter = ("date_exam",)
    inlines = [InlinePerformance]

    def show_description(self, exam):
        result = exam.description[:60]
        return f'{result} ...'

    show_description.short_description = "Описание"

    def show_number_ratings_given(self, exam):
        result = models.Performance.objects.filter(exam=exam).count()
        quantity_user = models.User.objects.count()
        if result != quantity_user:
            return format_html(f'<b><span style="color:red;">{result}</span>/{quantity_user}</b>')
        return format_html(f'<b>{result}/{quantity_user}</b>')

    show_number_ratings_given.short_description = "Проставленные оценки"
