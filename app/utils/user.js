/**
 * @class
 * @constructor
 * @public
 */
export class User {
  /**
   * @param {string} type
   * @param {string} id
   */
  constructor(type, id) {
    /**
     * @type {string}
     * @public
     */
    this.id = id;
    /**
     * @type {string}
     * @public
     */
    this.type = type;
  }
}
