// lang.js

function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  location.reload(); // reload to apply
}

// ✅ Make the function available globally
window.setLanguage = setLanguage;

function loadLanguage() {
  const lang = localStorage.getItem('lang') || 'en';

  fetch(`lang/${lang}.json`)
    .then(res => res.json())
    .then(strings => {
      for (const key in strings) {
        const el = document.getElementById(key);
        if (el) {
          const aTag = el.querySelector("a");

          const htmlKeys = ['safety_introduction_text', 'loading_page', 'buttoncontroller_safety', 'box_deposit_page', 'emergency_button_page', 'box_deposit_1', 'box_deposit_2', 'box_deposit_3', 'emergency_button_page1', 'emergency_button_page', 'safety_door_page', 'safety_door_page1', 'safety_gear_page', 'safety_gear_page1', 'safety_gear_page2', 'safety_gear_page3', 'safety_gear_page4', 'conclusion_safety', 'conclusion_safety1', 'conclusion_safety2', 'conclusion_safety3', 'conclusion_safety4', 'conclusion_safety5', 'introduction_leisure', 'leisure_how_to_start', 'welcome_pneumatics', 'conveyor_leisure', 'motor_leisure', 'sensor_leisure', 'rotator_page','rotator_page1', 'rotator_page2', 'rotator_page3', 'degrees_page', 'degrees_page1', 'pin_placing_page', 'degrees_quiz_page', 'conclusion_leisure', 'winner_award', 'pneumatics_page', 'hydraulics_page', 'magnetic_train_page', 'presence_height_sensor', 'presence_sensor2', 'presence_sensor1', 'pneumatics_hydraulics_use1', 'pneumatics_hydraulics_use2', 'pneumatics_hydraulics_use3', 'H_P_press1', 'H_P_press2', 'H_P_press3', 'H_P_press4', 'pneumatic_sucktion1', 'pneumatic_sucktion2', 'pneumatic_sucktion3', 'sucktion_vacuum1', 'sucktion_vacuum2', 'sucktion_vacuum3', 'sucktion_vacuum4', 'pick_and_place_automation1', 'pick_and_place_automation2', 'pick_and_place_automation3', 'carthesian_introduction1', 'carthesian_introduction2', 'carthesian_introduction3', 'carthesian_introduction4', 'carthesian_introduction5', 'communication_introduction1', 'communication_introduction2_1', 'communication_introduction2_2', 'communication_introduction2_4', 'communication_introduction3_1', 'communication_introduction3_2', 'communication_introduction3_3', 'communication_introduction3_5', 'rgb_1', 'pneumatic_sucktion_question1', 'P_H_questions', 'linear_actuator1', 'cathesian_quiz', 'cylinder_introduction', 'cylinder_introduction1', 'cylinder_introduction2', 'cylinder_introduction3', 'cylinder_introduction4', 'cylinder_introduction_2', 'cylinder_introduction_2_1', 'cylinder_introduction_2_2', 'cylinder_introduction_2_3', 'back_main_screen_menu'];

          if (htmlKeys.includes(key)) {
            el.innerHTML = strings[key];
          } else if (aTag) {
            aTag.textContent = strings[key];
          } else {
            el.textContent = strings[key];
          }
        }
      }
    });
}

// ✅ Make this one global too if needed
window.loadLanguage = loadLanguage;
