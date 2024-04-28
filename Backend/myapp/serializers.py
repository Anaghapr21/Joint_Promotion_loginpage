from rest_framework import serializers
from .models import Lead

class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model=Lead
        fields=['lead_no','date','company_name','company_address','country','street','city','contact_person','email','designation','contact_no','business_verticals','company_headquarters','additional_notes']