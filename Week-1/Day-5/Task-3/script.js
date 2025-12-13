function calculate(type) {
  let n1 = document.getElementById("num1").value.trim();
  let n2 = document.getElementById("num2").value.trim();

  let err1 = document.getElementById("err1");
  let err2 = document.getElementById("err2");
  let result = document.getElementById("result");

  err1.innerText = "";
  err2.innerText = "";
  result.innerText = "";

  if (n1 === "") {
    err1.innerText = "Required";
    return;
  }
  if (n2 === "") {
    err2.innerText = "Required";
    return;
  }

  if (isNaN(n1)) {
    err1.innerText = "Enter a valid number";
    return;
  }
  if (isNaN(n2)) {
    err2.innerText = "Enter a valid number";
    return;
  }

  n1 = Number(n1);
  n2 = Number(n2);

  let ans;

  switch (type) {
    case "add": ans = n1 + n2; break;
    case "sub": ans = n1 - n2; break;
    case "mul": ans = n1 * n2; break;
    case "div":
      if (n2 === 0) {
        result.innerText = "Cannot divide by zero!";
        return;
      }
      ans = n1 / n2;
      break;
  }

  result.innerText = "Result: " + ans;
}
