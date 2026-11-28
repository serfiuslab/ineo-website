import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const file = fs.readFileSync(path.resolve(import.meta.dirname, '../laboratorio.js'), 'utf8');
const models = file.slice(file.indexOf('const clamp ='), file.indexOf('const number ='));
assert.ok(models.includes('function oledIntensity'), 'Model source missing');
const { oledIntensity, oledOnset, oledPhotonEnergy, oledCarrierActivity, solarSignal, sensorSignal } = vm.runInNewContext(`${models}\n({ oledIntensity, oledOnset, oledPhotonEnergy, oledCarrierActivity, solarSignal, sensorSignal })`);

assert.equal(oledIntensity(0), 0, 'OLED should show no modeled emission with no voltage');
assert.equal(oledCarrierActivity(0, 'blue', 'standard'), 0, 'No OLED carriers should be visible at zero applied bias');
assert.ok(oledOnset('red', 'standard') < oledOnset('green', 'standard'), 'Red emitter model should start below green');
assert.ok(oledOnset('green', 'standard') < oledOnset('blue', 'standard'), 'Green emitter model should start below blue');
assert.ok(oledPhotonEnergy(460) > oledPhotonEnergy(620), 'Blue photons must carry more energy than red photons');
assert.equal(oledIntensity(2.4, 'blue', 'standard'), 0, 'Blue is off below its illustrative onset');
assert.ok(oledIntensity(2.4, 'red', 'standard') > oledIntensity(2.4, 'green', 'standard'), 'Color should affect emission at fixed voltage');
assert.ok(oledIntensity(3.6, 'blue', 'favorable') > oledIntensity(3.6, 'blue', 'difficult'), 'Contact alignment should affect emission at fixed voltage and color');
assert.ok(oledCarrierActivity(2.5, 'blue', 'standard') > 0, 'Illustrative carriers may appear before visible emission');
assert.equal(oledIntensity(2.5, 'blue', 'standard'), 0, 'Illustrative charge injection must not imply optical turn-on');
assert.ok(oledIntensity(4.5, 'blue', 'standard') > oledIntensity(3.5, 'blue', 'standard'), 'OLED emission should rise with voltage');
assert.ok(oledIntensity(5, 'blue', 'favorable') <= 1, 'OLED illustrative response should be bounded');
assert.equal(solarSignal(0, 100), 0, 'No solar signal in darkness');
assert.equal(solarSignal(100, 0), 0, 'No solar signal without charge collection');
assert.ok(Math.abs(solarSignal(70, 75) - 0.525) < 1e-12, 'Solar model should depend on both controls');
assert.equal(sensorSignal(0, true), sensorSignal(0, false), 'Sensor background should not depend on recognition');
assert.ok(sensorSignal(100, true) > sensorSignal(20, true), 'Sensor response should rise with concentration');
assert.ok(sensorSignal(60, true) > sensorSignal(60, false) * 2, 'Matched sensor should respond much more than an unmatched sensor');
assert.ok(sensorSignal(100, true) < 1, 'Illustrative sensor output should saturate below one');

console.log('Virtual Laboratory models passed: OLED emitters, injection barriers, onset, carriers, solar collection, biosensor specificity and saturation.');
