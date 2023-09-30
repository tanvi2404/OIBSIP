function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById('temperature').value);
    const selectedUnit = document.getElementById('unit').value;
    let convertedTemperature;
    let unit;
  
    if (isNaN(temperatureInput)) {
      alert('Please enter a valid temperature.');
      return;
    }
  
    switch (selectedUnit) {
      case 'celsius':
        convertedTemperature = (temperatureInput - 32) * (5/9);
        unit = 'Celsius';
        break;
      case 'fahrenheit':
        convertedTemperature = (temperatureInput * 9/5) + 32;
        unit = 'Fahrenheit';
        break;
      case 'kelvin':
        convertedTemperature = temperatureInput + 273.15;
        unit = 'Kelvin';
        break;
      default:
        break;
    }
  
    document.getElementById('result').innerHTML = `Converted temperature: ${convertedTemperature.toFixed(2)} ${unit}`;
  }
  