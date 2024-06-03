import { Tag } from './app/shared/models/Tag';
import { Food } from './app/shared/models/Food';
export const sample_foods:Food[] = [
    {
        id:'1',
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars:4.5,
        imageUrl: 'assets/food-1.jpg',
        tags: ['FastFood','Pizza','Lunch']
    },
    {
        id:'2',
        name: 'Meatball',
        cookTime: '10-20',
        price: 20,
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars:4.7,
        imageUrl: 'assets/food-2.jpg',
        tags: ['SlowFood','Lunch']
    },
    {
        id:'6',
        name: 'Vegetables Pizza',
        cookTime: '10-20',
        price: 9,
        favorite: false,
        origins: ['italy'],
        stars:4.0,
        imageUrl: 'assets/food-6.jpg',
        tags: ['FastFood','Pizza','Lunch']
    },
    {
        id:'7',
        name: 'Spicy Cheese Burger',
        cookTime: '10-20',
        price: 12,
        favorite: false,
        origins: ['indian'],
        stars:4.0,
        imageUrl: 'assets/food-7.jpg',
        tags: ['FastFood','Burger','Lunch']
    },
    {
        id:'8',
        name: 'Vegetables Magento Pizza',
        cookTime: '45-50',
        price: 9,
        favorite: false,
        origins: ['indian'],
        stars:4.0,
        imageUrl: 'assets/food-8.jpg',
        tags: ['FastFood','Pizza','Lunch']
    },
]
export const sample_tags:Tag[] =[
    {name: 'All'},
    {name: 'FastFood'},
    {name: 'Pizza'},
    {name: 'Lunch'},
    {name: 'SlowFood'},
    {name: 'Hamburger'},
    {name: 'Fry'},
    {name: 'Soup'}
]