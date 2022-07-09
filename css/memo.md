css
/* @charset "UTF-8";
*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.more {
  outline: none;
  font-size: 14px;
  border: 1px solid #3ea1d1;
  color: #3ea1d1;
  background-color: #fff;
  padding: 16px 54px;
  letter-spacing: 1.5px;
}

@media (max-width: 1087px) {
  .more {
    font-size: 10px;
    padding: 12px 50px;
  }
}

.more:hover {
  color: white;
  background-color: #3ea1d1;
  transition: 0.4s all;
}

a {
  text-decoration: none;
  color: #333333;
}

img {
  width: 100%;
  height: auto;
}

.title {
  font-size: 40px;
  text-align: center;
  position: relative;
}

@media (max-width: 1087px) {
  .title {
    font-size: 30px;
    padding-top: 50px;
  }
}

@media (min-width: 768px) and (max-width: 1087px) {
  .title {
    font-size: 25px;
    padding-top: 35px;
  }
}

@media (max-width: 767px) {
  .title {
    font-size: 20px;
    padding-top: 20px;
  }
}

.title:after {
  position: absolute;
  content: "";
  top: 60px;
  left: 48%;
  width: 60px;
  color: #3ea1d1;
  border-bottom: 2px solid #3ea1d1;
}

@media (max-width: 1087px) {
  .title:after {
    width: 40px;
    top: 125%;
  }
}

@media (max-width: 767px) {
  .title:after {
    width: 36px;
    top: 125%;
    left: 46%;
  }
}

body {
  font-family: "ヒラギノ明朝 ProN", "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック体", "YuGothic", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "メイリオ", "Meiryo", "verdana", sans-serif;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  margin-right: 0;
  color: #333333;
}

@media (max-width: 767px) {
  body {
    margin: 0px 15px;
  }
}

header {
  position: fixed;
  background-color: #fff;
  z-index: 5;
  margin: 0 40px;
  width: 100%;
  height: 70px;
}

@media (max-width: 1087px) {
  header {
    margin: 0;
    height: 60px;
  }
}

header .h-inner {
  padding: 0 40px;
  display: flex;
  height: auto;
  transition: all 0.5s ease-in-out 0s;
}

@media (max-width: 767px) {
  header .h-inner {
    padding: 0;
  }
}

header .h-inner .h-left {
  margin-right: auto;
}

header .h-inner .h-left img {
  margin-top: 20px;
  width: 120px;
  height: 21px;
}

@media (max-width: 1087px) {
  header .h-inner .h-left img {
    width: 100px;
    height: 17px;
  }
}

@media (max-width: 767px) {
  header .h-inner .h-left img {
    width: 120px;
    height: 21px;
  }
}

header .hr-navs {
  line-height: 70px;
  display: flex;
}

@media (max-width: 1087px) {
  header .hr-navs {
    line-height: 55px;
  }
}

@media (max-width: 767px) {
  header .hr-navs {
    display: none;
  }
}

header .hr-navs li {
  margin-right: 48px;
}

@media (max-width: 1087px) {
  header .hr-navs li a {
    font-size: 13px;
  }
}

header .hr-navs li a:hover {
  color: #3ea1d1;
}

.main {
  margin: 0 40px;
  padding-bottom: 80px;
}

@media (max-width: 767px) {
  .main {
    padding-bottom: 15px;
    margin: 0;
    min-width: 100%;
  }
}

.main .m-contents {
  display: flex;
  position: relative;
  transition: all 0.5s ease-in-out 0s;
}

@media (max-width: 767px) {
  .main .m-contents {
    display: block;
  }
}

.main .m-contents .m-textbox {
  position: absolute;
  border: 1px solid transparent;
  background-color: #fff;
  width: 380px;
  height: 330px;
  top: 165px;
  content: "";
  z-index: 1;
}

@media (max-width: 1087px) {
  .main .m-contents .m-textbox {
    left: -4px;
    top: 130px;
    width: 370px;
    height: 280px;
  }
}

@media (max-width: 767px) {
  .main .m-contents .m-textbox {
    position: static;
    z-index: 0;
    display: block;
    width: 200px;
    height: 100px;
  }
}

.main .m-contents .m-textbox h2 {
  font-size: 26px;
  line-height: 44px;
  padding-top: 92px;
  font-weight: bold;
  color: #333333;
}

@media (max-width: 1087px) {
  .main .m-contents .m-textbox h2 {
    font-size: 20px;
    padding-top: 50px;
  }
}

@media (max-width: 767px) {
  .main .m-contents .m-textbox h2 {
    font-size: 18px;
    padding-top: 30px;
    line-height: 2;
  }
}

.main .m-contents .m-textbox p {
  margin-top: 28px;
  line-height: 27px;
}

@media (max-width: 1087px) {
  .main .m-contents .m-textbox p {
    margin-top: 15px;
    font-size: 13px;
  }
}

@media (max-width: 767px) {
  .main .m-contents .m-textbox p {
    font-size: 12px;
    margin-top: 6px;
    line-height: 1.5;
  }
}

.main .m-contents .m-img {
  position: absolute;
  content: "";
  z-index: 0;
  right: 0;
}

@media (max-width: 767px) {
  .main .m-contents .m-img {
    position: static;
  }
}

.main .m-contents .m-img img {
  width: 990px;
  height: 660px;
}

@media (max-width: 1087px) {
  .main .m-contents .m-img img {
    width: 680px;
    height: 500px;
  }
}

@media (min-width: 768px) and (max-width: 1087px) {
  .main .m-contents .m-img img {
    width: 600px;
    height: 460px;
  }
}

@media (max-width: 767px) {
  .main .m-contents .m-img img {
    max-width: 100%;
    height: 100%;
  }
}

.concept {
  margin: 0 40px;
  margin-top: 62%;
}

@media (min-width: 768px) and (max-width: 1087px) {
  .concept {
    margin-top: 50%;
  }
}

@media (max-width: 767px) {
  .concept {
    margin: 70px 0;
  }
}

.concept .c-inner {
  margin-top: 80px;
  display: flex;
}

@media (max-width: 767px) {
  .concept .c-inner {
    margin-top: 50px;
    display: block;
  }
}

.concept .c-inner img {
  width: 680px;
  height: 400px;
}

@media (max-width: 1087px) {
  .concept .c-inner img {
    width: 500px;
    height: 350px;
  }
}

@media (min-width: 768px) and (max-width: 1087px) {
  .concept .c-inner img {
    width: 380px;
    height: 300px;
  }
}

@media (max-width: 767px) {
  .concept .c-inner img {
    width: 345px;
    height: 240px;
  }
}

.concept .c-inner .c-left {
  margin-top: 150px;
  margin-left: 80px;
  text-align: left;
}

@media (max-width: 1087px) {
  .concept .c-inner .c-left {
    margin-top: 70px;
    margin-left: 60px;
  }
}

@media (max-width: 767px) {
  .concept .c-inner .c-left {
    margin-top: 20px;
    margin-left: 0px;
  }
}

.concept .c-inner .c-left h2 {
  line-height: 34px;
  font-size: 20px;
  line-height: 34px;
  font-weight: bold;
  margin-bottom: 48px;
}

@media (max-width: 1087px) {
  .concept .c-inner .c-left h2 {
    font-size: 16px;
    margin-bottom: 30px;
  }
}

@media (min-width: 768px) and (max-width: 1087px) {
  .concept .c-inner .c-left h2 {
    font-size: 12px;
    margin-bottom: 20px;
  }
}

@media (max-width: 767px) {
  .concept .c-inner .c-left h2 {
    font-size: 14px;
    margin-bottom: 15px;
    line-height: 1.3;
    letter-spacing: 1.7;
  }
}

.concept .c-inner .c-left p {
  font-size: 16px;
  line-height: 27px;
}

@media (max-width: 1087px) {
  .concept .c-inner .c-left p {
    font-size: 13px;
  }
}

@media (max-width: 767px) {
  .concept .c-inner .c-left p {
    font-size: 10px;
    line-height: 1.5;
  }
}

.feature {
  margin: 0 40px;
  margin-top: 160px;
  text-align: center;
}

@media (max-width: 1087px) {
  .feature {
    margin-top: 100px;
  }
}

@media (max-width: 767px) {
  .feature {
    margin-top: 30px;
  }
}

.feature .f-inner {
  margin-top: 80px;
  display: flex;
  flex: wrap;
}

@media (max-width: 767px) {
  .feature .f-inner {
    display: block;
  }
}

.feature .f-inner .f-left,
.feature .f-inner .f-center,
.feature .f-inner .f-right {
  width: 340px;
  box-shadow: 10px 10px 15px -10px grey;
  height: auto;
  overflow: hidden;
  margin: 0 150px 0 5px;
}

@media (max-width: 1087px) {
  .feature .f-inner .f-left,
  .feature .f-inner .f-center,
  .feature .f-inner .f-right {
    margin: 0 70px 0 5px;
  }
}

@media (max-width: 767px) {
  .feature .f-inner .f-left,
  .feature .f-inner .f-center,
  .feature .f-inner .f-right {
    margin: 0 30px 0 5px;
  }
}

.feature .f-inner .f-left:nth-child(3n),
.feature .f-inner .f-center:nth-child(3n),
.feature .f-inner .f-right:nth-child(3n) {
  margin-right: 0;
}

.feature .f-inner .f-left:hover img,
.feature .f-inner .f-center:hover img,
.feature .f-inner .f-right:hover img {
  transform: scale(1.1, 1.1);
  transition: 1s all;
}

.feature .f-inner img {
  width: 100%;
  height: 100%;
}

@media (max-width: 767px) {
  .feature .f-inner img {
    min-width: 100%;
    height: 100%;
  }
}

.feature .f-inner .f-dec {
  padding: 32px 0;
  line-height: 27px;
  font-weight: bold;
}

@media (max-width: 1087px) {
  .feature .f-inner .f-dec {
    font-size: 12px;
  }
}

@media (max-width: 1087px) {
  .feature .f-inner .f-dec {
    font-size: 10px;
  }
}

.ad1 {
  margin-top: 160px;
  color: white;
}

@media (max-width: 1087px) {
  .ad1 {
    margin-top: 100px;
  }
}

.ad1 .a-inner {
  max-width: 100%;
  height: 478px;
  background-image: url(../img/bg.png);
  background-repeat: no-repeat;
  background-position: center center;
  opacity: 0.7;
  background-size: cover;
  padding-top: 126px;
}

@media (max-width: 1087px) {
  .ad1 .a-inner {
    height: 400px;
    padding-top: 80px;
  }
}

.ad1 .a-inner .a-dec {
  margin: 0 40px;
}

.ad1 .a-inner .a-dec h2 {
  font-size: 22px;
  line-height: 34px;
}

@media (max-width: 1087px) {
  .ad1 .a-inner .a-dec h2 {
    font-size: 18px;
  }
}

.ad1 .a-inner .a-dec p {
  margin-top: 80px;
  line-height: 27px;
}

@media (max-width: 1087px) {
  .ad1 .a-inner .a-dec p {
    margin-top: 60px;
    font-size: 13px;
  }
}

.product {
  margin-top: 160px;
  width: 100%;
  text-align: center;
}

@media (max-width: 1087px) {
  .product {
    margin-top: 100px;
  }
}

.product .p-inner {
  margin-top: 80px;
  display: flex;
  flex: wrap;
}

.product .p-inner .p-container {
  margin: 0 170px;
  width: 260px;
  height: 376px;
  overflow: hidden;
}

@media (max-width: 1087px) {
  .product .p-inner .p-container {
    width: 180px;
    height: 330px;
    margin: 0 130px;
  }
}

@media (min-width: 768px) and (max-width: 1087px) {
  .product .p-inner .p-container {
    width: 150px;
    height: 280px;
  }
}

.product .p-inner .p-container:hover img {
  transform: scale(1.1, 1.1);
  transition: 1s all;
}

.product .p-left,
.product .p-center,
.product .p-right {
  width: calc(33.333% - 80px * 2 / 3);
  height: 376px;
}

@media (max-width: 1087px) {
  .product .p-left,
  .product .p-center,
  .product .p-right {
    height: 300px;
    width: calc(33.333% - 100px * 2 / 3);
  }
}

@media (min-width: 768px) and (max-width: 1087px) {
  .product .p-left,
  .product .p-center,
  .product .p-right {
    height: 270px;
    width: calc(33.333% - 100px * 2 / 3);
  }
}

.product .p-pic {
  width: 260px;
  height: 260px;
}

@media (max-width: 1087px) {
  .product .p-pic {
    width: 200px;
    height: 200px;
  }
}

.product .p-dec {
  text-align: left;
  margin-top: 24px;
  line-height: 27px;
  font-weight: bold;
}

@media (max-width: 1087px) {
  .product .p-dec {
    margin-top: 20px;
    font-size: 12px;
  }
}

@media (min-width: 768px) and (max-width: 1087px) {
  .product .p-dec {
    margin-top: 16px;
    font-size: 10px;
    line-height: 1.4;
  }
}

@media (min-width: 768px) and (max-width: 1087px) {
  .product .p-dec {
    margin-top: 12px;
    font-size: 9px;
    line-height: 1.4;
  }
}

.product .p-price {
  color: #989898;
  margin-top: 16px;
}

@media (max-width: 1087px) {
  .product .p-price {
    margin-top: 10px;
    font-size: 12px;
  }
}

@media (min-width: 768px) and (max-width: 1087px) {
  .product .p-price {
    margin-top: 6px;
    font-size: 12px;
  }
}

.product .p-btn {
  margin-top: 80px;
  outline: none;
}

@media (max-width: 1087px) {
  .product .p-btn {
    margin-top: 60px;
  }
}

.news {
  margin: 160px 160px 0px 160px;
}

@media (max-width: 1087px) {
  .news {
    margin: 130px 130px 0px 130px;
  }
}

.news .n-infos {
  margin-top: 66px;
}

@media (max-width: 1087px) {
  .news .n-infos {
    margin-top: 90px;
  }
}

.news .n-infos .n-info {
  border-bottom: 1px solid #e0e0e0;
  max-width: 1040px;
  display: flex;
  margin-bottom: 22px;
}

@media (max-width: 1087px) {
  .news .n-infos .n-info {
    margin-bottom: 20px;
  }
}

.news .n-infos .n-info:hover img {
  transition: 1s all;
  transform: scale(1.1, 1.1);
}

.news .n-infos .n-info .n-pic {
  width: 350px;
  height: 200px;
  overflow: hidden;
}

@media (max-width: 1087px) {
  .news .n-infos .n-info .n-pic {
    width: 320px;
    height: 150px;
  }
}

.news .n-infos .n-info .n-pic img {
  width: 350px;
  height: 200px;
}

@media (max-width: 1087px) {
  .news .n-infos .n-info .n-pic img {
    width: 280px;
    height: 150px;
  }
}

.news .n-infos .n-info .n-contents {
  margin: 25px 0 45px 40px;
}

@media (max-width: 1087px) {
  .news .n-infos .n-info .n-contents {
    margin: 15px 0 15px 25px;
  }
}

.news .n-infos .n-info .n-contents .n-date {
  font-size: 14px;
}

.news .n-infos .n-info .n-contents .n-title {
  padding-top: 16px;
  font-size: 18px;
  font-weight: bold;
}

.news .n-infos .n-info .n-contents .n-desc {
  font-size: 14px;
  padding: 24px 0px 48px;
  color: #888888;
  line-height: 20px;
}

@media (max-width: 1087px) {
  .news .n-infos .n-info .n-contents .n-desc {
    padding: 18px 0px 30px;
  }
}

.news .n-infos .n-info:hover {
  transition: 1s all;
}

.news .n-btn {
  outline: none;
  text-align: center;
  margin-top: 48px;
}

.ad2 {
  margin: 160px 40px 0 40px;
}

@media (max-width: 1087px) {
  .ad2 {
    margin: 120px 30px 0 30px;
  }
}

.ad2 .ad2-inner {
  margin-top: 80px;
  display: flex;
}

@media (max-width: 1087px) {
  .ad2 .ad2-inner {
    margin-top: 65px;
  }
}

.ad2 .ad2-inner .ad2-right {
  width: 600px;
}

@media (max-width: 1087px) {
  .ad2 .ad2-inner .ad2-right {
    width: 500px;
  }
}

@media (min-width: 768px) and (max-width: 1087px) {
  .ad2 .ad2-inner .ad2-right {
    width: 360px;
    height: 360px;
  }
}

.ad2 .ad2-inner .ad2-right img {
  width: 650px;
  height: 400px;
}

@media (max-width: 1087px) {
  .ad2 .ad2-inner .ad2-right img {
    width: 500px;
    height: 350px;
  }
}

@media (min-width: 768px) and (max-width: 1087px) {
  .ad2 .ad2-inner .ad2-right img {
    width: 400px;
    height: 360px;
  }
}

.ad2 .ad2-inner .ad2-left {
  width: 600px;
  margin-top: 150px;
  margin-right: 80px;
  text-align: left;
}

@media (max-width: 1087px) {
  .ad2 .ad2-inner .ad2-left {
    width: 500px;
    margin-top: 100px;
    margin-right: 65px;
  }
}

.ad2 .ad2-inner .ad2-left h2 {
  line-height: 48px;
  font-size: 28px;
  line-height: 34px;
  font-weight: bold;
  margin-bottom: 48px;
}

@media (max-width: 1087px) {
  .ad2 .ad2-inner .ad2-left h2 {
    font-size: 20px;
    margin-bottom: 35px;
    line-height: 40px;
  }
}

.ad2 .ad2-inner .ad2-left p {
  font-size: 16px;
  line-height: 27px;
  line-height: 27px;
}

@media (max-width: 1087px) {
  .ad2 .ad2-inner .ad2-left p {
    font-size: 13px;
    line-height: 22px;
  }
}

.contact {
  padding: 70px 0 85px 0;
  margin-top: 225px;
  background-image: url(../img/contact.png);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
}

@media (max-width: 1087px) {
  .contact {
    padding: 50px 0px 65px 0;
    margin-top: 170px;
  }
}

.contact .c-title {
  font-size: 40px;
  text-align: center;
  position: relative;
}

@media (max-width: 1087px) {
  .contact .c-title {
    font-size: 25px;
  }
}

.contact .c-title:after {
  position: absolute;
  content: "";
  top: 50px;
  left: 48%;
  width: 60px;
  color: #3ea1d1;
  border-bottom: 2px solid #3ea1d1;
}

@media (max-width: 1087px) {
  .contact .c-title:after {
    top: 40px;
    width: 50px;
    left: 47.4%;
    font-weight: bold;
  }
}

.contact .caution {
  margin: 80px 0 23px 0;
}

@media (max-width: 1087px) {
  .contact .caution {
    margin: 60px 0 19px 0;
    font-size: 13px;
  }
}

.contact .dl {
  width: 600px;
  margin: 0 auto;
}

@media (max-width: 1087px) {
  .contact .dl {
    width: 500px;
  }
}

.contact .dl .con-content {
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
  position: relative;
}

@media (max-width: 1087px) {
  .contact .dl .con-content {
    margin-bottom: 28px;
  }
}

.contact .dl .con-content .dt {
  color: white;
  background-color: #3ea1d1;
  font-size: 18px;
  border: 1px solid #3ea1d1;
  padding: 12px 21px;
  width: 200px;
  height: 45px;
  margin-right: 20px;
  position: relative;
}

@media (max-width: 1087px) {
  .contact .dl .con-content .dt {
    font-size: 14px;
    padding: 10px 15px;
    width: 150px;
    height: 35px;
  }
}

.contact .dl .con-content .dt:after {
  content: "";
  position: absolute;
  right: -43px;
  bottom: -1px;
  border-style: solid;
  border-color: transparent transparent transparent #3ea1d1;
  border-width: 21px 30px 21px 12px;
}

@media (max-width: 1087px) {
  .contact .dl .con-content .dt:after {
    right: -35px;
    bottom: -1px;
    border-width: 18px 25px 18px 10px;
  }
}

.contact .dl .con-content .kome {
  color: red;
}

.contact .dl .con-content .dd_input {
  width: 320px;
  height: 40px;
}

@media (max-width: 1087px) {
  .contact .dl .con-content .dd_input {
    width: 270px;
    height: 35px;
  }
}

.contact .dl .con-content .con-btn {
  background-color: white;
  color: #3ea1d1;
  border: 1px solid #3ea1d1;
  font-size: 16px;
  padding: 12px 23px;
  margin-right: 0;
  position: relative;
  outline: none;
}

@media (max-width: 1087px) {
  .contact .dl .con-content .con-btn {
    font-size: 13px;
    padding: 9px 17px;
  }
}

.contact .dl .con-content .active {
  transition: 0.3s all;
  color: white;
  background-color: #3ea1d1;
}

.contact .dl .adj {
  position: absolute;
  content: "";
  right: 160px;
}

@media (max-width: 1087px) {
  .contact .dl .adj {
    right: 135px;
  }
}

.contact .dl .concon {
  position: absolute;
  content: "";
  right: 184px;
}

@media (max-width: 1087px) {
  .contact .dl .concon {
    right: 172px;
  }
}

.contact .dl .label-checkbox {
  position: relative;
}

.contact .dl .checkbox {
  width: 22px;
  height: 22px;
  position: absolute;
  content: "";
  left: 22%;
  top: -40%;
}

@media (max-width: 1087px) {
  .contact .dl .checkbox {
    width: 15px;
    height: 15px;
    left: 21%;
    top: -5%;
  }
}

.contact .dl .privacy_under {
  color: #3ea1d1;
  text-decoration: underline;
}

@media (max-width: 1087px) {
  .contact .dl .privacy_under {
    font-size: 13px;
  }
}

.contact .send {
  outline: none;
  font-size: 14px;
  border: 1px solid #3ea1d1;
  color: #3ea1d1;
  background-color: #fff;
  padding: 16px 54px;
  letter-spacing: 1.5px;
}

@media (max-width: 1087px) {
  .contact .send {
    font-size: 10px;
    padding: 10px 45px;
  }
}

.contact .send:hover {
  color: white;
  background-color: #3ea1d1;
  transition: 0.4s all;
}

.contact .send[disabled] {
  cursor: not-allowed;
  background-color: #aaa;
}

.contact textarea[name="contact"] {
  width: 323px;
  height: 132px;
}

@media (max-width: 1087px) {
  .contact textarea[name="contact"] {
    width: 270px;
    height: 120px;
  }
}

footer {
  text-align: center;
  padding: 48px 0 17px 0;
}

@media (max-width: 1087px) {
  footer {
    padding: 40px 0 13px 0;
  }
}

footer .f-logo {
  margin: 0 auto 24px auto;
  width: 120px;
  height: 22px;
}

@media (max-width: 1087px) {
  footer .f-logo {
    margin: 0 auto 18px auto;
  }
}

.f-inner .f-info {
  font-size: 12px;
  margin-bottom: 36px;
  display: flex;
  justify-content: center;
  position: relative;
}

@media (max-width: 1087px) {
  .f-inner .f-info {
    font-size: 10px;
    margin-bottom: 28px;
  }
}

.f-inner .f-info .f-privacy {
  position: absolute;
  content: "";
  left: 40%;
}

@media (max-width: 1087px) {
  .f-inner .f-info .f-privacy {
    left: 36%;
  }
}

.f-inner .f-info .f-low {
  position: absolute;
  content: "";
  right: 38%;
}

@media (max-width: 1087px) {
  .f-inner .f-info .f-low {
    right: 35%;
  }
}

.f-inner .f-sns {
  margin-bottom: 24px;
}

@media (max-width: 1087px) {
  .f-inner .f-sns {
    margin-bottom: 20px;
  }
}

.f-inner .f-sns .fab {
  width: 22px;
  height: 22px;
}

@media (max-width: 1087px) {
  .f-inner .f-sns .fab {
    width: 19px;
    height: 19px;
  }
}

.f-inner .f-sns .fa-twitter,
.f-inner .f-sns .fa-instagram,
.f-inner .f-sns .fa-line {
  color: #3ea1d1;
}

.f-inner .f-sns .fa-twitter:hover,
.f-inner .f-sns .fa-instagram:hover,
.f-inner .f-sns .fa-line:hover {
  opacity: 0.5;
  transition: 0.3s all;
}

.f-inner .f-sns .fa-instagram {
  margin: 0 40px 0;
}

.f-inner .resereve {
  color: #888888;
}

@media (max-width: 1087px) {
  .f-inner .resereve {
    font-size: 13px;
  }
} */




