// Nilai default jika tiak meng klik dark mode
  $.getJSON('data/redvelvet.json', function (data) {
    // Ini ambil data yg grup
    let grup = data.Grup;
    $.each(grup, function(i,data){
      $('#grup').append(`
       <img src="./img/light/`+ data.Gambar +`" alt="">
       <p class="text-center text-dark mt-2">
          Irene | Seulgi | Wendy | Joy | Yeri
        </p>
      `)
    });
    //ini ambil data member di json
    let member = data.RV;
    $.each(member, function(i, data) {
      $('#daftar-member').append('<div class="cont_m profile" data-aos="fade-up" data-aos-delay="100"><div class="pf_member center"><div class="pf_img"><img class="rv__member" src="img/light/'+ data.Gambar +'" alt="Irene" /></div><div class="pf_box_m"><div class="pf_txt"><div class="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200"> '+ data.Nama +'</div></div><div class="pf_txt_cont" data-aos="fade-right" data-aos-delay="300"><p><span>Nama:'+ data.Nama_Asli+'</span></p><p><span>Tanggal Lahir:'+ data.Lahir +'</span></p></div></div></div></div></div>')
    });
  });
  
 // function ketika light mode
function light() {
// function untuk ambil data json
  $.getJSON('data/redvelvet.json', function (data) {
    // Ini ambil data yg grup
    let grup = data.Grup;
    $.each(grup, function(i,data){
      $('#grup').append(`
       <img src="./img/light/`+ data.Gambar +`" alt="">
       <p class="text-center text-dark mt-2">
          Irene | Seulgi | Wendy | Joy | Yeri
        </p>
      `)
    });
    //ini ambil data member di json
    let member = data.RV;
    $.each(member, function(i, data) {
      $('#daftar-member').append('<div class="cont_m profile" data-aos="fade-up" data-aos-delay="100"><div class="pf_member center"><div class="pf_img"><img class="rv__member" src="img/light/'+ data.Gambar +'" alt="Irene" /></div><div class="pf_box_m"><div class="pf_txt"><div class="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200"> '+ data.Nama +'</div></div><div class="pf_txt_cont" data-aos="fade-right" data-aos-delay="300"><p><span>Nama:'+ data.Nama_Asli+'</span></p><p><span>Tanggal Lahir:'+ data.Lahir +'</span></p></div></div></div></div></div>')
    });
  });
}


// fanction ketika dark mode
function dark() {
  // function untuk ambil data json
  $.getJSON('data/redvelvet.json', function (data) {
    // Ini ambil data yg grup
    let grup = data.Grup;
    $.each(grup, function(i,data){
      $('#grup').append(`
       <img src="./img/dark/`+ data.Gambar +`" alt="">
       <p class="text-center text-dark mt-2">
          Irene | Seulgi | Wendy | Joy | Yeri
        </p>
      `)
    });
    //ini ambil data member di json
    let member = data.RV;
    $.each(member, function(i, data) {
      $('#daftar-member').append('<div class="cont_m profile" data-aos="fade-up" data-aos-delay="100"><div class="pf_member center"><div class="pf_img"><img class="rv__member" src="img/dark/'+ data.Gambar +'" alt="Irene" /></div><div class="pf_box_m"><div class="pf_txt"><div class="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200"> '+ data.Nama +'</div></div><div class="pf_txt_cont" data-aos="fade-right" data-aos-delay="300"><p><span>Nama:'+ data.Nama_Asli+'</span></p><p><span>Tanggal Lahir:'+ data.Lahir +'</span></p></div></div></div></div></div>')
    });
  });
}


// dark mode
$('.checkbox').on('click' ,function(){
 var hasil=document.body.classList.toggle('dark');
 if (hasil === true) {
  $('#daftar-member').html('');
  $('#grup').html('');
  dark();
 }else {
   $('#grup').html('');
   $('#daftar-member').html('');
   light();
 }
});
// navbar active gitulah
$('.nav-link').on('click', function() {
  $('.nav-link').removeClass('active');
  $('this').addClass('active');
});