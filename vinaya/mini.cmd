cd /d D:\F\Accelon3\��Ǹ�Ʈw(�ĤT���A�Ϯ��]�P�Ш|���ΡA���i�y�q)

copy �٫߮��.adb.ini D:\GitHub\VinayaBooksAsJsHtml\vinaya
copy taisho.adb.ini D:\GitHub\VinayaBooksAsJsHtml\vinaya
copy rdg2011.adb.ini D:\GitHub\VinayaBooksAsJsHtml\vinaya
copy zhimin.adb.ini D:\GitHub\VinayaBooksAsJsHtml\vinaya

copy �٫߮��.adb.ini D:\GitHub\my-adb.ini
copy taisho.adb.ini D:\GitHub\my-adb.ini
copy rdg2011.adb.ini D:\GitHub\my-adb.ini
copy zhimin.adb.ini D:\GitHub\my-adb.ini

cd /d D:\GitHub\my-adb.ini
node dir.js
git add .

cd /d D:\GitHub\VinayaBooksAsJsHtml\vinaya
node dir.js

cd /d D:\GitHub\VinayaBooksAsJsHtml\
node dir.js

git add .
git commit -am "upload JY && .adb.ini"
git push
git push
git push --tags
git push --tags