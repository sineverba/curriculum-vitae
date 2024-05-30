import { getPreloadedStore } from "@/app/lib/utilityStore";

describe("Test getPreloadedStore", () => {
  it("Can test preloaded store", () => {
    expect(getPreloadedStore()).toStrictEqual({});
  });
});
