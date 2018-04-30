'use strict'

module.exports = class Commands
{
    constructor()
    {
        this.commands = {};
    }

    addcommand(command, func)
    {
        this.commands[command] = func;
    }

    removecommand(command)
    {
        delete this.commands[command];
    }

    parse(str)
    {
        let line = str.toString();
        let result = {};
        let command = "";
        let argv = [];
        let i = 0;
        while (i < line.length)
        {
            if (line[i] == ' ')
            {
                i++;
                break;
            }
            command += line[i];
            i++;
        }
        let argc = 0;
        argv[argc] = "";
        while (i < line.length)
        {
            if (line[i] == ' ')
            {
                if (i + 1 >= line.length)
                {
                    break;
                }
                if (line[i + 1] == ' ')
                {
                    continue;
                }
                i++;
                argc++;
                argv[argc] = "";
                continue;
            }
            argv[argc] += line[i];
            i++;
        }
        if (argv[0] == "")
        {
            argv.pop();
        }
        argc = argv.length;
        result.func = this.commands[command];
        result.argc = argc;
        result.argv = argv;
        return result;
    }
}
