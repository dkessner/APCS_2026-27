---
title: Java versions 
layout: page
---

## Java 8

We need to use Java version 8 (also known as 1.8) in order to use the
Processing libraries.

To check that you are using the correct version, make sure that the following
commands show version 1.8:
```
java -version
javac -version
```

## Java versions on Mac

If you haven't already, install with Homebrew from Terminal:

```
brew tap adoptopenjdk/openjdk
brew cask install adoptopenjdk8
```

If success: `adoptopenjdk8 was successfully installed!`

On OSX, different versions of Java are generally installed in 
`/Library/Java/JavaVirtualMachines`

To see what Java versions are installed, run the `java_home` tool:
```
/usr/libexec/java_home -V
```

The `java_home` tool gives a convenient way of getting the full path to the 
home directory of one of the Java versions.  This command
```
/usr/libexec/java_home -v 1.8
```
should output: 
```
/Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home
```

To switch the default Java to Version 8 (Java 1.8), set the
`JAVA_HOME` environment variable:
```
export JAVA_HOME=$(/usr/libexec/java_home -v 1.8)
```

To automatically set `JAVA_HOME` when you open a Terminal window, use Atom to
add the `export` line above to `~/.bashrc` (or `~\.bash_profile`, or `.zshrc`
on Catalina).


