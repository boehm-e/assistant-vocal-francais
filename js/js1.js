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
                    else if($.inArray('ecouter', words) != -1 || $.inArray('écouter', words) != -1){
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
                     else if($.inArray('qui', words) != -1){
                         $.ajax({
                            url: 'php/who.php',
                            type: 'POST',
                            data: {id:transcript},
                            success: function(data) {
                               $("#cartes").prepend('<div class="result">'+data+'</div>');
                               responsiveVoice.speak(data,"French Female");
                               $("audio").hide();
                               $("#cartes").prepend($("#result"));
                           }
                       });
                     }
                   else if($.inArray('allumer', words) != -1 || $.inArray('allumer', words) != -1){
                     $.ajax({
                       url : 'http://192.168.1.88/api/web/index.php/on',
                       type : 'GET'
                   });
                     $("#cartes").prepend('<div class="result"><button id="on">on</button><button id="off">off</button></div>');
                     $("#on").click(function() {
                         $.ajax({
                           url : 'http://192.168.1.88/api/web/index.php/on',
                           type : 'GET'
                       });
                         responsiveVoice.speak("il fait jour maintenant","French Female");
                     });
                   $("#off").click(function() {
                       $.ajax({
                         url : 'http://192.168.1.88/api/web/index.php/off',
                         type : 'GET'
                     });
                       responsiveVoice.speak("Je ne vois plus rien","French Female");
                   });
                   $("#cartes").prepend($("#result"));
                   responsiveVoice.speak("Voila","French Female"); 
               }
               else if($.inArray('éteindre', words) != -1){
                   $.ajax({
                     url : 'http://192.168.1.88/api/web/index.php/off',
                     type : 'GET'
                 });
                   $("#cartes").prepend('<div class="result"><button id="on">on</button><button id="off">off</button></div>');
                   $("#on").click(function() {
                       $.ajax({
                         url : 'http://192.168.0.42/api/web/index.php/on',
                         type : 'GET'
                     });
                       responsiveVoice.speak("lumière allumée","French Female");
                   });
                   $("#off").click(function() {
                       $.ajax({
                         url : 'http://192.168.0.42/api/web/index.php/off',
                         type : 'GET'
                     });
                       responsiveVoice.speak("lumière éteinte","French Female");
                   });
                   $("#cartes").prepend($("#result"));
                   responsiveVoice.speak("c'est fait","French Female"); 
               }
               else if($.inArray('coucher', words) != -1 || $.inArray('dormir', words) != -1){
                       responsiveVoice.speak("j'éteind la lumière. Bonne nuit","French Female");
                       $.ajax({
                         url : 'http://192.168.0.42/api/web/index.php/off',
                         type : 'GET'
                     });
               }               
               else if($.inArray('dis', words) != -1 || $.inArray('dit', words) != -1){
                   $.ajax({
                    url: 'php/dit.php',
                    type: 'POST',
                    data: {id:transcript},
                    success: function(data) {
                     $("#cartes").prepend('<div class="result">'+data+'</div>');
                     $("audio").hide();
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
                var myArray = ['Je ne comprends pas', 'Je ne dispose pas de réponses pour cette requête', 'soyez indulgent, je ne suis qu\'une machine'];
                var rand = myArray[Math.floor(Math.random() * myArray.length)];
                responsiveVoice.speak(rand,"French Female");
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