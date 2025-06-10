export interface IFooBar {
  foo: string
  bar: string
}

const fooBars: IFooBar[] = [
  {
    foo: "foo1",
    bar: "bar1"
  },
  {
    foo: "foo2",
    bar: "bar2"
  }
]

function sortByFoo(fooBars: IFooBar[]) {
  fooBars.sort((a, b) => {
    if (a.foo > b.foo) {
      return 1
    }

    if (a.foo < b.foo) {
      return -1
    }

    return 0
  })
}

function sortByKey<T>(data: T[], key: keyof T) {
  data.sort((a, b) => {
    if (a[key] > b[key]) {
      return 1
    }

    if (a[key] < b[key]) {
      return -1
    }

    return 0
  })
}

sortByKey<IFooBar>(fooBars, "foo")

class Animal {
  public legs: number

  constructor(legs: number) {
    this.legs = legs
  }
}

class Cat extends Animal {
  constructor() {
    super(4)
  }
}


class Bacteria {

}

const myCat = new Cat()
const bacteria = new Bacteria()

function printLegs<T extends Animal>(animal: T) {
  console.log(`My legs: ${animal.legs}`)
}

printLegs(myCat)