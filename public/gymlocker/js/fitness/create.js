$(document).ready(function() {
	var delay = (function(){
	  	var timer = 0;
	  	
	  	return function(callback, ms) {
	    	clearTimeout (timer);
	    	timer = setTimeout(callback, ms);
	  	};
	})();

	$('#workout-dropdown').addClass('active');
	$('#datepicker').datepicker();
	$('#modal-delete').modal('hide');
	$('.carousel').carousel({ interval : 10000 });
	$('#btn-help').tooltip({ 
		trigger : 'hover',
		placement : 'left'
	});

	$('#btn-create-wo').addClass('active');

	var exList = [];
	var field_id = 0;

	setSettings();
	// checkForExistingWorkout($('#datepicker').val());	// Check to see if there is an existing workout for today

	$('#tbl-workout tbody').sortable({
		helper: function(e, ui) {
			ui.children().each(function() {
				$(this).width($(this).width());
			});
			return ui;
		},
		containment: 'parent',
		forcePlaceholderSize: true,
		scroll: true
	}).disableSelection();

	$('#input-search').keyup(function(e) {
		if($(this).val().length > 0) {
			delay(function() { doSearch(); }, 750);
		} else {
			$('#l-exercise-list').html('');
		}
	});

	$('#input-search').keypress(function(e) {
		if(e.keyCode == 13) {
			doSearch();
		}
	});

	$('#datepicker').on('change', function() { checkForExistingWorkout( $(this).val() ); });

	$('#btn-save').click(function() { 
		if(!$(this).hasClass('disabled'))
			saveWorkout(); 
	});

	$('#btn-delete').click(function() { 
		if(!$(this).hasClass('disabled'))
			$('#modal-delete').modal('show'); 
	});
	$('#btn-modal-close').click(function() { $('#modal-delete').modal('hide'); });
	$('#btn-modal-delete').click(function() { deleteWorkout($('#datepicker').val()); });

	$('#btn-help').click(function() {
		$('#content-help').show();
		$('#content-main').hide();
	});

	$('#btn-close-help').click(function() {
		$('#content-help').hide();
		$('#content-main').show();
	});

	$('#disable-help').change(function() {
		saveHelpPreference($(this).is(':checked'));
	});
});

function setSettings() {
    $.getJSON(
        '/GymLocker/get_settings',
        function(data){
            if(data.create_help) {
                $('#content-help').show();
		        $('#content-main').hide();
		    } else {
		        $('#disable-help').attr('checked', true);
            }
        }
    );
}

function checkForExistingWorkout(date) {
	$.getJSON(
		'/GymLocker/fitness/check_existing_workout',
		{ 
			'date' : date
		}, 
		function(data){
			if( data.length > 0 ) { 
				createExistingTable(data); 
			} else {
				$("#tbl-workout tbody").find('tr').remove();
			}
		}
	);
}

function createExistingTable(data) {
	$('#tbl-workout tbody').html('');
	$('#btn-save, #btn-delete').removeClass('disabled');
	$.each(data, function(i, ex) {
		createSetForm(ex);
	});
}

function deleteWorkout(date) {
	$.ajax({
		type 	: 'post',
		data 	: { 'date' : date },
		url  	: '/GymLocker/fitness/delete_workout',
		success : function(data) {
			$('#modal-delete').modal('hide');
			$('#btn-save, #btn-delete').addClass('disabled');
			$('#tbl-workout tbody').html('');
		}
	});
}

function saveWorkout() {
	$.ajax({
		type	: 'post',
		url 	: '/GymLocker/fitness/save_workout',
		data 	: $('#workout-form').serialize(),
		success : function() {
			$('#btn-delete').removeClass('disabled');
			$('#success-container').show().delay(5000).fadeOut();
		}
	});
}

function saveHelpPreference( show ) {
    $.ajax({
        type:   "POST",
        url:    "/GymLocker/save_preference",
        data:   {
            type : 'create_help',
            show : !show
        },
        success: function(data) { }
    });
};

function doSearch() {
	$.getJSON(
		'/GymLocker/fitness/get_ex_search_results',
		{ 
			'query' : $('#input-search').val()
		},
		function(data) {
			$('#l-exercise-list').html('');
			exList = [];

			var div;
			var text;
			if(data.length > 0) {
				$.each(data, function(i, ex) {
					exList.push(ex);
					div = '<div class="search-results">';
					div += '<i class="icon-plus-sign"></i>  ';

					text = '<strong>' + ex.name + '</strong><br>';
					text += '<span class="label label-info">E : ' + ex.equip + '</span>';
					text += '&nbsp;';
					text += '<span class="label label-info">M : ' + ex.muscle + '</span>';
					text += '&nbsp;';
					text += '<span class="label label-info">T : ' + ex.exercise_type + '</span>';

					div += text;
					div += '<input type="hidden" class="ex-num" value="' + i + '" />';
					div += '</div>';

					$('#l-exercise-list').append(div);
				});

				$('.icon-plus-sign').click(function() {
					createSetForm( exList[parseInt( $(this).siblings('.ex-num').val() )]);
					$('#btn-save').removeClass('disabled');
				});
			} else {
				div = '<div class="search-results">';
				div += '<strong> No Exercises Found. </strong>';
				div += '</div>';

				$('#l-exercise-list').append(div);
			}
		}
	);
}

function createSetForm(ex) {
	var tr = '<tr class="form-horizontal">';

	// Drag
	var td_drag = '<td>';
	var i = '<i class="icon-resize-vertical">';
	td_drag += i + '</td>';
	tr += td_drag;

	var td_name = '<td class="ex-name">'
	td_name += ex.name;
	var ex_id = '<input type="hidden" name="ex_id_' + field_id + '" value="' + ex._id + '" />';
	td_name += ex_id;
	td_name += '</td>';
	tr += td_name;

	var td_bp = '<td class="ex-bp">';
	td_bp += ex.muscle;
	td_bp += '</td>';
	tr += td_bp;

	var td_equip = '<td class="ex-bp">';
	td_equip += ex.equipment;
	td_equip += '</td>';
	tr += td_equip;

	var td_reps = '<td>';
	var input_reps = '<input type="number" class="ex-number-input" name="ex_reps_' + field_id + '" min="0" placeholder="reps" value="' + ex.reps + '" />';
	td_reps += input_reps;
	td_reps += '</td>';
	tr += td_reps;

	var td_weight = '<td>';
	var input_weight = '<input type="number" class="ex-number-input" name="ex_weight_' + field_id + '" min="0" placeholder="weight" value="' + ex.weight + '" />';
	td_weight += input_weight;
	td_weight += '</td>';
	tr += td_weight;

	var td_comm = '<td>';
	var comm_text = ex.comments ? ex.comments : '';
	var comm = '<input type="textarea" name="ex_com_' + field_id + '" placeholder="Comments" value="' + comm_text + '" />';
	td_comm += comm;
	td_comm += '</td>';
	tr += td_comm;

	var td_del = '<td>';
	var del = '<a href="#" class="btn btn-danger btn-delete">';
	var del_i = '<i class="icon-remove icon-white"></i>';
	del += del_i;
	del += '</a>';
	td_del += '</td>';
	tr += td_del;

	$('#tbl-workout tbody').append(tr);

	$('.icon-resize-vertical').hover(function() {
		$(this).css('cursor', 'move');
	});

	$('.btn-delete').hover(function() {
		$(this).css('cursor', 'pointer');
	}).click(function() {
		$(this).parent().parent().fadeOut(4000).remove();

		if($('.icon-resize-vertical').length == 0) {
			$('#btn-save').addClass('disabled');
		}
	});

	field_id++;
}