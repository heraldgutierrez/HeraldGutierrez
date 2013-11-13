$(document).ready(function() {
	// setPreviousWorkouts();
	// setPlannedWorkouts();
	// getExercisesOnDate();
});

function setPreviousWorkouts(){
	$.getJSON(
		"/fitness/get_previous_workouts",
		function(data){
			$("#workouts-completed").text(data.count);
		});
};

function setPlannedWorkouts(){
	$.getJSON(
		"/fitness/get_planned_workouts",
		function(data){
			$("#workouts-planned").text(data.count);
		});
};

function getExercisesOnDate() {
	var count = 0;
    $.getJSON(
        '/fitness/check_existing.json', 
        { 
            'date' : '[% date %]',
            'userid' : '[% user_id %]'
         }, 
        function(data){
            $.each(data, function(i, line) {
                var tr = document.createElement('tr'),
                    td_id = document.createElement('td'),
                    td_name = document.createElement('td'),
                    td_reps = document.createElement('td'),
                    td_weight = document.createElement('td'),
                    td_comment = document.createElement('td'),
                    td_equip = document.createElement('td'),
                    td_muscle = document.createElement('td');

                td_name.innerHTML = line.name;
                tr.appendChild(td_name);

                td_reps.innerHTML = line.reps;
                tr.appendChild(td_reps);

                td_weight.innerHTML = line.weight;
                tr.appendChild(td_weight);

                td_muscle.innerHTML = line.muscle;
                tr.appendChild(td_muscle);

                td_equip.innerHTML = line.equipment;
                tr.appendChild(td_equip);

                td_comment.innerHTML = line.comments;
                tr.appendChild(td_comment);

                $('#body').append(tr);
                count++;
        });

		if (count == 0) {
			$('#noWorkout').show();
			$('#workout').hide();
		}
    });
};