import jquery=require('jquery');
const $:JQueryStatic=jquery;

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event:any) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
  })()

  //$("#submitbutton").click(function(){

    //if($('input[type=checkbox]:checked').length == 0)
    //{
      //  alert('Por favor seleccione al menos una casilla');
    //else{
      //location.href = 'Submit.html';

    //}
//});

