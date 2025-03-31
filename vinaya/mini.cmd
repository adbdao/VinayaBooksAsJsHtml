cd /d D:\F\Accelon3\佛學資料庫(第三版，圖書館與教育單位用，不可流通)

copy 戒律書畾.adb.ini D:\GitHub\VinayaBooksAsJsHtml\vinaya
copy taisho.adb.ini D:\GitHub\VinayaBooksAsJsHtml\vinaya

copy 戒律書畾.adb.ini D:\GitHub\my-adb.ini
copy taisho.adb.ini D:\GitHub\my-adb.ini

cd /d D:\GitHub\my-adb.ini
node dir.js
git add .

cd /d D:\GitHub\VinayaBooksAsJsHtml\vinaya
node dir.js

cd /d D:\GitHub\VinayaBooksAsJsHtml\
node dir.js

git add .
git commit -am "add boddhisata sila && upload JY && .adb.ini"
git push