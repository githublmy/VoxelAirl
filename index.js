window.onload = function () {
  var arrow = document.getElementsByClassName("arrow")[0];
  var liNodes = document.querySelectorAll("#head .headMain .nav li");
  var upNodes = document.querySelectorAll("#head .headMain .nav li .up");
  var firstLiNode = liNodes[0];
  var fistUpNode = firstLiNode.querySelector(".up");
  var head = document.getElementById('head');
  var content = document.getElementById('content');
  var cliNodes = document.querySelectorAll("#content .list > li");
  var cList = document.querySelector('#content .list');
  var home2LiNodes = document.querySelectorAll("#content>.list>.home .home2>li");
  var home1LiNodes = document.querySelectorAll("#content>.list>.home .home1>li");
  var home1 = document.querySelector("#content>.list>.home .home1");
  var aboutUls = document.querySelectorAll("#content>.list .about .about3 > .item > ul")
  var dotLis = document.querySelectorAll("#content> .dot > li")
  var team3 = document.querySelector("#content > .list > .team .team3")
  var team3Lis = document.querySelectorAll("#content > .list > .team .team3 ul > li");
  var mask = document.querySelector("#mask");
  var line = document.querySelector("#mask .line");
  var mians = document.querySelectorAll("#mask div");
  var now = 0;
  var timer = 0;
  var oldIndex = 0;
  var timer3D = 0;
  var autoIndex = 0;
  var preIndex = 0;
  // 开机动画
  loadingAn();

  function loadingAn() {
    var arr = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg', 'about1.jpg', 'about2.jpg',
      'about3.jpg', 'about4.jpg', 'worksimg1.jpg', 'worksimg2.jpg', 'worksimg3.jpg', 'worksimg4.jpg',
      'team.png', 'greenLine.png'
    ];
    var flag = 0;
    for (var i = 0; i < arr.length; i++) {
      var img = new Image();
      img.src = "imgs/" + arr[i];
      img.onload = function () {
        flag++;
        line.style.width = flag / arr.length * 100 + "%";
      }
    }
    line.addEventListener("transitionend", function () {
      if (flag === arr.length) {
        for (var i = 0; i < mians.length; i++) {
          mians[i].style.height = 0 + "px";
        }
        this.style.display = "none";
      }
    })
    mians[0].addEventListener("transitionend", function () {
      mask.remove();
      audio.play();
      home3D();
    })
  }
  // 音频
  var music = document.querySelector("#head > .headMain .music");
  var audio = document.querySelector("#head > .headMain .music audio");
  music.onclick = function () {
    if (audio.paused) {
      audio.play();
      music.style.background = "url(./imgs/musicon.gif)"
    } else {
      audio.pause();
      music.style.background = "url(./imgs/musicoff.gif)"
    }
  }
  // 出入场动画
  var anArr = [{
      inAn: function () {
        var home1 = document.querySelector("#content>.list>.home .home1");
        var home2 = document.querySelector("#content>.list>.home .home2");
        home1.style.transform = "translateY(0)";
        home2.style.transform = "translateY(0)";
        home1.style.opacity = 1;
        home2.style.opacity = 1;
      },
      outAn: function () {
        var home1 = document.querySelector("#content>.list>.home .home1");
        var home2 = document.querySelector("#content>.list>.home .home2");
        home1.style.transform = "translateY(-400px)";
        home2.style.transform = "translateY(100px)";
        home1.style.opacity = 0;
        home2.style.opacity = 0;
      },
    },
    {
      inAn: function () {
        var plane1 = document.querySelector("#content .course .plane1");
        var plane2 = document.querySelector("#content .course .plane2");
        var plane3 = document.querySelector("#content .course .plane3");
        plane1.style.transform = "translate(0,0)";
        plane2.style.transform = "translate(0,0)";
        plane3.style.transform = "translate(0,0)";
      },
      outAn: function () {
        var plane1 = document.querySelector("#content .course .plane1");
        var plane2 = document.querySelector("#content .course .plane2");
        var plane3 = document.querySelector("#content .course .plane3");
        plane1.style.transform = "translate(-200px,-200px)";
        plane2.style.transform = "translate(-200px,200px)";
        plane3.style.transform = "translate(200px,-200px)";
      }
    },
    {
      inAn: function () {
        var pencel1 = document.querySelector("#content  .works .pencel1");
        var pencel2 = document.querySelector("#content  .works .pencel2");
        var pencel3 = document.querySelector("#content  .works .pencel3");
        pencel1.style.transform = "translateY(0)";
        pencel2.style.transform = "translateY(0)";
        pencel3.style.transform = "translateY(0)";
      },
      outAn: function () {
        var pencel1 = document.querySelector("#content  .works .pencel1");
        var pencel2 = document.querySelector("#content  .works .pencel2");
        var pencel3 = document.querySelector("#content  .works .pencel3");
        pencel1.style.transform = "translateY(-100px)";
        pencel2.style.transform = "translateY(100px)";
        pencel3.style.transform = "translateY(100px)";
      },
    },
    {
      inAn: function () {
        var Rect1 = document.querySelector(
          "#content > .list > .about .about3 > .item:nth-child(1)");
        var Rect2 = document.querySelector(
          "#content > .list > .about .about3 > .item:nth-child(2)");
        Rect1.style.transform = "rotate(0)";
        Rect2.style.transform = "rotate(0)";
      },
      outAn: function () {
        var Rect1 = document.querySelector(
          "#content > .list > .about .about3 > .item:nth-child(1)");
        var Rect2 = document.querySelector(
          "#content > .list > .about .about3 > .item:nth-child(2)");
        Rect1.style.transform = "rotate(45deg)";
        Rect2.style.transform = "rotate(-45deg)";
      },
    },
    {
      inAn: function () {
        var Rect1 = document.querySelector("#content>.list>.team .team1");
        var Rect2 = document.querySelector("#content>.list>.team .team2");
        Rect1.style.transform = "translateX(0)";
        Rect2.style.transform = "translateX(0)";
      },
      outAn: function () {
        var Rect1 = document.querySelector("#content>.list>.team .team1");
        var Rect2 = document.querySelector("#content>.list>.team .team2");

        Rect1.style.transform = "translateX(-200px)";
        Rect2.style.transform = "translateX(200px)";
      }
    }
  ]
  for (var i = 0; i < anArr.length; i++) {
    anArr[i]["outAn"]();
  }
  setTimeout(function () {
    anArr[0].inAn();
  }, 2000)
  //第四屏图片效果
  picBoom();

  function picBoom() {
    for (var i = 0; i < aboutUls.length; i++) {
      change(aboutUls[i]);
    }

    function change(Ul) {
      var src = Ul.dataset.src;
      var w = Ul.offsetWidth / 2;
      var h = Ul.offsetHeight / 2;
      for (var i = 0; i < 4; i++) {
        var liNode = document.createElement("li");
        liNode.style.width = w + "px";
        liNode.style.height = h + "px";
        var imgNode = document.createElement("img");
        imgNode.style.left = -(i % 2) * w + "px";
        imgNode.style.top = -Math.floor(i / 2) * h + "px";
        imgNode.src = src;
        liNode.appendChild(imgNode);
        Ul.appendChild(liNode);
      }
      Ul.onmouseenter = function () {
        var imgNodes = this.querySelectorAll("ul>li>img");
        imgNodes[0].style.top = h + "px";
        imgNodes[1].style.left = -2 * w + "px";
        imgNodes[2].style.left = w + "px";
        imgNodes[3].style.top = -2 * h + "px";
      }
      Ul.onmouseleave = function () {
        var imgNodes = this.querySelectorAll("ul>li>img");
        imgNodes[0].style.top = 0 + "px";
        imgNodes[1].style.left = -w + "px";
        imgNodes[2].style.left = 0 + "px";
        imgNodes[3].style.top = -h + "px";
      }
    }
  }

  // 第五屏   
  buibui();

  function buibui() {
    for (var i = 0; i < team3Lis.length; i++) {
      team3Lis[i].onmouseenter = function () {
        for (var i = 0; i < team3Lis.length; i++) {
          team3Lis[i].style.opacity = .3;
        }
        this.style.opacity = 1;
      }
      team3Lis[i].onmouseleave = function () {
        for (var i = 0; i < team3Lis.length; i++) {
          team3Lis[i].style.opacity = 1;
        }
      }
    }
  }
  // 第一屏3D
  function home3D() {
    for (var i = 0; i < home2LiNodes.length; i++) {
      home2LiNodes[i].index = i;
      home2LiNodes[i].onclick = function () {
        clearInterval(timer3D);
        for (var i = 0; i < home2LiNodes.length; i++) {
          home2LiNodes[i].classList.remove("active");
        }
        this.classList.add("active");
        // 从左往右点
        if (this.index > oldIndex) {
          home1LiNodes[this.index].classList.remove("rightHide")
          home1LiNodes[this.index].classList.remove("leftHide")
          home1LiNodes[this.index].classList.remove("leftShow");
          home1LiNodes[this.index].classList.add("rightShow");
          home1LiNodes[oldIndex].classList.remove("rightHide")
          home1LiNodes[oldIndex].classList.remove("leftShow")
          home1LiNodes[oldIndex].classList.remove("rightShow");
          home1LiNodes[oldIndex].classList.add("leftHide");
        } else if (this.index < oldIndex) {
          home1LiNodes[this.index].classList.remove("rightShow");
          home1LiNodes[this.index].classList.remove("leftHide");
          home1LiNodes[this.index].classList.remove("rightHide");
          home1LiNodes[this.index].classList.add("leftShow");
          home1LiNodes[oldIndex].classList.remove("leftShow");
          home1LiNodes[oldIndex].classList.remove("rightShow");
          home1LiNodes[oldIndex].classList.remove("leftHide");
          home1LiNodes[oldIndex].classList.add("rightHide");
        }
        oldIndex = this.index;
        autoIndex = this.index;
      }
    }

    // 从左向右自动轮播
    move3D();

    function move3D() {
      clearInterval(timer3D);
      timer3D = setInterval(() => {
        autoIndex++;
        // 无缝轮播
        if (autoIndex == home1LiNodes.length) {
          autoIndex = 0;
        }
        for (var i = 0; i < home2LiNodes.length; i++) {
          home2LiNodes[i].classList.remove("active");
        }
        home2LiNodes[autoIndex].classList.add("active");
        home1LiNodes[autoIndex].classList.remove("rightHide");
        home1LiNodes[autoIndex].classList.remove("leftHide");
        home1LiNodes[autoIndex].classList.remove("leftShow");
        home1LiNodes[autoIndex].classList.add("rightShow");
        home1LiNodes[oldIndex].classList.remove("rightHide");
        home1LiNodes[oldIndex].classList.remove("leftShow");
        home1LiNodes[oldIndex].classList.remove("rightShow");
        home1LiNodes[oldIndex].classList.add("leftHide");
        // 自动和手动同步
        oldIndex = autoIndex;
      }, 2000);
    }

    home1.onmouseenter = function () {
      clearInterval(timer3D)
    }
    home1.onmouseleave = function () {
      move3D();
    }
  }

  //改变视口重置
  window.onresize = function () {
    contentBind();
    cList.style.top = -now * (document.documentElement.clientHeight - head.offsetHeight) + "px";
    arrow.style.left = liNodes[now].offsetLeft + liNodes[now].offsetWidth / 2 - arrow.offsetWidth / 2 +
      "px";
  }
  //内容交互
  if (content.addEventListener) {
    content.addEventListener("DOMMouseScroll", function (event) {
      event = event || window.event;
      timer = setTimeout(() => {
        fn(event);
      }, 200);
    });
  }
  content.onmousewheel = function (event) {
    event = event || window.event;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(event);
    }, 200);
  };

  function fn(event) {
    event = event || window.event;
    var dir = '';
    if (event.wheelDelta) {
      dir = event.wheelDelta > 0 ? "up" : "down";
    }
    if (event.detail) {
      dir = event.detail < 0 ? "up" : "down"
    }
    preIndex = now;
    switch (dir) {
      case "up":
        if (now > 0) {
          now--;
          move(now);
        }
        break;
      case "down":
        if (now < cliNodes.length - 1) {
          now++;
          move(now);
        }
        break;
    }
  }
  contentBind();

  function contentBind() {
    content.style.height = document.documentElement.clientHeight - head.offsetHeight + "px";
    for (var i = 0; i < cliNodes.length; i++) {
      cliNodes[i].style.height = document.documentElement.clientHeight - head.offsetHeight + "px";
    }
  }

  // 头部交互
  headBind();

  function headBind() {
    fistUpNode.style.width = "100%";
    arrow.style.left = firstLiNode.offsetLeft + firstLiNode.offsetWidth / 2 - arrow.offsetWidth / 2 + "px";
    // 箭头随点击事件移动
    for (var i = 0; i < liNodes.length; i++) {
      liNodes[i].index = i;
      liNodes[i].onclick = function () {
        preIndex = now;
        move(this.index);
        now = this.index;
      }
    }
    for (var i = 0; i < dotLis.length; i++) {
      dotLis[i].index = i;
      dotLis[i].onclick = function () {
        preIndex = now;
        move(this.index);
        now = this.index;
      }
    }
  }
  // 动画函数
  function move(index) {
    for (var i = 0; i < upNodes.length; i++) {
      upNodes[i].style.width = '';
    }
    upNodes[index].style.width = "100%";
    arrow.style.left = liNodes[index].offsetLeft + liNodes[index].offsetWidth / 2 - arrow.offsetWidth / 2 +
      "px";
    cList.style.top = -index * (document.documentElement.clientHeight - head.offsetHeight) + "px";
    for (var i = 0; i < dotLis.length; i++) {
      dotLis[i].className = "";
    }
    dotLis[index].className = "active";
    //出入场
    if (anArr[index] && typeof anArr[index]["inAn"] == "function") {
      anArr[index]["inAn"]();
    }
    if (anArr[preIndex] && typeof anArr[preIndex]["inAn"] == "function") {
      anArr[preIndex]["outAn"]();
    }
  }
}