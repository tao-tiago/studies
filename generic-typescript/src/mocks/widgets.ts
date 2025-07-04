import IWidget from "../interfaces/Widget";

const widgets: IWidget[] = [{
  title: "I am title 1",
  description: "cool description 1",
  id: 1,
  rating: 10,
  createdAt: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
  updatedAt: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
  isSpecialCard: false
},
{
  title: "Title 2",
  description: "cool description 2",
  id: 2,
  rating: 7,
  createdAt: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
  updatedAt: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
  isSpecialCard: true
},
{
  title: "Title Three",
  description: "another description",
  id: 3,
  rating: 4,
  createdAt: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
  updatedAt: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
  isSpecialCard: false
},
{
  title: "Title 4: I love generics",
  description: "generics are awesome!",
  id: 4,
  rating: 6,
  createdAt: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
  updatedAt: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
  isSpecialCard: false
},
{
  title: "We also love TypeScript",
  description: "Yes, TypeScript is also very cool",
  id: 5,
  rating: 10,
  createdAt: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
  updatedAt: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
  isSpecialCard: false
},
{
  title: "X",
  description: "X",
  id: 6,
  rating: 10,
  createdAt: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
  updatedAt: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
  isSpecialCard: false
},
{
  title: "Y",
  description: "Y",
  id: 7,
  rating: 9,
  createdAt: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
  updatedAt: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
  isSpecialCard: false
},
{
  title: "Z",
  description: "Z",
  id: 8,
  rating: 1,
  createdAt: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
  updatedAt: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
  isSpecialCard: true
},
{
  title: "A",
  description: "A",
  id: 9,
  rating: 6,
  createdAt: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
  updatedAt: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
  isSpecialCard: false
},
{
  title: "B",
  description: "B",
  id: 10,
  rating: 0,
  createdAt: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
  updatedAt: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
  isSpecialCard: false
},
{
  title: "C",
  description: "C",
  id: 11,
  rating: 3,
  createdAt: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
  updatedAt: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
  isSpecialCard: false
},
{
  title: "",
  description: "I am the description. This card has an empty, i.e. 'falsy' title :(",
  id: 12,
  rating: 5,
  createdAt: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
  updatedAt: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
  isSpecialCard: false
},
{
  title: "I am the title. This card has an empty, i.e. 'falsy' description :(",
  description: "",
  id: 13,
  rating: 5,
  createdAt: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
  updatedAt: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
  isSpecialCard: false
},]

export default widgets