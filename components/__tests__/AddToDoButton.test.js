import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";

import AddToDoButton from "/components/AddToDoButton.vue";

test("mount component", async () => {
    expect(AddToDoButton).toBeTruthy();

    const wrapper = mount(AddToDoButton);
    expect(wrapper.text()).toContain("Add New Task");

});
