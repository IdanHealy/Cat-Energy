    let windowWidth = document.body.clientWidth;
    let tabletWidth = 768;
    let tableTrue = windowWidth >= tabletWidth;





    let buttonBefore = document.querySelector('.button--before');
    let buttonAfter = document.querySelector('.button--after');
    let range = document.querySelector('.range-for-slider');
    let before = document.querySelector('.before');
    let after = document.querySelector('.after');

        range.addEventListener('input', () => {
          before.style.width = (100 - range.value) + '%';
          after.style.width = range.value + '%';
        })

        buttonBefore.addEventListener('click', () => {
          before.style.width = '100%';
          after.style.width = '0%';
          range.value = 0;
        })

        buttonAfter.addEventListener('click', () => {
          before.style.width = '0%';
          after.style.width = '100%';
          range.value = 100;
        })





