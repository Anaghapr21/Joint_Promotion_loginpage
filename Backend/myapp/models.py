from django.db import models

# Create your models here.
# class User(models.Model):
#     username=models.CharField(max_length=100,unique=True)
#     password=models.CharField(max_length=100)

#     def __str__(self):
#         return self.username



class Lead(models.Model):
    lead_no=models.CharField(max_length=255,null=True,blank=True)
    date=models.DateField(auto_now_add=True,null=True,blank=True)
    company_name=models.CharField(max_length=100)
    company_address=models.CharField(max_length=255)
    street=models.CharField(max_length=255,null=True,blank=True)
    city=models.CharField(max_length=255,null=True,blank=True)
    contact_person=models.CharField(max_length=100)
    contact_no=models.CharField(max_length=30)
    email=models.EmailField()
    designation=models.CharField(max_length=100)
    country=models.CharField(max_length=100)
    company_headquarters=models.CharField(max_length=255,null=True,blank=True)
    business_verticals=models.CharField(max_length=255,null=True,blank=True)
    additional_notes=models.CharField(max_length=255,null=True,blank=True)
    