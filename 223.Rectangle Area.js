/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
const computeArea = function (A, B, C, D, E, F, G, H) {
	const total = (C - A) * (D - B) + (G - E) * (H - F);
	let repeat = 0;
	if (Math.min(C, G) > Math.max(A, E) && Math.min(D, H) > Math.max(B, F)) {
		repeat = (Math.min(C, G) - Math.max(A, E)) * (Math.min(D, H) - Math.max(B, F));
	}
	return (total - repeat);
};