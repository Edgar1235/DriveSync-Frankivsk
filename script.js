// Точні координати старту біля ТСЦ МВС № 2641
const tscCoords = [48.8945, 24.7170];

// База даних світлофорів, парковок і пішохідних переходів для всіх маршрутів за замовчуванням
let savedMyRoutesInfra = JSON.parse(localStorage.getItem('tsc_my_routes_infrastructure')) || {
  "1": [
        { type: "light", lat: 48.90336, lng: 24.71652 },
        { type: "light", lat: 48.90093, lng: 24.71319 },
        { type: "light", lat: 48.90344, lng: 24.71323 },
        { type: "park", lat: 48.89474, lng: 24.71683 },
        { type: "crosswalk", lat: 48.89466, lng: 24.71318 },
        { type: "crosswalk", lat: 48.8963, lng: 24.71325 },
        { type: "crosswalk", lat: 48.90105, lng: 24.71324 },
        { type: "crosswalk", lat: 48.90335, lng: 24.71322 },
        { type: "crosswalk", lat: 48.90356, lng: 24.71326 },
        { type: "crosswalk", lat: 48.9043, lng: 24.71434 },
        { type: "crosswalk", lat: 48.90373, lng: 24.71573 },
        { type: "crosswalk", lat: 48.90095, lng: 24.72294 }
    ],
    "2": [
        { type: "light", lat: 48.91721, lng: 24.72379 },
        { type: "light", lat: 48.89639, lng: 24.71317 },
        { type: "light", lat: 48.90344, lng: 24.71323 },
        { type: "light", lat: 48.90078, lng: 24.71325 },
        { type: "light", lat: 48.90582, lng: 24.71454 },
        { type: "light", lat: 48.91533, lng: 24.71843 },
        { type: "light", lat: 48.91825, lng: 24.71997 },
        { type: "light", lat: 48.91764, lng: 24.72395 },
        { type: "park", lat: 48.89636, lng: 24.71317 },
        { type: "park", lat: 48.89478, lng: 24.71672 },
        { type: "park", lat: 48.90674, lng: 24.71498 },
        { type: "park", lat: 48.91333, lng: 24.71741 },
        { type: "park", lat: 48.91743, lng: 24.71942 },
        { type: "crosswalk", lat: 48.89466, lng: 24.71319 },
        { type: "crosswalk", lat: 48.8963, lng: 24.71325 },
        { type: "crosswalk", lat: 48.90105, lng: 24.71324 },
        { type: "crosswalk", lat: 48.90335, lng: 24.71322 },
        { type: "crosswalk", lat: 48.90356, lng: 24.71326 },
        { type: "crosswalk", lat: 48.90581, lng: 24.71443 },
        { type: "crosswalk", lat: 48.90591, lng: 24.7145 },
        { type: "crosswalk", lat: 48.90703, lng: 24.71509 },
        { type: "crosswalk", lat: 48.90739, lng: 24.71524 },
        { type: "crosswalk", lat: 48.90856, lng: 24.71571 },
        { type: "crosswalk", lat: 48.91295, lng: 24.71725 },
        { type: "crosswalk", lat: 48.91412, lng: 24.71763 },
        { type: "crosswalk", lat: 48.91423, lng: 24.71766 },
        { type: "crosswalk", lat: 48.91326, lng: 24.71892 },
        { type: "crosswalk", lat: 48.91241, lng: 24.72012 },
        { type: "crosswalk", lat: 48.91246, lng: 24.72069 },
        { type: "crosswalk", lat: 48.91271, lng: 24.72084 },
        { type: "crosswalk", lat: 48.91326, lng: 24.72125 },
        { type: "crosswalk", lat: 48.91396, lng: 24.72136 },
        { type: "crosswalk", lat: 48.91412, lng: 24.72136 },
        { type: "crosswalk", lat: 48.91449, lng: 24.72136 },
        { type: "crosswalk", lat: 48.91763, lng: 24.72387 },
        { type: "crosswalk", lat: 48.91775, lng: 24.72367 },
        { type: "crosswalk", lat: 48.91797, lng: 24.72221 },
        { type: "crosswalk", lat: 48.91835, lng: 24.71979 },
        { type: "crosswalk", lat: 48.91829, lng: 24.72012 },
        { type: "crosswalk", lat: 48.91822, lng: 24.71981 },
        { type: "crosswalk", lat: 48.91594, lng: 24.71877 },
        { type: "crosswalk", lat: 48.91492, lng: 24.71796 }
    ],
   "3": [
        { type: "light", lat: 48.89627, lng: 24.71323 },
        { type: "light", lat: 48.90084, lng: 24.71319 },
        { type: "light", lat: 48.90579, lng: 24.71454 },
        { type: "light", lat: 48.90344, lng: 24.71323 },
        { type: "light", lat: 48.91299, lng: 24.71726 },
        { type: "light", lat: 48.9145, lng: 24.70994 },
        { type: "park", lat: 48.89477, lng: 24.71694 },
        { type: "park", lat: 48.90648, lng: 24.71488 },
        { type: "park", lat: 48.91322, lng: 24.71612 },
        { type: "park", lat: 48.9133, lng: 24.71505 },
        { type: "park", lat: 48.91382, lng: 24.71243 },
        { type: "park", lat: 48.91084, lng: 24.71064 },
        { type: "park", lat: 48.90678, lng: 24.71246 },
        { type: "crosswalk", lat: 48.89466, lng: 24.71319 },
        { type: "crosswalk", lat: 48.8963, lng: 24.71325 },
        { type: "crosswalk", lat: 48.90105, lng: 24.71324 },
        { type: "crosswalk", lat: 48.90335, lng: 24.71322 },
        { type: "crosswalk", lat: 48.90356, lng: 24.71326 },
        { type: "crosswalk", lat: 48.90581, lng: 24.71443 },
        { type: "crosswalk", lat: 48.90591, lng: 24.7145 },
        { type: "crosswalk", lat: 48.90703, lng: 24.71509 },
        { type: "crosswalk", lat: 48.90739, lng: 24.71524 },
        { type: "crosswalk", lat: 48.90856, lng: 24.71571 },
        { type: "crosswalk", lat: 48.91295, lng: 24.71725 },
        { type: "crosswalk", lat: 48.9131, lng: 24.71699 },
        { type: "crosswalk", lat: 48.91329, lng: 24.71563 },
        { type: "crosswalk", lat: 48.91342, lng: 24.71467 },
        { type: "crosswalk", lat: 48.91362, lng: 24.71346 },
        { type: "crosswalk", lat: 48.91371, lng: 24.713 },
        { type: "crosswalk", lat: 48.91405, lng: 24.71135 },
        { type: "crosswalk", lat: 48.91445, lng: 24.71003 },
        { type: "crosswalk", lat: 48.91439, lng: 24.70977 },
        { type: "crosswalk", lat: 48.91314, lng: 24.70966 },
        { type: "crosswalk", lat: 48.91262, lng: 24.70991 },
        { type: "crosswalk", lat: 48.91169, lng: 24.71029 },
        { type: "crosswalk", lat: 48.91087, lng: 24.71068 },
        { type: "crosswalk", lat: 48.90986, lng: 24.71107 },
        { type: "crosswalk", lat: 48.90915, lng: 24.71131 },
        { type: "crosswalk", lat: 48.90716, lng: 24.71241 },
        { type: "crosswalk", lat: 48.90583, lng: 24.71297 }
    ],
    "4": [
        { type: "light", lat: 48.89629, lng: 24.71322 },
        { type: "light", lat: 48.90077, lng: 24.71331 },
        { type: "light", lat: 48.90187, lng: 24.70942 },
        { type: "light", lat: 48.90265, lng: 24.70277 },
        { type: "light", lat: 48.90315, lng: 24.68841 },
        { type: "park", lat: 48.89476, lng: 24.71679 },
        { type: "park", lat: 48.90249, lng: 24.70503 },
        { type: "park", lat: 48.90296, lng: 24.70083 },
        { type: "crosswalk", lat: 48.89466, lng: 24.71319 },
        { type: "crosswalk", lat: 48.8963, lng: 24.71325 },
        { type: "crosswalk", lat: 48.9007, lng: 24.71295 },
        { type: "crosswalk", lat: 48.9011, lng: 24.71282 },
        { type: "crosswalk", lat: 48.90193, lng: 24.70923 },
        { type: "crosswalk", lat: 48.90334, lng: 24.6981 },
        { type: "crosswalk", lat: 48.90359, lng: 24.69651 },
        { type: "crosswalk", lat: 48.90349, lng: 24.69507 },
        { type: "crosswalk", lat: 48.9031, lng: 24.68848 },
        { type: "crosswalk", lat: 48.90336, lng: 24.68499 },
        { type: "crosswalk", lat: 48.90535, lng: 24.68188 }
    ],
    "6": [
        { type: "light", lat: 48.89627, lng: 24.71323 },
        { type: "light", lat: 48.90344, lng: 24.71323 },
        { type: "light", lat: 48.90084, lng: 24.71319 },
        { type: "light", lat: 48.90574, lng: 24.71458 },
        { type: "light", lat: 48.91289, lng: 24.71731 },
        { type: "light", lat: 48.9176, lng: 24.724 },
        { type: "light", lat: 48.91758, lng: 24.72464 },
        { type: "light", lat: 48.91861, lng: 24.71807 },
        { type: "light", lat: 48.91899, lng: 24.71531 },
        { type: "light", lat: 48.91446, lng: 24.70983 },
        { type: "park", lat: 48.89477, lng: 24.71694 },
        { type: "park", lat: 48.90644, lng: 24.71492 },
        { type: "park", lat: 48.91716, lng: 24.72382 },
        { type: "park", lat: 48.9232, lng: 24.72377 },
        { type: "park", lat: 48.92128, lng: 24.72018 },
        { type: "park", lat: 48.91727, lng: 24.71476 },
        { type: "park", lat: 48.91565, lng: 24.7141 },
        { type: "park", lat: 48.91376, lng: 24.71214 },
        { type: "park", lat: 48.91208, lng: 24.71004 },
        { type: "park", lat: 48.91047, lng: 24.71064 },
        { type: "crosswalk", lat: 48.89466, lng: 24.71319 },
        { type: "crosswalk", lat: 48.8963, lng: 24.71325 },
        { type: "crosswalk", lat: 48.90105, lng: 24.71324 },
        { type: "crosswalk", lat: 48.90335, lng: 24.71322 },
        { type: "crosswalk", lat: 48.90356, lng: 24.71326 },
        { type: "crosswalk", lat: 48.90573, lng: 24.71453 },
        { type: "crosswalk", lat: 48.90598, lng: 24.71469 },
        { type: "crosswalk", lat: 48.907, lng: 24.71496 },
        { type: "crosswalk", lat: 48.90858, lng: 24.71559 },
        { type: "crosswalk", lat: 48.90744, lng: 24.71522 },
        { type: "crosswalk", lat: 48.91299, lng: 24.71725 },
        { type: "crosswalk", lat: 48.91299, lng: 24.71725 },
        { type: "crosswalk", lat: 48.9142, lng: 24.71772 },
        { type: "crosswalk", lat: 48.91325, lng: 24.71894 },
        { type: "crosswalk", lat: 48.91244, lng: 24.72008 },
        { type: "crosswalk", lat: 48.91254, lng: 24.72074 },
        { type: "crosswalk", lat: 48.91319, lng: 24.72125 },
        { type: "crosswalk", lat: 48.91385, lng: 24.72136 },
        { type: "crosswalk", lat: 48.91407, lng: 24.72136 },
        { type: "crosswalk", lat: 48.91483, lng: 24.72134 },
        { type: "crosswalk", lat: 48.9176, lng: 24.72382 },
        { type: "crosswalk", lat: 48.91771, lng: 24.72465 },
        { type: "crosswalk", lat: 48.92035, lng: 24.72509 },
        { type: "crosswalk", lat: 48.92201, lng: 24.72451 },
        { type: "crosswalk", lat: 48.92317, lng: 24.72389 },
        { type: "crosswalk", lat: 48.92379, lng: 24.72362 },
        { type: "crosswalk", lat: 48.92384, lng: 24.7234 },
        { type: "crosswalk", lat: 48.92354, lng: 24.7223 },
        { type: "crosswalk", lat: 48.92306, lng: 24.7217 },
        { type: "crosswalk", lat: 48.92261, lng: 24.72134 },
        { type: "crosswalk", lat: 48.92205, lng: 24.72086 },
        { type: "crosswalk", lat: 48.92111, lng: 24.72002 },
        { type: "crosswalk", lat: 48.91982, lng: 24.71891 },
        { type: "crosswalk", lat: 48.9187, lng: 24.71813 },
        { type: "crosswalk", lat: 48.91868, lng: 24.71773 },
        { type: "crosswalk", lat: 48.91902, lng: 24.71545 },
        { type: "crosswalk", lat: 48.91881, lng: 24.71527 },
        { type: "crosswalk", lat: 48.91827, lng: 24.71503 },
        { type: "crosswalk", lat: 48.91615, lng: 24.71429 },
        { type: "crosswalk", lat: 48.91526, lng: 24.71392 },
        { type: "crosswalk", lat: 48.91371, lng: 24.7133 },
        { type: "crosswalk", lat: 48.91363, lng: 24.713 },
        { type: "crosswalk", lat: 48.91405, lng: 24.71136 },
        { type: "crosswalk", lat: 48.91442, lng: 24.70999 },
        { type: "crosswalk", lat: 48.91437, lng: 24.70988 },
        { type: "crosswalk", lat: 48.91311, lng: 24.70968 },
        { type: "crosswalk", lat: 48.9126, lng: 24.7099 },
        { type: "crosswalk", lat: 48.91164, lng: 24.71032 },
        { type: "crosswalk", lat: 48.91084, lng: 24.71067 },
        { type: "crosswalk", lat: 48.91044, lng: 24.71085 },
        { type: "crosswalk", lat: 48.90936, lng: 24.71127 },
        { type: "crosswalk", lat: 48.90878, lng: 24.71148 },
        { type: "crosswalk", lat: 48.90717, lng: 24.71241 },
        { type: "crosswalk", lat: 48.90582, lng: 24.71298 }
    ],
   "7": [
        { type: "light", lat: 48.89627, lng: 24.71323 },
        { type: "light", lat: 48.90084, lng: 24.71319 },
        { type: "light", lat: 48.90344, lng: 24.71323 },
        { type: "light", lat: 48.90577, lng: 24.71456 },
        { type: "park", lat: 48.89477, lng: 24.71694 },
        { type: "park", lat: 48.9061, lng: 24.71473 },
        { type: "park", lat: 48.90831, lng: 24.71173 },
        { type: "park", lat: 48.90667, lng: 24.7125 },
        { type: "crosswalk", lat: 48.89466, lng: 24.71319 },
        { type: "crosswalk", lat: 48.8963, lng: 24.71325 },
        { type: "crosswalk", lat: 48.90105, lng: 24.71324 },
        { type: "crosswalk", lat: 48.90335, lng: 24.71322 },
        { type: "crosswalk", lat: 48.90356, lng: 24.71326 },
        { type: "crosswalk", lat: 48.90571, lng: 24.71452 },
        { type: "crosswalk", lat: 48.90602, lng: 24.7146 },
        { type: "crosswalk", lat: 48.90697, lng: 24.71509 },
        { type: "crosswalk", lat: 48.9075, lng: 24.71513 },
        { type: "crosswalk", lat: 48.90859, lng: 24.71553 },
        { type: "crosswalk", lat: 48.90995, lng: 24.71597 },
        { type: "crosswalk", lat: 48.91058, lng: 24.71282 },
        { type: "crosswalk", lat: 48.91043, lng: 24.71084 },
        { type: "crosswalk", lat: 48.91056, lng: 24.71098 },
        { type: "crosswalk", lat: 48.90961, lng: 24.71125 },
        { type: "crosswalk", lat: 48.90936, lng: 24.71137 },
        { type: "crosswalk", lat: 48.90883, lng: 24.71151 },
        { type: "crosswalk", lat: 48.90811, lng: 24.71186 },
        { type: "crosswalk", lat: 48.90715, lng: 24.71243 },
        { type: "crosswalk", lat: 48.90586, lng: 24.71298 }
    ],
   "8": [
        { type: "light", lat: 48.89638, lng: 24.71321 },
        { type: "light", lat: 48.90092, lng: 24.7132 },
        { type: "light", lat: 48.91515, lng: 24.7397 },
        { type: "light", lat: 48.90344, lng: 24.71323 },
        { type: "light", lat: 48.9114, lng: 24.76513 },
        { type: "light", lat: 48.91397, lng: 24.74804},
        { type: "light", lat: 48.91254, lng: 24.75759 },
        { type: "park", lat: 48.89476, lng: 24.71718 },
        { type: "park", lat: 48.90511, lng: 24.71996 },
        { type: "park", lat: 48.91101, lng: 24.73852 },
        { type: "crosswalk", lat: 48.89466, lng: 24.71319 },
        { type: "crosswalk", lat: 48.8963, lng: 24.71325 },
        { type: "crosswalk", lat: 48.90105, lng: 24.71324 },
        { type: "crosswalk", lat: 48.90335, lng: 24.71322 },
        { type: "crosswalk", lat: 48.90356, lng: 24.71326 },
        { type: "crosswalk", lat: 48.90571, lng: 24.71452 },
        { type: "crosswalk", lat: 48.90587, lng: 24.71475 },
        { type: "crosswalk", lat: 48.90534, lng: 24.73293 },
        { type: "crosswalk", lat: 48.91395, lng: 24.73862 },
        { type: "crosswalk", lat: 48.9152, lng: 24.7397 },
        { type: "crosswalk", lat: 48.91524, lng: 24.73992 },
        { type: "crosswalk", lat: 48.91394, lng: 24.74794 },
        { type: "crosswalk", lat: 48.91249, lng: 24.75749 },
        { type: "crosswalk", lat: 48.91247, lng: 24.75791 },
        { type: "crosswalk", lat: 48.91142, lng: 24.76469 },
        { type: "crosswalk", lat: 48.91136, lng: 24.76484 },
        { type: "crosswalk", lat: 48.9112, lng: 24.76477 },
        { type: "crosswalk", lat: 48.90844, lng: 24.76312 },
        { type: "crosswalk", lat: 48.90913, lng: 24.76362 }
    ],
    "9": [
        { type: "light", lat: 48.89627, lng: 24.71323 },
        { type: "light", lat: 48.90084, lng: 24.71319 },
        { type: "light", lat: 48.90574, lng: 24.71458 },
        { type: "light", lat: 48.90344, lng: 24.71323 },
        { type: "light", lat: 48.91289, lng: 24.71731 },
        { type: "light", lat: 48.9176, lng: 24.724 },
        { type: "light", lat: 48.91758, lng: 24.72464 },
        { type: "light", lat: 48.91861, lng: 24.71807 },
        { type: "light", lat: 48.91899, lng: 24.71531 },
        { type: "light", lat: 48.91446, lng: 24.70983 },
        { type: "park", lat: 48.89477, lng: 24.71694 },
        { type: "park", lat: 48.90638, lng: 24.71487 },
        { type: "park", lat: 48.9172, lng: 24.72382 },
        { type: "park", lat: 48.92328, lng: 24.72379 },
        { type: "park", lat: 48.92108, lng: 24.72002 },
        { type: "park", lat: 48.9173, lng: 24.71478 },
        { type: "park", lat: 48.91587, lng: 24.71418 },
        { type: "park", lat: 48.91371, lng: 24.71237 },
        { type: "park", lat: 48.91378, lng: 24.71203 },
        { type: "park", lat: 48.91049, lng: 24.71075 },
        { type: "crosswalk", lat: 48.89466, lng: 24.71319 },
        { type: "crosswalk", lat: 48.8963, lng: 24.71325 },
        { type: "crosswalk", lat: 48.90105, lng: 24.71324 },
        { type: "crosswalk", lat: 48.90335, lng: 24.71322 },
        { type: "crosswalk", lat: 48.90356, lng: 24.71326 },
        { type: "crosswalk", lat: 48.90571, lng: 24.71452 },
        { type: "crosswalk", lat: 48.90602, lng: 24.71452 },
        { type: "crosswalk", lat: 48.90702, lng: 24.71497 },
        { type: "crosswalk", lat: 48.90747, lng: 24.71509 },
        { type: "crosswalk", lat: 48.90858, lng: 24.71552 },
        { type: "crosswalk", lat: 48.91285, lng: 24.71726 },
        { type: "crosswalk", lat: 48.91298, lng: 24.71737 },
        { type: "crosswalk", lat: 48.91336, lng: 24.71817 },
        { type: "crosswalk", lat: 48.90582, lng: 24.71296 },
        { type: "crosswalk", lat: 48.90713, lng: 24.71241 },
        { type: "crosswalk", lat: 48.9081, lng: 24.71186 },
        { type: "crosswalk", lat: 48.90882, lng: 24.71147 },
        { type: "crosswalk", lat: 48.91043, lng: 24.71086 },
        { type: "crosswalk", lat: 48.91083, lng: 24.71067 },
        { type: "crosswalk", lat: 48.91165, lng: 24.71033 },
        { type: "crosswalk", lat: 48.91261, lng: 24.70991 },
        { type: "crosswalk", lat: 48.91248, lng: 24.71 },
        { type: "crosswalk", lat: 48.91292, lng: 24.70976 },
        { type: "crosswalk", lat: 48.91442, lng: 24.7098 },
        { type: "crosswalk", lat: 48.91443, lng: 24.70997 },
        { type: "crosswalk", lat: 48.91402, lng: 24.71141 },
        { type: "crosswalk", lat: 48.91363, lng: 24.71303 },
        { type: "crosswalk", lat: 48.91371, lng: 24.71331 },
        { type: "crosswalk", lat: 48.91525, lng: 24.71391 },
        { type: "crosswalk", lat: 48.91615, lng: 24.71429 },
        { type: "crosswalk", lat: 48.91828, lng: 24.71507 },
        { type: "crosswalk", lat: 48.91879, lng: 24.71522 },
        { type: "crosswalk", lat: 48.91897, lng: 24.71541 },
        { type: "crosswalk", lat: 48.91862, lng: 24.71774 },
        { type: "crosswalk", lat: 48.91871, lng: 24.71814 },
        { type: "crosswalk", lat: 48.91982, lng: 24.71889 },
        { type: "crosswalk", lat: 48.92112, lng: 24.72004 },
        { type: "crosswalk", lat: 48.92209, lng: 24.72085 },
        { type: "crosswalk", lat: 48.92263, lng: 24.72133 },
        { type: "crosswalk", lat: 48.92308, lng: 24.72169 },
        { type: "crosswalk", lat: 48.92354, lng: 24.72232 },
        { type: "crosswalk", lat: 48.92384, lng: 24.72339 },
        { type: "crosswalk", lat: 48.9238, lng: 24.72362 },
        { type: "crosswalk", lat: 48.92348, lng: 24.72375 },
        { type: "crosswalk", lat: 48.92319, lng: 24.72389 },
        { type: "crosswalk", lat: 48.92192, lng: 24.72443 },
        { type: "crosswalk", lat: 48.92038, lng: 24.72512 },
        { type: "crosswalk", lat: 48.91772, lng: 24.72466 },
        { type: "crosswalk", lat: 48.91758, lng: 24.72458 },
        { type: "crosswalk", lat: 48.91756, lng: 24.72384 },
        { type: "crosswalk", lat: 48.91606, lng: 24.7226 },
        { type: "crosswalk", lat: 48.91547, lng: 24.72196 },
        { type: "crosswalk", lat: 48.91484, lng: 24.72133 },
        { type: "crosswalk", lat: 48.91385, lng: 24.7212 },
        { type: "crosswalk", lat: 48.91252, lng: 24.72073 },
        { type: "crosswalk", lat: 48.91239, lng: 24.72014 },
        { type: "crosswalk", lat: 48.91326, lng: 24.71893 }
    ],
    "10": [
        { type: "light", lat: 48.89627, lng: 24.71323 },
        { type: "light", lat: 48.90084, lng: 24.71319 },
        { type: "light", lat: 48.90217, lng: 24.70799 },
        { type: "light", lat: 48.90258, lng: 24.70314 },
        { type: "light", lat: 48.90308, lng: 24.68824 },
        { type: "park", lat: 48.89477, lng: 24.71694 },
        { type: "park", lat: 48.90249, lng: 24.70482 },
        { type: "park", lat: 48.90536, lng: 24.69193 },
        { type: "crosswalk", lat: 48.89466, lng: 24.71319 },
        { type: "crosswalk", lat: 48.8963, lng: 24.71325 },
        { type: "crosswalk", lat: 48.90092, lng: 24.71286 },
        { type: "crosswalk", lat: 48.90181, lng: 24.70924 },
        { type: "crosswalk", lat: 48.9027, lng: 24.7019 },
        { type: "crosswalk", lat: 48.90342, lng: 24.69786 },
        { type: "crosswalk", lat: 48.90362, lng: 24.69653 },
        { type: "crosswalk", lat: 48.90347, lng: 24.6947 },
        { type: "crosswalk", lat: 48.90363, lng: 24.69552 },
        { type: "crosswalk", lat: 48.90584, lng: 24.69287 },
        { type: "crosswalk", lat: 48.90449, lng: 24.69443 },
        { type: "crosswalk", lat: 48.90586, lng: 24.69249 },
        { type: "crosswalk", lat: 48.90499, lng: 24.69127 },
        { type: "crosswalk", lat: 48.90318, lng: 24.6884 },
        { type: "crosswalk", lat: 48.90385, lng: 24.68917 },
        { type: "crosswalk", lat: 48.90313, lng: 24.68892 },
        { type: "crosswalk", lat: 48.89466, lng: 24.71326 },
        { type: "crosswalk", lat: 48.89636, lng: 24.71316 },
        { type: "crosswalk", lat: 48.901, lng: 24.71296 },
        { type: "crosswalk", lat: 48.90186, lng: 24.70947 },
        { type: "crosswalk", lat: 48.90245, lng: 24.70504 }
    ],
    "11": [
        { type: "light", lat: 48.89627, lng: 24.71323 },
        { type: "light", lat: 48.90084, lng: 24.71319 },
        { type: "light", lat: 48.90217, lng: 24.70799 },
        { type: "light", lat: 48.90258, lng: 24.70314 },
        { type: "park", lat: 48.89477, lng: 24.71694 },
        { type: "park", lat: 48.90249, lng: 24.70482 },
        { type: "crosswalk", lat: 48.90353, lng: 24.698 },
        { type: "crosswalk", lat: 48.89466, lng: 24.71326 },
        { type: "crosswalk", lat: 48.89636, lng: 24.71316 },
        { type: "crosswalk", lat: 48.901, lng: 24.71296 },
        { type: "crosswalk", lat: 48.90186, lng: 24.70947 },
        { type: "crosswalk", lat: 48.90245, lng: 24.70504 }
    ],
};
let activeMyRouteInfraMode = null;

