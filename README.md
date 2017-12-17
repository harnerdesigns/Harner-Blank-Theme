# Harner-Blank-Theme

A Dope Fucking WordPress Theme Framework By [Harner Designs](http://harnerdesigns.com). Jump in quicker & spend less time building sites.

## Getting Started (Quick Guide)

Clone The Github Repo, Install the Node dependencies, Run `gulp build`.


### Installing


Clone the Repo. Substitute site_name for your projects name.

```
git clone https://github.com/harnerdesigns/Harner-Blank-Theme.git site_name
```

Move into the working folder. Substitute site_name for your projects name.

```
cd site_name
```
Install the Node dependencies.

```
npm install
```

End with an example of getting some data out of the system or using it for a little demo

## Gulp Tasks

A series of Gulp tasks are built into the project.

### sass

Converts `/scss` folder into a single css file and adds the nessecary WordPress comment header.  Uses the package.json values for versioning and other data.

```
gulp sass
```

### watch

Watches the `/scss` folder and runs the sass task when changes are made.

```
gulp sass
```

### build 

Moves the PHP files, the style.css file, and any js files into the /build/<package.version>/ folder, then zips it up to be installed on a WordPress site. Uses the package.json values for versioning.

```
gulp build
```


## Deployment

Add additional notes about how to deploy this on a live system

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
