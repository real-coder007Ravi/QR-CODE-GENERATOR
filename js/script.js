const inputBox = document.getElementById("input-box");
const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qr-image");

function GenerateQrCode() {
	if (inputBox.value.length > 0) {
		qrImage.src =
			"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
			inputBox.value;
		imgBox.classList.add("show-img");
	} else {
		inputBox.classList.add("error");
		setTimeout(() => {
			inputBox.classList.remove("error");
		}, 100);
	}
}
