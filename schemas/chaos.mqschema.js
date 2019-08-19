"use strict"




const collectionName = 'chaos'
const schemaVersion='0002';
const schemaDescription = `
  use case:  
  stress test Monqade components.  Should be the worst-of-the-worst schema. 
  Has all data types: String, date, number, boolean plus ObjectID
  should be able to demonstrate:

    paths:  
    - hidden paths ( isSearchable=false, isProjectable=false )  : myReadOnlyPath
    - read-only paths ( isInsertable = false, isUpdatable = false ) : hiddenPath
    - default values ( default: ()=>{} ) : memberSinceDate
    - path without only the 'name' set : myNakedPath
    - unique=true - cause issues with doUpsertOne (see extended documentation): foreignID
    - bare minimum set properties (name and type) - very strange behaviour. : myNakedPath 

    SchemaOptions:
    - schema has no options set ( schemaOptions: {} )
          collectionName is set only because the default name is MonqadeNameless[unix timestamp] 
          which is a pain dev/debug


          known issue  cant seem to doUpdateOne ...  as validate fails for foreignID - required 
        when setting 'required' to false -seems honkey-dory - 

        

  `;


const isValidObjectID = require('mongoose').Types.ObjectId.isValid;


const randomElement = (ary)=>{
 return ary[Math.floor(Math.random() * ary.length)];
}

// make sure each datatype: String, date, number, boolean
module.exports = {
  paths:{
    orgID: {
      name: "orgID",
      isSearchable:true,
      isProjectable: false,
      isUpdatable: false,
      isInsertable: true,
      isRequired: true ,
      required:true,
      type: "String",
      makeTestData: ()=>{return 'OrgID:' + Math.random()},
      notes: {
        "purpose": "This field is used for: ...",
        "restriction": "max length, min value, explanation of validate "
      },
      maxlength: 50,
      minlength: 3
    },

    foreignID:{
      name: "foreignID",
      isSearchable:true,
      isProjectable: true,
      isUpdatable: true,
      isInsertable: false,
      isRequired: true ,
      required:false,
      type: 'ObjectId',
      default: () => {return  "507f191e810c19729de860ea"},
      makeTestData: ()=>{return "507f191e810c19729de860ea"},
      validate: {
        validator: function(v) {
          return isValidObjectID(v);
        },
        message: v => `${v} does not appear to be a valid objectID`
      },
      notes: {
        "purpose": `The objectID of the parent document.  
                    Reference to the parent document should go here.

                    `,
        "restriction": "must be valid Mongo ObjectID. isRequire and does not have default value. "
      },
      maxlength: 24,
      minlength: 24
    },

    myNakedPath: {
      //will require set programmatically
      name: "myNakedPath",
      type: 'number'
    },

    myReadOnlyPath: {
      //will require set programmatically
      name: "myReadOnlyPath",
      isSearchable: true,
      isProjectable: true,
      isUpdatable: false,
      isInsertable: false,
      isRequired: true,
      type: "String",
      default: () => {return Math.random()+''},
      makeTestData: ()=>{return 'The ABC Co.' + Math.random();},
      notes: {
        "purpose": "Demonstrate one method of creating a read-ony field.  For use by system only.",
        "restriction": "length 3-50, write once. Has to be set via default function value"
      },
      maxlength: 50,
      minlength: 3
    },
    hiddenPath: {
      name: "hiddenPath",
      isSearchable: false,
      isProjectable: false,
      isUpdatable: false,
      isInsertable: false,
      isRequired: true,
      type: "String",
      default: () => {return Math.random()+''},
      makeTestData: ()=>{return 'The ABC Co.' + Math.random();},
      notes: {
        "purpose": "Demonstrate one method of creating a hidden field.  For use by system only.",
        "restriction": "length 1-50, write once. Has to be set via default function value"
      },
      maxlength: 50,
      minlength: 1
    },
    restrictedPath: {
      name: "restrictedPath",
      isSearchable: false,
      isProjectable: false,
      isUpdatable: false,
      isInsertable: true,
      isRequired: true,
      type: "Number",
      makeTestData: ()=>{return Math.floor(10 * Math.random())},
       notes: {
        "purpose": "Demonstrate one method of creating a hidden field.  For use by system only.",
        "restriction": "number 0-9, write once (at insert)"
      },
      "max": 9
    },

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
        "purpose": "Just a text path for demonstration purpose",
        "restriction": "length 3-50"
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
        "purpose": "Just a text path for demonstration purpose",
        "restriction": "length 2-100"
      },
      maxlength: 100,
      minlength: 2
    },
    "state": {
      name: "state",
      isSearchable: true,
      isProjectable: true,
      isUpdatable: false,
      isInsertable: true,
      isRequired: false,
      type: "String",
      makeTestData: ()=>{return randomElement(['ME','CA','NE','LA','NY','MN','TX','CO','OR','FL','NC','UT','NV','WA','OH'])},
      notes: {
        "purpose": "Just another path to segment a collection in some meaningful way.",
        "restriction": "must be exactly 2 characters"
      },
      maxlength: 2,
      minlength: 2
    },
    yearsInBusiness: {
      name: "yearsInBusiness",
      isSearchable: false,
      isProjectable: false,
      isUpdatable: true,
      isInsertable: true,
      isRequired: false,
      type: "Number",
      makeTestData: ()=>{return Math.floor(200 * Math.random())},
      notes: {
        "purpose": "Simply to assure integer datatype is part of the schema",
        "restriction": undefined
      },
      "max": 300
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
    },
    someDate: {
      name: "someDate",
      isSearchable: true,
      isProjectable: false,
      isUpdatable: true,
      isInsertable: true,
      isRequired: true,
      type: "Date",
      makeTestData: ()=>{return new Date()},
      notes: {
        "purpose": "Just a date for demonstration - missing 'notes.restriction' ",

      }
    },
    memberSinceDate: {
      name: "memberSinceDate",
      isSearchable: true,
      isProjectable: false,
      isUpdatable: false,
      isInsertable: false,
      isRequired: true,
      default: ()=>{return new Date()},
      type: "Date",
      makeTestData: ()=>{return new Date()},
      notes: {
        "purpose": "Should be a system set path that can not be changed.",
        "restriction": "not insertable, not updatable"
      }
    },
    isActive: {
      name: "isActive",
      isSearchable: true,
      isProjectable: true,
      isUpdatable: true,
      isInsertable: true,
      isRequired: true,
      type: "Boolean",
      makeTestData: ()=>{return (Math.random()<0.5) ? true : false;},
      notes: {
        "purpose": ` Boolean: updatable, insertable, is require.  
            Should be able to demonstrate any issues with writing undefined and/or 0  `,
        "restriction": "true or false"
      }
    }
    
  
  },

  
  options:
    {
      // timestamps:true,
      // writeConcern:{ w: 1, j: false},
      // versionKey: '_docVersionKey' 
      collection: collectionName  // not entirely necessary.  If undefined will be set to MoqandeNameless[unix date stamp] - 
      // documentation:schemaDescription,
      // _schemaVersion: 'schemaVersionXX'
    }
  };
