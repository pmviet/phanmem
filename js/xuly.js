<<<<<<< HEAD
var vitri='';
function number_format (number, decimals, decPoint, thousandsSep) { 
  number = (number + '').replace(/[^0-9+\-Ee.]/g, '')
  var n = !isFinite(+number) ? 0 : +number
  var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
  var sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep
  var dec = (typeof decPoint === 'undefined') ? '.' : decPoint
  var s = ''
  var toFixedFix = function (n, prec) {
    var k = Math.pow(10, prec)
    return '' + (Math.round(n * k) / k)
      .toFixed(prec)
  }
  // @todo: for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep)
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || ''
    s[1] += new Array(prec - s[1].length + 1).join('0')
  }
  return s.join(dec)
}

//icon load
function loadicon(ndd) {
	$("#bug").html("");
	$("#"+ndd).html("<center><img src='"+vitri+"/images/icon/loading.gif' width='105px'></center>").hide().fadeIn(10);
	block = true;
}


function dangxuat() {
	document.getElementById("thongbao").style.display = 'block';
	showLoader();
	$.ajax({
	url : vitri+"/modun/user/dangxuat.php",
	type : "post",
	dataType:"text",
	success : function (result){
		$('#thongbao').html(result);
	}
	});
}
function thanhcong(ndd) {
	$("#bug").html("");
	$("#"+ndd).html("<div class='swal2-icon swal2-success swal2-icon-show' style='display: flex;'><div class='swal2-success-circular-line-left' style='background-color: rgb(255, 255, 255);'></div><span class='swal2-success-line-tip'></span><span class='swal2-success-line-long'></span><div class='swal2-success-ring'></div> <div class='swal2-success-fix' style='background-color: rgb(255, 255, 255);'></div><div class='swal2-success-circular-line-right' style='background-color: rgb(255, 255, 255);'></div></div><h2 class='swal2-title'><font style='vertical-align: inherit;'><font style='vertical-align: inherit;' id='ndcheck'>Làm tốt lắm!</font></font></h2>").hide().fadeIn(10);
	block = true;
}

function tbtc(title, nd, loai) {
  var tb='success';
  if(loai==0)
  var tb='success';
  else if(loai==1)
  var tb='info';
  else if(loai==2)
  var tb='warning';
  else if(loai==3)
  var tb='danger';
  else if(loai==4)
  var tb='maroon';
  $(document).Toasts('create', {
	class: 'bg-'+tb,
	title: title,
	close: true,
	autohide: true,
	delay: 5000,
	autoremove: true,
	fixed: true,
	body: nd
  })
}

function printDiv(divName) {
     var printContents = document.getElementById(divName).innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;
=======
var vitri='';
function number_format (number, decimals, decPoint, thousandsSep) { 
  number = (number + '').replace(/[^0-9+\-Ee.]/g, '')
  var n = !isFinite(+number) ? 0 : +number
  var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
  var sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep
  var dec = (typeof decPoint === 'undefined') ? '.' : decPoint
  var s = ''
  var toFixedFix = function (n, prec) {
    var k = Math.pow(10, prec)
    return '' + (Math.round(n * k) / k)
      .toFixed(prec)
  }
  // @todo: for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep)
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || ''
    s[1] += new Array(prec - s[1].length + 1).join('0')
  }
  return s.join(dec)
}

//icon load
function loadicon(ndd) {
	$("#bug").html("");
	$("#"+ndd).html("<center><img src='"+vitri+"/images/icon/loading.gif' width='105px'></center>").hide().fadeIn(10);
	block = true;
}


function dangxuat() {
	document.getElementById("thongbao").style.display = 'block';
	showLoader();
	$.ajax({
	url : vitri+"/modun/user/dangxuat.php",
	type : "post",
	dataType:"text",
	success : function (result){
		$('#thongbao').html(result);
	}
	});
}
function thanhcong(ndd) {
	$("#bug").html("");
	$("#"+ndd).html("<div class='swal2-icon swal2-success swal2-icon-show' style='display: flex;'><div class='swal2-success-circular-line-left' style='background-color: rgb(255, 255, 255);'></div><span class='swal2-success-line-tip'></span><span class='swal2-success-line-long'></span><div class='swal2-success-ring'></div> <div class='swal2-success-fix' style='background-color: rgb(255, 255, 255);'></div><div class='swal2-success-circular-line-right' style='background-color: rgb(255, 255, 255);'></div></div><h2 class='swal2-title'><font style='vertical-align: inherit;'><font style='vertical-align: inherit;' id='ndcheck'>Làm tốt lắm!</font></font></h2>").hide().fadeIn(10);
	block = true;
}

function tbtc(title, nd, loai) {
  var tb='success';
  if(loai==0)
  var tb='success';
  else if(loai==1)
  var tb='info';
  else if(loai==2)
  var tb='warning';
  else if(loai==3)
  var tb='danger';
  else if(loai==4)
  var tb='maroon';
  $(document).Toasts('create', {
	class: 'bg-'+tb,
	title: title,
	close: true,
	autohide: true,
	delay: 5000,
	autoremove: true,
	fixed: true,
	body: nd
  })
}

function printDiv(divName) {
     var printContents = document.getElementById(divName).innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;
>>>>>>> fe619cd07f1cfbc727cfd906b78afa9600baf335
}