<!-- scss -->
// ブレークポイント
// $breakpoints: (
//   "sp": "(max-width: 767px)",
//   "tab-only": "(min-width: 768px) and (max-width: #{$layout-width-inner - 1px})",
//   "tab": "(max-width: #{$layout-width-inner - 1px})",
//   "pc": "(min-width: #{$layout-width-inner})"
// );
\// *,
// *:before,
// *:after {
//   -webkit-box-sizing: border-box;
//   box-sizing: border-box;
// }
// .more {
//   outline: none;
//   font-size: 14px;
//   border: 1px solid $font-color-main;
//   color: $font-color-main;
//   background-color: #fff;
//   padding: 16px 54px;
//   letter-spacing: 1.5px;
//   // text-align: center;
//   @include mq(tab) {
//     font-size: 10px;
//     padding: 12px 50px;
//   }

//   &:hover {
//     color: white;
//     background-color: $font-color-main;
//     transition: 0.4s all;
//   }
// }
// a {
//   text-decoration: none;
//   color: $font-color-bace;
// }
// img {
//   width: 100%;
//   height: auto;
// }
// .title {
//   font-size: 40px;
//   text-align: center;
//   position: relative;
//   @include mq(tab) {
//     font-size: 30px;
//     padding-top: 50px;
//   }
//   @include mq(tab-only) {
//     font-size: 25px;
//     padding-top:35px;
//   }
//   @include mq(sp) {
//     font-size: 20px;
//     padding-top:20px;
//   }

