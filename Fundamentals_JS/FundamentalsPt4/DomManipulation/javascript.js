// red <p> element "Hey I'm Red!"
// blue <h3> element with "I'm a blue h3"
// black bordered <div> with pink background and nested elements
  // another <h1> with "I'm in a div"
  // a <p> element with "ME TOO!"

const container = document.querySelector('#container');

const red = document.createElement('button');
red.setAttribute('id', 'method2');
red.classList.add('content');
red.style.color = 'red';
red.textContent = 'Hey I\'m red!';

const blue = document.createElement('button');
blue.setAttribute('id', 'method3')
blue.classList.add('content');
blue.style.color = 'blue';
blue.textContent = 'I\'m a blue h3';

container.appendChild(red)

container.appendChild(blue)

const pinkBlk = document.createElement('div');
pinkBlk.classList.add('contentb');
pinkBlk.style.background = 'pink';
pinkBlk.style.border = '1px solid black';

const inside = document.createElement('h1');
inside.textContent = 'I\'m in a div!';

const inside2 = document.createElement('p');
inside2.textContent = 'ME TOO!';

pinkBlk.appendChild(inside);

pinkBlk.appendChild(inside2);

container.appendChild(pinkBlk);

// function alertFunction() {
//     alert('AWWW YEAAAAAAAAH');
// }

// const btn = document.querySelector('#method2');
// btn.onclick = () => alert("Hello Worlds");

// const btn = document.querySelector('#method3');
// btn.addEventListener('click', () => {
//     alert("Helllllo World");
// });

// const btn = document.querySelector('#method2');
// btn.addEventListener('click', function (e) {
//     e.target.style.background = 'blue';
// });

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {

    button.addEventListener('click', () => {
        alert(button.id);
    });
});


