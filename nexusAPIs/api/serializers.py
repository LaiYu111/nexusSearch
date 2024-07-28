from rest_framework import serializers
from commons.models import BaseModel


# 序列化器，将django class 类型转换成 JSON 用于返回数据
class DemoSerializer(serializers.ModelSerializer):
    class Meta:
        model = BaseModel
        fields = '__all__'  # 对 base model 的所有 field 进行序列化