// Функція для отримання поточної мови сторінки
function getAppLang() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('lang') || localStorage.getItem('selected_lang') || 'uk';
}

const jsLangData = {
    uk: {
        trafficLight: "🚦 Світлофор",
        parking: "🅿️ Парковка",
        crosswalk: "🚸 Пішохідний перехід",
        deleteBtn: "🗑️ Видалити",
        drawMode: "Режим малювання:",
        pencil: "✏️ Олівець (Малювати)",
        pencilStop: "🛑 Зупинити олівець",
        saveBtn: "💾 Зберегти",
        clearBtn: "Очистити",
        emptyAlert: "Цей маршрут порожній!",
        loadedAlert: "Маршрути успішно завантажено!",
        errorAlert: "Помилка читання файлу!",
        copiedAlert: "Скопійовано!",
        copyCoordsBtn: "📋 Скопіювати",
        routeTitle: "Маршрут",
        officialPath: "Офіційний екзаменаційні шлях МВС. Точок:",
        addRouteText: "Додати на цей маршрут:",
        watchVideo: "📺 Дивитись відео-розбір",
        coordsTitle: "Координати точки:",
        routeWord: "Маршрут №"
    },
    en: {
        trafficLight: "🚦 Traffic Light",
        parking: "🅿️ Parking",
        crosswalk: "🚸 Crosswalk",
        deleteBtn: "🗑️ Delete",
        drawMode: "Drawing mode:",
        pencil: "✏️ Pencil (Draw)",
        pencilStop: "🛑 Stop Pencil",
        saveBtn: "💾 Save",
        clearBtn: "Clear",
        emptyAlert: "This route is empty!",
        loadedAlert: "Routes loaded successfully!",
        errorAlert: "File reading error!",
        copiedAlert: "Copied!",
        copyCoordsBtn: "📋 Copy",
        routeTitle: "Route",
        officialPath: "Official MIA exam route. Points:",
        addRouteText: "Add to this route:",
        watchVideo: "📺 Watch Video Review",
        coordsTitle: "Point coordinates:",
        routeWord: "Route №"
    },
    pl: {
        trafficLight: "🚦 Sygnalizacja",
        parking: "🅿️ Parking",
        crosswalk: "🚸 Przejście dla pieszych",
        deleteBtn: "🗑️ Usuń",
        drawMode: "Tryb rysowania:",
        pencil: "✏️ Ołówek (Rysuj)",
        pencilStop: "🛑 Zatrzymaj ołówek",
        saveBtn: "💾 Zapisz",
        clearBtn: "Wyczyść",
        emptyAlert: "Ta trasa jest pusta!",
        loadedAlert: "Trasy wczytane pomyślnie!",
        errorAlert: "Błąd odczytu pliku!",
        copiedAlert: "Skopiowano!",
        copyCoordsBtn: "📋 Skopiuj",
        routeTitle: "Trasa",
        officialPath: "Oficjalna trasa egzaminacyjna MSW. Punkty:",
        addRouteText: "Dodaj do tej trasy:",
        watchVideo: "📺 Oglądaj wideorecenzję",
        coordsTitle: "Współrzędne punktu:",
        routeWord: "Trasa №"
    },
    de: {
        trafficLight: "🚦 Ampel",
        parking: "🅿️ Parkplatz",
        crosswalk: "🚸 Fußgängerüberweg",
        deleteBtn: "🗑️ Löschen",
        drawMode: "Zeichenmodus:",
        pencil: "✏️ Stift (Zeichnen)",
        pencilStop: "🛑 Stift stoppen",
        saveBtn: "💾 Speichern",
        clearBtn: "Löschen",
        emptyAlert: "Diese Route ist leer!",
        loadedAlert: "Routen erfolgreich geladen!",
        errorAlert: "Dateilesefehler!",
        copiedAlert: "Kopiert!",
        copyCoordsBtn: "📋 Kopieren",
        routeTitle: "Route",
        officialPath: "Offizielle MWD-Prüfungsstrecke. Punkte:",
        addRouteText: "Zu dieser Route hinzufügen:",
        watchVideo: "📺 Videobewertung ansehen",
        coordsTitle: "Punktkoordinaten:",
        routeWord: "Route №"
    }
};

