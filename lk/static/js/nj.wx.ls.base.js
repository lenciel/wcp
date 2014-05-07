//隐藏地址栏
// addEventListener('load', function(){ setTimeout(function(){window.scrollTo(0,1);}, 0); }, false);
/*全局参数定义Begin*/

currentTab=1;//当前停留在第几帧
current_houseTypeId="70";//当前产看的户型平方数
current_viewType="housetype";//是在查看户型还是在查看


touchSwipe="none";//左右标记
var houseJson=[{
  "housetype":[{
    "house_87":[{src:"./img/house_img/87/87_yangbanjian1.jpg",bigsrc:"./img/house_img/87/87_yangbanjian1_big.jpg",txt:"【悠哉悠哉】每天早上醒来看到你和阳光都在，便是最幸福的未来。"},
      {src:"./img/house_img/87/87_yangbanjian2.jpg",bigsrc:"./img/house_img/87/87_yangbanjian2_big.jpg",txt:"【悠哉悠哉】次卧装饰成宝宝最爱的动物王国，阳台宽大的落地窗将明媚的阳光也带入他的童话世界"},
      {src:"./img/house_img/87/87_yangbanjian3.jpg",bigsrc:"./img/house_img/87/87_yangbanjian3_big.jpg",txt:"【悠哉悠哉】次卧装饰成宝宝最爱的动物王国，阳台宽大的落地窗将明媚的阳光也带入他的童话世界"},
      {src:"./img/house_img/87/87_yangbanjian4.jpg",bigsrc:"./img/house_img/87/87_yangbanjian4_big.jpg",txt:"【悠哉悠哉】爸妈来看孙子的日子，也有了舒适的居所，我们也可以常伴父母了。"},
      {src:"./img/house_img/87/87_yangbanjian5.jpg",bigsrc:"./img/house_img/87/87_yangbanjian5_big.jpg",txt:"【悠哉悠哉】周末你爱邀请朋友，3.6米宽的客厅连带阳台，开party变成了一件简单的事。"},
      {src:"./img/house_img/87/87_yangbanjian6.jpg",bigsrc:"./img/house_img/87/87_yangbanjian6_big.jpg",txt:"【悠哉悠哉】周末你爱邀请朋友，3.6米宽的客厅连带阳台，开party变成了一件简单的事。"},
      {src:"./img/house_img/87/87_yangbanjian7.jpg",bigsrc:"./img/house_img/87/87_yangbanjian7_big.jpg",txt:"【悠哉悠哉】我总爱在这里琢磨营养搭配，为了孩子，为了你，也为了爸妈。"},
      {src:"./img/house_img/87/87_yangbanjian8.jpg",bigsrc:"./img/house_img/87/87_yangbanjian8_big.jpg",txt:"【悠哉悠哉】然后看着一家人开心舒服的享用食物，这是我最开心的事。"},
      {src:"./img/house_img/87/87_yangbanjian9.jpg",bigsrc:"./img/house_img/87/87_yangbanjian9_big.jpg",txt:"【悠哉悠哉】干湿分离的卫生间，易于打理"},
      {src:"./img/house_img/87/87_yangbanjian10.jpg",bigsrc:"./img/house_img/87/87_yangbanjian10_big.jpg",txt:"【悠哉悠哉】干湿分离的卫生间，易于打理"},
    ],
    "house_70":[{src:"./img/house_img/70/70_yangbanjian1.jpg",bigsrc:"./img/house_img/70/70_yangbanjian1_big.jpg",txt:"【钻石公子享乐窝】餐桌不一定每天吃饭，但一定要摆上我最喜欢的浮夸艺术品 "},
      {src:"./img/house_img/70/70_yangbanjian2.jpg",bigsrc:"./img/house_img/70/70_yangbanjian2_big.jpg",txt:"【钻石公子享乐窝】我爱玩儿，所以是夜食党，时尚厨房是我的最爱，两三好友一起，坐在L型小吧台旁陪我说话"},
      {src:"./img/house_img/70/70_yangbanjian3.jpg",bigsrc:"./img/house_img/70/70_yangbanjian3_big.jpg",txt:"【钻石公子享乐窝】清晨的阳光总在第一时间将我唤醒，朝着大阳台伸个懒腰，美好的一天就此展开"},
      {src:"./img/house_img/70/70_yangbanjian4.jpg",bigsrc:"./img/house_img/70/70_yangbanjian4_big.jpg",txt:"【钻石公子享乐窝】我爱阳光，所以我的客厅宽敞且光线充足；我爱音乐，所以我的音乐装备随时在我视线之内。"},
      {src:"./img/house_img/70/70_yangbanjian5.jpg",bigsrc:"./img/house_img/70/70_yangbanjian5_big.jpg",txt:"【钻石公子享乐窝】我的小家还有超值赠送空间，在这里我可以工作可以休憩，吉他依旧不离手。"},
      {src:"./img/house_img/70/70_yangbanjian6.jpg",bigsrc:"./img/house_img/70/70_yangbanjian6_big.jpg",txt:"【钻石公子享乐窝】平时再忙也不怕，我的卫生间干湿分离，方便打理。"},
    ],
    "house_114":[
      {src:"./img/house_img/114/114_yangbanjian1.jpg",bigsrc:"./img/house_img/114/114_yangbanjian1_big.jpg",txt:"【东南亚休旅风】卧室的阳台是我和妻子最喜欢的角落，有阳光，有微风"},
      {src:"./img/house_img/114/114_yangbanjian2.jpg",bigsrc:"./img/house_img/114/114_yangbanjian2_big.jpg",txt:"【东南亚休旅风】主卧套间浴室里的浴缸是她坚持买的，说是要我下班能好好放松一下"},
      {src:"./img/house_img/114/114_yangbanjian3.jpg",bigsrc:"./img/house_img/114/114_yangbanjian3_big.jpg",txt:"【东南亚休旅风】儿子逐渐长大，是蝙蝠侠的铁杆粉丝，他想变成拯救世界的英雄"},
      {src:"./img/house_img/114/114_yangbanjian4.jpg",bigsrc:"./img/house_img/114/114_yangbanjian4_big.jpg",txt:"【东南亚休旅风】宽大的客厅，更能让一家老小在异域风情中惬意地娱乐"},
      {src:"./img/house_img/114/114_yangbanjian5.jpg",bigsrc:"./img/house_img/114/114_yangbanjian5_big.jpg",txt:"【东南亚休旅风】父母晚年钟爱品茶，于是朝南的大阳台是他们最常坐落的地方"},
      {src:"./img/house_img/114/114_yangbanjian6.jpg",bigsrc:"./img/house_img/114/114_yangbanjian6_big.jpg",txt:"【东南亚休旅风】偶尔不忙的时候，我会帮她打下手，准备食材，不过总是帮了倒忙，幸好这里空间足够大"},
      {src:"./img/house_img/114/114_yangbanjian7.jpg",bigsrc:"./img/house_img/114/114_yangbanjian7_big.jpg",txt:"【东南亚休旅风】我们热衷于将旅途中独特的风景全部带回来，装饰我们的家"},
      {src:"./img/house_img/114/114_yangbanjian8.jpg",bigsrc:"./img/house_img/114/114_yangbanjian8_big.jpg",txt:"【东南亚休旅风】书房里，不管是我熬夜工作还是练习书法，妻子都在身后的飘窗上倚着看书陪伴我"},
      {src:"./img/house_img/114/114_yangbanjian9.jpg",bigsrc:"./img/house_img/114/114_yangbanjian9_big.jpg",txt:"【东南亚休旅风】父母年纪大了，搬过来与我们同住，他们开心，我们放心。"},
    ],
    "house_86":[{src:"./img/house_img/86/86_yangbanjian1.jpg",bigsrc:"./img/house_img/86/86_yangbanjian1_big.jpg",txt:"【时尚换装】下午时光，邀请女伴们来我家，在客厅里聊点八卦喝点红酒，闺蜜们的专属时间"},
      {src:"./img/house_img/86/86_yangbanjian2.jpg",bigsrc:"./img/house_img/86/86_yangbanjian2_big.jpg",txt:"【时尚换装】每个女人都有着多变的美丽，这一刻我是奢华的女王，鲜花、蕾丝、鹅绒是我的最爱"},
      {src:"./img/house_img/86/86_yangbanjian3.jpg",bigsrc:"./img/house_img/86/86_yangbanjian3_big.jpg",txt:"【时尚换装】而偶尔我也会少女心爆棚，房间的时尚换装从周末的早晨开始，南北通透让阳光洒满粉色系的房间"},
      {src:"./img/house_img/86/86_yangbanjian4.jpg",bigsrc:"./img/house_img/86/86_yangbanjian4_big.jpg",txt:"【时尚换装】这是女儿专属的手作空间，温暖的小物件从这里诞生，送给自己或者给我们惊喜。"},
      {src:"./img/house_img/86/86_yangbanjian5.jpg",bigsrc:"./img/house_img/86/86_yangbanjian5_big.jpg",txt:"【时尚换装】梳洗一番，去厨房做一顿美味的早餐犒劳爱人和女儿，舒服而温馨"},
      {src:"./img/house_img/86/86_yangbanjian6.jpg",bigsrc:"./img/house_img/86/86_yangbanjian6_big.jpg",txt:"【时尚换装】打理的干净明亮的卫生间是我照顾家人健康能做的细节之一"},
    ],


  }],
  "housePhoto":[{
    "house_87":[{src:"./img/house_img/87/87_huxing1.jpg",bigsrc:"./img/house_img/87/87_huxing1_big.jpg",txt:"【奇数层】我们的家，南北通透三房朝南，来自阳光的幸福邀约，时刻安静享受私密空间。"},
      {src:"./img/house_img/87/87_huxing2.jpg",bigsrc:"./img/house_img/87/87_huxing2_big.jpg",txt:"【偶数层】我们的家，南北通透三房朝南，来自阳光的幸福邀约，时刻安静享受私密空间。"},
    ],
    "house_70":[{src:"./img/house_img/70/70_huxing1.jpg",bigsrc:"./img/house_img/70/70_huxing1_big.jpg",txt:"【奇数层】南北通透、结构紧凑、功能实用，每一寸空间价值完美是我的首选- "},
      {src:"./img/house_img/70/70_huxing2.jpg",bigsrc:"./img/house_img/70/70_huxing2_big.jpg",txt:"【偶数层】南北通透、结构紧凑、功能实用，每一寸空间价值完美是我的首选-"},
    ],
    "house_114":[
      {src:"./img/house_img/114/114_huxing1.jpg",bigsrc:"./img/house_img/114/114_huxing1_big.jpg",txt:"【奇数层】新房子四室一厅，足够宽敞，终于满足了我们三代同堂的心愿"},
      {src:"./img/house_img/114/114_huxing2.jpg",bigsrc:"./img/house_img/114/114_huxing2_big.jpg",txt:"【偶数层】新房子四室一厅，足够宽敞，终于满足了我们三代同堂的心愿"},
    ],
    "house_86":[{src:"./img/house_img/86/86_huxing1.jpg",bigsrc:"./img/house_img/86/86_huxing1_big.jpg",txt:"【奇数层】南北通透，设计典雅，这是一家三口的品质美感空间"},
      {src:"./img/house_img/86/86_huxing2.jpg",bigsrc:"./img/house_img/86/86_huxing2_big.jpg",txt:"【偶数层】南北通透，设计典雅，这是一家三口的品质美感空间"},
    ],
  }]
}];
/*全局参数定义End*/
//Kissy
KISSY.use('node,gallery/slide/1.2/index,gallery/ringNavi/1.0/index,gallery/simple-mask/1.0/',function(S,Node,Slide,RingNavi,Mask){
  var $=Node.all;
  if($('#J_show_big_image').length==1){
    url = window.location.href;
    var paramArray=url.split("#");
    $('#J_show_big_image').attr("src",paramArray[2]);
    $('#J_show_big_image_returnBtn').attr("href","house.html#"+paramArray[1]);

  }
  //首页预加载
  //图片预加载
  function loadImages(sources, callback){
    var count = 0,
      images ={},
      imgNum = 0;
    for(src in sources){
      imgNum++;
    }
    for(src in sources){
      images[src] = new Image();
      images[src].onload = function(){
        if(++count >= imgNum){
          callback(images);
        }
      }
      images[src].src = sources[src];
    }
  }
// FIXME: comment by lenciel
//  loadImages(['img/img-guide.jpg','img/img-index.jpg','img/ico-guide-grid.png','img/ico-guide-logo.png','img/ico-guide-more.png','img/ico-index-logo.png','img/ico-nav-1.png','img/ico-nav-2.png','img/ico-nav-3.png','img/ico-nav-4.png','img/ico-nav-5.png','img/ico-nav-6.png','img/ico-nav-7.png'],function(){
//    $('.loading').remove();
//    $('.index-main').show();
//  });

  /*户型样板间页面JS Begin @党程*/
  if($('#J_house_Slider').length==1){
    url = window.location.href;
    var paramArray=url.split("#");
    currentTab=paramArray[1];//当前停留在第几帧

    /*切换户型类型*/

    /*切换样板间和户型之间*/


    var houseSlider;
    if(currentTab==1){
      current_houseTypeId=70;
    }else if(currentTab==2){
      current_houseTypeId=87;
    }else if(currentTab==3){
      current_houseTypeId=86;
    }else if(currentTab==4){
      current_houseTypeId=114;
    }
    //户型切换
    var HouseTypeSlider=new Slide('J_HouseType_Slider',{
      autoSlide:true,
      effect:'hSlide',
      timeout:500000000000,
      speed:300,
      invisibleStop:true,
      carousel:true,
      selectedClass:'current',
      touchmove:true,
      adaptive_fixed_width:true,
      colspan:1,
      autoSlide:false,
      defaultTab:currentTab,
      adaptive_width:function(){
        return S.DOM.width(window);
      }
    });
    // 跳到下一帧
    $('#J_houseType_prev').on('click',function(){

      HouseTypeSlider.previous();
      HouseTypeSlider.stop();
    });

    // 跳到上一帧
    $('#J_houseType_next').on('click',function(){
      HouseTypeSlider.next();
      HouseTypeSlider.stop();
    });
    HouseTypeSlider.stop();
    //切换户型事件
    $("#J_house-btn-houseType").on("click",function(){
      $("#J_house-btn-houseType").addClass("selected");
      $("#J_house-btn-housePhone").removeClass("selected");

      $("#J_house-btn-housePhone")
      current_viewType="housetype";
      createSlide();
    });
    //切换样板间事件
    $("#J_house-btn-housePhone").on("click",function(){
      $("#J_house-btn-houseType").removeClass("selected");
      $("#J_house-btn-housePhone").addClass("selected");
      current_viewType="housePhoto";
      createSlide();
    });
    //切换执行的事件
    HouseTypeSlider.on('switch',function(e){
      currentTab=0;

      $("#J_house_pagination li").each(function(){
        currentTab++;
        console.log(currentTab);
        if($(this).attr("class")!=undefined&&$(this).attr("class").indexOf("current")!=-1){
          current_houseTypeId=$(".C_tab_pannel_"+currentTab).attr("data-id");
          $(".tab-pannel>.img").removeClass("houseType-current");
          $(".C_tab_pannel_"+currentTab).addClass("houseType-current");
          return ;
        }
      });

      createSlide();
      HouseTypeSlider.stop();
    },window);


    //生成信的slide
    var createSlide=function(){

      var data;
      console.log(HouseTypeSlider.currentTab);
      if(current_viewType=="housetype"){
        data=houseJson[0].housetype[0]["house_"+current_houseTypeId];
      }else{
        data=houseJson[0].housePhoto[0]["house_"+current_houseTypeId];
      }

      var insertHtml='<div class="slides_container tab-content">';
      $(data).each(function(){
        insertHtml+=' <div class="tab-pannel">'
          +'<div class="tab-img-box">';

        insertHtml+='<img src="'+$(this)[0].src+'"/>';

        insertHtml+='<div class="current-house-txt">'+$(this)[0].txt+'</div>';
        if(HouseTypeSlider.currentTab>4){
          currentTab=HouseTypeSlider.currentTab%4;
        }else{
          currentTab=HouseTypeSlider.currentTab;
        }
        // if(current_viewType=="housePhoto"){

        insertHtml+='<a class="housePhoto-query" href="showImage.html#'+currentTab+'#'+$(this)[0].bigsrc+'" title="放大镜" src="'+$(this)[0].bigsrc+'"></a>';
        // }

        insertHtml+='</div>'
          +'</div>';
      });
      insertHtml+='</div>';
      insertHtml+='<ul class="tab-nav pagination">';
      $(data).each(function(){
        insertHtml+='<li><a href="javascript:;"></a></li>';
      });
      insertHtml+='</ul>';


      $("#J_house_Slider").html(insertHtml);
      var HouseSlide=new Slide('J_house_Slider',{

        effect:'hSlide',
        timeout:3000,
        speed:300,
        eventType:'mouseover',
        triggerDelay:200,
        selectedClass:'current',
        carousel:true,
        touchmove:true,
        autoSlide:false,
        adaptive_width:function(){
          return S.DOM.width(window);
        }

      });

      //houseSlider.relocateCurrentTab();
      /*首页提交信息 End*/
      HouseTypeSlider.stop();
    }

    // HouseTypeSlider.go(currentTab);
    //初始化第一个户型
    createSlide();
  }


  /*户型样板间页面JS End*/


  //幻灯共用
  if($('#J_UISlider').length==1){
    var UISlider=new Slide('J_UISlider',{
      autoSlide:true,
      effect:'hSlide',
      timeout:3000,
      speed:300,
      eventType:'mouseover',
      triggerDelay:200,
      selectedClass:'current',
      carousel:true,
      touchmove:true,
      adaptive_width:function(){
        return S.DOM.width(window);
      }
    });
  }
  //区块展开与关闭
  var blockT=$('.ui-h5');
  blockT.on('click',function(){
    var plus=$(this).children('.ico-plus');
    var block=$(this).next('.ui-block');
    if(!plus.hasClass('ico-minus')){
      block.slideDown(.1);
      plus.addClass('ico-minus');
    }else{
      block.slideUp(.1);
      plus.removeClass('ico-minus');
    }
  });

  //遮罩
  var Mask=Mask({
    zIndex:999,
    opacity:.3
  });
  //引导页交互
  var icoMore=$('.ico-guide-more');
  var icoGrid=$('.ico-guide-grid,.ico-guide-logo');
  var icoLogo=$('.ico-guide-logo');
  var icoIndex=$('.ico-index');
  var imgIndex=$('.img-index');
  icoMore.on('click',function(){
    icoGrid.removeClass('flipInX');
    icoGrid.addClass('flipOutX');
    setTimeout(function(){
      icoMore.removeClass('fadeInUp');
      icoMore.addClass('fadeOutUpBig');
      imgIndex.addClass('fadeInUpBig').show();
      icoIndex.addClass('fadeInUpBig').show();
      setTimeout(function(){
        $('.index-nav').addClass('flipInX').show();
        $('.ico-index-logo').addClass('fadeInDown').show();
        $('.index-tel').addClass('fadeInUp').show();
      },500);
    },500);
  });
  //判断来路是否直接显示到导航页
  var reUrl=document.referrer.split('/') || '';
  var reDomain=document.domain || '';
  if($('.index-main').length===1 && reDomain==='gelingelin.zhixun.in' && reUrl[reUrl.length-1]!==''){
    icoMore.fire('click');
  }
  if($('.bg-housemain').length===1 && reUrl[reUrl.length-1].indexOf('house')!=-1){
    $('.ui-return').attr('href','./');
  }
  //环形导航
  var ringNavi=$('.ui-ringnavi');
  if(ringNavi.length==1){
    var ringNavi = new RingNavi({
      trigger: '.ui-ringnavi',
      items:'.ico-subnav',
      displayArea: {
        from: 0,
        to: 90
      },
      speed: 0.2,
      easing: 'easeIn',
      toggle: true,
      radius: 100
    });
    $('.ico-subnav').on('click',function(){
      window.location.href=$(this).attr('href');
    });
  }
});


