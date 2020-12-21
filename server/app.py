from flask import Flask
from flask import request
from flask_cors import CORS
from requests import get

app = Flask(__name__)
CORS(app)

@app.route('/')
def positions():
    url = request.url.replace(request.host_url, 'https://jobs.github.com/positions.json')
    print(url)
    return get(url).content

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
