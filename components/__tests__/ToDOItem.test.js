import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";

import ToDoItem from "/components/ToDoItem.vue";
import {v4 as uuidv4} from "uuid";

test("mount component", async () => {
    expect(ToDoItem).toBeTruthy();

    const wrapper = mount(ToDoItem, {
        props: {
            todoItem: {
                id: uuidv4(),
                title: 'Task #1',
                completed: false
            }
        }
    });
    expect(wrapper.text()).toContain("Delete");
    expect(typeof  ToDoItem.props.todoItem).toBe('object');
});
