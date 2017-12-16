jQuery(function($) {
	// フェードイン時間
	var timeFadeIn = 1000;
	// 遅延時間
	var timeDelay1 = 750;
	var timeDelay2 = 750;
	// Promiseオブジェクト作成
	function createPromiseObj() {
		var deferred = new $.Deferred;
		deferred.resolve();
		return deferred.promise();
	}
	// ページ表示時の各コンテンツフェードイン表示開始
	createPromiseObj()
		.then(function() {
			return $('#js-target-fadein :hidden').first().delay(timeDelay1).fadeIn(timeFadeIn).promise();
		}).then(function() {
			return $('#js-target-fadein :hidden').first().delay(timeDelay2).fadeIn(timeFadeIn).promise();
		});
});