{
	elements: {
		leaveLink: { css: 'a' },
		lockButton: { css: 'button' }
	},

	getAlert: function() {
		driver.switchTo().alert().accept();	// this is unfortunately not supported by Selenium-WebdriverJS as of Watai 4.3.0
	}
}
