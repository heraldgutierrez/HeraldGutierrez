var mongoose = require('mongoose');
var BioTypeModel = mongoose.model('BiometricType');
var EquipTypeModel = mongoose.model('EquipmentType');
var ExTypeModel = mongoose.model('ExerciseType');
var MuscleModel = mongoose.model('MuscleGroup');
var UserModel = mongoose.model('User');

exports.tryPopulate = tryPopulate;

function tryPopulate() {
	console.log('Trying to Populate...');

	BioTypeModel.find({}, function(err, result) {
		if(result.length == 0)
			populateBioType();
	});

	EquipTypeModel.find({}, function(err, result) {
		if(result.length == 0)
			populateEquipType();
	});

	ExTypeModel.find({}, function(err, result) {
		if(result.length == 0) 
			populateExType();
	});

	MuscleModel.find({}, function(err, result) {
		if(result.length == 0)
			populateMuscle();
	});

	UserModel.find({}, function(err, result) {
		if(result.length == 0)
			populateUser();
	});

	console.log('Populating Complete...');
}

// Pre-populate the "Biometric Type" collection
function populateBioType() {
	console.log('Starting: Populating Biometric Types...');
	var biotypes = [
		new BioTypeModel({
			name : 'Weight',
			typecode : 'W'
		}),
		new BioTypeModel({
			name : 'Lean Body Mass',
			typecode : 'LBM'
		}),
		new BioTypeModel({
			name : 'Height',
			typecode : 'H'
		}),
		new BioTypeModel({
			name : 'Body Fat Percentage',
			typecode : 'BFP'
		}),
		new BioTypeModel({
			name : 'Systolic Blood Pressure',
			typecode : 'SBP'
		}),
		new BioTypeModel({
			name : 'Diastolic Blood Pressure',
			typecode : 'DBP'
		}),
		new BioTypeModel({
			name : 'Body Mass Index',
			typecode : 'BMI'
		}),
		new BioTypeModel({
			name : 'Neck Circumference',
			typecode : 'NC'
		}),
		new BioTypeModel({
			name : 'Chest Circumference',
			typecode : 'CC'
		}),
		new BioTypeModel({
			name : 'Waist Circumference',
			typecode : 'WC'
		}),
		new BioTypeModel({
			name : 'Hip Circumference',
			typecode : 'HC'
		}),
		new BioTypeModel({
			name : 'Left Thigh Circumference',
			typecode : 'LTC'
		}),
		new BioTypeModel({
			name : 'Right Thigh Circumference',
			typecode : 'RTC'
		}),
		new BioTypeModel({
			name : 'Left Calf Circumference',
			typecode : 'LCC'
		}),
		new BioTypeModel({
			name : 'Right Calf Circumference',
			typecode : 'RCC'
		}),
		new BioTypeModel({
			name : 'Left Bicep Circumference',
			typecode : 'LBC'
		}),
		new BioTypeModel({
			name : 'Right Bicep Circumference',
			typecode : 'RBC'
		}),
		new BioTypeModel({
			name : 'Left Forearm Circumference',
			typecode : 'LFC'
		}),
		new BioTypeModel({
			name : 'Right Forearm Circumference',
			typecode : 'RFC'
		})
	];

	for(var i = 0; i < biotypes.length; i++) {
		biotypes[i].save(function(err, result) {});
	}
	console.log('Done: Populating Biometric Types.');
}

// Pre-populate the "Equipment Type" collection
function populateEquipType() {
	console.log('Starting: Populating Equipment Types...');
	var equip = [
		new EquipTypeModel({ name : 'N/A' }),
		new EquipTypeModel({ name : 'Exercise Ball' }),
		new EquipTypeModel({ name : 'Medicine Ball' }),
		new EquipTypeModel({ name : 'Dumbbell' }),
		new EquipTypeModel({ name : 'Barbell' }),
		new EquipTypeModel({ name : 'Kettlebell' }),
		new EquipTypeModel({ name : 'Elliptical' }),
		new EquipTypeModel({ name : 'Treadmill' }),
		new EquipTypeModel({ name : 'Recumbent Bike' }),
		new EquipTypeModel({ name : 'Upright Bike' }),
		new EquipTypeModel({ name : 'Leg Press Machine' }),
		new EquipTypeModel({ name : 'Leg Extension Machine' }),
		new EquipTypeModel({ name : 'Leg Curl Machine' }),
		new EquipTypeModel({ name : 'Hip Adduction/Abduction Machine' }),
		new EquipTypeModel({ name : 'Standing Calf Machine' }),
		new EquipTypeModel({ name : 'Seated Calf Machine' }),
		new EquipTypeModel({ name : 'Sit-Up Machine' }),
		new EquipTypeModel({ name : 'Torso Twist Machine' }),
		new EquipTypeModel({ name : 'Bicep Curl Machine' }),
		new EquipTypeModel({ name : 'Tricep Press Machine' }),
		new EquipTypeModel({ name : 'Tricep Extension Machine' }),
		new EquipTypeModel({ name : 'Chest Press Machine' }),
		new EquipTypeModel({ name : 'Chest Fly Machine' }),
		new EquipTypeModel({ name : 'Shoulder Press Machine' }),
		new EquipTypeModel({ name : 'Lat Pulldown Machine' }),
		new EquipTypeModel({ name : 'Back Row Machine' }),
		new EquipTypeModel({ name : 'Back Extension Machine' }),
		new EquipTypeModel({ name : 'E-Z Curl Bar' }),
		new EquipTypeModel({ name : 'Cables' })
	];

	for(var i = 0; i < equip.length; i++) {
		equip[i].save(function(err, result) {});
	}
	console.log('Done: Populating Equipment Types.');
}

// Pre-populate the "Exercise Type" collection
function populateExType() {
	console.log('Starting: Populating Exercise Types...');
	var exTypes = [
		new ExTypeModel({ name : 'Cardiovascular' }),
		new ExTypeModel({ name : 'Flexibility' }),
		new ExTypeModel({ name : 'Strength' })
	];

	for(var i = 0; i < exTypes.length; i++) {
		exTypes[i].save(function(err, result) {});
	}
	console.log('Done: Populating Exercise Types.');
}

// Pre-populate the "Muscle Groups" collection
function populateMuscle() {
	console.log('Starting: Populating Muscle Groups...');
	var muscles = [
		new MuscleModel({ name : 'Abs' }),
		new MuscleModel({ name : 'Back' }),
		new MuscleModel({ name : 'Biceps' }),
		new MuscleModel({ name : 'Calves' }),
		new MuscleModel({ name : 'Chest' }),
		new MuscleModel({ name : 'Forearms' }),
		new MuscleModel({ name : 'Glutes' }),
		new MuscleModel({ name : 'Hamstrings' }),
		new MuscleModel({ name : 'Neck' }),
		new MuscleModel({ name : 'Shoulders' }),
		new MuscleModel({ name : 'Thighs' }),
		new MuscleModel({ name : 'Triceps' })
	];

	for(var i = 0; i < muscles.length; i++) {
		muscles[i].save(function(err, result) {});
	}
	console.log('Done: Populating Muscle Groups.');
}

function populateUser() {
	console.log('Starting: Populating User...');
	var admins = [
		new UserModel({
			username : 'herald',
			password : 'pass',
			role : 1,
		}),
		new UserModel({
			username : 'admin',
			password : 'pass',
			role : 1,
		})
	];

	for(var i = 0; i < admins.length; i++) {
		admins[i].save(function(err, result) {});
	}
	console.log('Done: Populating Exercise Types.');
}