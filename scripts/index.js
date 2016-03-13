window.onload=function(){
	var $=function(id){
		return document.getElementById(id);
	};
	var sence=$('sence');
	var fb_contant=$('fb-contant');
	var tips=$('tips');
	var tip=$('tip');
	var textarea=$('textarea');
	var fbBut=$('fb-but');
	var big=$('big');
	var $$=function(classes){
		return document.getElementsByClassName(classes);    //注意变量不能用关键字
	};
	var zan=$$('zan');
	var small=$$('small');
	var touXiang=$$('touXiang');
	var changDu,SPAN=140;
	textarea.onfocus=function(){
		this.style.color='black';
		this.style.border='2px solid blue';
		if(this.value=='请输入您的想法'){
		 	this.value='';
		}	
	};
	textarea.onblur=function(){
		this.style.border='2px solid #ccc';
		if(this.value==''){
			this.value='请输入您的想法';
			this.style.color='#ccc';
		}else{
			this.value=this.value;	
		}
	};
	var panduan=function(){
		changDu=this.value.length;
		var spanLength=SPAN-changDu;
		// tip.innerHTML=(spanLength<0)?'已超出':'还可以输入';
		span.innerHTML=Math.abs(spanLength);
		if(spanLength<0||spanLength==140){
			// fbBut.setAttribute('click','false');
			fbBut.style.background='#ccc';
			fbBut.style.cursor='auto';
			tip.innerHTML='已超出';	
			
		}else{
			// fbBut.setAttribute('click','true');
			fbBut.style.background='orange';
			fbBut.style.cursor='pointer';
			tip.innerHTML='还可以输入';
		}
	};	
	textarea.onkeyup=panduan;
	// textarea.onkeydown=panduan;       //意义何在？
	for(i=0;i<touXiang.length;i++){
		touXiang[i].style.backgroundImage='url(./images/'+i+'.jpg)';
	}
	fbBut.onclick=function(){
		if(tip.innerHTML=='已超出'){return;}
		var first=document.createElement('div');	
		first.setAttribute('class','small');
		var count=document.createElement('div');
		count.setAttribute('class','count');  
		first.innerHTML='<div class="touXiang" style="background-image:url(./images/7.jpg)"></div><div class="sContant">'+textarea.value+'</div><div class="zan">赞'+count.innerHTML+'</div><div class="zhuan">转</div><div class="ping">评</div>';
		if(textarea.value=='请输入您的想法'){
			alert('亲，发布内容不能为空！');
			return;
		}
		big.insertBefore(first,big.firstElementChild);
		textarea.value='请输入您的想法';
		textarea.style.color='#ccc';
		fbBut.style.background='#ccc';
		fbBut.style.cursor='none';
		span.innerHTML=SPAN;
	};
	//点赞
	big.onclick=function(e){
		var ee=e.target;
		if(ee.getAttribute('class')!='zan'){return;}
		var span=document.createElement('div');
		span.setAttribute('class','span');		
		if(!ee.hasAttribute('data')){
			ee.innerHTML='赞<span>'+1+'</span>';
			ee.setAttribute('data',1);
		}else{	
			var d = Number(ee.getAttribute('data')) + 1;
			ee.innerHTML='赞<span>'+d +'</span>';
			ee.setAttribute('data',d);
		}
	};
	big.onmousedown=function(e){
		e.preventDefault();        // 阻止选中
	};
	
	
// -----------------------------需要选取的元素-------------------------------
	// var sence=document.getElementById('sence');
	// var fb_contant=document.getElementById('fb-contant');
	// var tips=document.getElementById('tips');
	// var tip=document.getElementById('tip');
	// var textarea=document.getElementById('textarea');
	// var zan=document.getElementsByClassName('zan');
	// var fbBut=document.getElementById('fb-but');
	// var big=document.getElementById('big');
	// var small=document.getElementsByClassName('small');
// --------------发布时需创建的元素---------------------
	// fbBut.onclick=function(){
	// 	if(tip.innerHTML=='已超出'){return;}
	// 	var first=document.createElement('div');	
	// 	first.setAttribute('class','small');
	// 	var count=document.createElement('div');
	// 	count.setAttribute('class','count');  //或者创建所有，添加属性，再添加到位
	// 	touXiang=document.createElement('div');
	// 	sContant=document.createElement('div');
	// 	zan=document.createElement('div');
	// 	zhuan=document.createElement('div');
	// 	ping=document.createElement('div');
	// 	touXiang.setAttribute('class','touXiang');
	// 	sContant.setAttribute('class','sContant');
	// 	zan.setAttribute('class','zan');
	// 	zhuan.setAttribute('class','zhuan');
	// 	ping.setAttribute('class','ping');
	// 	if(textarea.value=='请输入您的想法'){
	// 		alert('亲，发布内容不能为空！');
	// 		return;
	// 	}
	// 	sContant.innerHTML=textarea.value;
	// 	big.insertBefore(first,big.firstElementChild);
	// 	first.appendChild(touXiang);
	// 	first.appendChild(sContant);
	// 	first.appendChild(zan);
	// 	zan.innerHTML='赞<span>'+count.innerHTML+'</span>';  //"赞<span>0</span>"
	// 	first.appendChild(zhuan);
	// 	zhuan.innerHTML='转';
	// 	first.appendChild(ping);
	// 	ping.innerHTML='评';
	// 	textarea.value='请输入您的想法';
	// 	textarea.style.color='#ccc';
	// 	fbBut.style.background='#ccc';
	// 	fbBut.style.cursor='none';
	// 	span.innerHTML=SPAN;
	// };




















	


























};