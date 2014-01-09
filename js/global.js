$(document).ready(function() {
    $( ".flash" ).on('click', '.close', 
        function(event) {
            event.preventDefault();
            $(this).parent().remove();
        }
    );
});