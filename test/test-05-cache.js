"use strict";

// 'use strict'
//
// /* global describe:true, it:true, before:true, after:true */
//
// var demand = require('must'),
//   parser = require('../lib/parser'),
//   Recurring = require('../lib/recurly'),
//   util = require('util'),
//   uuid = require('uuid'),
//   iterators = require('async-iterators'),
//   _ = require('lodash')
//
// var recurly = new Recurring()
//
// // This recurly account is an empty test account connected to their
// // development gateway.
// var config = {
//   apikey: '88ac57c6891440bda9ba28b6b9c18857',
//   subdomain: 'recurring-test'
// }
//
// before(function () {
//   recurly.setAPIKey(config.apikey)
// })
//
// describe('Cache', function () {
//   it('should not cache results when the cache is not enabled.', function (done) {
//     // Fetch all accounts.
//     recurly.setCache(false)
//     recurly.Account.all(function (accounts) {
//       accounts.must.be.an.object()
//       var uuids = Object.keys(accounts)
//       uuids[0].must.not.equal('undefined')
//       var initialLength = uuids.length
//
//       // Create a new account.
//       var fresh_account_id = uuid.v4()
//       var data = {
//         id: fresh_account_id,
//         email: 'test@example.com',
//         first_name: 'John',
//         last_name: 'Whorfin',
//         company_name: 'Yoyodyne Propulsion Systems'
//       }
//       recurly.Account.create(data, function (err, newAccount) {
//         demand(err).not.exist()
//         newAccount.must.be.an.object()
//         newAccount.id.must.equal(fresh_account_id)
//         newAccount.company_name.must.equal('Yoyodyne Propulsion Systems')
//
//         // Fetch all the accounts again.
//         recurly.Account.all(function (accounts) {
//           accounts.must.be.an.object()
//           var uuids = Object.keys(accounts)
//           uuids.length.must.equal(initialLength + 1)
//           done()
//         })
//       })
//     })
//   })
//
//   it('should cache results when the cache is enabled.', function (done) {
//     // Fetch all accounts.
//     recurly.setCache(true)
//     recurly.Account.all(function (accounts) {
//       accounts.must.be.an.object()
//       var uuids = Object.keys(accounts)
//       uuids[0].must.not.equal('undefined')
//       var initialLength = uuids.length
//
//       // Create a new account.
//       var fresh_account_id = uuid.v4()
//       var data = {
//         id: fresh_account_id,
//         email: 'test@example.com',
//         first_name: 'John',
//         last_name: 'Whorfin',
//         company_name: 'Yoyodyne Propulsion Systems'
//       }
//       recurly.Account.create(data, function (err, newAccount) {
//         demand(err).not.exist()
//         newAccount.must.be.an.object()
//         newAccount.id.must.equal(fresh_account_id)
//         newAccount.company_name.must.equal('Yoyodyne Propulsion Systems')
//
//         // Fetch all the accounts again.
//         recurly.Account.all(function (accounts) {
//           accounts.must.be.an.object()
//           var uuids = Object.keys(accounts)
//           uuids.length.must.equal(initialLength)
//           done()
//         })
//       })
//     })
//   })
//
//   it('should clear the cache.', function (done) {
//     // Fetch all accounts.
//     recurly.setCache(true)
//     recurly.clearCache()
//     recurly.Account.all(function (accounts1) {
//       accounts1.must.be.an.object()
//       var initialLength = Object.keys(accounts1).length
//
//       // Create a new account.
//       var fresh_account_id = uuid.v4()
//       var data = {
//         id: fresh_account_id,
//         email: 'test@example.com',
//         first_name: 'John',
//         last_name: 'Whorfin',
//         company_name: 'Yoyodyne Propulsion Systems'
//       }
//       recurly.Account.create(data, function (err, newAccount) {
//         demand(err).not.exist()
//
//         // Fetch all the accounts again.
//         recurly.Account.all(function (accounts2) {
//           accounts2.must.be.an.object()
//           Object.keys(accounts2).length.must.equal(initialLength)
//
//           // Clear the cache.
//           recurly.clearCache()
//
//           // Fetch all the accounts again.
//           recurly.Account.all(function (accounts3) {
//             accounts3.must.be.an.object()
//             Object.keys(accounts3).length.must.equal(initialLength + 1)
//             done()
//           })
//         })
//       })
//     })
//   })
// })

