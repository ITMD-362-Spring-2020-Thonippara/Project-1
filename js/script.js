function init() {
  const floatField = document.getElementById('float_field');
  const floatContainer = document.getElementById('float_container');
  floatField.addEventListener('focus', () => {
    floatContainer.classList.add('active');
  });
  floatField.addEventListener('blur', () => {
    floatContainer.classList.remove('active');
  });
}
window.addEventListener('load', init);
