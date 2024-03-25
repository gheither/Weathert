import requests
from pprint import pprint
import os
import json

class WeatherFetcher:
    def __init__(self, api_key=None, latitude='41.8933', longitude='-88.4714'):
        self.api_key = api_key if api_key else os.getenv('OPENWEATHER_API_KEY')
        if not self.api_key:
            raise ValueError("No API key provided. Please set the OPENWEATHER_API_KEY environment variable or pass an API key directly.")
        self.latitude = latitude
        self.longitude = longitude
        self.url = f"http://api.openweathermap.org/data/3.0/onecall?lat={self.latitude}&lon={self.longitude}&appid={self.api_key}&units=imperial"
        print(self.url)
        self.data = None

    def fetch_weather(self):
        response = requests.get(self.url)
        if response.status_code == 200:
            self.data = response.json()
            return self.data
        else:
            print("Failed to retrieve data")
            self.data = None















'''

api_key = ''  # Replace this with your actual API key

# Initialize the WeatherFetcher with the API key
weather_fetcher = WeatherFetcher(api_key)

# Fetch the weather data
weather_fetcher.fetch_weather()



'''
