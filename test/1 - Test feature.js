{
	description: 'It displays an alert',

	scenario: [
		JailorTestWidget.lock(),
		JailorTestWidget.leave(),
		JailorTestWidget.getAlert()
	]
}
