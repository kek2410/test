import Vue, { ComponentOptions } from "vue";

const el: Element = document.createElement("div");

export function newVM<T extends Vue>(
  Comp: new (args: ComponentOptions<Vue>) => T,
  propsData?: object
): T {
  return new Comp({ el, propsData });
}