// Функція оновлення текстів у селекторах карт
function updateSelectOptionsLanguage() {
    const lang = getAppLang();
    const txt = jsLangData[lang] || jsLangData.uk;

    ['routeSelect', 'myRouteSelect'].forEach(selectId => {
        const sel = document.getElementById(selectId);
        if (sel) {
            Array.from(sel.options).forEach(opt => {
                const val = opt.value;
                opt.text = `${txt.routeWord}${val}`;
            });
        }
    });
}

const trafficLightIcon = L.divIcon({
    className: 'custom-emoji-marker',
    html: '<div style="font-size: 32px; text-shadow: 0 3px 6px rgba(0,0,0,0.9); cursor: pointer;">🚦</div>',
    iconSize: [38, 38],
    iconAnchor: [19, 19]
});

const parkingIcon = L.divIcon({
    className: 'custom-emoji-marker',
    html: '<div style="font-size: 32px; text-shadow: 0 3px 6px rgba(0,0,0,0.9); cursor: pointer;">🅿️</div>',
    iconSize: [38, 38],
    iconAnchor: [19, 19]
});

const crosswalkIcon = L.divIcon({
    className: 'custom-emoji-marker',
    html: '<img src="img/pisoxod.jpg" style="width: 34px; height: 34px; filter: drop-shadow(0 3px 6px rgba(0,0,0,0.9)); cursor: pointer;" title="Перехід">',
    iconSize: [38, 38],
    iconAnchor: [19, 19]
});

