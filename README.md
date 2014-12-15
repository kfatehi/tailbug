tailbug
=======

log into a file you tail

## Usage

You're debugging something... the logs are noisy enough, you need clarity, so you want to log to a file that you'll `tail -f` on the other side.

Step 1: Create your file `touch /tmp/test`

Step 2: Require tailbug at the source and log stuff with it:

```
var debug = require('tailbug')('/tmp/blabla')

debug("hello", { put: 'anything'}, "here", "it behaves like console.log")
```

Step 3: Run your program, get output with filename, line number , etc.
