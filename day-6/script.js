try {
  const check = document.getElementById("check");
  const namelist = [
    { name: "bhadri", age: 21, number: 983483045, clg: false },
    { name: "abi", age: 21, number: 983483045, clg: false, rollnumber: 002 },
    { name: "sri", age: 21, number: 983483045, clg: false },
    { name: "anish", age: 21, number: 983483045, clg: false },
    { name: "bhadri", age: 21, number: 983483045, clg: false },
    { name: "bhadri", age: 21, number: 983483045, clg: false },
    { name: "bhadri", age: 21, number: 983483045, clg: false },
    { name: "bhadri", age: 21, number: 983483045, clg: false },
    { name: "bhadri", age: 21, number: 983483045, clg: false },
  ];

  for (var i = 0; i < namelist.length; i++) {
    for (var j = 0; j < Object.keys(namelist[i]).length; j++) {
      check.innerHTML += `
      <h1>
      ${Object.keys(namelist[i])[j]}
      :
      ${namelist[i][Object.keys(namelist[i])[j]]}
      </h1>
      `;
    }
    check.innerHTML += "<hr>";
  }
} catch (err) {
  const error = document.getElementById("error");
  error.innerHTML = err.message;
}
