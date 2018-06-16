class PlayerApi {
  players = [
    {
      name: "Robin Busby",
      number: 12
    },
    {
      name: "Macauley Riggs",
      number: 20
    },
    {
      name: "Korben Woodard",
      number: 50
    },
    {
      name: "Robert Vo (Bob)",
      number: 30
    },
    {
      name: "Nyah Franco (Pacho)",
      number: 88
    },
    {
      name: "Jeff Delarosa",
      number: 77
    }
  ];

  getPlayers = () => {
    return this.players;
  };

  getPlayer = number => {
    return this.players.filter(x => {
      return x.number === parseInt(number);
    })[0];
  };
}

export default new PlayerApi();
