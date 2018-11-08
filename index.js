function pad(num) {
	return String(num).padStart(2, 0);
}

module.exports = function ({
	separator
} = {separator: ''}) {
	const now = new Date();
	return now.getFullYear() + separator + pad(now.getMonth() + 1) + separator + pad(now.getDate()) + separator + pad(now.getHours()) + separator + pad(now.getMinutes()) + separator + pad(now.getSeconds());
};
