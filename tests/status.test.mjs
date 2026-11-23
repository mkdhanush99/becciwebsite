import { test } from 'node:test';
import assert from 'node:assert/strict';
import { computeStatus, deadlineText, todayISO } from '../src/lib/status.ts';

test('closing soon within 14 days', () => assert.equal(computeStatus({ closingDate: '2026-11-30' }, '2026-11-23'), 'closing-soon'));
test('open when more than 14 days remain', () => assert.equal(computeStatus({ closingDate: '2026-12-31' }, '2026-11-23'), 'open'));
test('closed after the closing date', () => assert.equal(computeStatus({ closingDate: '2026-11-30' }, '2026-12-01'), 'closed'));
test('closes today is still open', () => assert.equal(computeStatus({ closingDate: '2026-11-30' }, '2026-11-30'), 'closing-soon'));
test('upcoming before opening date', () => assert.equal(computeStatus({ openingDate: '2027-01-01', closingDate: '2027-02-01' }, '2026-11-23'), 'upcoming'));
test('amended open notice', () => assert.equal(computeStatus({ closingDate: '2027-02-01', amendedDate: '2026-11-01' }, '2026-11-23'), 'amended'));
test('amended but closed is closed', () => assert.equal(computeStatus({ closingDate: '2026-11-01', amendedDate: '2026-10-01' }, '2026-11-23'), 'closed'));
test('rolling without deadline', () => assert.equal(computeStatus({ rolling: true }, '2026-11-23'), 'rolling'));
test('awaiting notice wins', () => assert.equal(computeStatus({ awaitingNotice: true, rolling: true }, '2026-11-23'), 'awaiting-notice'));
test('no deadline text', () => assert.match(deadlineText({}), /No deadline published/));
test('days left text', () => assert.equal(deadlineText({ closingDate: '2026-11-30' }, '2026-11-23'), 'Closes 30 Nov 2026 · 7 days left'));
test('IST date rollover', () => assert.equal(todayISO(new Date('2026-11-22T19:00:00Z')), '2026-11-23'));
