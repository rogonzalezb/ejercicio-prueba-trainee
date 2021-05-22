$(document).ready(function() {

  var api, ciudad;

  $("#btnBuscar").on('click', function() {

    api = '623c8fa642196c94c44e0cca59a1159d';
    ciudad = $('#idCiudad').val();

    $.ajax({
      url: 'http://api.weatherstack.com/current',
      data: {
        access_key: api,
        query: ciudad
      },
      dataType: 'json',
      success: function(datos) {
        $('.tabla').removeAttr('hidden');
        $('#tBody').html('');
        $('#tBody').append(`<tr><td>${datos.location.name}, ${datos.location.country}</td><td>${datos.location.localtime}hs</td>
          <td>${datos.current.temperature}°C <br><img class="img-clima" src="${datos.current.weather_icons}" alt=""></td>
          <td>${datos.current.feelslike}°C</td><td>${datos.current.weather_descriptions}</td><td>${datos.current.humidity}%</td>
          <td>${datos.current.precip}mm</td><td>${datos.current.visibility}km</td></tr>`)
      }
    });

  })

});
