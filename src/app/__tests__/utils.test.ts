import utils from '../utils';
import mockData from './mockdata.json';
import parsedJsondata from './parsedJsondata.json';

const validJson = '{ "name":"John", "age":30 }'

describe('utils', () => {
    it('isJson() returns false when you pass in invalid json', () => {
        expect(utils.isJSON('refvgewdfvre')).toBe(false);
    });

    it('isJson() returns true when you pass invalid json', () => {
        expect(utils.isJSON(validJson)).toBe(true);
    });
    
    it('parseJson() parses a json string correctly', () => {
        expect(utils.parseJson(JSON.stringify(mockData))).toEqual(JSON.stringify(parsedJsondata));
    });

})
