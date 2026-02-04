function clearOutput(id) {
  document.getElementById(id).textContent = "";
}

/* TASK 1 */
function runTask1() {
  const out = document.getElementById("out1");

  const prices = [120, 250, 300, 450, 600];
  const filtered = prices.filter(p => p > 250);
  const discounted = filtered.map(p => p * 0.9);

  out.textContent =
    `Original: ${prices.join(", ")}\n` +
    `Filtered (>250): ${filtered.join(", ")}\n` +
    `Discounted (10% off): ${discounted.join(", ")}`;
}

/* TASK 2 */
function runTask2() {
  const out = document.getElementById("out2");

  const expenses = [
    { category: "Food", amount: 300 },
    { category: "Transport", amount: 150 },
    { category: "Shopping", amount: 400 }
  ];

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  out.textContent = `Total Expense: ₹${total}`;
}

/* TASK 3 */
function runTask3() {
  const out = document.getElementById("out3");

  const scores = [45, 80, 90, 35, 60, 75];

  const passed = scores.filter(s => s >= 50);
  const bonus = passed.map(s => s + 10);
  const total = bonus.reduce((a, b) => a + b, 0);

  out.textContent =
    `Passing Scores: ${passed.join(", ")}\n` +
    `After Bonus (+10): ${bonus.join(", ")}\n` +
    `Total Score: ${total}`;
}
