'use strict';

class AbstractToJson {
    /**
     * @abstract constructor
     */
    constructor() {
        if (this.constructor === AbstractToJson) {
            throw new TypeError('Constructor invocation not allowed on abstract class');
        }
    }

    /**
     * Static conversion of a given HTML Page
     * @return {Object} Converted Object as an object literal
     */
    static convert(html, options) {
        throw new Error('Not callable on abstract class');
    }

    /**
     * Convert an HTML Page for a given URL
     * @return {Promise<*>} Promise containing the result
     */
    static async convertUrl(url, arg1, arg2) {
        throw new Error('Not callable on abstract class');
    }

    static fetchUrl(url, options) {
        return new Promise((resolve, reject) => {
            request(url, options, function(error, response, body) {
                if (error) {
                    reject(error);
                }
                resolve(body);
            });
        });
    }
}

module.exports = AbstractToJson;
