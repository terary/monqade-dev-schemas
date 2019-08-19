"use strict"

const collectionName = 'foreign-keys'
const documentation = `
  To demonstrate the use of foreign based unique identifiers.
  
  version history:
    0001    - original
    0001.1  - pathID pathName mismatch correction
              changed schema option to soft-coded variables to improve readability
`;
const schemaVersion = '0001.1'

var mongoose = require('mongoose');
var id = mongoose.Types.ObjectId();
const ObjectId='ObjectId'; // calling code will need to replace
                           // because 'common' file location unable to load mongoose within this file
const randomElement = (ary)=>{
 return ary[Math.floor(Math.random() * ary.length)];
}

module.exports = {
  paths:{
    companyName: {
      name: "companyName",
      isSearchable: true,
      isProjectable: true,
      isUpdatable: true,
      isInsertable: true,
      isRequired: true,
      type: "String",
      makeTestData: ()=>{return 'The ABC Co.' + Math.random();},
      notes: {
        "purpose": "This field is used for: ...",
        "restriction": "max length, min value, explaination of validate "
      },
      maxlength: 50,
      minlength: 3
    },
    foreign_unique_id: {
      name: "foreign_unique_id",
      isSearchable: true,
      isProjectable: true,
      isUpdatable: true,  // this should be an issue - will play with it
      isInsertable: true,
      isRequired: true,
      type: "String",
      unique:true,
      // makeTestData: ()=>{return 'The ABC Co.' + Math.random();},
      notes: {
        "purpose": "To Identify by some foreign key/unique id",
        "restriction": "max length, min value, explaination of validate "
      },
      maxlength: 50,
      minlength: 3
    },
    city: {
      name: "city",
      isSearchable: true,
      isProjectable: true,
      isUpdatable: true,
      isInsertable: true,
      isRequired: false,
      type: "String",
      makeTestData: ()=>{return 'Lewiston ' + Math.random();},
      notes: {
        "purpose": "Instead of 'delete' deactive",
        "restriction": "true or false"
      },
      maxlength: 100,
      minlength: 2
    },
    idxBucket: {
      name: "idxBucket",
      isSearchable: true,
      isProjectable: true,
      isUpdatable: true,
      isInsertable: true,
      isRequired: false,
      type: "Number",
      makeTestData: ()=>{return Math.floor(10 * Math.random())},
      notes: {
        "purpose": "Instead of 'delete' deactive",
        "restriction": "true or false"
      },
      "max": 9
    }
  
  },
  
  options:
    {
      documentation: documentation,
      collection: collectionName,
      timestamps:true,
      writeConcern:{ w: 1, j: false},
      versionKey: '_docVersionKey', 
      _schemaVersion: schemaVersion
    }
  };

