const cardData = [
    {
        "id": 1,
        "title": "Test Title 1",
        "img": "/images/macbook-code.jpg",
        "tags": [
            "Professional",
            "Frontend",
            "UX UI"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis nunc non nunc sodales bibendum. Morbi suscipit lorem metus, vel consequat tortor aliquet sed. Donec faucibus nibh in dui maximus mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi et enim ante. In feugiat blandit ipsum, in luctus dui blandit nec. Aenean accumsan porttitor lectus vel rhoncus. Nunc rhoncus pellentesque finibus."
    },
    {
        "id": 2,
        "title": "Test Title 2",
        "img": "/images/hero-background-code.jpg",
        "tags": [
            "Professional",
            "Personal"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis nunc non nunc sodales bibendum. Morbi suscipit lorem metus, vel consequat tortor aliquet sed. Donec faucibus nibh in dui maximus mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi et enim ante. In feugiat blandit ipsum, in luctus dui blandit nec. Aenean accumsan porttitor lectus vel rhoncus. Nunc rhoncus pellentesque finibus."
    },
    {
        "id": 3,
        "title": "Test Title 3",
        "img": "/images/macbook-code.jpg",
        "tags": [
            "Personal",
            "Backend"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis nunc non nunc sodales bibendum. Morbi suscipit lorem metus, vel consequat tortor aliquet sed. Donec faucibus nibh in dui maximus mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi et enim ante. In feugiat blandit ipsum, in luctus dui blandit nec. Aenean accumsan porttitor lectus vel rhoncus. Nunc rhoncus pellentesque finibus."
    },
    {
        "id": 4,
        "title": "Test Title 4",
        "img": "/images/hero-background-code.jpg",
        "tags": [
            "Personal",
            "Frontend",
            "Backend"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis nunc non nunc sodales bibendum. Morbi suscipit lorem metus, vel consequat tortor aliquet sed. Donec faucibus nibh in dui maximus mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi et enim ante. In feugiat blandit ipsum, in luctus dui blandit nec. Aenean accumsan porttitor lectus vel rhoncus. Nunc rhoncus pellentesque finibus."
    },
    {
        "id": 5,
        "title": "Test Title 5",
        "img": "/images/macbook-code.jpg",
        "tags": [
            "Professional",
            "UX UI"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis nunc non nunc sodales bibendum. Morbi suscipit lorem metus, vel consequat tortor aliquet sed. Donec faucibus nibh in dui maximus mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi et enim ante. In feugiat blandit ipsum, in luctus dui blandit nec. Aenean accumsan porttitor lectus vel rhoncus. Nunc rhoncus pellentesque finibus."
    },
    {
        "id": 6,
        "title": "Test Title 6",
        "img": "/images/hero-background-code.jpg",
        "tags": [
            "Professional"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis nunc non nunc sodales bibendum. Morbi suscipit lorem metus, vel consequat tortor aliquet sed. Donec faucibus nibh in dui maximus mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi et enim ante. In feugiat blandit ipsum, in luctus dui blandit nec. Aenean accumsan porttitor lectus vel rhoncus. Nunc rhoncus pellentesque finibus."
    },
    {
        "id": 7,
        "title": "Test Title 7",
        "img": "/images/macbook-code.jpg",
        "tags": [
            "Personal"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis nunc non nunc sodales bibendum. Morbi suscipit lorem metus, vel consequat tortor aliquet sed. Donec faucibus nibh in dui maximus mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi et enim ante. In feugiat blandit ipsum, in luctus dui blandit nec. Aenean accumsan porttitor lectus vel rhoncus. Nunc rhoncus pellentesque finibus."
    },
    {
        "id": 8,
        "title": "Test Title 8",
        "img": "/images/hero-background-code.jpg",
        "tags": [
            "Professional"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis nunc non nunc sodales bibendum. Morbi suscipit lorem metus, vel consequat tortor aliquet sed. Donec faucibus nibh in dui maximus mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi et enim ante. In feugiat blandit ipsum, in luctus dui blandit nec. Aenean accumsan porttitor lectus vel rhoncus. Nunc rhoncus pellentesque finibus."
    },
    {
        "id": 9,
        "title": "Test Title 9",
        "img": "/images/macbook-code.jpg",
        "tags": [
            "Personal"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis nunc non nunc sodales bibendum. Morbi suscipit lorem metus, vel consequat tortor aliquet sed. Donec faucibus nibh in dui maximus mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi et enim ante. In feugiat blandit ipsum, in luctus dui blandit nec. Aenean accumsan porttitor lectus vel rhoncus. Nunc rhoncus pellentesque finibus."
    },
    {
        "id": 10,
        "title": "Test Title 10",
        "img": "/images/hero-background-code.jpg",
        "tags": [
            "Professional"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis nunc non nunc sodales bibendum. Morbi suscipit lorem metus, vel consequat tortor aliquet sed. Donec faucibus nibh in dui maximus mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi et enim ante. In feugiat blandit ipsum, in luctus dui blandit nec. Aenean accumsan porttitor lectus vel rhoncus. Nunc rhoncus pellentesque finibus."
    },
    {
        "id": 11,
        "title": "Test Title 11",
        "img": "/images/hero-background-code.jpg",
        "tags": [
            "Professional"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis nunc non nunc sodales bibendum. Morbi suscipit lorem metus, vel consequat tortor aliquet sed. Donec faucibus nibh in dui maximus mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi et enim ante. In feugiat blandit ipsum, in luctus dui blandit nec. Aenean accumsan porttitor lectus vel rhoncus. Nunc rhoncus pellentesque finibus."
    },
    {
        "id": 12,
        "title": "Test Title 12",
        "img": "/images/macbook-code.jpg",
        "tags": [
            "Personal"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis nunc non nunc sodales bibendum. Morbi suscipit lorem metus, vel consequat tortor aliquet sed. Donec faucibus nibh in dui maximus mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi et enim ante. In feugiat blandit ipsum, in luctus dui blandit nec. Aenean accumsan porttitor lectus vel rhoncus. Nunc rhoncus pellentesque finibus."
    },
    {
        "id": 13,
        "title": "Test Title 13",
        "img": "/images/hero-background-code.jpg",
        "tags": [
            "Professional"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis nunc non nunc sodales bibendum. Morbi suscipit lorem metus, vel consequat tortor aliquet sed. Donec faucibus nibh in dui maximus mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi et enim ante. In feugiat blandit ipsum, in luctus dui blandit nec. Aenean accumsan porttitor lectus vel rhoncus. Nunc rhoncus pellentesque finibus."
    },
    {
        "id": 14,
        "title": "Test Title 14",
        "img": "/images/macbook-code.jpg",
        "tags": [
            "Personal"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis nunc non nunc sodales bibendum. Morbi suscipit lorem metus, vel consequat tortor aliquet sed. Donec faucibus nibh in dui maximus mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi et enim ante. In feugiat blandit ipsum, in luctus dui blandit nec. Aenean accumsan porttitor lectus vel rhoncus. Nunc rhoncus pellentesque finibus."
    },
    {
        "id": 15,
        "title": "Test Title 15",
        "img": "/images/hero-background-code.jpg",
        "tags": [
            "Professional"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis nunc non nunc sodales bibendum. Morbi suscipit lorem metus, vel consequat tortor aliquet sed. Donec faucibus nibh in dui maximus mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi et enim ante. In feugiat blandit ipsum, in luctus dui blandit nec. Aenean accumsan porttitor lectus vel rhoncus. Nunc rhoncus pellentesque finibus."
    }
]

export default cardData;


