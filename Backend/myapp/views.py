from django.shortcuts import render

# Create your views here.
from django.contrib.auth import authenticate,login
from django.http import JsonResponse
import json
from .models import Lead
from django.views.decorators.csrf import csrf_exempt
import jwt
from datetime import datetime,timedelta
# @csrf_exempt
# def login_view(request):
#     if request.method=='POST':
#         try:
#             data=json.loads(request.body)
#             username=data.get('username')
#             password=data.get('password')
#             if not username or not password:
#                 return JsonResponse({'error':'Please provide both username and password'},status=400)
#             user=authenticate(request,username=username,password=password)
#             if user is not None:
#                 login(request,user)
#                 token=jwt.encode({'username':username,'exp':datetime.utcnow()+timedelta(hours=1)},'secret_key',algorithm='HS256')
#                 return JsonResponse({'token':token})
#                 # return JsonResponse({'message':'Login successful'})
#             else:
#                 return JsonResponse({'error':'Invalid Credentials'},status=400)
#         except json.JSONDecodeError:
#             return JsonResponse({'error':'Invalid JSON format'},status=400)
#     else:
#         return JsonResponse({'error':'Only POST requests are allowed'},status=405)




# @csrf_exempt
# def login_view(request):
#     if request.method=='POST':
#         try:
#             data=json.loads(request.body)
#             username=data.get('username')
#             password=data.get('password')
#             if not username or not password:
#                 return JsonResponse({'error':'Please provide both username and password'},status=400)
#             user=authenticate(request,username=username,password=password)
#             if user is not None:
#                 login(request,user)
#                 token_payload={
#                     'username':username,
#                     'exp':datetime.utcnow()+timedelta(hours=1)
#                 }
#                 token=jwt.encode(token_payload,'secret_key',algorithm='HS256')
#                 return JsonResponse({'token':token})
#             else:
#                 return JsonResponse({'error':'Invalid Credentials'},status=400)
#         except json.JSONDecodeError:
#             return JsonResponse({'error':'Invalid JSON format'},status=400)
#     else:
#         return JsonResponse({'error':'Only POST requests are allowed'},status=405)
import json
from datetime import datetime, timedelta
from rest_framework.authentication import BasicAuthentication
from rest_framework.decorators import authentication_classes
from rest_framework.response import Response
from rest_framework.views import APIView
import jwt

