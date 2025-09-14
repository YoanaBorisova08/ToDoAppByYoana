'use strict';

const containerList = document.querySelector('.list');
let allMarks = document.querySelectorAll('.check-btn');
const btnAdd = document.getElementById('add-btn');
const title = document.getElementById('title');
const firstLiEl = document.querySelector('.input-field');

let counter = 2;

btnAdd.addEventListener('click', function (e) {
  e.preventDefault();

  const html = `
  <li>
  <img
    src="images/white-circle.jpg"
    alt="check-box"
    width="15px"
    height="15px"
    class="check-btn ${counter}"
  />
  <input type="text" value=" " class="input-field ${counter}" />
  </li>
  `;

  containerList.insertAdjacentHTML('beforeend', html);
  counter++;
  allMarks = document.querySelectorAll('.check-btn');

  allMarks.forEach(mark =>
    mark.addEventListener('click', function (e) {
      e.preventDefault();
      let ctr = mark.classList[1];
      const input = document.querySelectorAll('.input-field')[ctr - 1];
      input.classList.add('ticked');
    })
  );
});

const closeIt = function () {
  title.value = 'Title';
  firstLiEl.value = '';
};

window.onbeforeunload = closeIt;
