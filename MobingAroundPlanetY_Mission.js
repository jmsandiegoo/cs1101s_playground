// Your program here
const ultra_sensor = ev3_ultrasonicSensor();
const motor_b = ev3_motorB();
const motor_c = ev3_motorC();
let is_active = true;
let dir_facing = 0;

function detectDistance(sensor) {
    const distance = ev3_ultrasonicSensorDistance(sensor) / 10; // in cm!
    display(distance);
    return distance;
}

function move(isPause, mseconds, speed) {
    ev3_runForTime(motor_b, mseconds, speed);
    ev3_runForTime(motor_c, mseconds, speed);
    if (isPause) {
        ev3_pause(mseconds);
        // turn code here
    }
}

function turn_motor(motor_b_position, motor_c_position, mseconds, speed) {
    ev3_runToRelativePosition(motor_b, motor_b_position, speed);
    ev3_runToRelativePosition(motor_c, motor_c_position, speed);
    ev3_pause(mseconds);
}

function random_turn() {
    if (math_random() > 0.5) {
        turn_motor(-155, 155, 1000, 200); //turn left
        move(true, 1200, 300);
        turn_motor(155, -155, 1000, 200); //turn right
    } else {
        turn_motor(155, -155, 1000, 200); //turn right
        move(true, 1200, 300);
        turn_motor(-155, 155, 1000, 200); //turn left
    }
}

while (is_active) {
    const distance = detectDistance(ultra_sensor);
    if (distance > 12) {
        move(false, 100, 300);
    } else {
        ev3_pause(500);
        random_turn();
    }
}



/* 
go_forward(3000, 200);
turn_motor(-150, 150, 1000, 200); turn left
go_forward(2000, 200);
turn_motor(150, -150, 1000, 200); turn right
go_forward(4000, 200);
*/