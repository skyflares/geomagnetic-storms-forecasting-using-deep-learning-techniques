FROM python:3.10.12

# upgrade pip
RUN pip install --upgrade pip

# get curl for healthchecks
RUN apt-get update && apt-get install -y curl

# permissions and nonroot user for tightened security
RUN groupadd -r nonroot -g 433 && \
    useradd -u 431 -r -g nonroot -d /home/app -s /sbin/nologin -c "Docker image user" nonroot
RUN mkdir /home/app/ && chown -R nonroot:nonroot /home/app
RUN mkdir -p /var/log/flask-app && touch /var/log/flask-app/flask-app.err.log && touch /var/log/flask-app/flask-app.out.log
RUN chown -R nonroot:nonroot /var/log/flask-app
WORKDIR /home/app
USER nonroot

# copy all the files to the container
COPY --chown=nonroot:nonroot . .

# venv
ENV VIRTUAL_ENV=/home/app/venv

# python setup
RUN python -m venv $VIRTUAL_ENV
ENV PATH="$VIRTUAL_ENV/bin:$PATH"
RUN export FLASK_APP=app.py
RUN pip install -r requirements.txt

# define the port number the container should expose
EXPOSE 5000

CMD ["python", "app.py"]