//   &:after {
//     position: absolute;
//     content: "";
//     top: 60px;
//     left: 48%;
//     width: 60px;
//     color: $font-color-main;
//     border-bottom: 2px solid $font-color-main;
//     @include mq(tab) {
//       width: 40px;
//       top: 125%;
//     }
//     @include mq(sp) {
//       width: 36px;
//       top: 125%;
//       left: 46%;
//     }
//   }
// }
// body {
//   font-family: "ヒラギノ明朝 ProN", "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック体", "YuGothic",
//     "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "メイリオ", "Meiryo", "verdana", sans-serif;
//   font-size: 16px;
//   width: 100%;
//   box-sizing: border-box;
//   margin: 0;
//   margin-right: 0;
//   color: $font-color-bace;
//   // margin: 0 40px;
//   @include mq(sp){
//     margin:0px 15px;
//   }
// }

// header {
//   position: fixed;
//   background-color: #fff;
//   z-index: 5;
//   margin: $margin;
//   width: 100%;
//   height: 70px;
//   // padding: 0 40px;
//   // align-items: center;
//   //heightと同じにすると縦方向真ん中が実現できる
//   @include mq(tab) {
//     margin: 0;
//     height: 60px;
//   }

//   .h-inner {
//     padding: 0 40px;
//     display: flex;
//     height: auto;
//     transition: all 0.5s ease-in-out 0s;
//     @include mq(sp) {
//     padding: 0;
//     }
//     .h-left {
//       margin-right: auto;
//       img {
//         // vertical-align: middle;
//         margin-top: 20px;
//         width: 120px;
//         height: 21px;
//         @include mq(tab) {
//           width: 100px;
//           height: 17px;
//         }
//         @include mq(sp) {
//           width: 120px;
//           height: 21px;
//         }
//       }
//     }
//   }
//   .hr-navs {
//     line-height: 70px;
//     display: flex;
//     @include mq(tab) {
//       line-height: 55px;
//     }
//     @include mq(sp) {
//       display:none;
//     }
//     li {
//       margin-right: 48px;
//       a {
//         @include mq(tab) {
//           font-size: 13px;
//         }
//         &:hover {
//           color: $font-color-main;
//         }
//       }
//     }
//   }
// }

