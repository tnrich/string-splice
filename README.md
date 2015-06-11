#Useage:
```
splice(str, index, count, add)
```

#Example
```
var splice = require('string-splice') ;

var exampleString = 'abcdefg'

splice(exampleString, 1, 2, 'ZZZ');
//'aZZZcdefg'
```


#Attributions:
Taken from the answer to this stack overflow question:
http://stackoverflow.com/questions/20817618/is-there-a-splice-method-for-strings