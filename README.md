## Modern Web Development (a guided introduction)

### Setup

To get setup the following global modules are required:

- [express][1]
- [node-inspector][2]

Once the above are installed it's advised to run up node-inspector and keep
it running during development, this tool will help a lot!

```
$ node-inspector &
```

The node-inspector will happily run in the background.

Next we need to make a directory and start a fresh express app.

```
$ express --sessions my-app
```

This process bootstraps a new project for you with session support. Other options
can be passed to express at this stage to further configure your new app. Check the
help docs for more info.

With your new app bootstrapped move into the director and run the following:

```
$ npm install
```

This will install the all required dependencies for your app. Get to know npm
it's your friend.

Some final recommended steps involve installing a database driver for your app,
the two modules required for this are listed below:


- [sqlite3][3]
- [persist][4]

Don't forget to add the above as dependencies of your app!


[1]: https://github.com/visionmedia/express
[2]: https://github.com/node-inspector/node-inspector
[3]: https://github.com/developmentseed/node-sqlite3
[4]: https://github.com/nearinfinity/node-persist
