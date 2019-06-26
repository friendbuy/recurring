"use strict";

const RecurlyData = require("../recurly-data");
const Addon = require("./addon");
const handleRecurlyError = require("../util").handleRecurlyError;
const _ = require("lodash");
const data2xml = require("data2xml")({
  undefined: "empty",
  null: "closed",
});

class Plan extends RecurlyData {
  constructor(recurring) {
    super({
      recurring,
      properties: [
        "accounting_code",
        "add_ons",
        "bypass_hosted_confirmation",
        "cancel_url",
        "created_at",
        "description",
        "display_donation_amounts",
        "display_phone_number",
        "display_quantity",
        "name",
        "payment_page_tos_link",
        "plan_code",
        "plan_interval_length",
        "plan_interval_unit",
        "revenue_schedule_type",
        "setup_fee_revenue_schedule_type",
        "setup_fee_accounting_code",
        "setup_fee_in_cents",
        "success_url",
        "total_billing_cycles",
        "trial_interval_length",
        "trial_interval_unit",
        "trial_requires_billing_info",
        "unit_amount_in_cents",
        "unit_name",
        "updated_at",
      ],
      idField: "plan_code",
      plural: "plans",
      singular: "plan",
      enumerable: true,
    });
  }

  static get SINGULAR() {
    return "plan";
  }

  static get PLURAL() {
    return "plans";
  }

  static get ENDPOINT() {
    return `${RecurlyData.ENDPOINT}${Plan.PLURAL}`;
  }

  fetchAddons(filter, callback) {
    if (typeof callback === "undefined" && typeof filter === "function") {
      callback = filter;
      filter = {};
    }
    filter = filter || {};
    const uri = this._resources.add_ons || `${this.href}/add_ons`;
    this.fetchAll("Addon", uri, filter, (err, results) => {
      if (err) {
        return callback(err);
      }
      this.addons = results;
      callback(null, this.addons);
    });
  }

  createAddon(options, callback) {
    if (!options.add_on_code) {
      throw new Error('addon options must include "add_on_code" parameter');
    }
    if (!options.name) {
      throw new Error('addon options must include "name" parameter');
    }
    if (!options.unit_amount_in_cents) {
      throw new Error(
        'addon options must include "unit_amount_in_cents" parameter'
      );
    }

    const body = data2xml(Addon.SINGULAR, options);
    const uri = this._resources.add_ons || `${this.href}/add_ons`;
    this.post(uri, body, (err, response, payload) => {
      const error = handleRecurlyError(err, response, payload, [200, 201]);
      if (error) {
        return callback(error);
      }
      callback(null, payload);
    });
  }

  create(options, callback) {
    if (!options.plan_code) {
      throw new Error('plan options must include "plan_code" parameter');
    }
    if (!options.name) {
      throw new Error('plan options must include "name" parameter');
    }
    if (!options.unit_amount_in_cents) {
      throw new Error(
        'plan options must include "unit_amount_in_cents" parameter'
      );
    }

    const body = data2xml(Plan.SINGULAR, options);
    this.post(Plan.ENDPOINT, body, (err, response, payload) => {
      const error = handleRecurlyError(err, response, payload, [201]);
      if (error) {
        return callback(error);
      }

      this.inflate(payload);
      callback(null, this);
    });
  }

  update(options, callback) {
    if (!this.href) {
      throw new Error(`cannot update a plan without an href ${this.id}`);
    }

    const body = data2xml(Plan.SINGULAR, options);

    this.put(this.href, body, (err, response, payload) => {
      const error = handleRecurlyError(err, response, payload, [200]);
      if (error) {
        return callback(error);
      }

      this.inflate(payload);
      callback(null, this);
    });
  }
}

module.exports = Plan;
