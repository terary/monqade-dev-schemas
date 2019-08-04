"use strict"

const collectionName = 'children'
const schemaVersion='0002';
const schemaDescription = `
  use case:  
  Demonstrate documents with a parent-child relationship. 
`;



const isValidObjectID = require('mongoose').Types.ObjectId.isValid;


module.exports = {
  paths:{
    theParentDocument: {
      name: "theParentDocument",
      isSearchable:true,
      isProjectable: true,
      isUpdatable: true,
      isInsertable: true,
      isRequired: true ,
      required:true,
      type: 'ObjectId',
      validate: {
        validator: function(v) {
          return isValidObjectID(v);
        },
        message: v => `${v} does not appear to be a valid objectID`
      },
      // makeTestData: ()=>{ return  mongoose.Types.ObjectId();},

      notes: {
        "purpose": `The objectID of the parent document.  
                    Reference to the parent document should go here.

                    `,
        "restriction": "must be valid Mongo ObjectID. isRequire and does not have default value. "
      },
      maxlength: 24,
      minlength: 24
    },
    employeeName: {
      name: "employeeName",
      isSearchable: true,
      isProjectable: true,
      isUpdatable: true,
      isInsertable: true,
      isRequired: true,
      type: "String",
      makeTestData: ()=>{return 'Joe Schmoe: ' + Math.random();},
      notes: {
        "purpose": "This is an employee of the the company represented by the parent document ",
        "restriction": "max length, min value, explaination of validate "
      },
      maxlength: 50,
      minlength: 1
    },
    city: {
      name: "city",
      isSearchable: true,
      isProjectable: true,
      isUpdatable: true,
      isInsertable: true,
      isRequired: false,
      type: "String",
      makeTestData: ()=>{return 'City: ' + Math.random();},
      notes: {
        "purpose": "Just a path to give the schema more realistic appearance.",
        "restriction": "length 2-100"
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
        "purpose": `Serves as a path that can be used as a collection segment.  
                    All documents with idxBucket=n -> approx. 10% the documents 
                    All documents with idxBucket < n -> approx. (n*10)% the documents 
                    All documents with idxBucket < 3 -> approx. 30% the documents 
                    All documents with idxBucket in(0,2,1,5,9) -> approx. 50% the documents

        `,
        "restriction": "none"
      },
      "min": 0,
      "max": 9
    }
  
  },
  
  options:
    {
      timestamps:true,
      writeConcern:{ w: 1, j: false},
      versionKey: '_docVersionKey', 
      collection: collectionName,
      documentation:schemaDescription,
      _schemaVersion: schemaVersion
    }
  };


  