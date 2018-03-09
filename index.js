'use strict';
/** Miscelanneous functions to aid in game development. */
class GameUtils {
/** Calculate the distance between 2 3D objects.
	* @param {number} x1 - First X coordinate
	* @param {number} y1 - First Y coordinate
	* @param {number} z1 - First Z coordinate
	* @param {number} x2 - Second X coordinate
	* @param {number} y2 - Second Y coordinate
	* @param {number} z2 - Second Z coordinate
	* @return {number} The distance between the two given points
	*/
	static distance3D(x1, y1, z1, x2, y2, z2) {
		return Math.sqrt((x2 - x1) * (x2 - x1) +
(y2 - y1) * (y2 - y1) +
(z2 - z1) * (z2 - z1));
	}
	/** The distance between two 2D points.
	* @param {number} x1 - First X coordinate
	* @param {number} y1 - First Y coordinate
	* @param {number} x2 - Second X coordinate
	* @param {number} y2 - Second Y coordinate
	* @return {number} The distance between the two points.
	*/

	static distance(jx, jy, kx, ky) {
	// Return Math.hypot(jx-kx, jy-ky)
		return Math.sqrt(((jx - kx) * (jx - kx)) + ((jy - ky)) * (jy - ky));
	}

	/** Calculate the angle between two 2D points.
	* @param {number} x1 - First X coordinate
	* @param {number} y1 - First Y coordinate
	* @param {number} x2 - Second X coordinate
	* @param {number} y2 - Second Y coordinate
	* @return {number} The angle in Radians
*/
	static calculateAngle(x1, y1, x2, y2) {
		let angle = Math.atan2((y2 - y1), (x2 - x1));
		angle = (angle >= 0) ? 0 : (2 * Math.PI) + angle;
		return angle;
	// Return Math.atan2((y2 - y1),(x2 - x1));
	}

	/** Checks if two 3D objects collide.
	* @param {object} a - The first object, needs to have x, y and z properties.
	* @param {number} b - The second object, needs to have x, y and z properties.
	* @return {boolean} Collides or not.
*/
	static isCollide3D(a, b) {
		return (a.x <= (b.x + b.width) && (a.x + a.width) >= b.x) && (a.y <= (b.y + b.height) && (a.y + a.height) >= b.y) && (a.z <= (b.z + b.depth) && (a.z + a.depth) >= b.z);
	}

	/** Checks if two 2D objects collide.
	* @param {object} a - The first object, needs to have x, y properties.
	* @param {number} b - The second object, needs to have x, y properties.
	* @return {boolean} Collides or not.
*/
	static isCollide(a, b) {
		return (a.x < (b.x + b.width) && (a.x + a.width) > b.x) && (a.y < (b.y + b.height) && (a.y + a.height) > b.y);
	}
	
	/** Random integer between min and max.
	* @param {number} min - The minimum value
	* @param {number} max - the maximum value
	* @return {number} A random integer  between min and max.
*/
	static randomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	/** Get a floating point random number between min and max.
	* @param {number} min - The lowest possible number
	* @param {number} max - the highest possible number
	* @return A random float between min and max
*/

	static getRandomArbitrary(min, max) {
		return Math.random() * (max - min) + min;
	}
}
export default GameUtils;
