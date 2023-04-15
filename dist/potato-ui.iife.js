var PotatoUI = function(exports, vue) {
  "use strict";
  const _sfc_main$1 = {
    name: "SFCButton"
  };
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("button", null, "SFC Button");
  }
  const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
  const _sfc_main = {
    name: "SFCInput"
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("button", null, "SFC Input");
  }
  const SFCInput = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
  const entry = {
    install(app) {
      app.component(SFCButton.name, SFCButton);
      app.component(SFCInput.name, SFCInput);
    }
  };
  exports.SFCButton = SFCButton;
  exports.SFCInput = SFCInput;
  exports.default = entry;
  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
  return exports;
}({}, Vue);
