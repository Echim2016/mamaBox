
var $form = $('#contactForm'),
    url = 'https://script.google.com/macros/s/AKfycbyeR0-KyGLcgg86128FdIW1nwQalVHD9jwOWqhG2UsYbGAlThaY/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serialize(),
    success: function(response){
      Swal.fire({
        type: 'success',
        title: 'weeee！！已收到你的回應囉！',
        background: '#DCDCDC',
        showConfirmButton: false,
        timer: 1800
      })
      setTimeout(function(){// wait for 5 secs(2)
          // location.reload(); // then reload the page.(3)
          window.location.href="index.html";
     }, 2100);
      return true;
    }
  })
})

var resetClick =0;

$('#reset-click').on('click',function(){

  resetClick++;

  if(resetClick==7){

    Swal.fire({
      type: 'success',
      title: '很會點喔',
      background: '#DCDCDC',
      showConfirmButton: false,
      timer: 1800
    })

    resetClick =0;
  }


})
