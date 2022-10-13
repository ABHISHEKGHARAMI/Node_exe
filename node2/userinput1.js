const yargs = require('yargs');


//customize yargs version
yargs.version('1.1.0');

//add ,remove , read , list
//add command
yargs.command({
    command :'add',
    describe : 'Add a new note',
    builder :{
      title : {
         describe : 'Node title. '
      }
    },
    handler: function(argv){
        console.log('Adding new note',argv);
    }
});
//remove command
yargs.command({
    command: 'remove',
    describe : 'removing note',
    handler: function(){
        console.log('Removing notes.');
    }
})
//read command
yargs.command({
    command : 'read',
    describe : 'reading from notes.',
    handler : function(){
        console.log('reading notes.');
    }
});
//list command
yargs.command({
    command : 'list',
    describe : 'listing in notes.',
    handler : function(){
        console.log('listing notes.');
    }
})

console.log(yargs.argv);
