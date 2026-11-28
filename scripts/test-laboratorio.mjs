import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const file = fs.readFileSync(path.resolve(import.meta.dirname, '../laboratorio.js'), 'utf8');
const models = file.slice(file.indexOf('const clamp ='), file.indexOf('const number ='));
assert.ok(models.includes('function oledIntensity'), 'Model source missing');
const { oledIntensity, solarSignal, sensorSignal } = vm.runInNewContext(`${models}\n({ oledIntensity, solarSignal, sensorSignal })`);

assert.equal(oledIntensity(0), 0, 'OLED should show no modeled emission with no voltage');
assert.equal(oledIntensity(2), 0, 'Illustrative OLED onset must be respected');
assert.ok(oledIntensity(3) > 0, 'OLED emission should turn on above the illustrative onset');
assert.ok(oledIntensity(4) > oledIntensity(3), 'OLED emission should increase with voltage');
assert.equal(oledIntensity(5), 1, 'OLED illustrative response should be bounded');
assert.equal(solarSignal(0, 100), 0, 'No solar signal in darkness');
assert.equal(solarSignal(100, 0), 0, 'No solar signal without charge collection');
assert.ok(Math.abs(solarSignal(70, 75) - 0.525) < 1e-12, 'Solar model should depend on both controls');
assert.equal(sensorSignal(0, true), sensorSignal(0, false), 'Sensor background should not depend on recognition');
assert.ok(sensorSignal(100, true) > sensorSignal(20, true), 'Sensor response should rise with concentration');
assert.ok(sensorSignal(60, true) > sensorSignal(60, false) * 2, 'Matched sensor should respond much more than an unmatched sensor');
assert.ok(sensorSignal(100, true) < 1, 'Illustrative sensor output should saturate below one');

console.log('Virtual Laboratory models passed: OLED onset, solar collection, biosensor specificity and saturation.');
