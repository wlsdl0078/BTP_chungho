
//怨듯넻媛�
var loadingYn = 'Y';
var subMenuViewYn = 'N';


//* LNB Navigation */
function activeLNB(id, cnt, n) {
	for(num=1; num<=parseInt(cnt); num++) {
		$("#Um"+num).removeClass("current"); 
		$("#Lm"+num).css("visibility", "hidden"); 
		$("#Lm"+num).css("display", "none"); 
	}
	$("#Um"+n).addClass("current"); 
	$("#"+id).css("visibility", "visible"); //�대떦 ID留� 蹂댁엫
	$("#"+id).css("display", "block"); //�대떦 ID留� 蹂댁엫
}

function onblueLNB(id) {
	$("#"+id).css("visibility", "hidden");
	$("#"+id).css("display", "none");
}   
/*湲곕낯�� �ㅽ��� ��*/


/*�ㅻ뜑 DropDown style*/


//* LNB Navigation */
function activeLNB1(id, cnt, n) {
	$("#Um"+n).addClass("current"); 

	for(num=1; num<=parseInt(cnt); num++) {
		if (subMenuViewYn=='N') {
			$("#Lm1"+num).show().animate({height:'200px'},300); 
		}
	}
	if (subMenuViewYn=='N') {
		$('#subMenuBg').slideDown(300);
		$('#lnb1').height('240');
		$('#subMenuBgBottom').css('display','block');
		$('.dimmed').show();
	}
	subMenuViewYn='Y';
	$('#showYn').text(subMenuViewYn);

}

function onblueLNB1(cnt, n) {
	$("#Um"+n).addClass("current"); 
	for(num=1; num<=parseInt(cnt); num++) {
		if (subMenuViewYn=='Y') {
			$("#Lm1"+num).animate({height:'0px'},100); 
		}
	}
	if (subMenuViewYn=='Y') {
		$('#subMenuBg').slideUp(100);
		$('#lnb1').animate({height:'71px'},100);
		$('#subMenuBgBottom').css('display','none');
		$('.dimmed').hide();
	}
	subMenuViewYn='N';
	$('#showYn').text(subMenuViewYn);

}  
/*�⑥쿂�ㅻ뜑 style ��*/

function activeLNBM(id, cnt) {
	for(num=1; num<=parseInt(cnt); num++) {
		$("#Lm"+num).css("visibility", "visible"); 
	}
}
function activeLNBM1(id, cnt) {
	for(num=1; num<=parseInt(cnt); num++) {
		$("#Lm1"+num).css("visibility", "visible"); 
	}
}






/* image rollover */
$(document).ready(function() {
   $("img.rollover").mouseover(function() {
	 $(this).attr("src", $(this).attr("src").replace("_off","_on")); 
   });
   $("img.rollover").mouseout(function() {
	 $(this).attr("src", $(this).attr("src").replace("_on", "_off"));
   }); 
});

//泥섎━�� 留덈Т由ы븯�� script
/*
0:寃곌낵 湲고샇 OK / 洹몄쇅
1:寃곌낵硫붿꽭吏�
2:link二쇱냼
3:�⑥닔紐�
*/
function scriptEnd(v) {
	var vSplit = v.split('||');
	var vLen = vSplit.length;
	if (vSplit[0]=='OK') {
		if (vSplit[1]!='') {
			alert(vSplit[1]);
		}
		if (vSplit[2]!='') {
			linkScript(vSplit[2]);
		}
		if (vLen>3) {
			for (ii=3;ii<vLen;ii++) {
				scriptExec(vSplit[ii]);
			}
		}
	} else {
		alert(v);
	}
}
function scriptExec(fnExe) {
	alert(fnExe);
	fnExe;
}
function linkScript(v) {
	location.href=v;
}

function getCookie(strName) {
	var strArg = new String(strName + "=");	
	var nArgLen, nCookieLen, nEnd;
	var i = 0, j;	
	nArgLen    = strArg.length;
	nCookieLen = document.cookie.length;	
	if(nCookieLen > 0) {	
		while(i < nCookieLen) {		
			j = i + nArgLen;			
			if(document.cookie.substring(i, j) == strArg) {			
				nEnd = document.cookie.indexOf (";", j);				
				if(nEnd == -1) nEnd = document.cookie.length;				
				return unescape(document.cookie.substring(j, nEnd));			 
			}			
			i = document.cookie.indexOf(" ", i) + 1;
			if (i == 0) break;
		}
	}	
	return("");
}

function setCookie( name, value, expiredays ) {
	var todayDate = new Date();
	todayDate.setDate( todayDate.getDate() + expiredays );
	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

function deleteCookie(cookieName){
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() - 1);
    document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString();
}

function closeWinPop(getID, dd){ 
	if ($('#popWin'+getID).is(':checked') == true) {
		setCookie('WP'+getID, "done" ,dd );
	}
	window.close();
}
function closeLayerPop(getID, dd){ 
	if ($('#popLayer'+getID).is(':checked') == true) {
		setCookie('LP'+getID, "done" ,dd );
	}
	$("#layer_popup"+getID).hide();
	$(".popupBg").hide();
	$('body').css('overflow-y', 'auto');
}


//�덉씠�� �앹뾽 �닿린
function openLayer(IdName, tpos, lpos){
	$('#bgClose').css('height', $(document).height()+'px');
	$('#bgClose').css('display', 'block');

	var pop = document.getElementById(IdName);
	var scrollPos = ($(document).scrollTop());
	pop.style.display = "block";
	if (tpos=='') {
		var iHeight = ($(window).height() - $('#'+IdName).outerHeight())/2;
		pop.style.top = (iHeight+scrollPos) + "px";
	} else {
		pop.style.top = tpos + "px";
	}
	if (lpos=='') {
		var iWidth = ($(window).width() - $('#'+IdName).outerWidth())/2;
		pop.style.left = iWidth + "px";
	} else {
		pop.style.left = lpos + "px";
	}
}

//�덉씠�� �앹뾽 �リ린
function closeLayer(IdName){
	var pop = document.getElementById(IdName);
	pop.style.display = "none";
	$('#bgClose').css('display', 'none');
}

function layerPopViewEnd(v) {
	openLayer('popView','','');
}

//�덉씠�� 以묒븰�뺣젹
function centerLayer(divid) {
	var pop = document.getElementById(divid);
	var scrollPos = ($(document).scrollTop());

	var iHeight = ($(window).height() - $('#'+divid).outerHeight())/2;
	var iWidth = ($(window).width() - $('#'+divid).outerWidth())/2;
	pop.style.top = (iHeight+scrollPos) + "px";
	pop.style.left = iWidth + "px";
}

