const signs = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces']

$('#signs').html(signs.map(function(sign){
    return '<div class= "col-4 mb-3 mt-3">' + '<button id= "'+sign+'" class= "sign btn btn-primary">' + sign + '</button> </div>';
} ))

$('button.sign').on('click', function(event){
    $.ajax({
        type:'POST',
        url:'https://aztro.sameerkumar.website?sign='+event.target.id+'&day=today',
        success:function(data){
            $('#horoscope').html(`
            <ul>
            <li>Mood: ${data.mood}</li>
            <li>Mood: ${data.mood}</li>
            </ul>
        `)
        console.log(data);
        }
         });
})