// .main {
//   margin: $margin;
//   padding-bottom: 80px;
//   @include mq(sp) {
//     padding-bottom: 15px;
//     margin: 0;
//     min-width: 100%;
//   }
//   .m-contents {
//     display: flex;
//     position: relative;
//     transition: all 0.5s ease-in-out 0s;
//     @include mq(sp) {
//       display: block;
//     }
//     .m-textbox {
//       position: absolute;
//       border: 1px solid transparent;
//       background-color: #fff;
//       width: 380px;
//       height: 330px;
//       top: 165px;
//       content: "";
//       z-index: 1;
//       @include mq(tab) {
//         left: -4px;
//         top: 130px;
//         width: 370px;
//         height: 280px;
//       }
//       @include mq(sp) {
//         position: static;
//         z-index: 0;
//         display: block;
//         width: 200px;
//         height: 100px;
//       }
//       h2 {
//         font-size: 26px;
//         line-height: $line-height-f;
//         padding-top: 92px;
//         font-weight: bold;
//         color: $font-color-bace;
//         @include mq(tab) {
//           font-size: 20px;
//           padding-top: 50px;
//         }
//         @include mq(sp) {
//           font-size: 18px;
//           padding-top: 30px;
//           line-height: 2;
//         }
//       }
//       p {
//         margin-top: 28px;
//         line-height: $line-height-t;
//         @include mq(tab) {
//           margin-top: 15px;
//           font-size: 13px;
//         }
//         @include mq(sp) {
//           font-size: 12px;
//           margin-top: 6px;
//           line-height: 1.5;
//         }
//       }
//     }
//     .m-img {
//       position: absolute;
//       content: "";
//       z-index: 0;
//       right: 0;
//       @include mq(sp) {
//         position: static;
//       }
//       img {
//         width: 990px;
//         height: 660px;
//         @include mq(tab) {
//           width: 680px;
//           height: 500px;
//         }
//         @include mq(tab-only) {
//           width: 600px;
//           height: 460px;
//         }
//         @include mq(sp) {
//           max-width: 100%;
//           height: 100%;
//         }
//       }
//     }
//   }
// }
// .concept {
//   margin: $margin;
//   margin-top: 62%; //???
//   @include mq(tab-only) {
//     margin-top: 50%;
//   }
//   @include mq(sp) {
//     margin: 70px 0;
//   }
//   .c-inner {
//     margin-top: 80px;
//     display: flex;
//     @include mq(sp) {
//       margin-top: 50px;
//       display: block;
//     }
//     img {
//       width: 680px;
//       height: 400px;
//       @include mq(tab) {
//         width: 500px;
//         height: 350px;
//       }
//       @include mq(tab-only) {
//         width: 380px;
//         height: 300px;
//       }
//       @include mq(sp) { //////////▲
//         width: 345px;
//         height: 240px;
//       }
//     }
//     .c-left {
//       margin-top: 150px; //??
//       margin-left: 80px;
//       text-align: left;
//       @include mq(tab) {
//         margin-top: 70px;
//         margin-left: 60px;
//       }
//       @include mq(sp) {
//         margin-top: 20px;
//         margin-left: 0px;
//       }

