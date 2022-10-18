function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

import React from 'react';
import { ConfigContext, ConfigConsumer } from './ConfigContext';
import { SizeContextProvider } from './SizeContext';
import { jsx as _jsx } from 'react/jsx-runtime';

var ProviderChildren = function ProviderChildren(props) {
  var children = props.children,
    prefixCls = props.prefixCls,
    parentContext = props.parentContext,
    componentSize = props.componentSize;
  var getPrefixCls = React.useCallback(function (suffixCls, customizePrefixCls) {
    if (customizePrefixCls) return customizePrefixCls;
    var mergedPrefixCls = prefixCls || parentContext.getPrefixCls('');
    return suffixCls ? ''.concat(mergedPrefixCls, '-').concat(suffixCls) : mergedPrefixCls;
  }, []);
  var childNode = children;

  if (componentSize) {
    childNode = /*#__PURE__*/ _jsx(SizeContextProvider, {
      size: componentSize,
      children: childNode,
    });
  }

  return /*#__PURE__*/ _jsx(ConfigContext.Provider, {
    value: {
      getPrefixCls: getPrefixCls,
    },
    children: childNode,
  });
};

var ConfigProvider = function ConfigProvider(props) {
  return /*#__PURE__*/ _jsx(ConfigConsumer, {
    children: function children(context) {
      return /*#__PURE__*/ _jsx(
        ProviderChildren,
        _objectSpread(
          {
            parentContext: context,
          },
          props,
        ),
      );
    },
  });
};

export default ConfigProvider;
