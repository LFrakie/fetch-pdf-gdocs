function getpdf() {
	fetch("https://docs.google.com/document/d/1Xip_JIUyCc2xY3-mpPlrWzTQOCzUEkIDHPrAt6Uo2Vk/export?format=pdf")
		.then(res => res.blob())
		.then(blob => {
			console.log(blob);
			setifram(blob)
		});
}

function setifram(data) {
	// document.getElementById('pdfview').src = data;
	// document.getElementById('blobviwer').innerHTML = data;

	let dataUrl = globalThis.URL.createObjectURL(data)
	console.log(dataUrl)

	document.getElementById('pdfview').src = dataUrl;
	document.getElementById('blobviwer').innerHTML = dataUrl;

}
