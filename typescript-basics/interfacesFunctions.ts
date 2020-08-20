interface IPerson {
  name: string;
  city: string;
  age: number;
  printDetails(): void; // Implies that the function won't return anything
  anotherFunc?(a: number, b: number): number;
}

const tom: IPerson = {
  name: "Tom",
  city: "Munich",
  age: 33,
  printDetails: function () {
    console.log(`${this.name} - ${this.city}`);
  }
};