var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { Consumer } from '@alist/react';
import { createVirtualBox } from '@formily/next';
import { Button } from '@alifd/next';
var Clear = function (props) {
    var render = props.render, children = props.children, others = __rest(props, ["render", "children"]);
    return React.createElement(Consumer, null, function (_a) {
        var clear = _a.clear;
        if (typeof render === 'function') {
            return render(clear);
        }
        return React.createElement(Button, __assign({}, others, { onClick: function () {
                clear();
            } }), children);
    });
};
createVirtualBox('clear', Clear);
export default Clear;