//泥댄겕諛뺤뒪 怨듯넻�⑥닔
function checkToggle(chkid, chknm) {
	if ($('#'+chkid).is(':checked')==true) {
		$('input:checkbox[id^='+chknm+']').prop('checked',true);
	} else {
		$('input:checkbox[id^='+chknm+']').prop('checked',false);
	}

}

//ajax 泥섎━ 
function ajaxProc(divid, frmnm, urlLink, pa, returnData) {
	if (frmnm!='') {
		if (pa!='') {
			pa = $('#'+frmnm).serialize() + '&'+ pa;
		} else {
			pa = $('#'+frmnm).serialize();
		}
	}
	if (loadingYn=='Y') {
		//$('#loading').show();
	}
	$.ajax({
		url : urlLink
		,type : 'POST'
		,dataType : 'html'
		,contentType :"application/x-www-form-urlencoded;charset=UTF-8"
		,data : pa
		,beforeSend: function() {
		}
		,success : function(data) {
			$('#loading').hide();
			if (divid!='') {
				$('#'+divid).html(data);
			}
			if (returnData != '') {
				returnData(data);
			}
		}
		,error : function(xhr, ajaxOptions, thrownError) {
			$('#loading').hide();
			alert(xhr.status + " : " + thrownError);
		}

	});
}

//ajax �대�吏� form �낅줈�� 泥섎━ 
function ajaxMultiProc(divid, returnData) {
	if (loadingYn=='Y') {
		$('#loading').show();
	}
	$('#'+divid).ajaxSubmit({
		type:"POST",
		dataType:"html",
		contentType :"application/x-www-form-urlencoded;charset=UTF-8",
		beforeSend: function() {
		},
		uploadProgress: function(event, position, total, percentComplete) {
		},
		success: function( data ){
			$('#loading').hide();
			returnData(data);
		},
		error: function (xhr, ajaxOptions, thrownError) {
			$('#loading').hide();
			alert(xhr.status + " : " + thrownError);
		}
	});
}


/*sns �곕룞 愿���*/
function pstTwitter(msg,url) {
	var href = "http://twitter.com/share?text=" + encodeURIComponent(msg) + "&url=" + encodeURIComponent(url);
	var a = window.open(href, 'twitter', 'width=466, height=356');
	if ( a ) {
		a.focus();
	}
}
function pstMe2Day(msg,url,tag) {
	var href = "http://me2day.net/posts/new?new_post[body]=" + encodeURIComponent(msg) + " " + encodeURIComponent(url) + "&new_post[tags]=" + encodeURIComponent(tag);
	var a = window.open(href, 'me2Day', 'width=466, height=356');
	if ( a ) {
		a.focus();
	}
}

//�섏씠�ㅻ턿�� og �쒓렇瑜� 蹂�寃쏀빐�� ��
function pstFaceBook(msg,url, tag, img) {
	//var href = "http://www.facebook.com/sharer.php?u=" + encodeURIComponent(url) + "&t=" + encodeURIComponent(msg) +"&i="+ encodeURIComponent(tag);
	var href="";
	href = "http://www.facebook.com/sharer/sharer.php?u="+ encodeURIComponent(url);
     //          +"&p[images][0]="+ encodeURIComponent(img) 
     //          +"&p[title]="+ encodeURIComponent(msg) 
     //          +"&p[summary]="+encodeURIComponent(tag);
    //href = href.split("#").join("%23");
    
	//href = encodeURI(href);
//	alert(href);
//return;
	var a = window.open(href, 'facebook', 'width=466, height=356');
	if ( a ) {
		a.focus();
	}
}

function pstYozmDaum(link,prefix,parameter) {
	var href = "http://yozm.daum.net/api/popup/prePost?link=" + encodeURIComponent(link) + "&prefix=" + encodeURIComponent(prefix);
	var a = window.open(href, 'yozm', 'width=466, height=356');
	if ( a ) {
		a.focus();
	}
}

function pstTwitterMobile(msg,url) {
	var href = "http://twitter.com/intent/tweet?p__g=i__n&text=" + encodeURIComponent(msg) + " " + encodeURIComponent(url);
	var a = window.open(href, 'twitter', 'width=466, height=356');
	if ( a ) {
		a.focus();
	}
}
function pstFaceBookMobile(msg,url, tag, img) {
	//var href = "http://www.facebook.com/sharer.php?u=" + encodeURIComponent(url) + "&t=" + encodeURIComponent(msg) +"&i="+ encodeURIComponent(tag);
	var href="";
	href = "http://m.facebook.com/sharer.php?p__g=i__n&s=100&u="+ encodeURIComponent(url);
    //href = href.split("#").join("%23");

	//href = encodeURI(href);
	//alert(href);

	var a = window.open(href, 'facebook', 'width=466, height=356');
	if ( a ) {
		a.focus();
	}
}

function snsCon(g, msg, url, tag, img) {
	if (g=="tw") {
		pstTwitter(msg,url);
	} else if (g=="fb") {
		pstFaceBook(msg,url, tag, img);
	} else if (g=="mt") {
		pstMe2Day(msg,url,tag);
	} else if (g=="yz") {
		pstYozmDaum(url,msg, '')
	}
}
function snsConMobile(g, msg, url, tag, img) {
	if (g=="tw") {
		pstTwitterMobile(msg,url);
	} else if (g=="fb") {
		pstFaceBookMobile(msg,url, tag, img);
	}
}

//kakao init �� �ㅽ뻾�쒗썑 �ㅽ뻾�댁빞��
function kakaoTalkShare(tit, desc, img, linkUrl) {
	Kakao.Link.sendDefault({
		objectType: 'feed',
		content: {
		  title: tit,
		  description: desc,
		  imageUrl: img,
		  link: {
			mobileWebUrl: linkUrl,
			webUrl: linkUrl
		  }
		},
		buttons: [
		  {
			title: '�뱀쑝濡� 蹂닿린',
			link: {
			  mobileWebUrl: linkUrl,
			  webUrl: linkUrl
			}
		  },
		  {
			title: '�깆쑝濡� 蹂닿린',
			link: {
			  mobileWebUrl: linkUrl,
			  webUrl: linkUrl
			}
		  }
		]
	});
	/*
	Kakao.Link.sendTalkLink({
		label: tit,
		image: {
			src : img,
			width : '300',
			height : '200'
		}
	});
	*/
}