const predefinedRoutes = {
    "1": [[48.8946, 24.71745], [48.89464, 24.71314], [48.89847, 24.71328], [48.90065, 24.71316], [48.90405, 24.71316], [48.90431, 24.7132], [48.90453, 24.71353], [48.90435, 24.71418], [48.90349, 24.71628], [48.9022, 24.71955], [48.90037, 24.72426], [48.89989, 24.72557], [48.9, 24.72568], [48.90015, 24.72564], [48.90017, 24.72538], [48.90016, 24.72499], [48.90063, 24.72377], [48.9012, 24.72237], [48.90204, 24.72015], [48.90238, 24.71923], [48.90393, 24.71531], [48.90443, 24.71418], [48.90469, 24.71399], [48.90511, 24.71394], [48.90527, 24.71372], [48.90522, 24.71333], [48.9049, 24.71316], [48.90429, 24.71316], [48.90429, 24.7132]],
    "2": [[48.89463, 24.71731], [48.89461, 24.71733], [48.89462, 24.71316], [48.89618, 24.71308], [48.89936, 24.71314], [48.90135, 24.71311], [48.90416, 24.71322], [48.90453, 24.71343], [48.90461, 24.7138], [48.90524, 24.714], [48.90549, 24.71421], [48.90574, 24.71445], [48.90807, 24.71546], [48.91108, 24.71662], [48.913, 24.71723], [48.91419, 24.71758], [48.91422, 24.7176], [48.91416, 24.7177], [48.91401, 24.71799], [48.91311, 24.7191], [48.91253, 24.7199], [48.91235, 24.7204], [48.91232, 24.72066], [48.91238, 24.72066], [48.91247, 24.72065], [48.91284, 24.72091], [48.91339, 24.72137], [48.91416, 24.7213], [48.91479, 24.72136], [48.91509, 24.72153], [48.91579, 24.72238], [48.91666, 24.7233], [48.91687, 24.72351], [48.91697, 24.7236], [48.9175, 24.72384], [48.91763, 24.72395], [48.91768, 24.7239], [48.91794, 24.72222], [48.91803, 24.72147], [48.91828, 24.71991], [48.9182, 24.71987], [48.91793, 24.71974], [48.91728, 24.71946], [48.9163, 24.71902], [48.91569, 24.71868], [48.91532, 24.7185], [48.91483, 24.71794], [48.91427, 24.71761], [48.91414, 24.71759], [48.9136, 24.71735], [48.91235, 24.71699], [48.91205, 24.71687], [48.9119, 24.71679], [48.91134, 24.71666], [48.91063, 24.71641], [48.91035, 24.71629], [48.90986, 24.71611], [48.90933, 24.71589], [48.90888, 24.71572], [48.9082, 24.71546], [48.90744, 24.71523], [48.90661, 24.71487], [48.90572, 24.71445], [48.90538, 24.71403], [48.90528, 24.71358], [48.90516, 24.71325], [48.90485, 24.71316], [48.90406, 24.71314], [48.90397, 24.71318]],
    "3": [[48.89457, 24.71714], [48.89462, 24.71325], [48.89464, 24.7131], [48.89555, 24.7131], [48.89683, 24.71312], [48.89799, 24.7131], [48.89898, 24.71317], [48.89992, 24.71312], [48.90095, 24.71313], [48.90232, 24.71317], [48.90344, 24.71316], [48.9043, 24.71316], [48.90437, 24.71328], [48.90449, 24.71335], [48.90454, 24.71355], [48.90461, 24.71382], [48.90478, 24.71395], [48.90509, 24.714], [48.9053, 24.7141], [48.90556, 24.71425], [48.90606, 24.71472], [48.90713, 24.71503], [48.9079, 24.71541], [48.90866, 24.71563], [48.90986, 24.71612], [48.91301, 24.71723], [48.91303, 24.71721], [48.91312, 24.71655], [48.91324, 24.71581], [48.91346, 24.7142], [48.91362, 24.71331], [48.914, 24.71135], [48.91444, 24.71001], [48.91448, 24.70991], [48.91432, 24.70977], [48.91382, 24.70956], [48.91281, 24.70988], [48.91228, 24.7101], [48.91043, 24.71088], [48.9089, 24.7115], [48.90729, 24.71237], [48.90561, 24.71312], [48.90512, 24.71317], [48.90427, 24.71317]],
    "4": [[48.89461, 24.7176], [48.8946, 24.71318], [48.89669, 24.71311], [48.89947, 24.71317], [48.90078, 24.71319], [48.90104, 24.71203], [48.90137, 24.71093], [48.90171, 24.70971], [48.90205, 24.70817], [48.90216, 24.70716], [48.90236, 24.70538], [48.9025, 24.70332], [48.9027, 24.70143], [48.9029, 24.70042], [48.9029, 24.70012], [48.90304, 24.6998], [48.90324, 24.69862], [48.90342, 24.69819], [48.90349, 24.69789], [48.90367, 24.6975], [48.90375, 24.69725], [48.9037, 24.69707], [48.90366, 24.69698], [48.9036, 24.69679], [48.90354, 24.69662], [48.90351, 24.69619], [48.9032, 24.69139], [48.903, 24.68797], [48.90305, 24.68599], [48.90354, 24.68424], [48.90538, 24.68179], [48.90562, 24.6817], [48.90578, 24.68176], [48.906, 24.68173], [48.90612, 24.68162], [48.9062, 24.68148], [48.9062, 24.6812], [48.90614, 24.68093], [48.90597, 24.6808], [48.90583, 24.68084], [48.90568, 24.68089], [48.90559, 24.68104], [48.90553, 24.68149], [48.9055, 24.68167]],
    "6": [[48.89456, 24.71737], [48.89469, 24.71312], [48.90105, 24.71306], [48.90425, 24.71312], [48.90451, 24.71344], [48.90455, 24.71381], [48.90484, 24.71387], [48.90522, 24.71402], [48.90568, 24.71443], [48.90665, 24.71495], [48.91287, 24.71718], [48.91328, 24.71729], [48.9142, 24.7176], [48.91418, 24.71767], [48.91407, 24.71785], [48.9124, 24.72024], [48.9123, 24.72054], [48.91234, 24.72063], [48.9124, 24.72067], [48.91258, 24.72073], [48.91321, 24.72128], [48.91445, 24.72131], [48.91492, 24.72143], [48.91575, 24.72232], [48.91619, 24.72286], [48.91666, 24.72341], [48.9173, 24.7238], [48.91763, 24.72397], [48.91758, 24.72455], [48.91759, 24.7247], [48.91991, 24.72544], [48.92349, 24.72382], [48.92394, 24.72359], [48.92351, 24.72205], [48.92331, 24.72165], [48.92299, 24.72156], [48.9212, 24.71999], [48.91917, 24.71833], [48.9187, 24.71805], [48.91861, 24.71796], [48.91901, 24.71528], [48.9163, 24.7143], [48.91539, 24.71393], [48.91362, 24.71318], [48.91448, 24.70989], [48.9138, 24.70951], [48.91151, 24.71042], [48.90979, 24.71113], [48.90736, 24.71228], [48.90524, 24.71319], [48.90432, 24.71311], [48.90419, 24.71314]],
    "7": [[48.8946, 24.71739], [48.89462, 24.7131], [48.89805, 24.71316], [48.90119, 24.71312], [48.90432, 24.71319], [48.90444, 24.71337], [48.9047, 24.71393], [48.90488, 24.714], [48.90518, 24.71397], [48.90556, 24.71427], [48.90582, 24.71456], [48.90623, 24.71475], [48.90753, 24.71527], [48.90805, 24.71546], [48.90894, 24.71579], [48.90992, 24.71616], [48.90993, 24.71614], [48.90998, 24.71584], [48.91014, 24.71514], [48.91044, 24.71355], [48.91062, 24.7125], [48.91054, 24.71093], [48.91044, 24.71092], [48.9076, 24.71217], [48.90563, 24.71302], [48.90445, 24.71317], [48.90422, 24.71321]],
    "8": [[48.89462, 24.71741], [48.89459, 24.71323], [48.89644, 24.71325], [48.89855, 24.7131], [48.90086, 24.71312], [48.90428, 24.71317], [48.90456, 24.7134], [48.90462, 24.71373], [48.90479, 24.714], [48.90521, 24.71405], [48.90555, 24.71428], [48.90572, 24.71458], [48.90577, 24.71485], [48.9056, 24.71609], [48.90529, 24.71884], [48.90481, 24.72294], [48.90412, 24.72933], [48.90503, 24.72987], [48.90574, 24.72981], [48.90616, 24.72989], [48.9061, 24.73012], [48.90527, 24.73289], [48.90701, 24.73542], [48.90846, 24.73676], [48.90992, 24.73719], [48.91095, 24.73831], [48.91208, 24.7395], [48.91234, 24.73947], [48.91314, 24.73795], [48.91426, 24.73879], [48.91495, 24.73935], [48.91524, 24.73961], [48.91478, 24.74264], [48.91396, 24.74788], [48.91321, 24.75278], [48.91216, 24.75947], [48.91136, 24.76554], [48.91128, 24.76483], [48.91046, 24.76445], [48.90845, 24.76312], [48.90829, 24.76333], [48.90831, 24.7637], [48.90862, 24.76373], [48.9091, 24.76363], [48.90939, 24.7637], [48.91089, 24.76464], [48.91143, 24.76492], [48.91171, 24.76249], [48.91223, 24.75942], [48.91265, 24.75665], [48.91312, 24.75357], [48.91355, 24.75061], [48.91375, 24.74954], [48.91413, 24.74685], [48.91507, 24.74103], [48.91523, 24.73967], [48.91542, 24.73863], [48.91502, 24.73937], [48.91485, 24.7393], [48.91389, 24.73847], [48.91322, 24.73795], [48.91261, 24.73878], [48.91196, 24.73951], [48.91114, 24.73857], [48.91002, 24.73728], [48.90901, 24.73702], [48.90754, 24.73592], [48.9061, 24.73399], [48.90526, 24.73296], [48.9062, 24.72983], [48.90471, 24.7298], [48.90405, 24.72932], [48.90444, 24.72583], [48.90497, 24.72108], [48.90542, 24.71802], [48.90581, 24.71453], [48.90546, 24.71412], [48.90528, 24.71351], [48.90509, 24.71319], [48.90423, 24.71312], [48.90409, 24.71313], [48.90398, 24.71318]],
    "9": [[48.89462, 24.71741], [48.89458, 24.71328], [48.89465, 24.71306], [48.89789, 24.71318], [48.90085, 24.71314], [48.90434, 24.7132], [48.9045, 24.71348], [48.90463, 24.7138], [48.90491, 24.714], [48.90525, 24.71393], [48.90526, 24.71357], [48.90543, 24.71323], [48.90745, 24.71229], [48.9107, 24.71079], [48.91351, 24.70956], [48.91407, 24.70961], [48.91448, 24.7098], [48.91435, 24.71017], [48.91423, 24.71056], [48.91365, 24.71308], [48.91372, 24.71325], [48.91506, 24.71381], [48.91702, 24.71455], [48.91899, 24.71526], [48.91902, 24.71537], [48.91858, 24.718], [48.92069, 24.71962], [48.92295, 24.72156], [48.92332, 24.72186], [48.92366, 24.72244], [48.92387, 24.72338], [48.92385, 24.72356], [48.92115, 24.72482], [48.91973, 24.72549], [48.91766, 24.72467], [48.91767, 24.72396], [48.91747, 24.72385], [48.91649, 24.72319], [48.91601, 24.7226], [48.91534, 24.7219], [48.91501, 24.72153], [48.9145, 24.72131], [48.91351, 24.72141], [48.91295, 24.72106], [48.91264, 24.72085], [48.91247, 24.72068], [48.91242, 24.72057], [48.91237, 24.72049], [48.9124, 24.72036], [48.91242, 24.72024], [48.91245, 24.72006], [48.91355, 24.7186], [48.91415, 24.71781], [48.9142, 24.71769], [48.91421, 24.71766], [48.91378, 24.71826], [48.91375, 24.71825], [48.91367, 24.71822], [48.91345, 24.71816], [48.91296, 24.71802], [48.9129, 24.71799], [48.91301, 24.71729], [48.91261, 24.71708], [48.91117, 24.71665], [48.90984, 24.71617], [48.90792, 24.71529], [48.90606, 24.71459], [48.90585, 24.7145], [48.90546, 24.71412], [48.90523, 24.71375], [48.90522, 24.71331], [48.90469, 24.71311], [48.90419, 24.71329], [48.90409, 24.71313]],
    "10": [[48.89463, 24.71723], [48.89462, 24.71562], [48.89462, 24.71379], [48.89462, 24.71311], [48.89559, 24.71312], [48.8969, 24.71311], [48.89828, 24.71314], [48.89989, 24.71316], [48.9009, 24.71307], [48.901, 24.71263], [48.90207, 24.70829], [48.90215, 24.70783], [48.90258, 24.70237], [48.90285, 24.70075], [48.90354, 24.69771], [48.90372, 24.69737], [48.90374, 24.69722], [48.90364, 24.697], [48.90346, 24.69588], [48.90346, 24.6955], [48.90434, 24.69442], [48.9059, 24.69265], [48.90563, 24.69217], [48.90458, 24.69039], [48.9034, 24.68861], [48.90322, 24.68836], [48.90309, 24.68833], [48.90302, 24.68839], [48.90344, 24.69539], [48.90347, 24.69551]],
    "11": [[48.89465, 24.71741], [48.89462, 24.71317], [48.8979, 24.71318], [48.90075, 24.7132], [48.90091, 24.71316], [48.90178, 24.70957], [48.90211, 24.70804], [48.90236, 24.7053], [48.90268, 24.70167], [48.90356, 24.69772], [48.90368, 24.69754], [48.90378, 24.69727], [48.9037, 24.69707], [48.90355, 24.697], [48.9034, 24.69722], [48.90342, 24.69754], [48.90341, 24.69805], [48.9032, 24.69891], [48.9029, 24.70065], [48.9027, 24.70167]]
}
const routeVideos = {
    "1": "http://www.youtube.com/watch?v=_qYDWaTN8o8",
    "2": "http://www.youtube.com/watch?v=zVOwi8QMUJg",
    "3": "http://www.youtube.com/watch?v=mzRqWfzmm1w",
    "4": "http://www.youtube.com/watch?v=zikFkM1mTOs",
    "6": "http://www.youtube.com/watch?v=4LWmWB_bTEI",
    "7": "http://www.youtube.com/watch?v=Ro2rL_brZHg",
    "8": "http://www.youtube.com/watch?v=op8rQKS2e9U",
    "9": "http://www.youtube.com/watch?v=HnvoZjsp2HI",
    "10": "http://www.youtube.com/watch?v=j66UNL1FWuY",
    "11": "http://www.youtube.com/watch?v=-8blmb2TSVk"
};

