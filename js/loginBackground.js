 var images = ['https://qzonestyle.gtimg.cn/qzone/qzactStatics/imgs/20171123181522_c48800.jpg',
                'https://qzonestyle.gtimg.cn/qzone/qzactStatics/imgs/20171122191603_896cd9.jpg',
                'https://qzonestyle.gtimg.cn/qzone/qzactStatics/imgs/20171122191532_f2975b.jpg',
			   'https://qzonestyle.gtimg.cn/qzone/qzactStatics/imgs/20171122191630_ff8fef.jpg'
			  ];

  function setRandomBackground() {
	 "use strict";
  var index = Math.floor(Math.random() * images.length);
  document.body.style.backgroundImage = 'url(' + images[index] + ')';
}
setInterval(setRandomBackground, 60000); // 每隔 60s 调用一次 setRandomBackground 函数