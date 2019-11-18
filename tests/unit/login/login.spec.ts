// import { shallowMount, createLocalVue } from "@vue/test-utils";
import { mount, createLocalVue } from "@vue/test-utils";
import Login from "@/components/login/Login.vue";
import Vuex from "vuex";
// import { login as loginMudule } from "@/store/modules/login";
import Vuetify from "vuetify";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Login Store Module Test Go.", (): void => {
  let actions: any;
  let state: any;
  let store: any;
  let vuetify: any;

  beforeEach((): void => {
    vuetify = new Vuetify();

    state = {
      userInfo: {},
      isLogin: false,
      isLoginError: false
    };

    actions = {
      actionLogin: jest.fn(),
      actionLogOut: jest.fn()
    };

    store = new Vuex.Store({
      modules: {
        login: {
          state,
          actions
        }
      }
    });
  });

  it('calls store action "login" when button is clicked"', (): void => {
    const wrapper = mount(Login, { store, localVue, vuetify });
    const button = wrapper.find(".v-btn");

    // Here we bind a listener to the wrapper
    // instance to catch our custom event
    // https://vuejs.org/v2/api/#Instance-Methods-Events
    wrapper.vm.$on("action-btn:clicked", actions.actionLogin);

    expect(actions.actionLogin).toHaveBeenCalledTimes(0);

    // Simulate a click on the button
    button.trigger("click");

    // // Ensure that our mock event was called
    expect(actions.actionLogin).toHaveBeenCalledTimes(1);
  });

  // it('does not dispatch "actionInput" when event value is not "input"', (): void => {
  //   const wrapper = mount(Login, { store, localVue });
  //   const input = wrapper.find("input");
  //   // input.element.value = "not input";
  //   input.trigger("input");
  //   expect(actions.actionInput).not.toHaveBeenCalled();
  // });

  // it('calls store action "actionClick" when button is clicked', (): void => {
  //   const wrapper = mount(Login, { store, localVue });
  //   wrapper.find("button").trigger("click");
  //   expect(actions.actionClick).toHaveBeenCalled();
  // });
});
