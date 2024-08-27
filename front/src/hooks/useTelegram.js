const tg = window.Telegram.WebApp;

export function useTelegram() {
	const onClose = () => {
		tg.close();
	};

	const onAlert = () => {
		tg.showAlert("Hey there!");
	};

	const onToggleButton = () => {
		if (tg.MainButton.isVisible) {
			tg.MainButton.hide();
		} else {
			// tg.MainButton.background = "#ffcc00";
			tg.MainButton.show();
		}
	};

	return {
		onClose,
		onAlert,
		onToggleButton,
		tg,
		user: tg.initDataUnsafe?.user,
	};
}
