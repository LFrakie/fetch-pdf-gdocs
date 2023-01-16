function getpdf() {
	fetch("https://docs.google.com/document/d/1Xip_JIUyCc2xY3-mpPlrWzTQOCzUEkIDHPrAt6Uo2Vk/export?format=pdf")
		.then(res => res.blob())
		.then(blob => {
			console.log(blob);
			setifram(blob)
		});
}

function setifram(data) {
	document.getElementById('pdfview').src = data;
}
