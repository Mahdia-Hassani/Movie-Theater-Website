window.onload = function () {

// Part 1: Login

let username = prompt("Enter username:");
let password = prompt("Enter password:");

let access = "";

if ((username === "admin" || username === "guest") && password === "0000") {
  if (username === "admin") {
    access = "full";
  } else {
    access = "limited";
  }
  alert("Access: " + access);

  document.body.style.display = "block";

} else {
  alert("Access Denied ❌");

  document.body.innerHTML = "<h1 style='color:red; text-align:center;'>Access Denied ❌</h1>";
  document.body.style.display = "block";

  throw new Error("Stop");
}


// Part 2: Movie

let name = prompt("Your name:");
let movie = prompt("Movie type (standard, 3D, IMAX):");
let tickets = Number(prompt("Number of tickets:"));

let price = 0;

if (movie === "standard") {
  price = 5;
} else if (movie === "3D") {
  price = 7;
} else if (movie === "IMAX") {
  price = 10;
} else {
  alert("Invalid movie type");
  throw new Error("Stop");
}

let ticketCost = tickets * price;

let snacks = prompt("Snacks? (yes/no)");
let snackCost = 0;

if (snacks === "yes") {
  snackCost = tickets * 3;
}

let discount = 0;

if (tickets > 3) {
  discount = (ticketCost + snackCost) * 0.15;
}

let total = ticketCost + snackCost - discount;


// Part 3: Split

let people = Number(prompt("Split between (1, 2, 4):"));
let service = prompt("Service fee (none, small, high):");

let rate = 0;

if (service === "small") {
  rate = 0.05;
} else if (service === "high") {
  rate = 0.1;
}

let serviceFee = total * rate;
let finalTotal = total + serviceFee;
let each = finalTotal / people;


// Output

alert(
  "Hello " + name +
  "\nTickets: $" + ticketCost.toFixed(2) +
  "\nSnacks: $" + snackCost.toFixed(2) +
  "\nDiscount: $" + discount.toFixed(2) +
  "\nService Fee: $" + serviceFee.toFixed(2) +
  "\nTotal: $" + finalTotal.toFixed(2) +
  "\nEach: $" + each.toFixed(2)
);

document.body.style.display = "block";
};