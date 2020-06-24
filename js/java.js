function submitform() {
  var $form = $('form')[0];
  if ($form.checkValidity()) {
    console.log('valid');
    $form.submit();
  } else {
    console.log('not valid');
  }
  return false;
};
