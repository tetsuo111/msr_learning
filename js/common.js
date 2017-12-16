jQuery(function($) {
	/** モーダル ========================================================*/
	// モーダル表示
	$('.modal-button, .modal-img').on('click', function() {
		var target = $(this).data('target');
		$(target).addClass('is-active');
		// セリフ設定
		if ($(target).find('.caption').length > 0) {
			var randomCaptionValue = '7';
			if ($('.caption-list').find('.radio:checked').length > 0) {
				var captionText = '';
				// 自分入力判定
				if ($('#JsCaptionListLast').is(':checked')) {
					if ($('#js-caption-input').val() == '') {
						// 未入力の場合、非表示
						$(target).find('.caption').hide();
						return;
					}
					captionText = $('#js-caption-input').val();
				} else {
					var checkedValue = $('.caption-list').find('.radio:checked').val();
					if (checkedValue == randomCaptionValue) {
						// ランダムの場合
						captionText = $('.caption-list').find('.radio').eq(getRandomInt(0, 6)).next('label').text();
					} else {
						captionText = $('.caption-list').find('.radio:checked + label').text();
					}
				}
				$(target).find('.caption-text').text(captionText);
				$(target).find('.caption').show();
			} else {
				$(target).find('.caption').hide();
			}
		}
	});
	// モーダル閉じる
	$('.modal .delete').on('click', function() {
		$(this).closest('.modal').removeClass('is-active');
	});
	$('.modal-background, .modal-close, .modal-content').on('click', function() {
		$(this).closest('.modal').removeClass('is-active');
	});
	/** アコーディオン開閉 ==============================================*/
	$('.accordion-toggle').click(function(){
		$(this).toggleClass('accordion-toggle-open')
				.next('.accordion-list,.accordion-column').slideToggle();
	});
	/** 戻るボタン無効化 ================================================*/
	var isHistoryPush = false;
	if (history && history.pushState && history.state !== undefined) {
		history.pushState(null, null, null);
		isHistoryPush = true;
		$(window).on('popstate', function(e) {
			if (isHistoryPush) {
				history.pushState(null, null, null);
			}
		});
	}
	/** ドロップダウン開閉 ================================================*/
	$('.dropdown').click(function() {
		$(this).toggleClass('is-active');
	});
	// ドロップダウンの項目選択時
	$('.dropdown-item').click(function() {
		// ドロップダウンを閉じる
		$(this).closest('.dropdown').toggleClass('is-active');
	});
	/** その他 ================================================*/
	/*
	 * ランダム値を取得
	 */
	function getRandomInt(min, max) {
		return Math.floor( Math.random() * (max - min + 1) ) + min;
	}
});