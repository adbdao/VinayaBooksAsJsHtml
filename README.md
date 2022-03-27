## 將律藏、三大部、戒律諸書，從accelon3的xml原始檔，轉成html檔，並加上js的動態功能  
>> 三大部轉換：  
第一版，測試：從以前的accelon3的xml原檔中，轉換成html，並加上css樣式，及一點點js動態功能  
## 有些是教學用、投影用…的講義，所以轉為PDF格式，以便跨平台，放在手機上再作投影！  
  
>> 展示網址 https://adbdao.github.io/VinayaBooksAsJsHtml/  
  
---  
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
  
---  
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
  
---  
#### 只推送單一tag  
git push origin v1.0
  
---  
#### 如何告訴 git 縮寫的指令  
git config alias.co checkout  
> 查看所有指令  

git config --list  