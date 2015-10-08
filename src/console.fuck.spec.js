'use strict';

// Utilities:
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

// Test setup:
const expect = chai.expect;
chai.use(sinonChai);

// Under test:
import fuck from './console.fuck';

describe('console.fuck:', () => {
    it('should call console.log with "fuck"', () => {
        sinon.stub(console, 'log');

        fuck();

        expect(console.log).to.have.been.calledWith('fuck');

        console.log.restore();
    });
});
