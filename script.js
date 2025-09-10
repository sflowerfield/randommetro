// ランダムに選ぶ駅名のリストです。
// ここに好きな駅名を追加したり、いらない駅名を削除したりできます。
const stationNames = [
    '東京', '新宿', '渋谷', '池袋', '品川',
    '横浜', '大宮', '上野', '秋葉原', '新橋',
    '吉祥寺', '中野', '三鷹', '立川', '町田',
    '大阪', '梅田', '京都', '神戸', '名古屋',
    '札幌', '仙台', '博多', '広島', '那覇'
];

// HTMLで用意したボタンと駅名を表示する場所を取得します。
const generateButton = document.getElementById('generate-button');
const stationNameElement = document.getElementById('station-name');

// ボタンがクリックされた時に動く処理を書きます。
generateButton.addEventListener('click', () => {
    // 1. 駅名リストの長さ（駅の数）を取得します。
    const listLength = stationNames.length;
    
    // 2. 0から駅の数の間にあるランダムな数字を生成します。
    // Math.random()は0以上1未満の数字を返します。
    const randomIndex = Math.floor(Math.random() * listLength);
    
    // 3. ランダムな数字を元に、リストから駅名を一つ選びます。
    const randomStation = stationNames[randomIndex];
    
    // 4. 選んだ駅名をHTMLに表示します。
    stationNameElement.textContent = randomStation;
});