// --- Карта 1: Інструмент для малювання власних маршрутів ---
let mapDraw = L.map('map').setView(tscCoords, 17);
L.tileLayer('https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(mapDraw);

let currentLayerDraw = null;
let customRouteCoords = [];
let isDrawingMode = false;
let savedCustomRoutes = JSON.parse(localStorage.getItem('tsc_saved_routes')) || {};
let savedInfrastructure = JSON.parse(localStorage.getItem('tsc_saved_infrastructure')) || [];
let activeInfraMode = null;

let currentRouteColor = '#00E676';
let savedRouteColors = JSON.parse(localStorage.getItem('tsc_route_colors')) || {};

L.marker(tscCoords, { draggable: true }).addTo(mapDraw).bindPopup("<b>ТСЦ МВС № 2641 (Старт)</b>").openPopup();

function renderInfrastructure(targetMap) {
    const lang = getAppLang();
    const txt = jsLangData[lang] || jsLangData.uk;

    savedInfrastructure.forEach(item => {
        let icon = trafficLightIcon;
        if (item.type === 'park') icon = parkingIcon;
        if (item.type === 'crosswalk') icon = crosswalkIcon;
        
        let marker = L.marker([item.lat, item.lng], { icon: icon }).addTo(targetMap);
        let titleName = item.type === 'light' ? txt.trafficLight : (item.type === 'park' ? txt.parking : txt.crosswalk);
        marker.bindPopup(`<b>${titleName}</b><br>Координати: [${item.lat}, ${item.lng}]<br><button onclick="deleteInfra(${item.lat}, ${item.lng})" style="background:#d32f2f; color:white; border:none; padding:4px 8px; margin-top:5px; cursor:pointer; border-radius:4px;">${txt.deleteBtn}</button>`);
    });
}

window.deleteInfra = function(lat, lng) {
    savedInfrastructure = savedInfrastructure.filter(i => i.lat !== lat || i.lng !== lng);
    localStorage.setItem('tsc_saved_infrastructure', JSON.stringify(savedInfrastructure));
    location.reload();
};

renderInfrastructure(mapDraw);

mapDraw.on('click', function(e) {
    let lat = parseFloat(e.latlng.lat.toFixed(5));
    let lng = parseFloat(e.latlng.lng.toFixed(5));
    const lang = getAppLang();
    const txt = jsLangData[lang] || jsLangData.uk;

    if (activeInfraMode) {
        savedInfrastructure.push({ type: activeInfraMode, lat: lat, lng: lng });
        localStorage.setItem('tsc_saved_infrastructure', JSON.stringify(savedInfrastructure));
        
        let icon = trafficLightIcon;
        if (activeInfraMode === 'park') icon = parkingIcon;
        if (activeInfraMode === 'crosswalk') icon = crosswalkIcon;

        let titleName = activeInfraMode === 'light' ? txt.trafficLight : (activeInfraMode === 'park' ? txt.parking : txt.crosswalk);
        L.marker([lat, lng], { icon: icon }).addTo(mapDraw)
            .bindPopup(`<b>${titleName}</b><br>Координати: [${lat}, ${lng}]`)
            .openPopup();
        return;
    }

    if (!isDrawingMode) return;
    customRouteCoords.push([lat, lng]);

    const selected = document.getElementById('routeSelect').value;
    savedCustomRoutes[selected] = [...customRouteCoords];
    localStorage.setItem('tsc_saved_routes', JSON.stringify(savedCustomRoutes));

    if (currentLayerDraw) mapDraw.removeLayer(currentLayerDraw);
    currentLayerDraw = L.polyline(customRouteCoords, { color: currentRouteColor, weight: 6 }).addTo(mapDraw);
    updateCoordsOutput();
});

function changeRouteColor(color) {
    currentRouteColor = color;
    const selected = document.getElementById('routeSelect').value;
    savedRouteColors[selected] = color;
    localStorage.setItem('tsc_route_colors', JSON.stringify(savedRouteColors));
    
    const picker = document.getElementById('routeColorPicker');
    if (picker) picker.value = color;

    if (customRouteCoords.length > 0) {
        if (currentLayerDraw) mapDraw.removeLayer(currentLayerDraw);
        currentLayerDraw = L.polyline(customRouteCoords, { color: currentRouteColor, weight: 6 }).addTo(mapDraw);
    }
}

function setInfraMode(mode) {
    activeInfraMode = activeInfraMode === mode ? null : mode;
    isDrawingMode = false;
    updateCoordsOutput();
}

function changeRouteOnMap() {
    if (isDrawingMode) toggleDrawingMode();
    if (currentLayerDraw) mapDraw.removeLayer(currentLayerDraw);
    
    const selected = document.getElementById('routeSelect').value;
    customRouteCoords = savedCustomRoutes[selected] ? [...savedCustomRoutes[selected]] : [];

    currentRouteColor = savedRouteColors[selected] || '#00E676';
    const picker = document.getElementById('routeColorPicker');
    if (picker) picker.value = currentRouteColor;

    if (customRouteCoords.length > 0) {
        currentLayerDraw = L.polyline(customRouteCoords, { color: currentRouteColor, weight: 6 }).addTo(mapDraw);
    }
    updateCoordsOutput();
}

function toggleDrawingMode() {
    isDrawingMode = !isDrawingMode;
    activeInfraMode = null;
    const btn = document.getElementById('btn-pencil');
    const lang = getAppLang();
    const txt = jsLangData[lang] || jsLangData.uk;

    if (btn) {
        if (isDrawingMode) {
            btn.style.background = '#d32f2f';
            btn.innerHTML = txt.pencilStop;
        } else {
            btn.style.background = '#2c2c2c';
            btn.innerHTML = txt.pencil;
        }
    }
    updateCoordsOutput();
}

function updateCoordsOutput() {
    const lang = getAppLang();
    const txt = jsLangData[lang] || jsLangData.uk;

    let outputString = "coords: [\n";
    customRouteCoords.forEach(c => outputString += `    [${c[0]}, ${c[1]}],\n`);
    outputString += "]";

    document.getElementById('routeDescription').innerHTML = `
        <b>${txt.drawMode}</b><br>
        <textarea style="width:100%; height:50px; background:#111; color:#00E676; font-family:monospace; font-size:11px;" readonly>${outputString}</textarea>
        <div style="display: flex; gap: 4px; margin-top: 4px; flex-wrap: wrap;">
            <button onclick="setInfraMode('light')" style="background: ${activeInfraMode === 'light' ? '#00E676' : '#333'}; color: ${activeInfraMode === 'light' ? '#121212' : '#fff'}; border:none; padding:5px; cursor:pointer; flex:1; font-size:11px; border-radius:4px;">${txt.trafficLight}</button>
            <button onclick="setInfraMode('park')" style="background: ${activeInfraMode === 'park' ? '#00E676' : '#333'}; color: ${activeInfraMode === 'park' ? '#121212' : '#fff'}; border:none; padding:5px; cursor:pointer; flex:1; font-size:11px; border-radius:4px;">${txt.parking}</button>
            <button onclick="setInfraMode('crosswalk')" style="background: ${activeInfraMode === 'crosswalk' ? '#00E676' : '#333'}; color: ${activeInfraMode === 'crosswalk' ? '#121212' : '#fff'}; border:none; padding:5px; cursor:pointer; flex:1; font-size:11px; border-radius:4px;">${txt.crosswalk}</button>
        </div>
        <div style="display: flex; gap: 6px; margin-top: 6px;">
            <button onclick="saveSingleRouteFile()" style="background: #00E676; color: #121212; border:none; padding:6px; cursor:pointer; flex:1; font-weight:bold; border-radius:4px;">${txt.saveBtn}</button>
            <button onclick="clearCustomRoute()" style="background: #d32f2f; color:white; border:none; padding:6px; cursor:pointer; border-radius:4px;">${txt.clearBtn}</button>
        </div>
    `;
}

function clearCustomRoute() {
    const selected = document.getElementById('routeSelect').value;
    customRouteCoords = [];
    savedCustomRoutes[selected] = [];
    localStorage.setItem('tsc_saved_routes', JSON.stringify(savedCustomRoutes));
    if (currentLayerDraw) mapDraw.removeLayer(currentLayerDraw);
    updateCoordsOutput();
}

function saveSingleRouteFile() {
    const lang = getAppLang();
    const txt = jsLangData[lang] || jsLangData.uk;

    if (customRouteCoords.length === 0) {
        alert(txt.emptyAlert);
        return;
    }
    const selected = document.getElementById('routeSelect').value;
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(customRouteCoords, null, 4));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `route_${selected}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
}

function exportAllRoutes() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(savedCustomRoutes, null, 4));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `all_custom_routes.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
}

