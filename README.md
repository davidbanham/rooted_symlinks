On our nodeJS projects we often like to have a symlink called `root` in the `node_modules` folder.

This is a neat trick, since when you're requiring files from elsewhere in your project, you never need to `require('../../../foo.js');`. Instead, you just `require('root/libs/foo.js');`

This works because node looks first in the node_modules folder for a dir called `root`. It finds it! So it looks within for the files it's after.

We find this really useful as it allows you to move files around the project without needing to change their relative paths. If you're nested deep you don't need to count how many folders you need to traverse up, etc.

Sadly, npm3 totally breaks this behaviour.

[https://travis-ci.org/davidbanham/rooted_symlinks](https://travis-ci.org/davidbanham/rooted_symlinks)

It seems to ignore any module which can be reached through a symlink as part of it's de-duping process. In a project where someone has run `ln -s .. node_modules/root` that's every single module. Oh dear!
