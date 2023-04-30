import Button from "../index.vue";

import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

describe("test Button", () => {
  test("mount @vue/test-utils", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "pickme!",
      },
    });
    expect(wrapper.text()).toBe("pickme!");
  });
});

describe("test color", () => {
  test("default", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "pickme",
      },
    });
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("bg-blue-500")
    ).toBe(true);
  });

  test("red", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "pickme",
      },
      props: {
        color: "red",
      },
    });
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("bg-red-500")
    ).toBe(true);
  });
});
