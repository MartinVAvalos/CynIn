export class Ingredient {
  // This is acceptable, but below the comments there is an alternative.
  // The alternative does everything that line 4 to 10 would do. It is basically a shortcut.
  // public name: string;
  // public amount: number;
  //
  // constructor(name: string, amount: number) {
  //   this.name = name;
  //   this.amount = amount;
  // }
  constructor(public name: string, public amount: number) {}
}