/** ------------------------------------------------------------------------------------------------
fnOnlyNumber() - �レ옄留뚯엯�μ쓣諛쏅뒗�� 
�ъ슜��)
onkeydown="return onlyNumber(event);" onkeyup="removeChar(event);" style="ime-mode:disabled;"
 ------------------------------------------------------------------------------------------------**/
function onlyNumber(event){
	event = event || window.event;
	var keyID = (event.which) ? event.which : event.keyCode;
	if ( (keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 || keyID == 190 || keyID == 110 || keyID == 109 || keyID == 45 || keyID == 189 ) 
		return;
	else
		return false;
}
function removeChar(event) {
	event = event || window.event;
	var keyID = (event.which) ? event.which : event.keyCode;
	if ( keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 ) 
		return;
	else
		event.target.value = event.target.value.replace(/[^-\.\,0-9]/g, "");
}

// �곸뼱 / �レ옄 / �뱀닔臾몄옄留� �낅젰 媛��� (媛� 由ъ뀑)
function fnOnlyEngNumberSpecial(objID){
	$(objID).keyup(function(event){
        if (!(event.keyCode >=37 && event.keyCode<=40)) {
            var inputVal = $(this).val();
            $(this).val(inputVal.replace(/[^a-z0-9-@._!)(#$]/gi,''));
        }
    });
}

function numberViewKorean(viewId, num, unit) {	
	var hanA = new Array("","��","��","��","��","��","��","移�","��","援�","��"); 
	var danA = new Array("","��","諛�","泥�","","��","諛�","泥�","","��","諛�","泥�","","��","諛�","泥�"); 
	var result = ""; 
	num = num.replace(/,/g,'');
	for(i=0; i<num.length; i++) {	
		str = ""; 
		han = hanA[num.charAt(num.length-(i+1))]; 
		if(han != "") str += han+danA[i]; 
		if(i == 4) str += "留�"; 
		if(i == 8) str += "��"; 
		if(i == 12) str += "議�"; 
		result = str + result; 
	} 
	if (num != 0) {
		result = result + " "+ unit; 
	}
	//return result ; 
	$('#'+viewId).text(result);
}

function regChk(f, ty){
	var msg='';
	if (ty=='kor') {
		regexp = /^[\��-�� ��-�� 媛�-��\s]+$/;
		msg = '�쒓�留�';
	} else if (ty=='num') {
		regexp = /^[0-9]+$/;
		msg = '�レ옄留�';
	} else if (ty=='eng') {
		regexp = /^[a-zA-Z\s]+$/;
		msg = '�곷Ц留�';
	} else if (ty=='numeng') {
		regexp = /^[a-zA-Z0-9]+$/;
		msg = '�レ옄�� �곷Ц留�';
	} else if (ty=='koreng') {
		regexp = /^[媛�-�즑-zA-Z]+$/;
		msg = '�쒓�怨� �곷Ц留�';
	}
	v = $('#'+f).val();
	if( !regexp.test(v) ) {
		if (event.keyCode==8 || event.keyCode==9 || event.keyCode==37 || event.keyCode==39 || event.keyCode==46 ) {
		} else {
			alert(msg+"�낅젰�섏꽭��");
			$('#'+f).val('');
		}
	}
	/*
	if((event.keyCode < 12592) || (event.keyCode > 12687)){
		alert("�쒓�留� �낅젰�� 媛��ν빀�덈떎.");
		//f = '';
		event.returnValue = false
	}
	*/
}

function fnCheckPassword(upw) {
	regexp = /^[a-zA-Z0-9]{6,20}$/;
    if(!regexp.test(upw)) { 
        alert('鍮꾨�踰덊샇�� �レ옄�� �곷Ц�� 議고빀�쇰줈 6~12�먮━瑜� �ъ슜�댁빞 �⑸땲��.'); 
        return;
    }
  
    var chk_num = $('#'+upw).val().search(/[0-9]/g); 
    var chk_eng = $('#'+upw).val().search(/[a-z]/ig); 
    if(chk_num < 0 || chk_eng < 0) { 
        alert('鍮꾨�踰덊샇�� �レ옄�� �곷Ц�먮� �쇱슜�섏뿬�� �⑸땲��.'); 
		$('#'+upw).val('');
		$('#'+upw).focus();
        return;
    }
    if(/(\w)\1\1\1/.test($('#'+upw).val())) {
        alert('鍮꾨�踰덊샇�� 媛숈� 臾몄옄瑜� 4踰� �댁긽 �ъ슜�섏떎 �� �놁뒿�덈떎.'); 
		$('#'+upw).val('');
		$('#'+upw).focus();
        return;
    }
    return;
} 

//�ㅼ쓬 二쇱냼寃���
// f1:zonecode, f2: addr1, f3:addr2 f4:addrOld
function daumZipSearch(f1, f2, f3, f4) {
	new daum.Postcode({
		oncomplete: function(data) {
			if (f1!='') {
				document.getElementById(f1).value = data.zonecode;
			}
			/*
			//�꾩껜 二쇱냼�먯꽌 �곌껐 踰덉� 諛� ()濡� 臾띠뿬 �덈뒗 遺�媛��뺣낫瑜� �쒓굅�섍퀬�� �� 寃쎌슦,
			//�꾨옒�� 媛숈� �뺢퇋�앹쓣 �ъ슜�대룄 �쒕떎. �뺢퇋�앹� 媛쒕컻�먯쓽 紐⑹쟻�� 留욊쾶 �섏젙�댁꽌 �ъ슜 媛��ν븯��.
			var addr = data.address.replace(/(\s|^)\(.+\)$|\S+~\S+/g, '');
			document.getElementById(f3).value = addr;
			*/

			if (f2!='') {
				var addr = data.roadAddress.replace(/(\s|^)\(.+\)$|\S+~\S+/g, '');
				document.getElementById(f2).value = addr;
			}

			if (f4!='') {
				var addr = data.jibunAddress.replace(/(\s|^)\(.+\)$|\S+~\S+/g, '');
				document.getElementById(f4).value = addr;
			}
			
			if (f3!='') {
				document.getElementById(f3).focus();
			}
		}
	}).open();
}

//�좎쭨 湲곌컙�ㅼ젙 (1二쇱씪/�쒕떖/3媛쒖썡)
//v : 援щ텇(w, m, 3m)
function setDate(sdate, edate, v) {
	var eD = $('#'+edate).val();
	var today;
	var year;
	var month;
	var day;

	if (eD=='') {
		today = new Date();
		year = today.getFullYear();
		month = today.getMonth()+1;
		day = today.getDate();
	} else {
		var eDSplit = eD.split('-');
		year = eDSplit[0];
		month = parseInt(eDSplit[1]);
		day = parseInt(eDSplit[2]);
	}
	if (month<10) {
		month = '0'+month;
	}
	if (day<10) {
		day = '0'+day;
	}

	var curD = year+'-'+month+'-'+day;

	$('#'+edate).val(curD);

	var resultDate;
	if (v=='w') {
		resultDate = new Date(year, month-1, day-7);
	} else if (v=='m') {
		resultDate = new Date(year, month-2, day);
	} else if (v=='3m') {
		resultDate = new Date(year, month-4, day);
	}

	year = resultDate.getFullYear();
	month = resultDate.getMonth()+1;
	day = resultDate.getDate();

	if (month<10) {
		month = '0'+month;
	}
	if (day<10) {
		day = '0'+day;
	}
	var resD = year+'-'+month+'-'+day;
	$('#'+sdate).val(resD);
}

//�レ옄肄ㅻ쭏
function comma(str) {
	var parts=str.toString().split(".");

    str = String(parts[0]);
	str = String(str).replace(/,/gi,'');
	str = str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
	if (parts.length==2) {
		str = str +'.'+ parts[1];
	}
    return str;
    //return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

//肄ㅻ쭏��湲�
function uncomma(str) {
    str = String(str);
    return str.replace(/[^\d]+/g, '');
}

//湲��먯닔 �쒗븳 泥댄겕 
function len_chk(txtid, len, lenchk) {  
	var txtLength = $('#'+txtid).val().length; 

	if(txtLength > len){  
		alert("湲��먯닔�� "+len+"�먮줈 �쒗븳�⑸땲��.!");  
		$('#'+txtid).val($('#'+txtid).val().substring(0,len));  
		$('#'+txtid).focus();  
	} 
	if (lenchk!='') {
		$('#'+lenchk).text(txtLength+'/'+len+' bytes');
	}
} 

function regChk2(f, ty){
	var msg='';
	if (ty=='kor') {
		regexp = /^[\��-�� ��-�� 媛�-��\s]+$/;
		msg = '�쒓�留�';
	} else if (ty=='num') {
		regexp = /^[0-9]+$/;
		msg = '�レ옄留�';
	} else if (ty=='eng') {
		regexp = /^[a-zA-Z\s]+$/;
		msg = '�곷Ц留�';
	} else if (ty=='numeng') {
		regexp = /^[a-zA-Z0-9]+$/;
		msg = '�レ옄�� �곷Ц留�';
	} else if (ty=='koreng') {
		regexp = /^[媛�-�즑-zA-Z]+$/;
		msg = '�쒓�怨� �곷Ц留�';
	}
	v = $('#'+f).val();

	if( !regexp.test(v) ) {
		alert(msg+"�낅젰�섏꽭��");
		$('#'+f).val('');
		return false;
	}
	return;

}

function regChk(f, ty){
	var msg='';
	if (ty=='kor') {
		regexp = /^[\��-�� ��-�� 媛�-��\s]+$/;
		msg = '�쒓�留�';
	} else if (ty=='num') {
		regexp = /^[0-9]+$/;
		msg = '�レ옄留�';
	} else if (ty=='eng') {
		regexp = /^[a-zA-Z\s]+$/;
		msg = '�곷Ц留�';
	} else if (ty=='numeng') {
		regexp = /^[a-zA-Z0-9]+$/;
		msg = '�レ옄�� �곷Ц留�';
	} else if (ty=='koreng') {
		regexp = /^[媛�-�즑-zA-Z]+$/;
		msg = '�쒓�怨� �곷Ц留�';
	}
	v = $('#'+f).val();
	//alert(event.keyCode);
	if( !regexp.test(v) ) {
		if (event.keyCode==8 || event.keyCode==13 || event.keyCode==9 || event.keyCode==37 || event.keyCode==39 || event.keyCode==46 || event.keyCode==93 || event.keyCode==229 || event.keyCode==116 ) {
			event.returnValue = false;
		} else {
			alert(msg+"�낅젰�섏꽭��");
			$('#'+f).val('');
			event.returnValue = false;
			return false;
		}
	}
	event.returnValue = false;
	/*
	if((event.keyCode < 12592) || (event.keyCode > 12687)){
		alert("�쒓�留� �낅젰�� 媛��ν빀�덈떎.");
		//f = '';
		event.returnValue = false
	}
	*/
}

//�ъ슜�� 異쒕젰 �⑥닔
function printUser(divid) {

	$("#"+divid).print({
		addGlobalStyles : '/inc/css/CMS.css',
		stylesheet : '/inc/css/CMS.css',
		rejectWindow : true,
		noPrintSelector : ".no-print",
		iframe : true,
		append : null,
		prepend : null
	});
}

//愿�由ъ옄 異쒕젰 �⑥닔
function printMng(divid) {

	$("#"+divid).print({
		addGlobalStyles : '<?=AdminPath?>/inc/css/sub.css',
		stylesheet : '<?=AdminPath?>/inc/css/board.css',
		rejectWindow : true,
		noPrintSelector : ".no-print",
		iframe : true,
		append : null,
		prepend : null
	});
}

//�대�吏� �뺤옣�� 泥댄겕
function fnImgExtCheck(id){
	var strFile = $("#"+id).val();
	var ext = strFile.split('.').pop().toLowerCase();
	if($.inArray(ext, ['gif','jpg','jpeg','png']) == -1) {
		return false;
	} else{
		return true;
	}
}

//���됲듃諛뺤뒪�� �좏깮媛� 媛��몄삤湲�
function fnSelectGetItem(md, id){
	var retval;
	if(md=='value'){
		retval = $("#"+id+" option:selected").val();
	} else {
		retval = $("#"+id+" option:selected").text();
	}	
	return retval;
}

//釉뚮씪�곗� 泥댄겕
function getVersionIE () { 
	var word; 
	var version = "N/A"; 

	var agent = navigator.userAgent.toLowerCase(); 
	var name = navigator.appName; 

	// IE old version ( IE 10 or Lower ) 
	if ( name == "Microsoft Internet Explorer" ) word = "msie "; 

	else { 
		// IE 11 
		if ( agent.search("trident") > -1 ) word = "trident/.*rv:"; 

		// IE 12  ( Microsoft Edge ) 
		else if ( agent.search("edge/") > -1 ) word = "edge/"; 
	} 

	var reg = new RegExp( word + "([0-9]{1,})(\\.{0,}[0-9]{0,1})" ); 

	if (  reg.exec( agent ) != null  ) version = RegExp.$1 + RegExp.$2; 
	return version; 
} 

function cclView() {
	var cI='';
	var cT='';
	
	var v1,v2;
	v1 = $(':radio[name=ccl1]:checked').val();
	v2 = $(':radio[name=ccl2]:checked').val();

	if (v1=='Y') {
		if (v2=='Y') {
			cI='https://i.creativecommons.org/l/by/4.0/88x31.png';
			cT='�� ���묐Ъ�� �щ━�먯씠�곕툕 而ㅻ㉫利� ���묒옄�쒖떆 4.0 援�젣 �쇱씠�좎뒪�� �곕씪 �댁슜�� �� �덉뒿�덈떎.';
		} else if (v2=='N') {
			cI='https://i.creativecommons.org/l/by-nd/4.0/88x31.png';
			cT='�� ���묐Ъ�� �щ━�먯씠�곕툕 而ㅻ㉫利� ���묒옄�쒖떆-蹂�寃쎄툑吏� 4.0 援�젣 �쇱씠�좎뒪�� �곕씪 �댁슜�� �� �덉뒿�덈떎.';
		} else {
			cI='https://i.creativecommons.org/l/by-sa/4.0/88x31.png';
			cT='�� ���묐Ъ�� �щ━�먯씠�곕툕 而ㅻ㉫利� ���묒옄�쒖떆-�숈씪議곌굔蹂�寃쏀뿀�� 4.0 援�젣 �쇱씠�좎뒪�� �곕씪 �댁슜�� �� �덉뒿�덈떎.';
		}
	} else {
		if (v2=='Y') {
			cI='https://i.creativecommons.org/l/by-nc/4.0/88x31.png';
			cT='�� ���묐Ъ�� �щ━�먯씠�곕툕 而ㅻ㉫利� ���묒옄�쒖떆-鍮꾩쁺由� 4.0 援�젣 �쇱씠�좎뒪�� �곕씪 �댁슜�� �� �덉뒿�덈떎.';
		} else if (v2=='N') {
			cI='https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png';
			cT='�� ���묐Ъ�� �щ━�먯씠�곕툕 而ㅻ㉫利� ���묒옄�쒖떆-鍮꾩쁺由�-蹂�寃쎄툑吏� 4.0 援�젣 �쇱씠�좎뒪�� �곕씪 �댁슜�� �� �덉뒿�덈떎.';
		} else {
			cI='https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png';
			cT='�� ���묐Ъ�� �щ━�먯씠�곕툕 而ㅻ㉫利� ���묒옄�쒖떆-鍮꾩쁺由�-�숈씪議곌굔蹂�寃쏀뿀�� 4.0 援�젣 �쇱씠�좎뒪�� �곕씪 �댁슜�� �� �덉뒿�덈떎.';
		}
	}
	$('#cclImg').attr('src',cI);
	$('#cclText').text(cT);
}

//�レ옄泥댄겕
function numberChk(key) {
	var str =  ($('#'+key).val()).replace(/\./g, '');

	for(i=0; i<str.length; i++) {
		temp = str.charAt(i);
		if((temp >= "0" && temp <= "9") ){
			return true;
		}else{
			//$(this).showMessage(key, command, value);
			return false;
		}
	}
}

//�뚯뀥 濡쒓렇��
/*
�몄쐞�� : https://apps.twitter.com
�섏씠�ㅻ턿: https://developers.facebook.com/apps
�ㅼ씠踰�: https://nid.naver.com/oauth2.0/authorize
移댁뭅�ㅽ넚 : https://dev.kakao.com/
�ㅼ쓬: http://developers.daum.net/ 
援ш� : https://code.google.com/apis/console
*/
function snsLogin(g, id, backUrl, st) { 
    if(g =="naver") { 
        var win = window.open("https://nid.naver.com/oauth2.0/authorize?client_id="+id+"&response_type=code&redirect_uri="+backUrl+"&state="+st, "�ㅼ씠踰� �꾩씠�붾줈 濡쒓렇��","width=320, height=480, toolbar=no, location=no");  
		/*
        var timer = setInterval(function() {    
            if(win.closed) {   
                window.location.reload(); 
            }   
        }, 500);  
		*/
    } else if(g =="twitter") { 
		alert('以�鍮꾩쨷�낅땲��.');
		return;
        var win = window.open("<?=G5_PLUGIN_URL?>/social_login/tw/login.php", "twLogin","width=720, height=580, toolbar=no, location=no,resizable=yes");  
    } else if(g =="facebook") { 
        var win = window.open("https://www.facebook.com/dialog/oauth?client_id="+id+"&redirect_uri="+backUrl+"&scope=public_profile,email&granted_scopes=public_profile,email", "fbLogin","width=620, height=500, toolbar=no, location=no,resizable=yes");  
    } else if(g =="daum") { 
		alert('以�鍮꾩쨷�낅땲��.');
		return;
	    var win = window.open("<?=DAUM_OAUTH_URL?>authorize?client_id=<?=DAUM_CONSUMER_KEY?>&response_type=code&redirect_uri=<?=DAUM_CALLBACK_URL?>&state=<?=$dastate?>", "�ㅼ쓬 �꾩씠�붾줈 濡쒓렇��","width=520, height=700, toolbar=no, location=no");  
    } else if(g =="kakao") { 
		alert('以�鍮꾩쨷�낅땲��.');
		return;
        var win = window.open("<?=KAKAO_OAUTH_URL?>authorize?client_id=<?=KA_CONSUMER_KEY?>&response_type=code&redirect_uri=<?=KA_OAUTH_CALLBACK?>&state=<?=$kastate?>", "kakaologin","width=320, height=480, toolbar=no, location=no");  
    } else if(g =="google") { 
		alert('以�鍮꾩쨷�낅땲��.');
		return;
        var win = window.open("<?=G5_PLUGIN_URL?>/social_login/gg/login.php", "ggLogin","width=720, height=580, toolbar=no, location=no,resizable=yes");  
    } 
} 

//�좎쭨 �먭컻 鍮꾧탳
function compareDate(v, sd, ed) {
	if ($('#'+sd).val()!='' && $('#'+ed).val()!='') {
		if (v=='s') {
			if ($('#'+sd).val() > $('#'+ed).val()) {
				alert('�쒖옉�쇱� 醫낅즺�쇰낫�� �щ㈃ �덈맗�덈떎.');
				$('#'+sd).val('');
			}
		} else {
			if ($('#'+sd).val() > $('#'+ed).val()) {
				alert('醫낅즺�쇱� �쒖옉�쇰낫�� �묒쑝硫� �덈맗�덈떎.');
				$('#'+ed).val('');
			}
		}
	}
}

function fileCheck(file, msize) {
	// �ъ씠利덉껜��
	var fileSize = 0;
	var maxSize = 1024 * msize;
	// 釉뚮씪�곗� �뺤씤
	var browser=navigator.appName;

	// �듭뒪�뚮줈�ъ씪 寃쎌슦
	if (browser=="Microsoft Internet Explorer"){
		var oas = new ActiveXObject("Scripting.FileSystemObject");
		fileSize = oas.getFile(file.value).size;
	} else {	// �듭뒪�뚮줈�ш� �꾨땺寃쎌슦
		fileSize = file.files[0].size;
	}


	//alert("�뚯씪�ъ씠利� : "+ fileSize +", 理쒕��뚯씪�ъ씠利� : "+maxSize);

	if(fileSize > maxSize) {
		alert("泥⑤��뚯씪 �ъ씠利덈뒗 "+ msize +"KB �대궡濡� �깅줉 媛��ν빀�덈떎.    ");
		return false;
	} else {
		return true;
	}


}

//�대�吏� 誘몃━蹂닿린
$(function() {
	$("#imgInp").on('change', function(){
		readURL(this);
	});
});

function readURL(input) {
	if (input.files && input.files[0]) {
	var reader = new FileReader();

	reader.onload = function (e) {
			$('#blah').attr('src', e.target.result);
		}

	  reader.readAsDataURL(input.files[0]);
	}
}

//�대�吏� 誘몃━蹂닿린
function imgPreView(fileId, previewId) {
	if ($('#'+fileId).val()=='') {
		alert('�뚯씪�� �낅줈�� �섏꽭��');
		$('#'+fileId).focus();
		return;
	}

	var upload = document.getElementById(fileId);
	//var upload = document.getElementsById(fileId)[0];
	//alert(upload.value);

	if (typeof window.FileReader === 'undefined') {
		alert('�대�吏�瑜� 遺�瑜쇱닔 �놁뒿�덈떎.');
		return;
	} 
	 
	var file = upload.files[0],
		 reader = new FileReader();

	reader.onload = function (event) {
		var img = new Image();
		img.src = event.target.result;

		// note: no onload required since we've got the dataurl...I think! :)
		//if (img.width > 560) { // holder width
		//  img.width = 560;
		//}

		//alert(img);
		$('#'+previewId).attr('src', img.src);
	};

	reader.readAsDataURL(file);

}

// �ъ뾽�먮쾲�� 泥댄겕
function checkBizID(bizID) {

	// bizID�� �レ옄留� 10�먮━濡� �댁꽌 臾몄옄�대줈 �섍릿��.
	var checkID = new Array(1, 3, 7, 1, 3, 7, 1, 3, 5, 1);
	var tmpBizID, i, chkSum=0, c2, remander;
	bizID = bizID.replace(/-/gi,'');

	for (i=0; i<=7; i++) {
		chkSum += checkID[i] * bizID.charAt(i);
	}

	c2 = "0" + (checkID[8] * bizID.charAt(8));
	c2 = c2.substring(c2.length - 2, c2.length);
	chkSum += Math.floor(c2.charAt(0)) + Math.floor(c2.charAt(1));
	remander = (10 - (chkSum % 10)) % 10 ;


	if (Math.floor(bizID.charAt(9)) == remander) {
		return true; // OK!
	} 

	return false;

}

//�섎쾭移댁슫��
function numberCounter(target_frame, target_number) {
	this.count = 0; this.diff = 0;
	this.target_count = parseInt(target_number);
	this.target_frame = document.getElementById(target_frame);
	this.timer = null;
	this.counter();
};

numberCounter.prototype.counter = function() {
	var self = this;
	this.diff = this.target_count - this.count;

	if(this.diff > 0) {
		self.count += Math.ceil(this.diff / 5);
	}

	this.target_frame.innerHTML = this.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

	if(this.count < this.target_count) {
		this.timer = setTimeout(function() { self.counter(); }, 20);
	} else {
		clearTimeout(this.timer);
	}
};

function viewNum(divid, number) {
	new numberCounter(divid, number);
}

//二쇱냼蹂닿린
function viewZip(val1, val2, gb, id) {
	ajaxProc(id,'','/_Prog/common/zipcodeOptionView.php','gubun='+gb+'&val1='+val1+'&val2='+val2,'');
}

//�꾩씠�� 以묐났泥댄겕 怨듯넻 (以묐났媛� 泥댄겕�щ� 蹂��섎뒗 dblChkVal 濡� �댁빞 ��
function useridDblChk(uid) {
	if ($('#'+uid).val()=='') {
		alert('以묐났泥댄겕�� �꾩씠�붾� �곸쑝�몄슂');
		$('#'+uid).focus();
		return;
	}
	ajaxProc('','','/_Prog/member/useridDblChk.php','userid='+$('#'+uid).val(), useridDblChkEnd);
}
function useridAdmDblChk(uid) {
	if ($('#'+uid).val()=='') {
		alert('以묐났泥댄겕�� �꾩씠�붾� �곸쑝�몄슂');
		$('#'+uid).focus();
		return;
	}
	ajaxProc('','','/_Prog/member/useridAdmDblChk.php','userid='+$('#'+uid).val(), useridDblChkEnd);
}
function useridDblChkEnd(v) {
	var vSplit = v.split('||');
	$('#dblChkVal').val(vSplit[0]);
	alert(vSplit[1]);
}

//�뚯씪��젣 怨듯넻
function delFile(idx) {
	if(confirm("��젣�섏떆寃좎뒿�덇퉴?")){
		ajaxProc('', '', '/_Prog/common/fileDelete.php', 'idx='+idx, delFileEnd);
	} else {
		return;
	}
}
//�숈쁺�곸궘�� 怨듯넻
function delMovie(v) {
	if (confirm('�숈쁺�곸젙蹂대� ��젣�섏떆寃좎뒿�덇퉴?')) {
		ajaxProc('', '', '/_Prog/common/movieDelete.php', 'idx='+v, delMovieEnd);
	}
}

//�대┃�� 怨녹뿉 �꾩슦湲�
function layerPosition(g, div) {
	var ly;
	if (g=='id') {
		ly = $('#'+div);
	} else {
		ly = $('.'+div);
	}
	var popH = ly.offset().top;
    ly.css("top", popH-100+'px');
   // return ly;
}

//�대떦 �꾩씠�� 諛� class濡� �꾩씠�붾줈 �꾩튂 �대룞
//hei �� �대떦 �믪씠留뚰겮 媛뺤젣 �대룞
function scrollMove(div, hei){
	var offset = $(div).offset();
	var top = 0;
	if (hei!='') {
		top = offset.top + parseInt(hei);
	} else {
		top = offset.top;
	}
	$('html, body').animate({scrollTop : top}, 400);
}

//蹂듭궗湲곕뒫
//<input id="clipboardtarget" type="text" value="" style="position:absolute;top:-9999em;"/> 瑜� 怨듯넻遺�遺꾩뿉 異붽��쒕떎.
function clipboardProc(v, tit) {
	$('#clipboardtarget').val(v);
	//input諛뺤뒪 value瑜� �좏깮 
	$('#clipboardtarget').select(); 
	// Use try & catch for unsupported browser 
	try { // The important part (copy selected text) 
		var successful = document.execCommand('copy'); 
		alert(tit);
		// if(successful) answer.innerHTML = 'Copied!'; 
		// else answer.innerHTML = 'Unable to copy!'; 
	} catch (err) { 
		alert('�� 釉뚮씪�곗��� 吏��먰븯吏� �딆뒿�덈떎.') ;
	}

}

function copyToClipboard(val){
	var t = document.createElement("textarea");
	document.body.appendChild(t);
	t.value = val;
	t.select();
	document.execCommand('copy');
	document.body.removeChild(t);
	alert('�대┰蹂대뱶�� 蹂듭궗�섏뿀�듬땲��');
}

//寃뚯떆湲� �좉퀬
function bbsPoliceProc(g, bbsConfIdx, bbsIdx, commIdx) {
	if (confirm('�대떦湲��� �좉퀬�섏떆寃좎뒿�덇퉴?')) {
		ajaxProc('','','/_Ext/bbs/bbsPoliceProc.php','gubun='+g+'&bbsConfIdx='+bbsConfIdx+'&bbsIdx='+bbsIdx+'&commIdx='+commIdx,bbsPoliceProcEnd);
	}
}
function bbsPoliceProcEnd(v) {
	var vSplit = v.split('||');
	if (vSplit[0]=='OK') {
		alert('�좉퀬媛� �깅줉�섏뿀�듬땲��.\n愿�由ъ옄 �뺤씤�� 泥섎━�섍쿋�듬땲��.');
	} else {
		alert(v);
	}
}

//異붿쿇 / 鍮꾩텛泥�
function likeYnProc(g, yn, idx) {
	var msg;
	if (yn=='Y') {
		msg = '異붿쿇';
	} else {
		msg = '鍮꾩텛泥�';
	}
	if (confirm('�대떦 湲��� '+msg+' �섏떆寃좎뒿�덇�?')) {
		ajaxProc('','','/_Ext/bbs/likeYnProc.php','gubun='+g+'&yn='+yn+'&idx='+idx,likeYnProcEnd);
	}
}

function likeYnProcEnd(v) {
	var vSplit = v.split('||');
	if (vSplit[0]=='OK') {
		alert(vSplit[1]+' �섏뿀�듬땲��.');
	} else {
		alert(v);
	}
}

//�쒖옉�섏씠吏� �ㅼ젙
function setStartPage(t, url) {
	if (confirm('�쒖옉�섏씠吏�濡� �ㅼ젙�섏떆寃좎뒿�덇퉴?')) {

		if (document.all && window.external){
			t.style.behavior='url(#default#homepage)';
			t.setHomePage(url);
		} else {
			alert('�대떦 釉뚮씪�곗��� 吏��먯씠 �섏� �딆뒿�덈떎.');
		}
	}
}

//time�� �쒓컙�쇰줈 �쒖떆
function msgTime() {	// 1珥덉뵫 移댁슫��
	h = Math.floor(SetTime / 3600);	// �⑥� �쒓컙 怨꾩궛
	m = Math.floor((SetTime / 3600) % 60);	// �⑥� �쒓컙 怨꾩궛
	s = SetTime % 60;	// �⑥� �쒓컙 怨꾩궛
	var msg = fillZero(h,2) +":"+ fillZero(m,2) + ":" + fillZero(s,2);
	//document.all.ViewTimer.innerHTML = msg;		// div �곸뿭�� 蹂댁뿬以� 
	$('#leftHourView').text(msg);
	SetTime--;					// 1珥덉뵫 媛먯냼
	if (SetTime < 0) {			// �쒓컙�� 醫낅즺 �섏뿀�쇰㈃..
		clearInterval(tid);		// ���대㉧ �댁젣
		//alert("醫낅즺");
	}

}

//利먭꺼李얘린
function bookmark(url, title) {
	var agent = navigator.userAgent.toLowerCase();
	if (window.sidebar) { // Mozilla Firefox Bookmark
		window.sidebar.addPanel(location.href,document.title,"");
	} else if (window.external) { // IE Favorite
		if (agent.indexOf("chrome") != -1) {
			alert('Ctrl(Cmd)+D�ㅻ� �꾨Ⅴ�쒕㈃ 利먭꺼李얘린�� 異붽��섏떎 �� �덉뒿�덈떎.');
		} else {
			window.external.AddFavorite(location.href,document.title); 
		}
	} else if (window.opera && window.print) { // Opera Hotlist
		this.title=document.title;
	} else {
		alert('Ctrl(Cmd)+D�ㅻ� �꾨Ⅴ�쒕㈃ 利먭꺼李얘린�� 異붽��섏떎 �� �덉뒿�덈떎.');
	}

}

//�먮━�섏콈�곌린
//n �レ옄, width : �먮━��
function fillZero(n, width) {
	n = n + '';
	return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}

//�좎쭨�뷀븯怨� 鍮쇨린
//dateAddDel('2017-09-25', -7, 'd'); 
 //dateAddDel('2017-09-25', -1, 'm'); 
 //dateAddDel('2017-09-25', -1, 'y');
function dateAddDel(sDate, nNum, type) {
    var yy = parseInt(sDate.substr(0, 4), 10);
    var mm = parseInt(sDate.substr(5, 2), 10);
    var dd = parseInt(sDate.substr(8), 10);
	nNum = parseInt(nNum);

    
    if (type == "d") {
        d = new Date(yy, mm - 1, dd + nNum);
    }
    else if (type == "m") {
        d = new Date(yy, mm - 1, dd + (nNum * 31));
    }
    else if (type == "y") {
        d = new Date(yy + nNum, mm - 1, dd);
    }
 
    yy = d.getFullYear();
    mm = d.getMonth() + 1; mm = (mm < 10) ? '0' + mm : mm;
    dd = d.getDate(); dd = (dd < 10) ? '0' + dd : dd;
 
    return '' + yy + '-' +  mm  + '-' + dd;
}

function alertJs(msg, f, callFun, funData) {
	var param='';
	if (f!='') {
		alertBoxFocus(msg, f)
	} else {
		alertBox(msg, callFun, funData);
	}
}

function goUrl(v) {
	location.href=v.url;
}

//alert李� 湲곕뒫 紐⑥쓬
function alertBox(txt, callbackMethod, jsonData){
    modal({
        type: 'alert',
        title: '�뚮┝',
        text: txt,
        callback: function(result){
            if(callbackMethod){
                callbackMethod(jsonData);
            }
        }
    });
}
 
function alertBoxFocus(txt, obj){
    modal({
        type: 'alert',
        title: '�뚮┝',
        text: txt,
        callback: function(result){
            $('#'+obj).focus();
			$(window).scrollTop($('#'+obj).offset().top - 250);
        }
    });
}
 
    
function confirmBox(txt, callbackMethod, jsonData){
    modal({
        type: 'confirm',
        title: '�뚮┝',
        text: txt,
        callback: function(result) {
            if(result){
                callbackMethod(jsonData);
            }
        }
    });
}
 
function promptBox(txt, callbackMethod, jsonData){
    modal({
        type: 'prompt',
        title: 'Prompt',
        text: txt,
        callback: function(result) {
            if(result){
                callbackMethod(jsonData);
            }
        }
    });
}
 
function successBox(txt){
    modal({
        type: 'success',
        title: 'Success',
        text: txt
    });
}
 
function warningBox(txt){
    modal({
        type: 'warning',
        title: 'Warning',
        text: txt,
        center: false
    });
}
 
function infoBox(txt){
    modal({
        type: 'info',
        title: 'Info',
        text: txt,
        autoclose: true
    });
}
 
function errorBox(txt){
    modal({
        type: 'error',
        title: 'Error',
        text: txt
    });
}
 
function invertedBox(txt){
    modal({
        type: 'inverted',
        title: 'Inverted',
        text: txt
    });
}
 
function primaryBox(txt){
    modal({
        type: 'primary',
        title: 'Primary',
        text: txt
    });
}

// 吏��� 肄붾뱶媛�, �뚯냽湲곌� html id, �좏깮媛�
function regionCodeChange(regionId, organId, v) {
	var regionCode = $('#'+regionId).val();
	if (regionCode != undefined) {
		var pa = "regionCode="+regionCode;
		if (v != '' && v != undefined) {
			pa += "&select="+v
		}
		ajaxProc(organId,'','/_Prog/ggcflife/centerListByRegion.php', pa, '');
	}
}
/*
二쇱냼李� 諛붽씀�� �ㅽ겕由쏀듃
//�꾩옱 二쇱냼瑜� 媛��몄삩��.
var renewURL = location.href;
//�꾩옱 二쇱냼 以� page 遺�遺꾩씠 �덈떎硫� �좊젮踰꾨┛��.
renewURL = renewURL.replace(/\&page=([0-9]+)/ig,'');
 
//�덈줈 遺��щ맆 �섏씠吏� 踰덊샇瑜� �좊떦�쒕떎.
// page�� ajax�먯꽌 �섍린�� page 踰덊샇瑜� 蹂��섎줈 �좊떦�댁＜嫄곕굹 �좊떦�� 蹂��섎줈 蹂�寃�
renewURL += '&page='+page;
 
//�섏씠吏� 媛깆떊 �ㅽ뻾!
history.pushState(null, null, url);
*/

/*
<script>
   alertBox("�덈뀞", goNaver);
 
   function goNaver(){
      location.href = "http://www.naver.com";
   }
<script>
<script>
   alertBox("�덈뀞", goNaver, {url:"http://www.naver.com"});
 
   function goNaver(urlData){
      location.href = urlData.url;
   }
<script>
//alert李� 湲곕뒫 紐⑥쓬 ��

/*
//�꾩씠�� ���� 湲곕뒫�� �섑뻾�좊븣 login page��

	$(document).ready(function(){
		// ���λ맂 荑좏궎媛믪쓣 媛��몄��� ID 移몄뿉 �ｌ뼱以���. �놁쑝硫� 怨듬갚�쇰줈 �ㅼ뼱媛�.
		var userInputId = getCookie("userInputId");
		$("input[name='userid']").val(userInputId); 
		 
		if($("input[name='userid']").val() != ""){ // 洹� �꾩뿉 ID瑜� ���ν빐�� 泥섏쓬 �섏씠吏� 濡쒕뵫 ��, �낅젰 移몄뿉 ���λ맂 ID媛� �쒖떆�� �곹깭�쇰㈃,
			$("#idSaveCheck").attr("checked", true); // ID ���ν븯湲곕� 泥댄겕 �곹깭濡� �먭린.
		}
		 
		$("#idSaveCheck").change(function(){ // 泥댄겕諛뺤뒪�� 蹂��붽� �덈떎硫�,
			if($("#idSaveCheck").is(":checked")){ // ID ���ν븯湲� 泥댄겕�덉쓣 ��,
				var userInputId = $("input[name='userid']").val();
				setCookie("userInputId", userInputId, 7); // 7�� �숈븞 荑좏궎 蹂닿�
			}else{ // ID ���ν븯湲� 泥댄겕 �댁젣 ��,
				deleteCookie("userInputId");
			}
		});
		 
		// ID ���ν븯湲곕� 泥댄겕�� �곹깭�먯꽌 ID瑜� �낅젰�섎뒗 寃쎌슦, �대윺 �뚮룄 荑좏궎 ����.
		$("input[name='userid']").keyup(function(){ // ID �낅젰 移몄뿉 ID瑜� �낅젰�� ��,
			if($("#idSaveCheck").is(":checked")){ // ID ���ν븯湲곕� 泥댄겕�� �곹깭�쇰㈃,
				var userInputId = $("input[name='userid']").val();
				setCookie("userInputId", userInputId, 7); // 7�� �숈븞 荑좏궎 蹂닿�
			}
		});
	});

*/