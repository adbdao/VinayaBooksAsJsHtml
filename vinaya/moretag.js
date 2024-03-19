// 導入模組
var fs = require('fs')
var path = require('path')
// 可改寫檔名及編碼
var x = '.html'
var ru = 'utf8'
var wu = 'utf8'
// 取出檔名
var y
// 完成後的副檔名
var afterName = '.html'

// 建立函數，以便回呼使用
function XmlAddMypb(go) {
    // 規範化檔案路徑
    var h = path.normalize(go)
    // 取得本檔檔名，以本檔檔名作參數，在當前目錄下：若有相同名的副檔名的檔案，就進行轉換
    // 取得當前目錄下所有檔案及資料夾
    var d = fs.readdirSync(h)
    // 循環目錄
    for (var k of d) {
        // 取得絕對路徑，並規範化路徑
        var n = path.normalize(h + '/' + k)
        // 取得檔案資訊
        var c = fs.statSync(n)
        // 判斷是否為資料夾，如果是：回呼函數，來執行下一層目錄
        // 跳過.git && .vscode
        if (c.isDirectory() && n != '.git' && n != '.vscode') {
            // 若只執行當前目錄，則註釋此行，並啟動返回通知
            // XmlAddMypb(n)
            console.log('Stop read Directory:' + n)

            // 判斷是否為所要轉換的副檔名的檔案
        } else if (path.extname(n) == x) {
            // 用絕對路徑讀入檔案，使用node的readFileSync同步函數
            // 先處理一些內文
            var a = fs.readFileSync(n, ru)
            // 導入陣列
            var b = a.split('\n')

            // 刪除副檔名
            y = k.replace(/([^\.]+)\..+/, '$1')

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
                    // .replace(/(\([^\)]+\))/g, '<ps>$1</ps>')
                    .replace(/(（[^）]+）)/g, '<ps>$1</ps>')
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
            fs.writeFileSync(y + afterName, b.join('\n'), wu)
            // 完成時返回通知
            console.log('txt more is OK: ' + y + afterName)
        }
    }
}

// 配合timeEnd()成對出現。 打印出代碼執行的時間
console.time('共耗費了')

// 啟用函數
XmlAddMypb('./')
// 完成時返回通知
console.log('==========All more tag is OK==========')

// 'test'名字要和time()中的名字保持一致
console.timeEnd('共耗費了')