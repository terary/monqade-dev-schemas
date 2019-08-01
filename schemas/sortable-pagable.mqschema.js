"use strict"
var mongoose = require('mongoose');
var id = mongoose.Types.ObjectId();
const ObjectId='ObjectId'; // calling code will need to replace
                           // because 'common' file location unable to load mongoose within this file


const DESCRIPTION = `Test/Dev purposes.  This schema is used to demonstrate sorting and paging. `;

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
      makeTestData: ()=>{return 'The ABC Co. ' + Math.random();},
      notes: {
        "purpose": "This field is used for: ...",
        "restriction": "max length, min value, explaination of validate "
      },
      maxlength: 50,
      minlength: 3
    },
    constKey: {
      name: "constKey",
      isSearchable: true,
      isProjectable: true,
      isUpdatable: false,
      isInsertable: true,
      isRequired: false,
      type: "String",
      makeTestData: ()=>{return 'MY_FINDABLE_VALUE';},
      notes: {
        "purpose": "work around *Many requirement if required search criteria",
        "restriction": "true or false"
      },
      maxlength: 100,
      minlength: 2
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
    sortFieldOne: {
        name: "sortFieldOne",
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
    sortFieldTwo: {
        name: "ssortFieldTwo",
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
      documentation:DESCRIPTION, 
      collection: 'sortedpagables',
      timestamps:true,
      writeConcern:{ w: 1, j: false},
      versionKey: '_docVersionKey', 
      _schemaVersionKey:'0001'
    }
  };


  