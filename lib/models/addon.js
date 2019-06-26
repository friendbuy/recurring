"use strict";

const RecurlyData = require("../recurly-data");

class Addon extends RecurlyData {
  constructor(recurring) {
    super({
      recurring,
      properties: [
        "add_on_code",
        "add_on_type",
        "created_at",
        "default_quantity",
        "display_quantity_on_hosted_page",
        "accounting_code",
        "revenue_schedule_type",
        "tax_code",
        "optional",
        "measured_unit_id",
        "usage_type",
        "usage_percentage",
        "href",
        "name",
        "unit_amount_in_cents",
        "updated_at",
      ],
      idField: "add_on_code",
      plural: "add_ons",
      singular: "add_on",
    });
  }

  static get SINGULAR() {
    return "add_on";
  }

  static get PLURAL() {
    return "add_ons";
  }

  static get ENDPOINT() {
    return `${RecurlyData.ENDPOINT}${Addon.PLURAL}`;
  }
}

module.exports = Addon;
