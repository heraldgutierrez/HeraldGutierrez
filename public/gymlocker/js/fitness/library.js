$(document).ready(function() {
    $('#li-ex-library').addClass('active');
    $('.carousel').carousel({ interval: 10000 });
    $("#btn-help").tooltip({trigger: 'hover', placement: 'bottom'});

    settings();
    // getAllWorkouts();

    $('#btn-help').click(function() { openHelp(); });
    $('#btn-close-help').click(function() { closeHelp(); });
    $('#btn-close-video').click(function() { $('#video_window').modal('hide'); });

    $('#switch_diagram').change(function() {
        if($(this).is(':checked')) {
            $('#male_diagram').hide();
            $('#female_diagram').show();
            savePreference(1);
        } else {
            $('#male_diagram').show();
            $('#female_diagram').hide();
            savePreference(0);
        }
    });

    $('#disable_help').change(function() {
        if($(this).is(':checked')) {
            saveHelpPreference(1);
        } else {
            saveHelpPreference(0);
        }
    });

    $('#searchOptions li a, .map_area').hover(
        function mouseOver() {
            $('#ex-title').html($(this).attr('data-muscle'));
            if($('#switch_diagram').is(':checked')) {
                $('#female_muscles').attr('src', '/gymlocker/img/female/female_muscles_' + ($(this).attr('data-muscle')).toLowerCase() + '.png');
            } else {
                $('#muscles').attr('src', '/gymlocker/img/male/muscles_' + ($(this).attr('data-muscle')).toLowerCase() + '.png');
            }
        },
        function mouseOut() {
            $('#ex-title').html(' &nbsp; ');
            if($('#switch_diagram').is(':checked')) {
                $('#female_muscles').attr('src', '/gymlocker/img/female/female_muscles.png');
            } else {
                $('#muscles').attr('src', '/gymlocker/img/male/muscles.png');
            }
        }
    ).click(function(){
        $('#search_body').html("");
        getExercises($(this).attr('data-muscle'));
        $('#nav-muscle').removeClass('active');
        $('#content-muscles').removeClass('active');
        $('#nav-results').addClass('active');
        $('#content-results').addClass('active');
    });


    // $('#datepicker').datepicker();

    $('#btn-close-workout').click(function() {
        $('#workout_window').modal('hide');
        $('#select-date').val(0);
    });

    $('#btn-add-workout').click(function() {
        if ($('#select-date').val() == 0) {
            $('#btn-add-workout').hide();
            $('#btn-create-workout').show();

            $('#add-date').hide();
            $('#create-date').show();
        } else {
            saveWorkout($('#select-date').val(), $('#add-exercise').val(), $('#add-reps').val(), $('#add-weight').val(), $('#add-comment').val() );
        }
    });

    $('#btn-create-workout').click(function() {
        saveWorkout($('#datepicker').val(), $('#add-exercise').val(), $('#add-reps').val(), $('#add-weight').val(), $('#add-comment').val() );
        reloadWorkouts();
    });
});

function settings() {
    $.getJSON(
        '/GymLocker/get_settings',
        function(data){
            if(data[0].diagram) {
                $('#switch_diagram').attr('checked', true);
                $('#male_diagram').hide();
                $('#female_diagram').show();
            }

            if(data[0].exercise_help) {
                $('#content-help').show();
                $('#content-main').hide();
            }
        }
    );
}

function openHelp() {
    $('.item').removeClass('active');
    $('#first-item').addClass('active');
    $('#content-help').show();
    $('#content-main').hide();
}

function closeHelp() {
    $('#content-help').hide();
    $('#content-main').show();
}

function savePreference( gender ) {
    $.ajax({
        type:   "POST",
        url:    "/save_diagram_preference",
        data:   {
            gender : gender
        },
        success: function(data) {
        }
    });
};

function saveHelpPreference( show ) {
    $.ajax({
        type:   "POST",
        url:    "/save_help_preference",
        data:   {
            type : 'exercise_help',
            show : show
        },
        success: function(data) {
        }
    });
};

