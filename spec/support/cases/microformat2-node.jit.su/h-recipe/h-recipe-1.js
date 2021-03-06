// http://microformat2-node.jit.su/h-recipe.html

{
    "items": [ {
        "type": ["h-recipe"],
        "properties": {
            "name": ["Yorkshire Puddings"],
            "summary": ["Makes 6 good sized Yorkshire puddings, the way my mum taught me"],
            "yield": ["6 good sized Yorkshire puddings"],
            "photo": ["http://codebits.glennjones.net/semantic/yorkshire-puddings.jpg"],
            "review": [
                {
                    "value": "4.5 stars out 5 based on 35 reviews",
                    "type": ["h-review-aggregate"],
                    "properties": {
                        "rating": ["4.5 stars out 5 based on"],
                        "average": ["4.5"],
                        "count": ["35"],
                        "name": ["4.5 stars out 5 based on 35 reviews"]
                    }
                }
            ],
            "ingredient": [
                "1 egg",
                "75g plain flour",
                "70ml milk",
                "60ml water",
                "Pinch of salt"
            ],
            "instructions": [
                "\n        \n            Pre-heat oven to 230C or gas mark 8. Pour the vegetable oil evenly into 2 x 4-hole \n            Yorkshire pudding tins and place in the oven to heat through. \n            \n            To make the batter, add all the flour into a bowl and beat in the eggs until smooth. \n            Gradually add the milk and water while beating the mixture. It should be smooth and \n            without lumps. Finally add a pinch of salt.\n            \n            Make sure the oil is piping hot before pouring the batter evenly into the tins. \n            Place in the oven for 20-25 minutes until pudding have risen and look golden brown\n        \n    "
            ],
            "nutrition": [
                "Calories: 125",
                "Fat: 3.2g",
                "Cholesterol: 77mg"
            ],
            "published": ["2011-10-27"],
            "author": [
                {
                    "value": "Glenn Jones",
                    "type": ["h-card"],
                    "properties": {
                        "name": ["Glenn Jones"],
                        "url": ["http://glennjones.net"]
                    }
                }
            ]
        }
    }]
}
