# Puzzle

What I did:

- dockerized environment with eslint and mocha
- wrote a functions to get possible moves for players
- wrote a function which to get a next wolf move
- wrote a function to get movement direction
- wrote a scenario to test wolf movement
- found the win path which I used for testing :)

What I didn't manage to do which was constrained by time:

- the overall simulation
  - I was thinking about finding paths to the target first and then switch them depending on the wolf position.
  - The potential optimisation could be to find the places to get the wolf trapped and use Thomas to lead him to the place.
- The `getWolfNextMove` fails in cases when the wolf is on a different row and column and can make 2 moves to match x/y axis. It's because I made wrong assumptions at the beginning and changing the logic would take more time.
  - The fix would be to tinker more with Thomas and wolf positions and also look for the movement direction.
- I would add more tests.
- I would refactor the code to use more helper functions with meaningful names.
- I would also add CI and setup some git flow.

## Usage

Run:

```bash
docker-compose up --build
```

In separate terminal tab run (there will be tests failing):

```bash
docker exec -it cyferd npm test
```
