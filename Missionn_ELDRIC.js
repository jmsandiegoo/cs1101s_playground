// Your program here.
const color_sensor = ev3_colorSensor();
const touch_sensor = ev3_touchSensor3();
const motor_b = ev3_motorB();
const motor_c = ev3_motorC();

function detect_light_intensity(color_sensor) {
    const intensity = ev3_reflectedLightIntensity(color_sensor);
    display(intensity);
    ev3_pause(1000);
    return intensity;
}

function move(isPause, mseconds, speed) {
    ev3_runForTime(motor_b, mseconds, speed);
    ev3_runForTime(motor_c, mseconds, speed);
    if (isPause) {
        ev3_pause(mseconds);
    }
}

while (!ev3_touchSensorPressed(touch_sensor)) {
    const intensity = detect_light_intensity(color_sensor);
    if (intensity <= 20) {
        ev3_runToRelativePosition(motor_b);
    } else {
    }
}


// end of line
// both sides white stop

// left / right 

// beside line left / right



let is_active = true;

function detectDistance(sensor) {
    const distance = ev3_ultrasonicSensorDistance(sensor) / 10; // in cm!
    display(distance);
    return distance;
}

while (is_active) {
    const distance = detectDistance(ultra_sensor);
    if (distance > 10) {
        move(false, 100, 300);
    } else {
        ev3_pause(500);
        is_active = false;
    }
}
move(true, 2000, -300);
ev3_pause(2000);