//微信分享
var _Conf={
  img:'http://gelingelin.zhixun.in/14loushu/img/img-share.jpg',
  w:100,
  h:100,
  url:'http://gelingelin.zhixun.in/14loushu/',
  title:'金地2014青春1号作品',
  desc:'金地·格林格林，最美的城市，安放最好的青春',
  appid:''
}
function _ShareFriend() {
  WeixinJSBridge.invoke('sendAppMessage',{
    'appid': _Conf.appid,
    'img_url': _Conf.img,
    'img_width': _Conf.w,
    'img_height': _Conf.h,
    'link': _Conf.url,
    'desc': _Conf.desc,
    'title': _Conf.title
  }, function(res){
    _report('send_msg', res.err_msg);
  })
}
function _ShareTL() {
  WeixinJSBridge.invoke('shareTimeline',{
    'img_url': _Conf.img,
    'img_width': _Conf.w,
    'img_height': _Conf.h,
    'link': _Conf.url,
    'desc': _Conf.desc,
    'title': _Conf.title
  }, function(res) {
    _report('timeline', res.err_msg);
  });
}
function _ShareWB() {
  WeixinJSBridge.invoke('shareWeibo',{
    'content': _Conf.desc,
    'url': _Conf.url,
  }, function(res) {
    _report('weibo', res.err_msg);
  });
}
// 当微信内置浏览器初始化后会触发WeixinJSBridgeReady事件。
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
  // 发送给好友
  WeixinJSBridge.on('menu:share:appmessage', function(argv){
    _ShareFriend();
  });

  // 分享到朋友圈
  WeixinJSBridge.on('menu:share:timeline', function(argv){
    _ShareTL();
  });

  // 分享到微博
  WeixinJSBridge.on('menu:share:weibo', function(argv){
    _ShareWB();
  });
}, false);
