interface Vehicle {
    start(): void;
    stop(): void;
}

class Car implements Vehicle {
    // Публичные свойства (по умолчанию)
    public brand: string;    
    // Приватные свойства
    private mileage: number = 0;    
    // Защищенные свойства (доступны в наследниках)
    protected engineStatus: boolean = false;    
    // Readonly свойства
    public readonly vin: string;    
    constructor(brand: string, vin: string) {
        this.brand = brand;
        this.vin = vin;
    }    
    start(): void {
        this.engineStatus = true;
        console.log(`${this.brand} started`);
    }    
    stop(): void {
        this.engineStatus = false;
        console.log(`${this.brand} stopped`);
    }    
    // Геттеры и сеттеры
    public getMileage(): number {
        return this.mileage;
    }    
    public drive(distance: number): void {
        this.mileage += distance;
    }
}

// Наследование
class ElectricCar extends Car {
    private batteryLevel: number = 100;
    
    charge(): void {
        this.batteryLevel = 100;
        console.log("Battery fully charged");
    }
}

