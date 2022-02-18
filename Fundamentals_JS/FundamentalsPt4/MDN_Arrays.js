// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code

// exercise one - launch countdown

// const output = document.querySelector('.output');
// output.innerHTML = '';

// let i = 10;

// while (i >= 0) {
//  const para = document.createElement('p');
//  if (i === 10) {
//  para.textContent = `Countdown ${i}`;
//  } else if (i === 0) {
//   para.textContent = 'Blast off!';
//  } else {
//  para.textContent = i;
//  }

//  output.appendChild(para);

//  i--;
// }


// Exercise two - Guest List


// const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

// const admitted = document.querySelector('.admitted');
// const refused = document.querySelector('.refused');

// admitted.textContent = 'Admit: ';
// refused.textContent = 'Refuse: ';

// for (const person of people) {
//   if (person === 'Phil' || person === 'Lola') {
//     refused.textContent += `${person}, `;
//   } else {
//     admitted.textContent += `${person}, `;
//   }
// }

// refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
// admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';

// Exercised three - Cull List

// const list = document.querySelector('.output ul');
// list.innerHTML = '';
// const stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
//                   'GNF576746573fhdg4737dh4;Greenfield',
//                   'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
//                   'SYB4f65hf75f736463;Stalybridge',
//                   'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

// for (let station of stations) {
//   // write your code just below here
//   const stationCode = station.slice(0,3);
//   const codeBreak = station.indexOf(';');
//   const fullName = station.split(';')[1];
//   const result = `${stationCode}: ${fullName}`;
//   const listItem = document.createElement('li');
//   listItem.textContent = result;
//   list.appendChild(listItem);
// }


// https://javascript.info/while-for practice

// Run an even sorter

// for (i = 2; i <= 10; ++i) {
//     if (i % 2 == 0) {
//         alert( i );
//     }
// }

// return this function as a while loop:
// for (let i = 0; i < 3; i++) {
//    alert( `number ${i}!` );
// }

// Solution:

// let i = 0;
// while (console.log( `number ${i}!` ), (++i < 3));

// qualifying entry loop > must enter a number larger than 100

// let num;

// do {
//   num = prompt("Enter a number greater than 100?", 0);
// } while (num <= 100 && num);


// generate prime numbers

let i = 0;
let n = prompt('enter a number');

while (i <= n) {
  ++i;
  if (i % 2 != 0) {
      console.log(i)
  }
}

