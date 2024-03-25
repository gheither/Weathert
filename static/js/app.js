// app.js
$(document).ready(function() {
    // Mock data, replace with API call
    const weatherData = {
        city: "San Francisco",
        condition: "Sunny",
        temperature: "22°C",
        forecast: [
            { day: "Mon", condition: "Cloudy", temperature: "18°C" },
            { day: "Tue", condition: "Rainy", temperature: "15°C" },
            { day: "Wed", condition: "Sunny", temperature: "21°C" },
            { day: "Thur", condition: "Cloudy", temperature: "18°C" },
            { day: "Fri", condition: "Rainy", temperature: "15°C" },
            { day: "Sat", condition: "Sunny", temperature: "21°C" },
            { day: "Sun", condition: "Sunny", temperature: "21°C" },
            // Add more forecast data here
        ]
    };

    $('#weatherCondition').text(weatherData.condition);
    $('#temperature').text(weatherData.temperature);
    $('#forecast').empty();

    weatherData.forecast.forEach(forecast => {
        $('#forecast').append(`
            <div class="column">
                <div class="ui card">
                    <div class="content">
                        <div class="header">${forecast.day}</div>
                        <div class="description">
                            ${forecast.condition} - ${forecast.temperature}
                        </div>
                    </div>
                </div>
            </div>
        `);
    });
});
