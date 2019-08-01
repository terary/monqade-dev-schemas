"use strict"
// Mongo supported types
  // Monqade Supported
  //   Object ID  to be supported
  //   Boolean 
  //   Date, timestamp 
  //   Numbers 

  // Monqade Supported
  //   Min key (internal type)  -- not supported
  //   Null  -- not supported
  //   Symbol, String   -- not supported
  //   Object  -- not supported
  //   Array  -- not supported
  //   Binary data  -- not supported
  //   Regular expression  -- not supported
  //   Max key (internal type)  -- not supported


const ObjectId='ObjectId'; // calling code will need to replace
                           // because 'common' file location unable to load mongoose within this file
const randomElement = (ary)=>{
 return ary[Math.floor(Math.random() * ary.length)];
}
// to be tested - the 'name' attribute is optional and foolish - it will be overwritten by the object key

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
        "restriction": "max length, min value, explaination of validate "
      },
      maxlength: 50,
      minlength: 3
    },
    myReadOnly: {
      //will require set programmatically
      name: "myReadOnly",
      isSearchable: true,
      isProjectable: true,
      isUpdatable: false,
      isInsertable: false,
      isRequired: true,
      type: "String",
      default: () => {return Math.random()+''},
      makeTestData: ()=>{return 'The ABC Co.' + Math.random();},
      notes: {
        "purpose": "This field is used for: ...",
        "restriction": "max length, min value, explain of validate "
      },
      maxlength: 50,
      minlength: 3
    },
    hiddenPath: {
      name: "hiddenPath",
      isSearchable: false,
      isProjectable: true,
      isUpdatable: false,
      isInsertable: false,
      isRequired: true,
      type: "String",
      default: () => {return Math.random()+''},
      makeTestData: ()=>{return 'The ABC Co.' + Math.random();},
      notes: {
        "purpose": "This field is used for: ...",
        "restriction": "max length, min value, explaination of validate "
      },
      maxlength: 50,
      minlength: 1
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
        "purpose": "This field is used for: ...",
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
        "purpose": "Instead of 'delete' deactive",
        "restriction": "true or false"
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
        "purpose": "Instead of 'delete' deactive",
        "restriction": "true or false"
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
        "purpose": "Instead of 'delete' deactive",
        "restriction": "true or false"
      },
      "max": 9
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
        "purpose": "debug testing functionality",
        "restriction": "number 0-9"
      },
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
        "purpose": "Instead of 'delete' deactive",
        "restriction": "true or false"
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
        "purpose": "Instead of 'delete' deactive",
        "restriction": "true or false"
      }
    },
    isActive: {
      name: "isActive",
      isSearchable: true,
      isProjectable: true,
      isUpdatable: false,
      isInsertable: true,
      isRequired: true,
      type: "Boolean",
      makeTestData: ()=>{return (Math.random()<0.5) ? true : false;},
      notes: {
        "purpose": "Instead of 'delete' deactive",
        "restriction": "true or false"
      }
    }
  
  },

  
  options:
    {
      documentation:`some document stuff goes here`,
      collection: 'chaos',
      timestamps:true,
      writeConcern:{ w: 1, j: false},
      versionKey: '_docVersionKey', 
      _schemaVersionKey:'0001'
    }
  };


  