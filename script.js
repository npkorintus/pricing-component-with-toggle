document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      document.getElementById('basic-monthly').style.display = 'flex';
      document.getElementById('basic-annual').style.display ='none';
      document.getElementById('professional-monthly').style.display = 'flex';
      document.getElementById('professional-annual').style.display ='none';
      document.getElementById('master-monthly').style.display = 'flex';
      document.getElementById('master-annual').style.display ='none';
    } else {
      document.getElementById('basic-monthly').style.display = 'none';
      document.getElementById('basic-annual').style.display = 'flex';
      document.getElementById('professional-monthly').style.display = 'none';
      document.getElementById('professional-annual').style.display = 'flex';
      document.getElementById('master-monthly').style.display = 'none';
      document.getElementById('master-annual').style.display = 'flex';
    }
  });
});