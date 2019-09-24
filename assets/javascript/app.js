$(document).ready(function () {

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var number = 30;
    var answered = $('.ans').val();
    $("#results").hide();
    var countingDown = document.getElementById("timer");

    $("#questions").hide();
    $("#start-button").click(function () {
        intervalId = setInterval(function decrement() {
            number--;
            $('#timer').html(" " + number + " " + "seconds");
            if (number === 1) {
                $('#timer').html(" " + number + " " + "second");
            } else if (number === 0) {
                stop();
                hide();
                displaySummary();
            }
            return number;
        }, 1000);
        $("#start-button").hide();
        $("#questions").show();
    })

    $("#time-remaining").click(function () {
        $("#questions").hide();
        $("#results").hide();
    })

    $("#done-button").click(function () {
        $("#questions").hide();
        $("#results").show();
    })

    function stop() {
        clearInterval(intervalId);
    }

    function hide() {
        $("#questions").hide();
    }

    function displaySummary() {
        $("#results").show();
        unanswered = (8 - (correct + incorrect));
        $('#right').text(+ " " + correct);
        $("#wrong").text(+ " " + incorrect);
        $("#unanswered").text(+ " " + unanswered);
    }

    $("#results").on('click', function () {
        $("#questions").hide();
        hide();
        displaySummary();
    });

    $('input[type=radio]').on('change', function () {
        correct = $('input[value=right]:checked').length;
        incorrect = $('input[value=wrong]:checked').length;
        unanswered = (8 - (correct + incorrect));
    });

})