/*let numeros = [1, 2, 3, 4, 55, 89, 80];

for (i = 0; i < numeros.length; i++) {
  let numero = numeros[i];
  if (numero % 2 != 0) {
    console.log(numero);
  }
} */

/*
function oddNubers() {
  for (let i = 11; i <= 33; i += 2) {
    console.log(i);
  }
}

oddNumbers();
*/

/*
const names = ["Max", "Lena", "Dieter"];

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

names[2] = "Stephan"; // mudar valor de variavel
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

console.log(names.length);
names.push("Dieter");

console.log(names[0]);
console.log(names[1]);
console.log(names[2]
console.log(names[3]);

/*
let palavra = "Mozilla";
console.log(palavra.substring(4, 7));
*/
/*
let palavra = "Mozilla";
let selecao = palavra.substring(palavra.length - 4);
console.log(selecao);
 */

/*let num = 1;
while (num <= 100) {
  console.log("Claudio");
  num++;
}

*/
/*let num = 1;

for (let i = 0; i < 5; i++) {
  console.log(i, [i]);
}
*/

/*

for (var i = 0; i < 10; i++) {
  console.log(" o valor de i:" + i);
}

for (var a = 0; a < 101; a++) {
  console.log(" o valor de a : " + a);
}

for (let b = 0; b < 6; b++) {
  console.log(" o valor de b : " + b);
}

for (let c = 3; c < 10; c++) {
  console.log(" o valor de c :" + c);
}

for (let d = 0; d < 51; d++) {
  console.log(" o valor de d : " + d);
}

for (let y = 0; y < 12; y++) {
  console.log(" valor de y é : " + y);
}

for (let ab = 0; ab < 10; ab++) {
  console.log(" valor de ab " + ab);
}

for (let q = 0; q < 10; q = q - 1) {
  console.log(" valor de q " + q);
}
*/
/*
for (let abc = 0; abc < 10; abc++) {
  console.log(" o valor da variavel  é " + abc);
}
*/
/*
let i = 0;

while (i < 10) {
  console.log("condicao while javascript" + i);
  i++;
}

let a = 0;
while (a < 6) {
  console.log(" o valor de a é " + a);
  a++;
}

let p = 5;
while (p < 15) {
  console.log(" o valor de p " + p);
  p++;
}*/
/*
let av = 0;
while (av < 10);
{
  console.log(" o valor de av " + av);
  av++;
}
*/

/*console.log(extractClassName(O primeiro `parâmetro` é uma string
- Quando a string contém a seguinte palavra padrão`Class YEAR MONTH_NAME` (por exemplo, Class 2023 August)
  - Em seguida, retorne uma nova string com o ano, um `-` como separador e seguido do mês convertido em número e. g. `Turma 2022 setembro > 2023-09`
  - Caso contrário, retorne nulo
- O nome do mês pode conter tremas alemãs ou a versão alternativa. Ambos são válidos. e. g. `Turma 2022 März > 2023-03` === `Turma 2022 Maerz > 2023-03`
*/
/*
function extractClassName(sessionTitle) {
  const arry = sessionTitle.split("");
  return arry;
}

console.log(arry);
*/
/*
const names = "maria 2022 April";
const arry = names.split();
console.log(arry);
const joined = arry.join();
if (joined.includes("2022 September")) {
  console.log("2022-09");
}
if (joined.includes("2022 März")) {
  console.log("2022-03");
}

if (joined.includes("2022 Maerz")) {
  console.log("2022-03");
}
if (joined.includes("2022 April")) {
  console.log("Null");
}
/*console.log(extractClassName("Live-Session Class 2022 September")); // "2022-09"

console.log(extractClassName("Live-Session Class 2022 März")); // "2022-03"

console.log(extractClassName("Live-Session Class 2022 Maerz")); // "2022-03"

console.log(extractClassName("Live-Session 2022 April")); // null
*/

/*function extractClassName(sessionTitle) {
  const arry = sessionTitle.split();
  // const arry1 = sessionTitle.split();
  //console.log(arry);
  const joined = arry.join();

  if (sessionTitle.includes("Class 2022 September")) {
    console.log('"2022-09"');
  }
  if (sessionTitle.includes("Class 2022 März")) {
    console.log('"2022-03"');
  }

  if (sessionTitle.includes("Class 2022 April")) {
    console.log('"2022-03"');
  }
  if (sessionTitle.includes("Class 2023 Maerz")) {
    return '"2022-03"';
  }

  if (sessionTitle.includes("Class 2023 Maerz")) {
    return '"Null"';
  } else {
    return '"Null"';
  }
}

console.log(extractClassName("Live-Session Class 2022 September")); // "2022-09"

console.log(extractClassName("Live-Session Class 2022 März")); // "2022-03"

console.log(extractClassName("Live-Session Class 2022 Maerz")); // "2022-03"

console.log(extractClassName("Live-Session 2022 April")); // null
*/

function extractYearMonth(inputString) {
  // Regular expression to match the pattern "Class YEAR MONTH_NAME"
  const regex = /Class (\d{4}) (\w+)/i;

  // Try to match the input string with the regular expression
  const match = inputString.match(regex);

  // Check if a match was found
  if (match) {
    const year = match[1]; // Extract the year
    const monthName = match[2]; // Extract the month name

    // Create a map to convert month names to numbers
    const monthMap = {
      Januar: "01",
      Februar: "02",
      Maerz: "03", // Add alternative versions as needed
      März: "03", // English version
      April: "04",
      May: "05",
      Juni: "06",
      June: "06", // English version
      Juli: "07",
      July: "07", // English version
      August: "08",
      September: "09",
      Oktober: "10",
      October: "10", // English version
      November: "11",
      Dezember: "12", // Add alternative versions as needed
      December: "12", // English version
    };

    // Use the monthMap to convert the month name to a number
    const monthNumber = monthMap[monthName];

    if (monthNumber) {
      // Create the final formatted string
      const formattedString = `${year}-${monthNumber}`;
      return formattedString;
    }
  }

  // If the pattern was not matched, return null
  return null;
}

console.log(extractClassName("Live-Session Class 2022 September")); // "2022-09"

console.log(extractClassName("Live-Session Class 2022 März")); // "2022-03"

console.log(extractClassName("Live-Session Class 2022 Maerz")); // "2022-03"

console.log(extractClassName("Live-Session 2022 April")); // null
