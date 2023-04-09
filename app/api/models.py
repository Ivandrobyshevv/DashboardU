from django.core.validators import MinLengthValidator, MaxValueValidator, MinValueValidator
from django.db import models


# Item
class User(models.Model):
    name = models.CharField("Имя", max_length=20)
    surname = models.CharField("Фамилия", max_length=20)

    def get_full_name(self):
        return f'{self.name.capitalize()} {self.surname.capitalize()}'

    def __str__(self):
        return self.name + " " + self.surname

    class Meta:
        verbose_name = "Стажер(ученик)"
        verbose_name_plural = "Стажеры(ученики)"


# Cart
class Exam(models.Model):
    name = models.CharField("Название", max_length=50, help_text="Название экзамена до 50 символов")
    description = models.TextField("Комментарий", max_length=155,
                                   validators=[
                                       MinLengthValidator(155, message="Описание должно составлять 155 символов")])
    date_exam = models.DateField("Дата проведения")

    def __str__(self):
        return f'{self.name} - {self.date_exam.day}.{self.date_exam.month}'

    class Meta:
        ordering = ['date_exam']
        verbose_name = "Экзамен"
        verbose_name_plural = "Экзамены"


# CartItem
class Performance(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="Стажер", related_name='performances')
    exam = models.ForeignKey(Exam, on_delete=models.CASCADE, verbose_name="Экзамен",
                             related_name='performances_exam')
    grade = models.FloatField("Оценка", validators=[MaxValueValidator(limit_value=5, message="Максимальная оценка 5"),
                                                    MinValueValidator(limit_value=1, message="Минимальная оценка 1")])

    def __str__(self):
        return f'{self.user.name.capitalize()} {self.user.surname.capitalize()}'

    class Meta:
        verbose_name = "Успеваемость"
        verbose_name_plural = "Успеваемость стажеров"
