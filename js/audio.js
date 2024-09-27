const playButton = document.getElementById('playButton');
let audio;
let lastPlayedIndex = -1; // 记录上一个播放的音频索引

// 存储多个音频文件的路径
const audioFiles = [
	'audio/敢不敢跟我比划什么是黑手.mp3',
	'audio/唱蓝精灵.mp3',
	'audio/黑手.mp3',
	// 可以继续添加更多音频文件
];

playButton.addEventListener('click', () => {
	// 如果音频已存在并且正在播放，则停止音频
	if (audio && !audio.paused) {
		audio.pause();
		console.log('音频已停止');
		return; // 直接返回，不继续播放新音频
	}

	let randomIndex;

	// 确保选择不同于上一个播放的音频
	do {
		randomIndex = Math.floor(Math.random() * audioFiles.length);
	} while (randomIndex === lastPlayedIndex);

	const selectedAudioFile = audioFiles[randomIndex];
	lastPlayedIndex = randomIndex; // 更新上一个播放的索引

	// 创建新的音频对象
	audio = new Audio(selectedAudioFile);

	// 添加事件监听器，播放成功时输出信息
	audio.onplay = () => {
		console.log(`播放成功: ${selectedAudioFile}`);
	};

	// 播放音频
	audio.play().catch(error => {
		console.error('播放失败:', error); // 输出错误信息
	});
});

