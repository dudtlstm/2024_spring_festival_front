export const handleCopyClipBoard = async (text) => {
	try {
		await navigator.clipboard.writeText(text);
    // console.log("클립보드",text);
	} catch (err) {
		// console.log(err);
	}
};