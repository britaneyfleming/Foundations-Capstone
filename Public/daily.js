const signs = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces']

$('#signs').html(signs.map(function(sign){
    return '<div class= "col-4 mb-3 mt-3">' + '<button id= "'+sign+'" class= "sign controllers-form-button">' + sign + '</button> </div>';
} ))

$('button.sign').on('click', function(event){
    $.ajax({
        type:'POST',
        url:'https://aztro.sameerkumar.website?sign='+event.target.id+'&day=today',
        success:function(data){
            $('#horoscope').html(`
            <ul>
            <li>Today's Date: ${data.current_date}</li>
            <li>Zodiac Sign Dates: ${data.date_range}</li>
            <li>Mood: ${data.mood}</li>
            <li>Color: ${data.color}</li>
            <li>Compatibility: ${data.compatibility}</li>
            <li>Horoscope: ${data.description}</li>
            <li>Lucky Number: ${data.lucky_number}</li>
            <li>Lucky Time: ${data.lucky_time}</li>
            </ul>
        `)
        console.log(data);
        }
         });
})