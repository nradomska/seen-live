const artists = [
    {
        "name": "AbradAb",
        "places": [
            {
                "name": "Męskie Granie Lublin",
                "date": "2011"
            }
        ],
        "artistId": 1
    },
    {
        "name": "Adhezja",
        "places": [
            {
                "name": "Kulturalia",
                "date": "2011"
            }
        ],
        "artistId": 2
    },
    {
        "name": "Agyness B. Marry",
        "places": [
            {
                "name": "Stodoła",
                "date": "listopad 2014"
            }
        ],
        "artistId": 3
    },
    {
        "name": "Akcent",
        "places": [
            {
                "name": "Graffiti",
                "date": "luty 20"
            }
        ],
        "artistId": 4
    },
    {
        "name": "Alice In Chains",
        "places": [
            {
                "name": "Rock Werchter",
                "date": "2018"
            }
        ],
        "artistId": 5
    },
    {
        "name": "Alt-J",
        "places": [
            {
                "name": "Rock-a-field",
                "date": "2015"
            },
            {
                "name": "Rock Werchter",
                "date": "2017"
            }
        ],
        "artistId": 6
    },
    {
        "name": "Ania Dąbrowska",
        "places": [
            {
                "name": "Co jest grane 24",
                "date": "2016"
            }
        ],
        "artistId": 7
    },
    {
        "name": "Arcade Fire",
        "places": [
            {
                "name": "Rock Werchter",
                "date": "2017"
            }
        ],
        "artistId": 8
    },
    {
        "name": "Archive",
        "places": [
            {
                "name": "Open'er",
                "date": "2010"
            }
        ],
        "artistId": 9
    },
    {
        "name": "Arctic Monkeys",
        "places": [
            {
                "name": "Open'er",
                "date": "2009"
            },
            {
                "name": "Rock Werchter",
                "date": "2018"
            }
        ],
        "artistId": 10
    },
    {
        "name": "Baasch",
        "places": [
            {
                "name": "Co jest grane 24",
                "date": "2016"
            }
        ],
        "artistId": 11
    },
    {
        "name": "Bajzel",
        "places": [
            {
                "name": "Graffiti",
                "date": "marzec 2010"
            }
        ],
        "artistId": 12
    },
    {
        "name": "Balthazar",
        "places": [
            {
                "name": "Rock-a-field",
                "date": "2015"
            },
            {
                "name": "Hydrozagadka",
                "date": "grudzień 2015"
            }
        ],
        "artistId": 13
    },
    {
        "name": "Barns Courtney",
        "places": [
            {
                "name": "Rock Werchter",
                "date": "2016"
            }
        ],
        "artistId": 14
    },
    {
        "name": "Bastille",
        "places": [
            {
                "name": "Rock-a-field",
                "date": "2015"
            }
        ],
        "artistId": 15
    },
    {
        "name": "Beirut",
        "places": [
            {
                "name": "Rock Werchter",
                "date": "2016"
            }
        ],
        "artistId": 16
    },
    {
        "name": "Beneficjenci Splendoru",
        "places": [
            {
                "name": "Stodoła",
                "date": "listopad 2014"
            }
        ],
        "artistId": 17
    },
    {
        "name": "Biffy Clyro",
        "places": [
            {
                "name": "Coke",
                "date": "2013"
            },
            {
                "name": "Stodoła",
                "date": "listopad 2013"
            },
            {
                "name": "Torwar",
                "date": "październik 2016"
            }
        ],
        "artistId": 18
    },
    {
        "name": "Big Sean",
        "places": [
            {
                "name": "Orange",
                "date": "2015"
            }
        ],
        "artistId": 19
    },
    {
        "name": "Blink-182",
        "places": [
            {
                "name": "Rock Werchter",
                "date": "2017"
            }
        ],
        "artistId": 20
    },
    {
        "name": "Blues Pills",
        "places": [
            {
                "name": "Rock Werchter",
                "date": "2017"
            }
        ],
        "artistId": 21
    },
    {
        "name": "Brodka",
        "places": [
            {
                "name": "Coke",
                "date": "2013"
            },
            {
                "name": " Co jest grane 2",
                "date": "2016"
            }
        ],
        "artistId": 22
    },
    {
        "name": "Calvin Harris",
        "places": [
            {
                "name": "Orange",
                "date": "2009"
            }
        ],
        "artistId": 23
    },
    {
        "name": "Coma",
        "places": [
            {
                "name": "Juwenalia Lublin",
                "date": "2008"
            },
            {
                "name": "Kulturalia",
                "date": "2011"
            }
        ],
        "artistId": 24
    },
    {
        "name": "Car Seat Headrest",
        "places": [
            {
                "name": "Carré Rotondes",
                "date": "sierpień 2017"
            }
        ],
        "artistId": 25
    },
    {
        "name": "Crocodiles",
        "places": [
            {
                "name": "Stodoła",
                "date": "marzec 2011"
            }
        ],
        "artistId": 26
    },
    {
        "name": "Daughter",
        "places": [
            {
                "name": "Rock Werchter",
                "date": "2016"
            }
        ],
        "artistId": 27
    },
    {
        "name": "De Staat",
        "places": [
            {
                "name": "Stodoła",
                "date": "styczeń 2017"
            },
            {
                "name": "Amsterdam ArenA",
                "date": "wrzesień 2017"
            }
        ],
        "artistId": 28
    },
    {
        "name": "Declan McKenna",
        "places": [
            {
                "name": "Rock Werchter",
                "date": "2017"
            }
        ],
        "artistId": 29
    },
    {
        "name": "Die Antwoord",
        "places": [
            {
                "name": "Orange",
                "date": "2016"
            }
        ],
        "artistId": 30
    },
    {
        "name": "Domowe melodie",
        "places": [
            {
                "name": "Stodoła",
                "date": "kwiecień 2016"
            }
        ],
        "artistId": 31
    },
    {
        "name": "Doomsquad",
        "places": [
            {
                "name": "Carré Rotondes",
                "date": "sierpień 2017"
            }
        ],
        "artistId": 32
    },
    {
        "name": "Dropkick Murphys",
        "places": [
            {
                "name": "Rock Werchter",
                "date": "2017"
            }
        ],
        "artistId": 33
    },
    {
        "name": "Dry the River",
        "places": [
            {
                "name": "Stodoła",
                "date": "listopad 2013"
            }
        ],
        "artistId": 34
    },
    {
        "name": "Dżem",
        "places": [
            {
                "name": "Kozienalia",
                "date": "2007"
            },
            {
                "name": "Juwenalia Lublin",
                "date": "2009"
            },
            {
                "name": " Wianki Warszawa",
                "date": "2014"
            }
        ],
        "artistId": 35
    },
    {
        "name": "Eagles of Death Metal",
        "places": [
            {
                "name": "Rock-a-field",
                "date": "2015"
            }
        ],
        "artistId": 36
    },
    {
        "name": "Editors",
        "places": [
            {
                "name": "Open'er",
                "date": "2008"
            },
            {
                "name": "Orange",
                "date": "2016"
            }
        ],
        "artistId": 37
    },
    {
        "name": "Elle King",
        "places": [
            {
                "name": "Rock Werchter",
                "date": "2016"
            }
        ],
        "artistId": 38
    },
    {
        "name": "Enej",
        "places": [
            {
                "name": "Juwenalia Lublin",
                "date": "2011"
            }
        ],
        "artistId": 39
    },
    {
        "name": "Faith No More",
        "places": [
            {
                "name": "Open'er",
                "date": "2009"
            }
        ],
        "artistId": 40
    },
    {
        "name": "First Aid Kit",
        "places": [
            {
                "name": "Rock Werchter",
                "date": "2018"
            }
        ],
        "artistId": 41
    },
    {
        "name": "Fleet Foxes",
        "places": [
            {
                "name": "Rock Werchter",
                "date": "2018"
            }
        ],
        "artistId": 42
    },
    {
        "name": "Florence + the Machine",
        "places": [
            {
                "name": "Stodoła",
                "date": "marzec 2010"
            },
            {
                "name": "Coke",
                "date": "2013"
            },
            {
                "name": "Orange",
                "date": "2014"
            },
            {
                "name": "Rock Werchter",
                "date": "2016"
            }
        ],
        "artistId": 43
    },
    {
        "name": "Foo Fighters",
        "places": [
            {
                "name": "Rock Werchter",
                "date": "2017"
            }
        ],
        "artistId": 44
    },
    {
        "name": "Franz Ferdinand",
        "places": [
            {
                "name": "Coke",
                "date": "2013"
            },
            {
                "name": "Rock Werchter",
                "date": "2018"
            }
        ],
        "artistId": 45
    },
    {
        "name": "Frightened Rabbit",
        "places": [
            {
                "name": "Rock Werchter",
                "date": "2016"
            }
        ],
        "artistId": 46
    },
    {
        "name": "Future Islands",
        "places": [
            {
                "name": "Rock Werchter",
                "date": "2017"
            }
        ],
        "artistId": 47
    }
];

export default artists;