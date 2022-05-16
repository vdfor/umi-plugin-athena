"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = api => {
  api.describe({
    key: 'athena',
    config: {
      default: {
        polyfill: undefined,
        entryCodeAhead: ''
      },

      schema(joi) {
        const itemSchema = joi.object({
          polyfill: joi.string(),
          entryCodeAhead: joi.string()
        });
        return itemSchema;
      }

    },
    enableBy: api.EnableBy.config
  });
  api.addEntryCodeAhead(() => {
    const entryCodeAhead = api.config.athena.entryCodeAhead;
    return entryCodeAhead;
  });
  api.addEntryImportsAhead(() => {
    const polyfill = api.config.athena.polyfill;
    return polyfill ? [{
      source: polyfill
    }] : [];
  });
};

exports.default = _default;