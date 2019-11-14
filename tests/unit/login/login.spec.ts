import { shallowMount } from "@vue/test-utils";
import Home from "@/components/Home.vue";

describe("Home.vue", (): void => {
  it("This Page is Home.", (): void => {
    const msg = "new message";
    const wrapper = shallowMount(Home, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