//       h2 {
//         line-height: 34px;
//         font-size: 20px;
//         line-height: $line-height-s;
//         font-weight: bold;
//         margin-bottom: 48px;
//         @include mq(tab) {
//           font-size: 16px;
//           margin-bottom: 30px;

//         }
//         @include mq(tab-only) {
//           font-size: 12px;
//           margin-bottom: 20px;
//         }
//         @include mq(sp) {
//           font-size: 14px;
//           margin-bottom: 15px;
//           line-height: 1.3;
//           letter-spacing: 1.7;
//         }
//       }
//       p {
//         font-size: 16px;
//         line-height: $line-height-t;
//         @include mq(tab) {
//           font-size: 13px;
//         }
//         @include mq(sp) {
//           font-size: 10px;
//           line-height: 1.5;
//         }
//       }
//     }
//   }
// }

// .feature {
//   margin: $margin;
//   margin-top: 160px;
//   text-align: center;
//   @include mq(tab) {
//     margin-top: 100px;
//   }
//   @include mq(sp) {
//     margin-top: 30px;
//   }
//   .f-inner {
//     margin-top: 80px;
//     display: flex;
//     flex: wrap;
//     @include mq(sp){
//       display: block;
//     }
//     .f-left,
//     .f-center,
//     .f-right {
//       width: 340px;
//       box-shadow: 10px 10px 15px -10px grey;
//       height: auto;
//       overflow: hidden;
//       margin: 0 150px 0 5px;
//       @include mq(tab) {
//         margin: 0 70px 0 5px;
//       }
//       @include mq(sp) {
//         margin: 0 30px 0 5px;

//       }
//       &:nth-child(3n) {
//         margin-right: 0;
//       }
//       &:hover {
//         img {
//           transform: scale(1.1, 1.1);
//           transition: 1s all;
//         }
//       }
//     }
//     img {
//       width: 100%;
//       height: 100%;
//       @include mq(sp){
//         min-width: 100%;
//         height: 100%;
//       }
//     }

//     .f-dec {
//       padding: 32px 0;
//       line-height: $line-height-t;
//       font-weight: bold;
//       @include mq(tab) {
//         font-size: 12px;
//       }
//       @include mq(tab) {
//         font-size: 10px;
//       }
//     }
//   }
// }

// .ad1 {
//   margin-top: 160px;
//   color: white;
//   @include mq(tab) {
//     margin-top: 100px;
//   }
//   .a-inner {
//     max-width: 100%;
//     height: 478px;
//     background-image: url(../img/bg.png);
//     background-repeat: no-repeat;
//     background-position: center center;
//     opacity: 0.7;
//     background-size: cover;
//     padding-top: 126px;
//     @include mq(tab) {
//       height: 400px;
//       padding-top: 80px;
//     }
//     .a-dec {
//       margin: $margin;
//       h2 {
//         font-size: 22px;
//         // margin: 40px;
//         line-height: $line-height-s;
//         @include mq(tab) {
//           font-size: 18px;
//         }
//       }
//       p {
//         margin-top: 80px;
//         line-height: $line-height-t;
//         @include mq(tab) {
//           margin-top: 60px;
//           font-size: 13px;
//         }
//       }
//     }
//   }
// }

// .product {
//   margin-top: 160px;
//   width: 100%;
//   text-align: center;
//   @include mq(tab) {
//     margin-top: 100px;
//   }
//   .p-inner {
//     margin-top: 80px;
//     display: flex;
//     flex: wrap;
//     // align-items: center;
//     .p-container {
//       margin: 0 170px;
//       width: 260px;
//       height: 376px;
//       overflow: hidden;
//       @include mq(tab) {
//         width: 180px;
//         height: 330px;
//         margin: 0 130px;
//       }
//       @include mq(tab-only) {
//         width: 150px;
//         height: 280px;
//       }
//       &:hover {
//         img {
//           transform: scale(1.1, 1.1);
//           transition: 1s all;
//         }
//       }
//     }
//   }
//   .p-left,
//   .p-center,
//   .p-right {
//     width: calc(33.333% - 80px * 2 / 3);
//     // box-shadow: 10px 10px 15px -10px grey;
//     height: 376px;
//     @include mq(tab) {
//       height: 300px;
//       width: calc(33.333% - 100px * 2 / 3);
//     }
//     @include mq(tab-only) {
//       height: 270px;
//       width: calc(33.333% - 100px * 2 / 3);
//     }

//   }
//   .p-pic {
//     width: 260px;
//     height: 260px;
//     @include mq(tab) {
//       width: 200px;
//       height: 200px;
//     }
//   }
//   .p-dec {
//     text-align: left;
//     margin-top: 24px;
//     line-height: $line-height-t;
//     font-weight: bold;
//     @include mq(tab) {
//       margin-top: 20px;
//       font-size: 12px;
//     }
//     @include mq(tab-only) {
//       margin-top: 16px;
//       font-size: 10px;
//       line-height: 1.4;
//     }
//     @include mq(tab-only) {
//       margin-top: 12px;
//       font-size: 9px;
//       line-height: 1.4;
//     }

//   }
//   .p-price {
//     color: #989898;
//     margin-top: 16px;
//     @include mq(tab) {
//       margin-top: 10px;
//       font-size: 12px;
//     }
//     @include mq(tab-only) {
//       margin-top: 6px;
//       font-size: 12px;
//     }
//   }
//   .p-btn {
//     margin-top: 80px;
//     outline: none;
//     @include mq(tab) {
//       margin-top: 60px;
//     }
//   }
// }

// .news {
//   margin: 160px 160px 0px 160px;
//   @include mq(tab) {
//     margin: 130px 130px 0px 130px;
//   }

//   .n-infos {
//     margin-top: 66px;
//     @include mq(tab) {
//       margin-top: 90px;
//     }

//     .n-info {
//       border-bottom: 1px solid #e0e0e0;
//       max-width: 1040px;
//       display: flex;
//       margin-bottom: 22px;
//       @include mq(tab) {
//         margin-bottom: 20px;
//       }

//       &:hover {
//         img {
//           transition: 1s all;
//           transform: scale(1.1, 1.1);
//         }
//       }
//       .n-pic {
//         width: 350px;
//         height: 200px;
//         overflow: hidden;
//         @include mq(tab) {
//           width: 320px;
//           height: 150px;
//         }

