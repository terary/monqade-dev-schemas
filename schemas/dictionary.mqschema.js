"use strict"
const collectionName = 'dictionary'
const schemaVersion = '0001'
const documentation =  `
    Purpose:
        Serve as key/value store for miscellaneous key/value pairs.
        Key is guaranteed to to be unique up to 500 characters  - no other restriction.
        Value can be up to 1500 characters - no other restriction 
        Should support UTF8 ( UTF-16? )
 `;


module.exports = {
  paths:{
    key: {
      name: "key",
      isSearchable: true,
      isProjectable: true,
      isUpdatable: true,  // this should be an issue - will play with it
      isInsertable: true,
      isRequired: true,
      type: "String",
      unique:true,
      makeTestData: ()=>{return 'KEY_' +  Math.random() + '_' +(Date()/1);},
      notes: {
        "purpose": "Serve as the 'key' of the key/value pair. ",
        "restriction": "min length 1, max length 500"
      },
      maxlength: 500,
      minlength: 1
    },
    value: {
      name: "value",
      isSearchable: true,
      isProjectable: true,
      isUpdatable: true,
      isInsertable: true,
      isRequired: true,
      type: "String",
      makeTestData: ()=>{return '' +  Math.random() + '.' +(Date()/1);},
      notes: {
        "purpose": "Serve as the 'value' of the key/value pair. ",
        "restriction": "min length 1, max length 1500"
      },
      maxlength: 1500,
      minlength: 1
    },
    description: {
        name: "description",
        isSearchable: true,
        isProjectable: true,
        isUpdatable: true,
        isInsertable: true,
        isRequired: false,
        type: "String",
        makeTestData: ()=>{return 'Test description';},
        notes: {
          "purpose": "Optional description of the key/value pair",
          "restriction": "none"
        }

      },
    
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


  