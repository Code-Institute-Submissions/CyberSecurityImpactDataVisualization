// Tests add_item function. This should return the first number called by the function, as this corresponds to the number of the report used in the function.
describe("Add item", function() {
    it("should take two arguments and return the first argument", function() {
        expect(add_item(2, 2)).toBe(2);
    });
});

describe("Add item", function() {
    it("should take two arguments and return the first argument", function() {
        expect(add_item(2, 2)).not.toBe(4);
    });
});

describe("Add item", function() {
    it("should take two arguments and return the first argument", function() {
        expect(add_item(43, 7)).toBe(43);
    });
});

describe("Add item", function() {
    it("should take two arguments and return the first argument", function() {
        expect(add_item(43, 7)).not.toBe(400);
    });
});

describe("Add item", function() {
    it("should take two arguments and return the first argument", function() {
        expect(add_item(0, 0)).toBe(0);
    });
});

describe("Add item", function() {
    it("should take two arguments and return the first argument", function() {
        expect(add_item(0, 0)).not.toBe(8);
    });
});

describe("Add item", function() {
    it("should take two arguments and return the first argument", function() {
        expect(add_item(-2, 0)).toBe(-2);
    });
});

describe("Add item", function() {
    it("should take two arguments and return the first argument", function() {
        expect(add_item(-2, 0)).not.toBe(0);
    });
});



// Tests remove_item function. This should return the first number called by the function, as this corresponds to the number of the report used in the function.
describe("Remove item", function() {
    it("should take two arguments and return the first argument", function() {
        expect(remove_item(8, 0)).toBe(8);
    });
});

describe("Remove item", function() {
    it("should take two arguments and return the first argument", function() {
        expect(remove_item(8, 0)).not.toBe(0);
    });
});

describe("Remove item", function() {
    it("should take two arguments and return the first argument", function() {
        expect(remove_item(8, 3)).toBe(8);
    });
});


describe("Remove item", function() {
    it("should take two arguments and return the first argument", function() {
        expect(remove_item(8, 3)).not.toBe(11);
    });
});

describe("Remove item", function() {
    it("should take two arguments and return the first argument", function() {
        expect(remove_item(-8, 3)).toBe(-8);
    });
});


describe("Remove item", function() {
    it("should take two arguments and return the first argument", function() {
        expect(remove_item(-8, 3)).not.toBe(803);
    });
});

describe("Remove item", function() {
    it("should take two arguments and return the first argument", function() {
        expect(remove_item(83904, 301)).toBe(83904);
    });
});

describe("Remove item", function() {
    it("should take two arguments and return the first argument", function() {
        expect(remove_item(83904, 301)).not.toBe(839094);
    });
});



// Tests the initialise_counts function, which should return three counts at zero
describe("Initialise counts", function() {
    it("should initialise three counts to 0", function() {
        expect(initialise()).toEqual({ count: 0, total: 0, average: 0 })
    });
});

describe("Initialise counts", function() {
    it("should initialise three counts to 0", function() {
        expect(initialise()).not.toEqual({ count: 2, total: 2, average: 3 })
    });
});

describe("Initialise counts", function() {
    it("should initialise three counts to 0", function() {
        expect(initialise()).not.toEqual({ count: 0, total: 0, average: 1 })
    });
});

describe("Initialise counts", function() {
    it("should initialise three counts to 0", function() {
        expect(initialise()).not.toEqual({ count: 0, total: 0})
    });
});