//         img {
//           width: 350px;
//           height: 200px;
//           @include mq(tab) {
//             width: 280px;
//             height: 150px;
//           }
//         }
//       }
//       .n-contents {
//         margin: 25px 0 45px 40px;
//         @include mq(tab) {
//           margin: 15px 0 15px 25px;
//         }

//         .n-date {
//           // margin-top: 100px;
//           font-size: 14px;
//         }
//         .n-title {
//           padding-top: 16px;
//           font-size: 18px;
//           font-weight: bold;
//         }
//         .n-desc {
//           font-size: 14px;
//           padding: 24px 0px 48px;
//           color: #888888;
//           line-height: 20px;
//           @include mq(tab) {
//             padding: 18px 0px 30px;
//           }
//         }
//       }
//       &:hover {
//         // opacity:;
//         // transform: scale(1.1,1.1);
//         transition: 1s all;
//       }
//     }
//   }
//   .n-btn {
//     outline: none;
//     text-align: center;
//     margin-top: 48px;
//   }
// }

// .ad2 {
//   margin: 160px 40px 0 40px;
//   // max-width: 1px;
//   // align-items: center;
//   @include mq(tab) {
//     margin: 120px 30px 0 30px;
//   }

//   .ad2-inner {
//     margin-top: 80px;
//     display: flex;
//     @include mq(tab) {
//       margin-top: 65px;
//     }

//     .ad2-right {
//       width: 600px;
//       @include mq(tab) {
//         width: 500px;
//       }
//       @include mq(tab-only) {
//         width: 360px;
//         height: 360px;
//       }

//       img {
//         width: 650px;
//         height: 400px;
//         @include mq(tab) {
//           width: 500px;
//           height: 350px;
//         }
//         @include mq(tab-only) {
//           width: 400px;
//           height: 360px;
//         }
//       }
//     }
//     .ad2-left {
//       width: 600px;
//       margin-top: 150px; //??
//       margin-right: 80px;
//       text-align: left;
//       @include mq(tab) {
//         width: 500px;
//         margin-top: 100px;
//         margin-right: 65px;
//       }

//       h2 {
//         line-height: 48px;
//         font-size: 28px;
//         line-height: $line-height-s;
//         font-weight: bold;
//         margin-bottom: 48px;
//         @include mq(tab) {
//           font-size: 20px;
//           margin-bottom: 35px;
//           line-height: 40px;
//         }
//       }
//       p {
//         font-size: 16px;
//         line-height: 27px;
//         line-height: $line-height-t;
//         @include mq(tab) {
//           font-size: 13px;
//           line-height: 22px;
//         }
//       }
//     }
//   }
// }

// .contact {
//   padding: 70px 0 85px 0;
//   margin-top: 225px;
//   background-image: url(../img/contact.png);
//   background-position: center center;
//   background-size: cover;
//   background-repeat: no-repeat;
//   text-align: center;
//   @include mq(tab) {
//     padding: 50px 0px 65px 0;
//     margin-top: 170px;
//   }

//   .c-title {
//     // padding-top: 70px;
//     font-size: 40px;
//     text-align: center;
//     position: relative;
//     @include mq(tab) {
//       font-size: 25px;
//     }

//     &:after {
//       position: absolute;
//       content: "";
//       top: 50px;
//       left: 48%;
//       width: 60px;
//       color: $font-color-main;
//       border-bottom: 2px solid $font-color-main;
//       @include mq(tab) {
//         top: 40px;
//         width: 50px;
//         left: 47.4%;
//         font-weight: bold;
//       }
//     }
//   }
//   .caution {
//     margin: 80px 0 23px 0;
//     @include mq(tab) {
//       margin: 60px 0 19px 0;
//       font-size:13px;
//     }
//   }
//   .dl {
//     width: 600px;
//     margin: 0 auto;
//     @include mq(tab) {
//       width: 500px;
//     }

//     .con-content {
//       display: flex;
//       justify-content: center;
//       margin-bottom: 32px;
//       position: relative;
//       @include mq(tab) {
//         margin-bottom: 28px;
//       }

//       .dt {
//         //名前メアド選択問い合わせ
//         color: white;
//         background-color: $font-color-main;
//         font-size: 18px;
//         border: 1px solid $font-color-main;
//         padding: 12px 21px;
//         width: 200px;
//         height: 45px;
//         margin-right: 20px;
//         position: relative;
//         @include mq(tab) {
//           font-size: 14px;
//           padding: 10px 15px;
//           width: 150px;
//           height: 35px;
//         }

//         &:after {
//           content: "";
//           position: absolute;
//           right: -43px;
//           bottom: -1px;
//           border-style: solid;
//           border-color: transparent transparent transparent $font-color-main;
//           border-width: 21px 30px 21px 12px;
//           @include mq(tab) {
//             right: -35px;
//             bottom: -1px;
//             border-width: 18px 25px 18px 10px;
//           }
//         }
//       }
//       .kome {
//         //米印
//         color: red;
//       }
//       .dd_input {
//         width: 320px;
//         height: 40px;
//         @include mq(tab) {
//           width: 270px;
//           height: 35px;
//         }
//       }
//       .con-btn {
//         //法人個人ボタン****
//         background-color: white;
//         color: $font-color-main;
//         border: 1px solid $font-color-main;
//         font-size: 16px;
//         padding: 12px 23px;
//         margin-right: 0;
//         position: relative;
//         outline: none;
//         @include mq(tab) {
//           font-size: 13px;
//           padding: 9px 17px;
//         }
//       }
//       .active {
//         //jQuery用
//         transition: 0.3s all;
//         color: white;
//         background-color: $font-color-main;
//       }
//     }
//     .adj {
//       //法人個人ボタン調整******
//       position: absolute;
//       content: "";
//       right: 160px;
//       @include mq(tab) {
//         right: 135px;
//       }
//     }
//     .concon {
//       position: absolute;
//       content: "";
//       right: 184px;
//       @include mq(tab) {
//         right: 172px;
//       }

//       //法人個人ボタン
//     }
//     .label-checkbox {
//       position: relative;
//     }
//     .checkbox {
//       //チェックボタン
//       width: 22px;
//       height: 22px;
//       position: absolute;
//       content: "";
//       left: 22%;
//       top: -40%;
//       @include mq(tab){
//         width: 15px;
//         height: 15px;
//         left: 21%;
//         top: -5%;
//       }
//       // &:checked {
//       //   width: 20px;
//       //   height: 20px;
//       //   border-top-color: transparent;
//       //   border-right-color: transparent;
//       //   border-bottom-color: $font-color-main;
//       //   border-left-color: transparent;
//       //   transform: rotate(-50deg)
//       //   translate(10px, -9px);
//       //   &:checked + before{
//       //     content:"";
//       //     position: absolute;
//       //     right: 0;
//       //     bottom: -3px;
//       //     height: 15px;
//       //     width: 100%;
//       //     border-left: 4px solid red;
//       //   }
//       // }
//     }
//     .privacy_under {
//       color: $font-color-main;
//       text-decoration: underline;
//       @include mq(tab){
//         font-size: 13px;
//       }
//     }
//   }
//   .send {
//     outline: none;
//     font-size: 14px;
//     border: 1px solid $font-color-main;
//     color: $font-color-main;
//     background-color: #fff;
//     padding: 16px 54px;
//     letter-spacing: 1.5px;
//     @include mq(tab){
//       font-size: 10px;
//       padding: 10px 45px;
//     }
//     // text-align: center;
//     &:hover {
//       color: white;
//       background-color: $font-color-main;
//       transition: 0.4s all;
//     }
//   }
//   .send[disabled] {
//     cursor: not-allowed;
//     background-color: #aaa;
//   }
//   textarea[name="contact"] {
//     width: 323px;
//     height: 132px;
//     @include mq(tab) {
//       width: 270px;
//       height: 120px;
//     }
//   }
// }

