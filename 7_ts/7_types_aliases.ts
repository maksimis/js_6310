// Type Alias
type Point = {
    x: number;
    y: number;
};

type ID = number | string;

// Interface
interface PointInterface {
    x: number;
    y: number;
}

// Расширение Type Alias
type Point3D = Point & { z: number };

// Расширение Interface
interface Point3DInterface extends PointInterface {
    z: number;
}

// Различия
interface Animal {
    name: string;
}

interface Animal {
    age: number;
}
// Animal теперь имеет оба свойства: name и age

type Person = {
    name: string;
};

// type Person = { age: number }; // Ошибка! Type aliases нельзя расширять
