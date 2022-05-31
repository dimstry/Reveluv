$.getJSON('data/redvelvet.json', function (data) {
  let member = data.RV;
  $.each(member, function(i, data) {
    $('#daftar-member').append('<div class="cont_m profile" data-aos="fade-up" data-aos-delay="100"><div class="pf_member center"><div class="pf_img"><img class="rv__member" src="img/light/'+ data.Gambar +'" alt="Irene" /></div><div class="pf_box_m"><div class="pf_txt"><div class="pf_name coend-marker" data-aos="fade-right" data-aos-delay="200"> '+ data.Nama +'</div></div><div class="pf_txt_cont" data-aos="fade-right" data-aos-delay="300"><p><span>Nama:'+ data.Nama_Asli+'</span></p><p><span>Tanggal Lahir:'+ data.Lahir +'</span></p></div></div></div></div></div>')
  });
});