// footer {
//   text-align: center;
//   padding: 48px 0 17px 0;
//   @include mq(tab){
//     padding: 40px 0 13px 0;
//   }

//   .f-logo {
//     margin: 0 auto 24px auto;
//     width: 120px;
//     height: 22px;
//     @include mq(tab){
//       margin: 0 auto 18px auto;
//     }

//   }
// }
// .f-inner {
//   .f-info {
//     font-size: 12px;
//     margin-bottom: 36px;
//     display: flex;
//     justify-content: center;
//     position: relative;
//     @include mq(tab){
//       font-size: 10px;
//       margin-bottom: 28px;
//     }

//     .f-privacy {
//       position: absolute;
//       content: "";
//       left: 40%;
//       @include mq(tab){
//         left: 36%;
//         }

//     }
//     .f-low {
//       position: absolute;
//       content: "";
//       right: 38%;
//       @include mq(tab){
//         right: 35%;
//       }

//     }
//   }
//   .f-sns {
//     margin-bottom: 24px;
//     @include mq(tab){
//       margin-bottom: 20px;
//     }

//     .fab {
//       width: 22px;
//       height: 22px;
//       @include mq(tab){
//         width: 19px;
//         height: 19px;
//       }

//     }
//     .fa-twitter,
//     .fa-instagram,
//     .fa-line {
//       color: $font-color-main;
//       &:hover {
//         opacity: 0.5;
//         transition: 0.3s all;
//       }
//     }
//     .fa-instagram {
//       margin: 0 40px 0;
//     }
//   }
//   .resereve {
//     color: $font-color-forth;
//     @include mq(tab){
//       font-size: 13px;
//     }

//   }
// }


<!-- HMTL -->

<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <!-- ★ -->
  <link rel="icon" href="./img/favicon.ico">
  <meta name="description" content="★スクレさん">
  <title>★スクレさん</title>
  <!-- ★ -->

  <!-- reset_css -->
  <link rel="stylesheet" href="./css/reset.css">
  <!-- font_awesome -->
  <link href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" rel="stylesheet">
  <!-- drawer.css -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/drawer/3.2.2/css/drawer.min.css" media="screen and (max-width:767px)">
  <!-- jquery & iScroll -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/iScroll/5.2.0/iscroll.min.js"></script>
  <!-- drawer.js -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/drawer/3.2.2/js/drawer.min.js"></script>
  <!-- wow -->
  <script src="js/wow.min.js"></script>
  <link rel="stylesheet" href="./css/animate.css">
  <!-- original -->
  <link rel="stylesheet" href="./css/style.css">
  <link rel="stylesheet" href="./js/script.js">

  <!-- 謎 -->
  <!-- <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.inview/1.0.0/jquery.inview.min.js"></script> -->


</head>

