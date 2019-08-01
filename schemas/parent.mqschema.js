"use strict"

const ObjectId='ObjectId'; // calling code will need to replace
                           // because 'common' file location unable to load mongoose within this file
const randomElement = (ary)=>{
 return ary[Math.floor(Math.random() * ary.length)];
}

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
      type: "String",
      makeTestData: ()=>{return 'OrgID:' + Math.random()},
      notes: {
        "purpose": "This field is used for: ...",
        "restriction": "max length, min value, explaination of validate "
      },
      maxlength: 50,
      minlength: 3
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
      documentation:`some document stuff goes here`,
      collection: 'parents',
      timestamps:true,
      writeConcern:{ w: 1, j: false},
      versionKey: '_docVersionKey', 
      _schemaVersionKey:'0001'
    }
  };


  