const pagetojson = require('../lib/pagetojson');

/*
process.on('unhandledRejection', up => {
    throw up;
});
*/
describe('pagetojson Local', function() {
    let html = '';

    it('calls convert and expects an exception', () => {
        expect(pagetojson.convert).toThrow('Not yet implemented');
    });

    it('calls convertUrl and expects an exception', () => {
        expect.assertions(1);
        return pagetojson.convertUrl().catch(e => expect(e).toMatch('Not yet implemented'));
    });
});
