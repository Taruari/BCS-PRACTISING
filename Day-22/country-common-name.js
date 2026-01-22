// function task1() {
//   fetch(
//     "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital",
//   )
//     .then((response) => response.json())
//     .then((nickName) => nickName.map((common1) => common1.name.common))
//     .then((data) => console.log(data));
// }

// function task2() {
//   fetch(
//     "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital",
//   )
//     .then((response) => response.json())
//     .then((numPop) => numPop.filter((popu) => popu.population >= 10000000))
//     .then((value) => value.toSorted((a, b) => b.population - a.population))
//     .then((country) => country.map((name1) => name1.name.common))
//     .then((data1) => console.log(data1));
// }
// function task3() {
//   fetch(
//     "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital",
//   )
//     .then((response) => response.json())

//     .then((numPop) => numPop.filter((popu) => popu.population >= 10000000))
//     .then((value) => value.toSorted((a, b) => b.population - a.population))
//     .then((data) =>
//       data.map((ans, ind) =>
//         console.log(`0${ind}.${ans.name.common}-${ans.population}`),
//       ),
//     );
// }
function task4() {
  fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital",
  )
    .then((response) => response.json())
    .then((numPop) => numPop.filter((popu) => popu.population >= 10000000))
    .then((value) =>
      value.toSorted((a, b) => b.population - a.population).slice(0, 10),
    )
    .then((data) =>
      data.map((ans, serial) =>
        console.log(`0${serial}.${ans.name.common} - ${ans.population}`),
      ),
    );
}