function importAllRoutes(event) {
    const lang = getAppLang();
    const txt = jsLangData[lang] || jsLangData.uk;

    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            savedCustomRoutes = JSON.parse(e.target.result);
            localStorage.setItem('tsc_saved_routes', JSON.stringify(savedCustomRoutes));
            alert(txt.loadedAlert);
            changeRouteOnMap();
        } catch (err) {
            alert(txt.errorAlert);
        }
    };
    reader.readAsText(file);
}

// --- Карта 2: Офіційні маршрути МВС та власна інфраструктура на них ---
let mapMyRoutes = L.map('map-my-routes').setView(tscCoords, 17);
L.tileLayer('https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(mapMyRoutes);

L.marker(tscCoords).addTo(mapMyRoutes).bindPopup("<b>ТСЦ МВС № 2641 (Старт)</b>");

let currentLayerMyRoutes = null;
let currentMyRouteMarkers = [];

function renderMyRouteInfra() {
    currentMyRouteMarkers.forEach(m => mapMyRoutes.removeLayer(m));
    currentMyRouteMarkers = [];

    const lang = getAppLang();
    const txt = jsLangData[lang] || jsLangData.uk;

    const selectedRoute = document.getElementById('myRouteSelect').value;
    const routeInfra = savedMyRoutesInfra[selectedRoute] || [];

    routeInfra.forEach(item => {
        let icon = trafficLightIcon;
        if (item.type === 'park') icon = parkingIcon;
        if (item.type === 'crosswalk') icon = crosswalkIcon;

        let titleName = item.type === 'light' ? txt.trafficLight : (item.type === 'park' ? txt.parking : txt.crosswalk);

        let marker = L.marker([item.lat, item.lng], { icon: icon }).addTo(mapMyRoutes);
        marker.bindPopup(`<b>${titleName}</b><br>${txt.routeTitle} №${selectedRoute}<br><button onclick="deleteMyRouteInfra('${selectedRoute}', ${item.lat}, ${item.lng})" style="background:#d32f2f; color:white; border:none; padding:4px 8px; margin-top:5px; cursor:pointer; border-radius:4px;">${txt.deleteBtn}</button>`);
        currentMyRouteMarkers.push(marker);
    });
}

window.deleteMyRouteInfra = function(routeNum, lat, lng) {
    if (savedMyRoutesInfra[routeNum]) {
        savedMyRoutesInfra[routeNum] = savedMyRoutesInfra[routeNum].filter(i => i.lat !== lat || i.lng !== lng);
        localStorage.setItem('tsc_my_routes_infrastructure', JSON.stringify(savedMyRoutesInfra));
        renderMyRouteInfra();
    }
};

mapMyRoutes.on('click', function(e) {
    let lat = parseFloat(e.latlng.lat.toFixed(5));
    let lng = parseFloat(e.latlng.lng.toFixed(5));

    const lang = getAppLang();
    const txt = jsLangData[lang] || jsLangData.uk;

    L.popup()
        .setLatLng(e.latlng)
        .setContent(`<b>${txt.coordsTitle}</b><br>[${lat}, ${lng}]<br><button onclick="navigator.clipboard.writeText('[${lat}, ${lng}]'); alert('${txt.copiedAlert}');" style="background:#00E676; color:#121212; border:none; padding:4px 8px; margin-top:5px; cursor:pointer; border-radius:4px; font-weight:bold;">${txt.copyCoordsBtn}</button>`)
        .openOn(mapMyRoutes);

    if (!activeMyRouteInfraMode) return;
    const selectedRoute = document.getElementById('myRouteSelect').value;

    if (!savedMyRoutesInfra[selectedRoute]) {
        savedMyRoutesInfra[selectedRoute] = [];
    }

    savedMyRoutesInfra[selectedRoute].push({ type: activeMyRouteInfraMode, lat: lat, lng: lng });
    localStorage.setItem('tsc_my_routes_infrastructure', JSON.stringify(savedMyRoutesInfra));
    renderMyRouteInfra();
});

function setMyRouteInfraMode(mode) {
    activeMyRouteInfraMode = activeMyRouteInfraMode === mode ? null : mode;
    updateMyRouteDescription();
}

function changeMyRouteOnMap() {
    if (currentLayerMyRoutes) mapMyRoutes.removeLayer(currentLayerMyRoutes);
    const selected = document.getElementById('myRouteSelect').value;
    const coords = predefinedRoutes[selected];

    if (coords && coords.length > 0) {
        currentLayerMyRoutes = L.polyline(coords, { color: '#2979FF', weight: 6, opacity: 0.9 }).addTo(mapMyRoutes);
        mapMyRoutes.fitBounds(currentLayerMyRoutes.getBounds());

        updateMyRouteDescription();
        renderMyRouteInfra();
        
        const videoUrl = routeVideos[selected] || "#";
        const lang = getAppLang();
        const txt = jsLangData[lang] || jsLangData.uk;

        document.getElementById('myRouteVideoBtn').innerHTML = `
            <a href="${videoUrl}" target="_blank" style="display: block; background: #e50914; color: white; text-align: center; padding: 10px; border-radius: 6px; text-decoration: none; font-weight: bold; margin-top: 10px;">
                ${txt.watchVideo}
            </a>
        `;
    }
}

function updateMyRouteDescription() {
    const selected = document.getElementById('myRouteSelect').value;
    const coords = predefinedRoutes[selected] || [];
    const lang = getAppLang();
    const txt = jsLangData[lang] || jsLangData.uk;

    document.getElementById('myRouteDescription').innerHTML = `
        <b>${txt.routeTitle} №${selected}</b><br>${txt.officialPath} ${coords.length}
        <div style="margin-top: 8px; font-weight: bold; font-size: 12px;">${txt.addRouteText}</div>
        <div style="display: flex; gap: 4px; margin-top: 4px; flex-wrap: wrap;">
            <button onclick="setMyRouteInfraMode('light')" style="background: ${activeMyRouteInfraMode === 'light' ? '#00E676' : '#333'}; color: ${activeMyRouteInfraMode === 'light' ? '#121212' : '#fff'}; border:none; padding:5px; cursor:pointer; flex:1; font-size:11px; border-radius:4px;">${txt.trafficLight}</button>
            <button onclick="setMyRouteInfraMode('park')" style="background: ${activeMyRouteInfraMode === 'park' ? '#00E676' : '#333'}; color: ${activeMyRouteInfraMode === 'park' ? '#121212' : '#fff'}; border:none; padding:5px; cursor:pointer; flex:1; font-size:11px; border-radius:4px;">${txt.parking}</button>
            <button onclick="setMyRouteInfraMode('crosswalk')" style="background: ${activeMyRouteInfraMode === 'crosswalk' ? '#00E676' : '#333'}; color: ${activeMyRouteInfraMode === 'crosswalk' ? '#121212' : '#fff'}; border:none; padding:5px; cursor:pointer; flex:1; font-size:11px; border-radius:4px;">${txt.crosswalk}</button>
        </div>
    `;
}

// Перемикання вкладок
function switchView(view) {
    ['section-map', 'section-my-routes', 'section-list'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove('active');
    });
    ['btn-map', 'btn-my-routes', 'btn-list'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove('active');
    });

    if (view === 'map') {
        if (document.getElementById('section-map')) document.getElementById('section-map').classList.add('active');
        if (document.getElementById('btn-map')) document.getElementById('btn-map').classList.add('active');
        setTimeout(() => mapDraw.invalidateSize(), 200);
    } else if (view === 'my-routes') {
        if (document.getElementById('section-my-routes')) document.getElementById('section-my-routes').classList.add('active');
        if (document.getElementById('btn-my-routes')) document.getElementById('btn-my-routes').classList.add('active');
        setTimeout(() => {
            mapMyRoutes.invalidateSize();
            changeMyRouteOnMap();
        }, 200);
    } else {
        if (document.getElementById('section-list')) document.getElementById('section-list').classList.add('active');
        if (document.getElementById('btn-list')) document.getElementById('btn-list').classList.add('active');
    }
}

// Первинний запуск
updateSelectOptionsLanguage();
changeRouteOnMap();
changeMyRouteOnMap();
updateCoordsOutput();

const urlParams = new URLSearchParams(window.location.search);
const viewParam = urlParams.get('view');
if (viewParam) {
    switchView(viewParam);
}