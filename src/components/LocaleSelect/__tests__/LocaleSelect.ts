import { mount, shallowMount, createLocalVue } from "@vue/test-utils";
// import { mount, createLocalVue } from "@vue/test-utils";
import LocaleSelect from "../LocaleSelect.vue";
import Vuex from "vuex";
import Vuetify from "vuetify";
// import store from "@/store";
import i18n from "@/locale";
import VueI18n from "vue-i18n";
import flushPromises from "flush-promises";

// import { VSelect } from "vuetify/lib";
// import { actions } from "@/store/modules/Login/actions";
// import { login } from "@/store/modules/Login";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueI18n);
localVue.use(Vuetify);

describe("LocaleSelect.vue!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", (): void => {
  let mutations: any;
  let actions: any;
  let state: any;
  let store: any;
  let vuetify: any;

  beforeEach((): void => {
    vuetify = new Vuetify();

    state = {
      userInfo: {},
      locale: "ko"
    };

    mutations = {
      setLocale: jest.fn()
    };

    actions = {
      setLocale: jest.fn()
    };

    store = new Vuex.Store({
      modules: {
        login: {
          namespaced: true,
          state,
          mutations,
          actions
        }
      },
      strict: true
    });
  });

  it("LocaleSelect.vue", (): void => {
    const wrapper = mount(LocaleSelect, {
      localVue,
      store,
      vuetify,
      i18n
    });
    expect(wrapper.html()).toMatchSnapshot();

    const wr = shallowMount(LocaleSelect, {
      localVue,
      store,
      vuetify,
      i18n
    });
    expect(wr.html()).toMatchSnapshot();
  });

  it("selectMutation.vue", async (): Promise<any> => {
    // const wrapper = mount(LocaleSelect, { localVue, vuetify, store });
    const wr = mount(LocaleSelect, {
      localVue,
      store,
      vuetify,
      i18n
    });

    // console.log(wr.classes());
    const sb = wr.find(".v-select");

    sb.trigger("change", { itemvalue: "ja" });

    await flushPromises();

    expect(actions.setLocale).toHaveBeenCalled();

    // console.log(wr.find(".v-select").html());

    // expect(wr.classes()).toContain("div");

    // expect(wr.find(VSelect).exists()).toBe(true);
    // expect(wr.find({ name: "testtest" }).exists()).toBe(true);

    // console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", sb);

    // const event = jest.fn();
    // const sb2 = wr.find(".v_btn");
    // wr.vm.$on("changeSelect", event);
    // expect(event).toHaveBeenCalledTimes(0);
    // sb2.trigger("click");
    // expect(event).toHaveBeenCalledTimes(1);

    // const sbs = sb.findAll("selection");
    // sb.trigger("change");
    // const event = jest.fn();
    // wr.vm.$on("changeSelect", event);

    // wr.find("#testtest").trigger("change");
    // await wr.vm.$nextTick();

    // console.log(wr.vm.selectValue);

    // expect(event).toHaveBeenCalledTimes(1);

    // expect(mutations.setLocale).toHaveBeenCalledWith({}, { value: "ko" });

    // console.log(store);

    // console.log(store.getters["login/getLocale"]);

    // const lc = store.login.state.locale ;

    // console.log(sb);
    // console.log(sbs.length);

    // expect(1).toBe(1);

    // sb.trigger("change", { value: "ja" });

    // sb.at(1).setSelected();
    // expect(state.locale).toBe("ja");

    // const change = jest.fn();
    // wr.v;
  });
});
