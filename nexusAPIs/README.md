# 配置环境 

```shell
# .venv 版本，如果用 anaconda 可以配合 pycharm 创建环境

# cd 到项目根目录
# python 3.11 (3.12 应该没啥问题)
# 创建 .venv
python -m venv .vene
# 激活环境
.venv/Scripts/activate
pip install -r requirements.txt
```

# 项目依赖包

```shell
# 下载 requirements.txt
pip install requirements.txt

# 保存依赖包
pip freeze > requirements.txt
```

# 启动 Django
```shell
python manage.py runserver
```

## 数据库更新 or 迁移
```shell
python manage.py makemigrations
python manage.py migrate
```

## 添加 Django Apps
```shell
python manage.py startapp ${appname}
```