// Union types
type StringOrNumber = string | number;

function processValue(value: StringOrNumber): string {
    if (typeof value === "string") {
        return value.toUpperCase(); // TypeScript знает, что это string
    }
    return value.toFixed(2); // TypeScript знает, что это number
}

// Intersection types
interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

type Employee = Identity & BusinessPartner;

const employee: Employee = {
    id: 1,
    name: "John",
    credit: 1000
};

// Type guards
interface Bird {
    fly(): void;
    layEggs(): void;
}

interface Fish {
    swim(): void;
    layEggs(): void;
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet.swim(); // TypeScript знает, что это Fish
    } else {
        pet.fly(); // TypeScript знает, что это Bird
    }
}
