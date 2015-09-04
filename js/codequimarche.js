function voice(){
    (function($){

        if ('webkitSpeechRecognition' in window) {
            var recognition = new webkitSpeechRecognition();
            var text = '';

            recognition.lang = "fr-FR";
            recognition.continuous = false;
            recognition.interimResults = true;

            $('#btn').click(function(){
                recognition.start();
                $('#result').text('Dites quelque chose');
                $('#btn').removeClass('passive').addClass('active');
            });
            $('#h1').hide();
            recognition.onresult = function (event) {
                $('#result').text('');
                for (var i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) {                 // si l'enregistrement est fini
                        $('#btn').removeClass('active').addClass('passive');
                    var transcript = event.results[i][0].transcript;
                    var words = transcript.split(' ');

                    if($.inArray('actualités', words) != -1){
                        var url = 'php/actu.php';
                        $.post(url, function(data){
                            $("#cartes").prepend('<div class="result">'+data+'</div>');
                            $("audio").hide();
                            $("#cartes").prepend($("#result"));
                        });
                    }
                    else if($.inArray('météo', words) != -1){
                        var url = 'php/meteo.php';
                        $.post(url, function(data){
                            $("#cartes").prepend('<div class="result">'+data+'</div>');
                            $("audio").hide();
                            $("#cartes").prepend($("#result"));
                        });
                    }
                    else if($.inArray('jour', words) != -1){
                        var url = 'php/jour.php';
                        $.post(url, function(data){
                            $("#cartes").prepend('<div class="result">'+data+'</div>');
                            $("audio").hide();
                            $("#cartes").prepend($("#result"));
                        });
                    }
                    else if($.inArray('écouter', words) != -1){
                       $.ajax({
                        url: 'php/musique.php',
                        type: 'POST',
                        data: {id:transcript},
                        success: function(data) {
                         $("#cartes").prepend('<div class="result">'+data+'</div>');
                         $("#cartes").prepend($("#result"));
                     }
                 });
                   }
                   else if($.inArray('séries', words) != -1){
                    var url = 'php/series.php';
                    $.post(url, function(data){
                        $("#cartes").prepend('<div class="result">'+data+'</div>');
                        $("audio").hide();
                        $("#cartes").prepend($("#result"));
                    });
                }
                else if($.inArray('heure', words) != -1){
                    var url = 'php/heure.php';
                    $.post(url, function(data){
                        $("#cartes").prepend('<div class="result">'+data+'</div>');
                        $("audio").hide();
                        $("#cartes").prepend($("#result"));
                    });
                }
                else   
                {
                    $("#cartes").prepend('<div class="result">Je ne comprends pas</div>');
                    $("#cartes").prepend($("#result"));
                }
                recognition.abort();
                console.log(recognition);
//                voice();
}else{
    $('#result').text($('#result').text() + event.results[i][0].transcript);
}
}
};
}else{
//                $('#btn').hide();
}


})(jQuery);
}
voice();