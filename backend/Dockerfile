FROM python:3
ENV PYTHONUNBUFFERED=1
WORKDIR /www
COPY requirements.txt /www/
RUN pip install -r requirements.txt
COPY . /www/

