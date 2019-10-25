## 我自己學習，並試作的JS網頁程式  
### 將律藏、三大部、戒律諸書，從accelon3的xml原始檔，轉成html檔，並加上js的動態功能  
> 授權方式：https://creativecommons.org/licenses/by-nc-sa/3.0/tw/  
***  
>> 三大部轉換：  
第一版，測試：從以前的accelon3的xml原檔中，轉換成html，並加上css樣式，及一點點js動態功能  
***  
#### Git常用指令  
* 刪除上一次推送。出問題時，使用此命令  
git remote rm origin  
  
* 一次進行：加入與提交  
git commit -a -m "first commit"  
或者  
git commit -am "first commit"  
  
* 將這次提交，合併到上一次提交  
git commit --amend --no-edit  
合并上一次提交（用于反复修改）  
git commit --amend -m 'xxx'  
  
***  
#### Git基本起始指令  
1. echo "# VinayaBooksAsJsHtml" >> README.md  
git init  
git add README.md  
git commit -m "first commit"  
git remote add origin https://github.com/adbdao/VinayaBooksAsJsHtml.git  
git push -u origin master  
  
2. 直接拉取  
git clone https://github.com/adbdao/VinayaBooksAsJsHtml.git  
git remote add origin https://github.com/adbdao/VinayaBooksAsJsHtml.git  
git push -u origin master  
***  