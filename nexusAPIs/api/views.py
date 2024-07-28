from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from api.serializers import DemoSerializer
from commons.models import BaseModel


@api_view(['GET'])
def get_data(request):
    goods = {"name": "123"}
    return Response(goods)


@api_view(['GET', 'POST'])
def demo_data(request):
    if request.method == 'GET':
        demo = BaseModel.objects.all()
        serializer = DemoSerializer(demo, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = DemoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