<body>
  <header>
    <div class="h-inner">
      <div class="h-left">
        <!-- <a href="#"> -->
        <img src="./img/logo.png" alt="">
        <!-- </a> -->
      </div>
      <div class="h-right">
        <ul class="hr-navs">
          <li><a href="#1">Concept</a></li>
          <li><a href="#2">Feature</a></li>
          <li><a href="#3">Product</a></li>
          <li><a href="#4">News</a></li>
          <li><a href="#5">Contact</a></li>
        </ul>
      </div>
      <!--h-right-->
    </div>
    <!--h-inner-->
  </header>

  <section class="main">
    <div class="m-contents">
      <div class="m-img">
        <img src="./img/top.png" alt="">
      </div>
      <div class="m-textbox">
        <h2>”可愛い”で地球を守る！</h2>
        <p>海洋マイクロプラスチックを素材とした<br>ハンドメイドアクセサリー「sobolon」</p>
      </div>
      <!--m-textbox-->
    </div>
    <!--m-contents-->
  </section>

  <section class="concept" id="1">
    <div class="title">
      Concept
    </div>
    <!--title-->

    <div class="c-inner">
      <div class="c-right">
        <img src="./img/concept-1.png" alt="">
      </div>
      <!--c-right-->

      <div class="c-left">
        <h2>可愛くて素敵なのは当たり前。<br>地球に優しくあるのも当たり前</h2>
        <p>「sobolon」は、海洋汚染の要因であるマイクロプラスチックを回収し、それらを素材としたハンドメイドアクセサリーを製作しているブランドです</p>
      </div>
      <!--c-left-->
    </div>
    <!--c-inner-->
  </section>

  <section class="feature" id="2">
    <div class="title">Feature</div>
    <div class="f-inner">

      <div class="f-left">
        <a href="" class="f-contents">
          <div class="fl-pic">
            <img src="./img/feature-1.png" alt="">
          </div>
          <!--fl-pic-->
          <div class="f-dec">
            <p>素材は海で採れた<br>マイクロプラスチップ</p>
          </div>
          <!--fl-dec-->
        </a>
        <!--fl-contents-->
      </div>
      <!--f-left-->


      <div class="f-center">
        <a href="" class="f-contents">
          <div class="fc-pic">
            <img src="./img/feature-2.png" alt="">
          </div>
          <!--fc-pic-->
          <div class="f-dec">
            <p>個性あふれる<br>”可愛い”デザイン</p>
          </div>
          <!--fc-dec-->
        </a>
        <!--fc-contents-->
      </div>
      <!--f-center-->

      <div class="f-right">
        <a href="" class="f-contents">
          <div class="fr-pic">
            <img src="./img/feature-3.png" alt="">
          </div>
          <!--fr-pic-->
          <div class="f-dec">
            <p>世界にひとつだけの<br>一点物アクセサリー</p>
          </div>
          <!--fr-dec-->
        </a>
        <!--fr-contents-->
      </div>
      <!--f-right-->
    </div>
    <!--f-inner-->
  </section>

  <section class="ad1" >
    <div class="a-inner">
      <div class="a-dec">

        <h2>消費者である私たちが、<br>
          地球環境のためにできることは何か？</h2>
        <p>
          そんな視点からこのブランドは生まれました。<br>おしゃれを楽しむ気持ちを大切にしながらも、<br>ただ可愛いだけじゃない環境に優しいアクセサリーを選ぶ人が消えていったら…<br>その変化は少しずつ、だけども本質的に、<br>この世界をHappyに変えていくのだと、私たちは考えます。
        </p>
      </div>
      <!--a-dec-->
    </div>
    <!--a-inner-->
  </section>

  <section class="product" id="3">

    <div class="title">
      Product
    </div>

    <div class="p-inner">

      <div class="p-left">
        <div class="p-container">
          <a href="" class="p-contents">
            <div class="p-pic">
              <img src="./img/product-1.png" alt="">
            </div>
            <!--pl-pic-->
            <div class="p-dec">
              <p>【しかくイヤリング】海洋マイクロプラスチックを使ったハンドメイドイヤリング(全7色)</p>
              <p class="p-price">￥3,695</p>

            </div>
            <!--pl-dec-->
          </a>
          <!--pl-contents-->
        </div>
        <!--p-container-->
      </div>
      <!--p-left-->


      <div class="p-center">
        <div class="p-container">

          <a href="" class="p-contents">
            <div class="p-pic">
              <img src="./img/product-2.png" alt="">
            </div>
            <!--pc-pic-->
            <div class="p-dec">
              <p>【四角指輪】海洋マイクロプラスチックを使ったハンドメイドアクセサリー/ゆびわ(全7色)</p>
              <p class="p-price">￥2.390</p>

            </div>
            <!--pc-dec-->
          </a>
          <!--pc-contents-->
        </div>
        <!--p-container-->
      </div>
      <!--p-center-->


      <div class="p-right">
        <div class="p-container">

          <a href="" class="p-contents">
            <div class="p-pic">
              <img src="./img/product-3.png" alt="">
            </div>
            <!--pr-pic-->
            <div class="p-dec">
              <p>【ピンバッジ】海洋マイクロプラスチックを使ったsobolonオリジナルピンバッジ(全6色)</p>
              <p class="p-price">￥2.580</p>
            </div>
            <!--pr-dec-->
          </a>
          <!--pr-contents-->
        </div>
        <!--p-contaienr-->
      </div>
      <!--p-right-->
    </div>
    <!--p-inner-->
    <div class="p-btn">
      <input type="button" name="more" value="MORE" class="more" onfocus="this.blur();">
    </div>
  </section>


  <section class="news" id="4">
    <div class="title">
      News
    </div>

    <a class="n-infos">

      <!-- news1↓ -->
      <div class="n-info">

        <div class="n-pic">
          <img src="./img/news-1.png" alt="">
        </div>

        <div class="n-contents">
          <p class="n-date">2020年2月4日</p>
          <h2 class="n-title">き業展終了！次回は2/11(火)フェスタ出店します。</h2>
          <p class="n-desc">「き業展」2日目！大盛況に終わりました
            \(^O^)/きてくださった皆さん本当にありがとうございました！やっぱり、地元多治見での出店は…
          </p>
        </div>
        <!--n-contens-->
      </div>
      <!--n-info-->

      <!-- news2↓ -->
      <div class="n-info">

        <div class="n-pic">
          <img src="./img/news-2.png" alt="">
        </div>

        <div class="n-contents">
          <p class="n-date">2020年1月20日</p>
          <h2 class="n-title">”可愛い”で地球を守る！海鮮マイクロプラスチックを使ったハンドメイドアクセサリー屋さん【sobolon】</h2>
          <p class="n-desc">こんにちは！私は、「 “可愛い” で地球を守る！」をテーマに、昨今、環境問題として話題になっている、マイクロプラスチックを使ったアクセサリー…
          </p>
        </div>
        <!--n-contens-->
      </div>
      <!--n-info-->

      <!-- news3↓ -->
      <div class="n-info">

        <div class="n-pic">
          <img src="./img/news-3.png" alt="">
        </div>

        <div class="n-contents">
          <p class="n-date">2020年11月23日</p>
          <h2 class="n-title">sobolonの矛盾</h2>
          <p class="n-desc">こんにちは！“可愛い”で 地球を守る！マイクロプラスチックアクセサリー【 sobolon 】のリーダーひなこです！sobolonを知らない…
          </p>
        </div>
        <!--n-contens-->
      </div>
      <!--n-info-->

    </a>
    <!--n-infos-->
    <div class="n-btn">
      <input type="button" name="more" value="MORE" class="more">
    </div>
  </section>

  <section class="ad2" >
    <div class="ad2-inner">

      <div class="ad2-left">
        <h2>合言葉は、<br>「 “可愛い” で 地球を守る！」</h2>
        <p>深刻化している環境問題に対して、否定や制限、禁止といった強制的な方法ではなく、明るく幸せな未来を目指して、「可愛い」「楽しい」の力を信じて、愛につながる選択を世の中に増やしていきます。</p>
      </div>
      <!--ad2-left-->

      <div class="ad2-right">
        <img src="./img/concept-2.png" alt="">
      </div>
      <!--ad2-right-->
    </div>
    <!--ad2-inner-->
  </section>

  <section class="contact" id="5">
    <div class="c-title">Contact</div>

    <div class="con-inner">
      <p class="caution">＊は入力必須項目です
      </p>
      <div class="con-contents">
        <form action="" method="post">
          <dl class="dl">
            <div class="con-content">
              <dt class="dt">お名前<span class="kome">*</spanc>
              </dt>
              <dd><input class="dd_input" type="text" required>
              </dd>
            </div>
            <!-- con-content -->

            <div class="con-content">
              <dt class="dt">メールアドレス<span class="kome">*</span></dt>
              <dd><input class="dd_input" type="text" required></dd>
            </div>
            <!-- con-content -->

            <div class="con-content">
              <dt class="dt adj">法人/個人の選択<span class="kome">*</span></dt>
              <dd class="concon">
                <input type="button" class="con-btn " name="houjin" value="法人" >
                <input type="button" class="con-btn kojin" name="kojin" value="個人">
              </dd>
            </div>
            <!-- con-content -->

            <div class="con-content">
              <dt class="dt dt_contact">お問い合わせ内容<span class="kome">*</span></dt>
              <dd>
                <textarea name="contact" id="" cols="43" rows="7" required></textarea>
              </dd>
            </div>
            <!-- con-content -->

            <div class="con-content con-privact">

              <input type="checkbox" name="privacy" id="box"class="checkbox" >
              <label for="box" class="label-checkbox">
                <a href="">
                  <span class="privacy_under">プライバシーポリシー</span>に同意します。
                </a>
              </label>
            </div>
            <!-- con-content -->
            <div class="con-content con-send">
              <input type="button" name="send" value="送信" class="send">
            </div>
          </dl>
        </form>
      </div>
      <!-- con-contents -->
    </div>
    <!-- con-inner -->
  </section>

  <footer>
    <div class="f-logo">
      <img src="./img/logo.png" alt="">
    </div>
    <div class="f-inner">
      <div class="f-info">
        <p class="f-privacy">プライバシーポリシー</p>
        <p class="f-low">特定商取引法に基づく表記</p>
      </div>
      <div class="f-sns">
            <i class="fab fa-twitter fa-lg"></i>
            <i class="fab fa-instagram fa-lg"></i>
            <i class="fab fa-line fa-lg line-green"></i>
      </div>
    </div>
    <!-- f-info -->
    <p class="reserve">©︎2020 sobolon All rights reserved</p>
  </footer>





</body>
<script>
  $(function () {
    var topBtn = $('.totop');
    topBtn.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        topBtn.fadeIn();
      } else {
        topBtn.fadeOut();
      }
    });
    topBtn.click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 500);

      return false
    });
  });
</script>
<script>
  $(function () {
    $('a[href^="#"]').click(function () {
      var adjust = -80;
      var speed = 400;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top + adjust;
      $('body,html').animate({ scrollTop: position }, speed, 'swing');
      return false
    });


  });
</script>
<script>
  $(function(){
    $(".feature").on("inview", function (event, isInView) {
      if (isInView) {
        $(this).addClass("fadeInDown");
      } else {
        $(this).removeClass("fadeInDown");
        $(this).css('opacity',0);
      }
    });
  });
</script>
<script>
  $(function () {
    $('.send').prop("disabled", true);

    $('form input:required').change(function () {
      let flag = true;
      $('form input:required').each(function(e) {
        if ($('form input:required').eq(e).val() === "") {
          flag = false;
        }
    });

    if (flag) {
      $('.send').prop("disabled", false);
    } else {
      $('.send').prop("disabled", true);
    }

  });
  });
</script>
<script>
$(function(){
  $('.con-btn').on('click',function(){
    $('.con-btn').removeClass('active');
    $(this).addClass('active');
  });
});
</script>
</html>