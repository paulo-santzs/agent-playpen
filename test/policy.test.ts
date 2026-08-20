import assert from 'node:assert/strict';import test from 'node:test';import{decide,type Policy}from'../src/policy.ts'
test('nega por padrão as capacidades não autorizadas',()=>{const policy:Policy={files:true,network:false,shell:false};assert.equal(decide(policy,'files'),'PERMITIDO');assert.equal(decide(policy,'network'),'BLOQUEADO');assert.equal(decide(policy,'shell'),'BLOQUEADO')})