@authentication_classes([BasicAuthentication])
class LoginView(APIView):
    def post(self, request):
        try:
            data = json.loads(request.body)
            username = data.get('username')
            password = data.get('password')
            if not username or not password:
                return JsonResponse({'error': 'Please provide both username and password'}, status=400)
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                token_payload = {
                    'username': username,
                    'exp': datetime.utcnow() + timedelta(hours=1)
                }
                token = jwt.encode(token_payload, 'secret_key', algorithm='HS256')
                return JsonResponse({'token': token})
            else:
                return JsonResponse({'error': 'Invalid Credentials'}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON format'}, status=400)

    def get(self, request):
        return JsonResponse({'error': 'GET method not allowed'}, status=405)


# def login_view(request):
#     if request.method=='POST':
#         username=request.POST.get('username')
#         password=request.POST.get('password')

#         hardcoded_credentials={
#             'testuser1':'password1',
#             'testuser2':'password2',
#         }

#         if username in hardcoded_credentials and password==hardcoded_credentials[username]:
#             return JsonResponse({'message':'Login successful'})
#         else:
#             return JsonResponse({'error':'Invalid credentials'},status=400)
#     else:
#         return JsonResponse({'error':'Only POST requests are allowed'},status=405)
    


# def register_view(request):
#     if request.method=='POST':
#         data=json.loads(request.body)
#         username=data.get('username')
#         password=data.get('password')
#         if username and password:
#             if User.objects.filter(username=username).exists():
#                 return JsonResponse({'error':'Username already exists'},status=400)
#             user=User.objects.create(username=username,password=password)
#             return JsonResponse({'message':'Registration successful'})
#         else:
#             return JsonResponse({'error':'Invalid data'},status=400)
#     else:
#         return JsonResponse({'error':'Only POST requests are allowed'},status=405)
    
from django.contrib.auth.hashers import make_password

def register_view(request):
    if request.method=='POST':
        data=json.loads(request.body)
        username=data.get('username')
        password=data.get('password')

        if username and password:
            if User.objects.filter(username=username).exists():
                return JsonResponse({'error':'Username already exists'},status=400)
            
            hashed_password=make_password(password)
            user=User.objects.create(username=username,password=hashed_password)

            return JsonResponse({'message':'Registration successful'})
        else:
            return JsonResponse({'error':'Invalid data'},status=400)
    else:
        return JsonResponse({'error':'Only POST requests are allowed'},status=405)







from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serializers import LeadSerializer
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags

class LeadListCreateView(generics.ListCreateAPIView):
    queryset=Lead.objects.all()
    serializer_class=LeadSerializer

    def post(self,request,*args,**kwargs):
        serializer=self.get_serializer(data=request.data)
        if serializer.is_valid():
            self.perform_create(serializer)
            self.send_lead_email(serializer.data)
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        
    def send_lead_email(self,lead_data):
        subject='New Lead Submission'
        html_message=render_to_string('lead_email_template.html',{'lead':lead_data})
        plain_message=strip_tags(html_message)
        from_email='anaghapr2001@gmail.com'
        to=['anaghapr2001@gmail.com']
        send_mail(subject,plain_message,from_email,to,html_message=html_message)




from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import Lead

# @login_required
# def lead_information(request):
#     user_leads=Lead.objects.filter(company_address=request.user)
#     return render(request,'leadinformationdisplay.js',{'user_leads':user_leads})
    # return render(request,'leadinformation.html',{'user_leads':user_leads})



from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Lead
from .serializers import LeadSerializer


# class UserLeadListView(APIView):
#     def get(self,request):
#         user=request.user
#         user_leads=Lead.objects.filter(contact_person=user.username)
#         serializer=LeadSerializer(user_leads,many=True)
#         return Response(serializer.data)
    

# class UserLeadListView(APIView):
#     def get(self,request):
#         username=request.user.username
#         # contact_person_name=request.GET.get('contact_person_name','')
#         user_leads=Lead.objects.filter(
#             contact_person=username,
#             # contact_person__icontains=contact_person_name,

#         )
#         # if contact_person_name:
#         #     user_leads=user_leads.filter(contact_person__icontains=contact_person_name)

#         serializer=LeadSerializer(user_leads,many=True)
#         return Response(serializer.data)
    


# @login_required
# def lead_information(request):
#     username=request.user.username
#     user_leads=Lead.objects.filter(contact_person__icontains=username)

#     if user_leads.exists():
#         # exact_match_lead=user_leads.filter(contact_person__iexact=username).exists()
#         # if exact_match_lead:
#             lead_data=[]
#             for lead in user_leads:
#                 contact_person_name=lead.contact_person.split()[-1]
#                 # if lead.contact_person.lower()==username.lower():
#                 if contact_person_name.lower()==username.lower():
#                     lead_info={
#                         'company_name':lead.company_name,
#                         'company_address':lead.company_address,
#                         'country':lead.country,
#                         'street':lead.street,
#                         'city':lead.city,
#                         'contact_person':lead.contact_person,
#                         'contact_no':lead.contact_no,
#                         'email':lead.email,
#                         'designation':lead.designation,
#                         'company_headquarters':lead.company_headquarters,
#                         'business_verticals':lead.business_verticals,
#                         'additional_notes':lead.additional_notes

#                     }
#                     lead_data.append(lead_info)
#             if lead_data:
#                 return JsonResponse({'user_leads':lead_data})
#             else:
#                 return JsonResponse({'error':'No matching lead found for logged-in user'},status=404)
#     else:
#         return JsonResponse({'error':'No leads found for logged-in user'},status=404)
           


# @login_required
# def lead_information(request):
#     if request.method == 'GET':
#         auth_header = request.headers.get('Authorization')
#         if auth_header:
#             try:
#                 token = auth_header.split()[1]
#                 token_payload = jwt.decode(token, 'secret_key', algorithms=['HS256'])
#                 username = token_payload['username']
#                 user_leads = Lead.objects.filter(contact_person__icontains=username)

#                 lead_data = []
#                 for lead in user_leads:
#                     contact_person_name = lead.contact_person.split()[-1]
#                     if contact_person_name.lower() == username.lower():
#                         lead_info = {
#                             'company_name': lead.company_name,
#                             'company_address': lead.company_address,
#                             'country': lead.country,
#                             'street': lead.street,
#                             'city': lead.city,
#                             'contact_person': lead.contact_person,
#                             'contact_no': lead.contact_no,
#                             'email': lead.email,
#                             'designation': lead.designation,
#                             'company_headquarters': lead.company_headquarters,
#                             'business_verticals': lead.business_verticals,
#                             'additional_notes': lead.additional_notes
#                         }
#                         lead_data.append(lead_info)

#                 if lead_data:
#                     return JsonResponse({'user_leads': lead_data})
#                 else:
#                     return JsonResponse({'error': 'No matching lead found for logged-in user'}, status=404)
#             except jwt.ExpiredSignatureError:
#                 return JsonResponse({'error': 'Token has expired'}, status=401)
#             except (jwt.InvalidTokenError, KeyError):
#                 return JsonResponse({'error': 'Invalid or missing token'}, status=401)
#         else:
#             return JsonResponse({'error': 'Authorization header is missing'}, status=401)
#     else:
#         return JsonResponse({'error': 'Only GET requests are allowed'}, status=405)
from rest_framework.permissions import IsAuthenticated
from django.db.models import Q

class LeadInformation(APIView):
    permission_classes=[IsAuthenticated]

    def get(self,request):
        auth_header=request.headers.get('Authorization')
        if auth_header:
            try:
                token=auth_header.split()[1]
                token_payload=jwt.decode(token,'secret_key',algorithms=['HS256'])
                username=token_payload['username']
                user_leads=Lead.objects.filter(Q(contact_person__icontains=username)| Q(contact_person__iexact=username))

                lead_data=[]
                for lead in user_leads:
                    lead_info={
                        'company_name':lead.company_name,
                        'company_address':lead.company_address,
                        'country':lead.country,
                        'street':lead.street,
                        'city':lead.city,
                        'contact_person':lead.contact_person,
                        'contact_no':lead.contact_no,
                        'email':lead.email,
                        'designation':lead.designation,
                        'company_headquarters':lead.company_headquarters,
                        'business_verticals':lead.business_verticals,
                        'additional_notes':lead.additional_notes
                    }
                    lead_data.append(lead_info)

                if lead_data:
                    return Response({'user_leads':lead_data})
                else:
                    return Response({'error':'No matching lead found for logged-in user'},status=status.HTTP_404_NOT_FOUND)
            except jwt.ExpiredSignatureError:
                return Response({'error':'Token has expired'},status=status.HTTP_401_UNAUTHORIZED)
            except(jwt.InvalidTokenError,KeyError):
                return Response({'error':'Invalid or missing token'},status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response({'error':'Authorization header is missing'},status=status.HTTP_401_UNAUTHORIZED)