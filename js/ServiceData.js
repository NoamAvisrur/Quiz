app.service('DataService', function() {
    this.data = [
                    {
                        Q: "what's the name of our galaxy?",
                        A: "Milky Way",
                        O: [
                            "LMC1300",
                            "Andromeda",
                            "Milky Way"
                        ]
                    },
                    {
                        Q: "what's the distance from the earth to the moon?",
                        A: "384,400km",
                        O: [
                            "859,000km",
                            "384,400km",
                            "453,000km",
                            "295,050km"
                        ]
                    },
                    {
                        Q: "which planet is closest to the sun?",
                        A: "Mercury",
                        O: [
                            "Mercury",
                            "Earth",
                            "Venus"
                        ]
                    },
                    {
                        Q: "what's the temperature of the sun's surface?",
                        A: "5,500 degrees C",
                        O: [
                            "10,500 degrees C",
                            "5,500 degrees C",
                            "12,500 degrees C",
                            "9,500 degrees C",
                            "2,500 degrees C"
                        ]
                    },
                    {
                        Q: "what's the biggest planet in the solar system?",
                        A: "Jupiter",
                        O: [
                            "Saturn",
                            "Jupiter",
                            "Neptun"
                        ]
                    }
                ]

    this.answers = [];

})