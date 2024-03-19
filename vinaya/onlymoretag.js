
// 配合timeEnd()成對出現。 打印出代碼執行的時間
console.time('共耗費了')

// 導入模組
var fs = require('fs')
var path = require('path')
// 可改寫檔名及編碼
var x = 'nnn.txt'
var ru = 'utf8'
var wu = 'utf8'
// 完成後的副檔名
var afterName = ''

// 用絕對路徑讀入檔案，使用node的readFileSync同步函數
var a = fs.readFileSync(x, ru)
// 導入陣列
var b = a.split('\n')

// 進行你要的操作
for (var i = 0; i < b.length; i++) {

    b[i] = b[i]
        // 刪除行首行末空白
        // .replace(/^(\s*)(\S*)(\s*|　*)$/, '$2')
        // 40字切行
        // .replace(/(.{40})/g, '$1\n')
        // .replace(/^第\s*(一|二|三|四|五|六|七|八|九|十)+\s*章(.+)/, '<章>第$1章$2</章>')
        // .replace(/^第\s*(\d+)\s*章(.+)/, '<章>第$1章$2</章>')
        // .replace(/png/g, 'jpg')
        // .replace(/^\[(U?\d+)\]/g, '<釋 n="$1"> </釋>')
        // .replace(/\[(U?\d+)\]/g, '<註 n="$1"/>')
        // .replace(/^【(\d+)】/g, '<釋 n="$1"> </釋>')
        // .replace(/([^"])【(\d+)】/g, '$1<註 n="$2"/>')
        // .replace(/【/g, '<註 n="')
        // .replace(/】/g, '"/>')
        .replace(/“([^”]+)”/g, '<si>「$1」</si>')
        // .replace(/(\([^\)]+\))/g, '<va>$1</va>')
        .replace(/(（[^）]+）)/g, '<va>$1</va>')
        // .replace(/<章>\s*(一|二|三|四|五|六|七|八|九|十)([^事鈔]+)(事鈔[^\(\s]+)\s*(.+)<\/章>/, '<書>$3$4</書>')
        // 轉換例外的
        // 最後才加上「額外標記 問：1.txt」
        .replace(/﹐/g, '，')
        .replace(/﹑/g, '、')
        .replace(/﹕/g, '：')
        .replace(/(《[^》]+》)/g, '<bf>$1</bf>')
        .replace(/(〈[^〉]+〉)/g, '<by>$1</by>')
        .replace(/(〔[^〕]+〕)/g, '<bz>$1</bz>')
        .replace(/《問》/g, '<ask>《問》</ask>')
        .replace(/《答》/g, '<rep>《答》</rep>')
        .replace(/【問】/g, '<ask>【問】</ask>')
        .replace(/【答】/g, '<rep>【答】</rep>')
        .replace(/(問|疑)(曰|者曰|云)?(\d*)(：|。)/g, '<ask>$1$2$3$4</ask>')
        .replace(/(答|徵|解|釋|師)(曰|者曰|云)?(\d*)(：|。)/g, '<rep>$1$2$3$4</rep>')
        // .replace(/(問|疑)(曰|者曰|云)?(、|：|。|，)/g, '<ask>$1$2$3</ask>')
        // .replace(/(答|徵|解|釋|師)(曰|者曰|云)?(、|：|。|，)/g, '<rep>$1$2$3</rep>')
    // 接上標記斷行
    // .replace(/(<\/?[^>]*)\n|\r([^>]*>)/gi, '\n$1$2')
    // .replace(/\t/gi, '　　')
}

// 用絕對路徑寫入檔案
fs.writeFileSync(x + afterName, b.join('\n'), wu)
// 完成時返回通知
console.log('===== only is OK: ' + x + afterName)

// 'test'名字要和time()中的名字保持一致
console.timeEnd('共耗費了')