function getExercises(musclePart) {
    var searchTableBody = $('#search_body');
    var searchTable = $('#search_results');
    var modalHeader = $('#exercise_header');
    var emptyContainer = $('#emptyContainer');
    var fullContainer = $('#fullContainer');
    var isEmpty = true;

    $.getJSON(
        '/search_exercises', { muscle : musclePart }, 
        function(data) {
            $.each(data, function(i, line){
                var tr = document.createElement('tr'),
                    td_name = document.createElement('td'),    // exercise's name
                    td_desc = document.createElement('td'),    // description of exercise
                    td_muscle = document.createElement('td'),  // muscle group of exercise
                    td_equip = document.createElement('td'),   // equipment used for exercise
                    td_exType = document.createElement('td'),  // type of exercise
                    td_view = document.createElement('td'),    // link to view exercise page
                    td_workout = document.createElement('td'); // link to existing workout

                var btn_video = document.createElement('button'),
                    btn_add = document.createElement('button');

                isEmpty = false;
                
                td_name.innerHTML = line.name;
                tr.appendChild(td_name);
                
                td_desc.innerHTML = line.description;
                tr.appendChild(td_desc);

                td_muscle.innerHTML = line.muscle;
                tr.appendChild(td_muscle);

                td_equip.innerHTML = line.equipment;
                tr.appendChild(td_equip);

                td_exType.innerHTML = line.type;
                tr.appendChild(td_exType);

                if ((line.video).length != 0) {
                    btn_video.className = "btn btn-small";
                    btn_video.addEventListener('click', function() { openVideo(line.name, line.video); }, false);
                    btn_video.innerHTML = "Example Video";
                    td_view.appendChild(btn_video);
                }
                tr.appendChild(td_view);
                
                btn_add.className = "btn btn-small";
                btn_add.addEventListener('click', function() { addToWorkout(line.id, line.name); }, false);
                btn_add.innerHTML = "Add to a Workout";
                td_workout.appendChild(btn_add);
                tr.appendChild(td_workout);

                searchTableBody.appendChild(tr);
            });

            modalHeader.innerHTML = "Exercises for " + musclePart + ":";
            if(isEmpty) {
                emptyContainer.innerHTML = "<center><h3>Currently no exercises for " + musclePart + "</h3></center>";
                emptyContainer.style.display = "block";
                fullContainer.style.display = "none";
            } else {
                emptyContainer.style.display = "none";
                fullContainer.style.display = "block";
            }
        }
    );
}

function getAllWorkouts() {
    var date = '[% date %]';

    $.getJSON(
        '/fitness/get_all_workout_dates', 
        function(data) {
            $.each(data, function(i, line) {
                if (line.date >= date) {
                    var option = document.createElement('option');

                    option.value = line.date;
                    option.innerHTML = line.date;
                    $('#select-date').append(option);
                }
            });
        }
    );
}

function openVideo( exercise, url ) {
    var video = '';

    var token = url.split('?');
    var shorturl = token[1].substring(2, token[1].length);

    token = shorturl.split('&');
    video = token[0];
    
    $('#video-header').html(exercise);
    var embedCode = '<object><param id="param-movie" name="movie" value="http://www.youtube.com/v/' + video 
        + 'IHbY3blOGwc?version=3&amp;hl=en_US&amp;rel=0&amp;autoplay=1"></param>'
        + '<param name="allowFullScreen" value="true"></param>'
        + '<param name="allowscriptaccess" value="always"></param>'
        + '<embed id="embed-movie" src="http://www.youtube.com/v/' + video + '?version=3&amp;hl=en_US&amp;rel=0&amp;autoplay=1" type="application/x-shockwave-flash" width="550" height="315" allowscriptaccess="always" allowfullscreen="true"></embed>'
        + '</object>';
    $('#video-content').html(embedCode);
    $('#video_window').modal('show');
}

function addToWorkout( id, name ) {
    $('#workout-header').html('Adding ' + name + ' to a workout.');
    $('#add-exercise').val(id);
    $('#add-reps').val(0);
    $('#add-weight').val(0);

    $('#btn-add-workout').show();
    $('#btn-create-workout').hide();

    $('#add-date').show();
    $('#create-date').hide();
    $('#workout_window').modal('show');
} 

function reloadWorkouts() {
    $('#select-date').children().remove();

    var option = document.createElement('option');
    option.value = '0';
    option.setAttribute('selected', true);
    option.innerHTML = '- Create a new workout -';
    
    $('#select-date').append(option);
    getAllWorkouts();
}

function saveWorkout(date, exercise, reps, weight, comment) {
    $.ajax({
        type:   'post',
        url:    '/fitness/add_to_existing_workout',
        data:       
        {
            'date'      : date,
            'exercise'  : exercise,
            'reps'      : reps,
            'weight'    : weight,
            'comment'   : comment
        },
        success:    function() {
                $('#workout_window').modal('hide');
                $('#select-date').val(0);
            },
    });
}