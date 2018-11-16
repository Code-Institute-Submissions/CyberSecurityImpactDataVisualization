describe("Add item", function() {
    it("should take two arguments and return the average of those two arguments", function() {
        expect(add_item(2, 2)).toBe(4);
    });
});

describe("Initialise counts", function() {
    it("should initialise three counts to 0", function() {
        expect(initialise()).toBe({count: 0, total: 0, average: 0});
    });
});