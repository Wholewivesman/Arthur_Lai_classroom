/**
 * @class
 * @constructor
 * @public
 * @property {string} name      The name of the user
 * @property {number} seatNo    The seat number of the user
 * @property {string} stClass   The class of the user
 * @property {string} wealth    The wealth of the user
 */
export class User {
  /**
   * @param {string} name     The name of the user
   * @param {number} seatNo   The seat number of the user
   * @param {string} stClass  The class of the user
   * @param {string} wealth   The wealth of the user
   */
  constructor(name, seatNo, stClass, wealth) {
    /**
     * @type {string}
     * @public
     */
    this.name = name;
    /**
     * @type {number}
     * @public
     */
    this.seatNo = seatNo;
    /**
     * @type {string}
     * @public
     */
    this.stClass = stClass;
    /**
     * @type {number}
     * @public
     */
    this.wealth = wealth;
  }
}
