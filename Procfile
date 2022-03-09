release: python manage.py migrate
web: gunicorn inventory.wsgi --log-file -
python manage.py collectstatic --noinput