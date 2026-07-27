---
title: Java libraries and CLASSPATH
layout: page
---

## Java libraries

A _software library_ is a set of functions/classes that you can use in your own
program.  In Java, libraries are packaged into `.jar` (Java archive) files.

In order to use a `.jar` file, you need to tell javac/java where to find it.
You can do this on the command line when you call javac/java (`-cp`) or by
using the `CLASSPATH` environment variable.  If the `CLASSPATH` environment
variable is set, the javac/java tools will look for the indicated `.jar` files.

We will be using the Processing libraries.  I put the Processing `.jar` files
in a folder named `processing_library` in the class shared folder.

## Setting CLASSPATH on Mac (or Linux)

You can set the `CLASSPATH` environment variable from the command line:
```
export CLASSPATH=".:/Applications/Processing.app/Contents/Java/core/library/*"
```

Note that `$HOME` is another environment variable with the name of your home
directory (`/Users/username`).

To automatically set `CLASSPATH` when you open a Terminal window, use Atom to
add the `export` line above to `~/.bashrc` (or `~\.bash_profile`, or `.zshrc`
on Catalina).

## Setting CLASSPATH on Windows

You should be able to do this in System Environment Variables.  However, we've
seen a problem with environment variables not being seen correctly in
Powershell.

This has worked in Powershell:
```
$env:CLASSPATH = ".;C:\Users\username\processing_library\*"
```

