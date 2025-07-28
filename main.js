const checkboxes = document.querySelectorAll('input[type="checkbox"]');

console.log(checkboxes);

const Mon = document.getElementById("Monday");
const Tue = document.getElementById("Tuesday");
const Wed = document.getElementById("Wednesday");
const Thr = document.getElementById("Thrusday");
const Fri = document.getElementById("Friday");
const Sat = document.getElementById("Saturday");
const Sun = document.getElementById("Sunday");

// sun = 'hello'

let num = checkboxes.length;
let days = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];

let d = new Date();
console.log(d.getDay());
let day = days[d.getDay()];

if (day == "Mon") {
  Mon.style.width = 0 + "%";
}
if (day == "Tue") {
  Tue.style.width = 0 + "%";
}
if (day == "Wed") {
  Wed.style.width = 0 + "%";
}
if (day == "Thr") {
  Thr.style.width = 0 + "%";
}
if (day == "Fri") {
  Fri.style.width = 0 + "%";
}
if (day == "Sat") {
  Sat.style.width = 0 + "%";
}
if (day == "Sun") {
  Sat.style.width = 0 + "%";
}

function callCheck() {
  let n = 0;
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked === true) {
      n = n + 1;
    }
  });
  console.log(n);
  let per = (n / num) * 100;

  if (day == "Mon") {
    Mon.style.width = per + "%";
  }
  if (day == "Tue") {
    Tue.style.width = per + "%";
  }
  if (day == "Wed") {
    Wed.style.width = per + "%";
  }
  if (day == "Thr") {
    Thr.style.width = per + "%";
  }
  if (day == "Fri") {
    Fri.style.width = per + "%";
  }
  if (day == "Sat") {
    Sat.style.width = per + "%";
  }
  if (day == "Sun") {
    Sat.style.width = per + "%";
  }
}
callCheck();

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", callCheck);
});

// // (or)

// const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// console.log(checkboxes);

// const Mon = document.getElementById("Monday");
// const Tue = document.getElementById("Tuesday");
// const Wed = document.getElementById("Wednesday");
// const Thr = document.getElementById("Thrusday");
// const Fri = document.getElementById("Friday");
// const Sat = document.getElementById("Saturday");
// const Sun = document.getElementById("Sunday");

// let num = checkboxes.length;
// // Fixed "mon" to "Mon" for consistency
// let days = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];

// let d = new Date();
// console.log(d.getDay());
// let day = days[d.getDay()];

// // Reset current day's width
// if (day == "Mon") {
//   Mon.style.width = "0%";
// }
// if (day == "Tue") {
//   Tue.style.width = "0%";
// }
// if (day == "Wed") {
//   Wed.style.width = "0%";
// }
// if (day == "Thr") {
//   Thr.style.width = "0%";
// }
// if (day == "Fri") {
//   Fri.style.width = "0%";
// }
// if (day == "Sat") {
//   Sat.style.width = "0%";
// }
// if (day == "Sun") {
//   Sun.style.width = "0%"; // Fixed: was Sat by mistake
// }

// function callCheck() {
//   let n = 0;
//   checkboxes.forEach((checkbox) => {
//     if (checkbox.checked === true) {
//       n = n + 1;
//     }
//   });
//   console.log(n);
//   let per = (n / num) * 100;

//   if (day == "Mon") {
//     Mon.style.width = per + "%";
//   }
//   if (day == "Tue") {
//     Tue.style.width = per + "%";
//   }
//   if (day == "Wed") {
//     Wed.style.width = per + "%";
//   }
//   if (day == "Thr") {
//     Thr.style.width = per + "%";
//   }
//   if (day == "Fri") {
//     Fri.style.width = per + "%";
//   }
//   if (day == "Sat") {
//     Sat.style.width = per + "%";
//   }
//   if (day == "Sun") {
//     Sun.style.width = per + "%"; // Fixed: was Sat by mistake
//   }
// }
// callCheck();

// checkboxes.forEach((checkbox) => {
//   checkbox.addEventListener("click", callCheck);
// });
