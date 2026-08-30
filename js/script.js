const marriedRadios = document.querySelectorAll('input[name="married"]');
const spouseSection = document.getElementById('spouse-section');

marriedRadios.forEach(function (radio) {
  radio.addEventListener('change', function () {
    spouseSection.hidden = radio.value !== 'yes';
  });
});

const kidsRadios = document.querySelectorAll('input[name="kids"]');
const kidsSection = document.getElementById('kids-section');

kidsRadios.forEach(function (radio) {
  radio.addEventListener('change', function () {
    kidsSection.hidden = (radio.value !== 'yes');
  });
});
