$(function() {

  //Tabs
  $('#portfolio a.link-tab').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

  //Popover
  $('[data-toggle="popover"]').popover()

  //Плавный скролл
  $("#navbar").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });

  //Maps
  YMaps.jQuery(function () {
    var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);
    var s = new YMaps.Style();
    s.iconStyle = new YMaps.IconStyle();
    s.iconStyle.href = "../assets/img/location.png";
  	s.iconStyle.size = new YMaps.Point(26, 36);
  	s.iconStyle.offset = new YMaps.Point(-9, -29);
  	var placemark = new YMaps.Placemark(new YMaps.GeoPoint(49.28499, 53.499669), {style: s});
  	placemark.name = "Тольятти, улица Спортивная,<br> д. 6, подъезд 2/2, 5 этаж";
  	map.addOverlay(placemark);
  	map.setCenter(new YMaps.GeoPoint(49.27920, 53.499700), 16)
  })

  //Fance
  $("a.grouped_elements").fancybox();
  $(".fancy").fancybox();

  //Подсчет отзывов
  var tab1 = $('#first .item, #collapsePotfolioFirst .item').length;
  var tab2 = $('#second .item, #collapsePotfolioSecond .item').length;
  var tab3 = $('#third .item, #collapsePotfolioThird .item').length;
  $('.tab1').text(tab1);
  $('.tab2').text(tab2);
  $('.tab3').text(tab3);



  //Specialist Form
  $('.specialist .order').on('click', function(){
  	var parent = $(this).parent().parent().parent();
  	var name = parent.find('.name').text();
  	var inputValue =  $('.name-form').val(name);
  	var newInputaValue = $('.name-form').val();

  });

  //Collapse Hack
  $('.introduction .order').on('click', function(){
  	if($('.collapse-list div').hasClass('in')){
  		$('.collapse-list div').removeClass('in');
  	}
  });




  //Вывод отзывов по одному
  $("button.see, button.first").on('click', function (e) {
      e.preventDefault();
      $("#collapsePortfolioFirst .item:hidden").slice(0, 1).slideDown();
      if ($("#collapsePortfolioFirst .item:hidden").length == 0) {
          $("button.first").hide();
      }
  });
  $("button.see, button.second").on('click', function (e) {
      e.preventDefault();
      $("#collapsePortfolioSecond .item:hidden").slice(0, 1).slideDown();
      if ($("#collapsePortfolioSecond .item:hidden").length == 0) {
          $("button.second").hide();
      }
  });
  $("button.see, button.third").on('click', function (e) {
      e.preventDefault();
      $("#collapsePortfolioThird .item:hidden").slice(0, 1).slideDown();
      if ($("#collapsePortfolioThird .item:hidden").length == 0) {
          $("button.third").hide();
      }
  });
  //Calculator
  $('.calculator:visible').on('change', function(){
    var sum = 0;
    $('.calculator:checked').each( function(index, item){
      sum += $(item).data('value');
    });
    console.log(sum);
  });

});