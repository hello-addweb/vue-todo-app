import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";

import ToDos from "/components/ToDos.vue";
import {v4 as uuidv4} from "uuid";

test("mount component", async () => {
    expect(ToDos).toBeTruthy();

    const wrapper = mount(ToDos, {
        props: {
            todoEntries: [
                {
                    id: uuidv4(),
                    title: 'Task #1',
                    completed: false
                },
                {
                    id: uuidv4(),
                    title: 'Task #2',
                    completed: false
                },
                {
                    id: uuidv4(),
                    title: 'Task #3',
                    completed: false
                },
            ]
        }
    });
    expect(wrapper.text()).toContain("Ongoing");
    expect(typeof  ToDos.props.todoEntries).toBe('object');
});
