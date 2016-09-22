module.exports = {
  "space-infix-ops": ["error", {"int32Hint": false}], // https://github.com/dwyl/goodparts/issues/32
  "max-len": ["error", 80], // https://github.com/dwyl/goodparts/issues/186
  "array-bracket-spacing": ["error", "never"], // https://github.com/dwyl/goodparts/issues/219
  "block-spacing": "error", // https://github.com/dwyl/goodparts/issues/218
  "brace-style": ["error", "1tbs", { "allowSingleLine": true }], // https://github.com/dwyl/goodparts/issues/217
  "camelcase": "error", // https://github.com/dwyl/goodparts/issues/217
  "comma-style": ["error", "last"], // https://github.com/dwyl/goodparts/issues/216
  "comma-spacing": ["error", { "before": false, "after": true }], // https://github.com/dwyl/goodparts/issues/215
  "comma-dangle": ["error", "never"], // https://github.com/dwyl/goodparts/issues/213
  "computed-property-spacing": ["error", "never"], // https://github.com/dwyl/goodparts/issues/212
  "consistent-this": "off", // https://github.com/dwyl/goodparts/issues/211
  "eol-last": "error", // https://github.com/dwyl/goodparts/issues/210
};
