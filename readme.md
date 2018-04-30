#commands

Use addcommand(command, func) to add new command.

Use removecommand(command) to remove command.

Use parse(str) to parse function and arguments from string command.

parse(str) returns an object {func, argc, argv};

Example:

```
const Commands = require('commands');
const commands = new Commands();
commands.addcommand('log', function(argv){
    console.log(+argv[0]+argv[1]);
})
let obj = commands.parse('log 2 3');
obj.func(obj.argv); //returns 5
```
