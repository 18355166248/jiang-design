export interface getPrefixClsInterface {
  suffixCls: string;
  customizePrefixCls?: string;
}
export interface ConfigContextProps {
  getPrefixCls: (suffixCls: string, customizePrefixCls?: string) => string;
}
export declare const ConfigContext: any;
export declare const ConfigConsumer: any;
