/**
 * @jest-environment jsdom
 */

import { pushToHistory } from "../scripts/router.js"

describe("length of history stack", () => {
  test("to equal 2 after SETTINGS push", () => {
    expect(pushToHistory("settings").length).toBe(2);
  })

  test("to equal 3 after ENTRY push", () => {
    expect(pushToHistory("entry", 1).length).toBe(3);
  })

  test("to equal 4 after HOME push", () => {
    expect(pushToHistory("").length).toBe(4);
  })
})

describe("current state object", () => {
  test("to equal SETTINGS state", () => {
    expect(pushToHistory("settings").state).toEqual({ page: 'settings' });
  })

  test("to equal ENTRY 1 state", () => {
    expect(pushToHistory("entry", 1).state).toEqual({ page: `entry1` });
  })

  test("to equal HOME state", () => {
    expect(pushToHistory("").state).toEqual({});
  })
})