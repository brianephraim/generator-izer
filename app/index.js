'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var IzerGenerator = module.exports = function IzerGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(IzerGenerator, yeoman.generators.Base);

IzerGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    type: 'input',
    name: 'izerName',
    message: 'What do you want to call your izer?',
    default: 'testizer'
  }];

  this.prompt(prompts, function (props) {
    // `props` is an object passed in containing the response values, named in
    // accordance with the `name` property from your prompt object. So, for us:
    this.izerName = props.izerName;
    this.widgetName = props.izerName;
    this.widgetNameAllLower = this.widgetName.toLowerCase();
    this.widgetNameAllCap = this.widgetNameAllLower.toUpperCase();
    this.widgetNameFirstCap = this.widgetNameAllLower.charAt(0).toUpperCase() + this.widgetNameAllLower.slice(1);
    this.brkt1 = '<%=';
    this.brkt2 = '%>';

    cb();
  }.bind(this));
};

IzerGenerator.prototype.app = function app() {
  var fs = require('fs');
  console.log(fs.readdirSync('./'))
  console.log('zxcvzxcv')
  console.log(this.sourceRoot())
  // this.template('2013-11-12-<%= widgetNameAllLower %>.md','2013-11-12-<%= widgetNameAllLower %>.md');
  // this.template('css/app.css','css/app.css');
  // this.template('css/reset.css','css/reset.css');
  // this.template('css/<%= widgetNameAllLower %>.css','css/<%= widgetNameAllLower %>.css');
  // this.template('index-async.html','index-async.html');
  // this.template('index.html','index.html');
  // this.template('js/app.js','js/app.js');
  // this.template('js/<%= widgetNameAllLower %>.js','js/<%= widgetNameAllLower %>.js');

  //this.copy('_package.json', 'package.json');
  //this.copy('_bower.json', 'bower.json');
  var stuffDir = this.sourceRoot()+'/stuff';

  
  var getFolderContentArray = function(dir){
    var a = [];
    pushToArrayWithRecurs(dir)
    
    function pushToArrayWithRecurs(someDir){
      var someDirContents = fs.readdirSync(someDir);
      for(var i=0,l=someDirContents.length;i<l;i++){
        if(someDirContents[i] !== '.DS_Store'){
          var someDirItem = someDir + '/' + someDirContents[i];
          var isDir = fs.lstatSync(someDirItem).isDirectory();
          if(isDir){
            pushToArrayWithRecurs(someDir + '/' + someDirContents[i])
          } else {
            //console.log(someDirItem.replace(dir+'/',''))
            a.push(someDirItem.replace(dir+'/',''))
            //a.push(someDirItem.replace(dir+'/',''))
          }
        }
        
      }
    }
    return a;
  }
  var filesArray = getFolderContentArray(stuffDir);

  var moment = require('moment')

  for(var i=0,l=filesArray.length;i<l;i++){
    var source = 'stuff/'+filesArray[i];
    var dest = (filesArray[i]).replace('widgetNameAllLower',this.widgetNameAllLower).replace('widgetYYYY-MM-DD',moment(new Date()).format("YYYY-MM-DD"));
    dest = dest === '_bower.json' ? 'bower.json' : dest;
    dest = dest === '_package.json' ? 'package.json' : dest;
    dest = dest === '_gitignore' ? '.gitignore' : dest;
    dest = dest === '_bowerrc' ? '.bowerrc' : dest;
    if(dest.indexOf('-notemplate') !== -1){
      dest = dest.replace('-notemplate','');
      console.log('------ '+dest)
      this.copy(source,dest);
    } else {
      this.template(source,dest);
    }
  }
  
};

IzerGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
