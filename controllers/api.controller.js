export const api = ((req, res) => {
    res.json({
        id: "1",
       name: "Fruit Salad",
       servings: 10,
       vegan: true,
        ingredients: [
            'Apples',
            'Grapes',
            'Kiwi',
            'Oranges',
            'Strawberries',
            'Pineapples'
        ]
    })
})
