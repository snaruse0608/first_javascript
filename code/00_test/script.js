document.getElementById('alert').addEventListener('click', function() {
  alert('document.getElementById alert');
}); ;

$('#alert').on('click', function() {
  console.log('jQuery alert');
  alert('jQueryのalert');
});
