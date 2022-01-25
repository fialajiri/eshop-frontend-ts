import { ProductDoc } from "../../interfaces/models";

export const mockProducts: ProductDoc[] = [
  {
    id: "1",
    name: "DŘEVĚNÁ ŽIDLE COMFY",
    image: ["/images/products/zidle-comfy.jpg"],
    categories: [{name:"židle", id:'123'}, {name: "dřevo", id:'12343'}, {name:"nábytek", id:'1245'}],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at porta nibh. Cras nisi sem, consequat ut massa ac, ultricies lacinia urna. Proin augue magna, fringilla eget interdum a, eleifend at diam",
    price: 13999,
    countInStock: 10,
    availability: 10,
    
  },
  {
    id: "2",
    name: "HOUPACÍ ŽIDLE HOUPY",
    image: ["/images/products/zidle-houpy.jpg"],
    categories: [{name:"židle", id:'123'}, {name: "dřevo", id:'12343'}, {name:"nábytek", id:'1245'}],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at porta nibh. Cras nisi sem, consequat ut massa ac, ultricies lacinia urna. Proin augue magna, fringilla eget interdum a, eleifend at diam",
    price: 2999,
    countInStock: 5,
    availability: 3,
    
  },
  {
    id: "3",
    name: "ZELENÉ KŘESLO GREENY",
    image: ["/images/products/kreslo-greeny.jpg"],
    categories: [{name:"židle", id:'123'}, {name: "dřevo", id:'12343'}, {name:"nábytek", id:'1245'}],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at porta nibh. Cras nisi sem, consequat ut massa ac, ultricies lacinia urna. Proin augue magna, fringilla eget interdum a, eleifend at diam",
    price: 9999,
    countInStock: 3,
    availability: 3,
    
  },
  {
    id: "4",
    name: "DŘEVĚNÁ KOMODA SPACEY",
    image: ["/images/products/komoda.jpg"],
    categories: [{name:"židle", id:'123'}, {name: "dřevo", id:'12343'}, {name:"nábytek", id:'1245'}],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at porta nibh. Cras nisi sem, consequat ut massa ac, ultricies lacinia urna. Proin augue magna, fringilla eget interdum a, eleifend at diam",
    price: 15999,
    countInStock: 10,
    availability: 10,
    
  },
  {
    id: "5",
    name: "ZELENÉ SOFA SLEEPY",
    image: ["/images/products/sofa-sleepy.jpg"],
    categories: [{name:"židle", id:'123'}, {name: "dřevo", id:'12343'}, {name:"nábytek", id:'1245'}],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at porta nibh. Cras nisi sem, consequat ut massa ac, ultricies lacinia urna. Proin augue magna, fringilla eget interdum a, eleifend at diam",
    price: 19999,
    countInStock: 10,
    availability: 10,
    
  },
  {
    id: "6",
    name: "ŠEDÁ ŽIDLE GREY",
    image: ["/images/products/zidle-grez.jpg"],
    categories: [{name:"židle", id:'123'}, {name: "dřevo", id:'12343'}, {name:"nábytek", id:'1245'}],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at porta nibh. Cras nisi sem, consequat ut massa ac, ultricies lacinia urna. Proin augue magna, fringilla eget interdum a, eleifend at diam",
    price: 3999,
    countInStock: 10,
    availability: 10,
    
  },
];
