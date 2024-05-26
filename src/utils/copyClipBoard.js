export const handleCopyClipBoard = async (text) => {
	try {
		await navigator.clipboard.writeText(text);
		alert("클립보드에 링크가 복사되었어요.");
    console.log("클립보드",text);
	} catch (err) {
		console.log(err);
	}
};