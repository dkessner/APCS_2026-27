# Customization - Mac


## `zsh` and the `~/.zshrc` file

`zsh` is the default shell for Terminal windows on Mac OS.  You can configure
your shell environment with the `~/.zshrc` file.  The commands in `~/.zshrc`
are run every time you open a new Terminal window.

If `~/.zshrc` does not exist, you can create a new file.

On older Mac computers, the default shell is `bash` which uses the
file `~/.bashrc` for configuration.


## Create a `geany` command

You can create a shell function `geany` by adding these lines to `~/.zshrc`.  

```
geany() {
    /Applications/Geany.app/Contents/MacOS/geany $@ &
}
```

This function:

- Runs the installed `geany` executable via its full path
  `/Applications/Geany.app/Contents/MacOS/geany`.
- Passes all command line arguments (`$@`).
- Launches the command in the background (`&`) so you still have control in the
  terminal.

## Customize your prompt

Use the following lines in your `~/.zshrc` file to customize your prompt.

```
# convenience variables for the colors
red='\e[0;31m'
RED='\e[1;31m'
blue='\e[0;34m'
BLUE='\e[1;34m'
cyan='\e[0;36m'
CYAN='\e[1;36m'
green='\e[0;32m'
GREEN='\e[1;32m'
NC='\e[0m' # No Color
yellow='\e[0;33m'
magenta='\e[0;35m'
YELLOW='\e[1;33m'
MAGENTA='\e[1;35m'

export PS1="%F{green}%~%f %# "
```

The `PS1` environment variable controls the prompt via some mysterious codes:

- `%F` sets the foreground color, `%f` unsets it.
- `%~` is the current working directory
- `%#` displays the `%` prompt (but changes to `#` for escalated privileges)

[Reference: zsh prompt expansion](https://zsh.sourceforge.io/Doc/Release/Prompt-Expansion.html#SEC52)


## Customize the colors for `ls`

Use the following lines in your `~/.zshrc` file to customize your `ls` colors.

```
export CLICOLOR=YES
export LSCOLORS="GxGxFxdxHxDxDxhbadExEx"
```

Here's the code to decipher the `LSCOLORS` string.

```
# LSCOLORS: (capital == bold)
#    * a = black
#    * b = red
#    * c = green
#    * d = brown
#    * e = blue
#    * f = magenta
#    * g = cyan
#    * h = light gray
#    * x = default
```

```
#   1. DIR
#   2. SYM_LINK
#   3. SOCKET
#   4. PIPE
#   5. EXE
#   6. BLOCK_SP
#   7. CHAR_SP
#   8. EXE_SUID
#   9. EXE_GUID
#  10. DIR_STICKY
#  11. DIR_WO_STICKY
```


