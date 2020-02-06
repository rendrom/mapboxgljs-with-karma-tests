import { expect } from 'chai';
import sinon from 'sinon';
import { mapHtml } from '../mapHtml';
import { MapboxglMapAdapter } from '../../src/MapboxglMapAdapter';


beforeEach(() => {
  document.documentElement.innerHTML = mapHtml;
});

describe('#create', () => {
  it('Fires a map load event', async () => {
    const spy = sinon.spy();
    const map = new MapboxglMapAdapter();
    map.emitter.on('create', spy)
    await map.create({container: 'map'});


    expect(spy.called).to.be.ok;
  });
});

describe('#create2', () => {
  it('Fires a map load event', async () => {
    const spy = sinon.spy();
    const map = new MapboxglMapAdapter();
    map.emitter.on('create', spy)
    await map.create({container: 'map'});


    expect(spy.called).to.be.ok;
  });

  it('Fires a map load event', async () => {
    const spy = sinon.spy();
    const map = new MapboxglMapAdapter();
    map.emitter.on('create', spy)
    await map.create({container: 'map'});


    expect(spy.called).to.be.ok;
  });
});
