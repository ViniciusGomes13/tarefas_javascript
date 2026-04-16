import flags from './model/flags.js';

const main = document.querySelector('main');

const htmlContent = flags.map(flag => `
  <article class="flag col-6 col-md-4 col-lg-2 my-2 text-center">
    <div class="flag-card">
      <img src="${flag.image}" alt="Flag of ${flag.name}" class="img-fluid shadow-sm">
      <p class="mt-2 font-weight-bold">${flag.name}</p>
    </div>
  </article>
`).join('');

main.innerHTML = htmlContent;