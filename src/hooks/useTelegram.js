const tg = window.Telegram.WebApp

export function useTelegram() {
	const onClose = () => {
		tg.close()
	}

	const onToggleButton = () => {
		if (tg.MainButton.isVisible) {
			tg.MainButton.hide()
		} else {
			tg.MainButton.show()
		}
	}
	const useGetUserImage = () => {
		tg.storage.get('me').then(me => {
			return me.photo.small
		})
	}

	return {
		onClose,
		useGetUserImage,
		onToggleButton,
		tg,
		user: tg.initDataUnsafe?.user,
		queryId: tg.initDataUnsafe?.query_id,
	}
}
