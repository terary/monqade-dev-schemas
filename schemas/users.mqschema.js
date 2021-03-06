"use strict"

const collectionName = 'userinfo'
const schemaVersion='0002';
const schemaDescription = `
  use case:  
  Just a simple, no frills, practical schema definition. Good for building 
  generic controls or template solutions.
`;


const randomElement = (ary)=>{
 return ary[Math.floor(Math.random() * ary.length)];
}

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
        "purpose": "Just a path to give the schema more realistic appearance.",
        "restriction": "length 2-100"
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
        "purpose": "Just a path to give the schema more realistic appearance.",
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
        "purpose": `Serves as a path that can be used as a collection segment.  
                    All documents with idxBucket=n -> approx. 10% the documents 
                    All documents with idxBucket < n -> approx. (n*10)% the documents 
                    All documents with idxBucket < 3 -> approx. 30% the documents 
                    All documents with idxBucket in(0,2,1,5,9) -> approx. 50% the documents

        `,
        "restriction": "none"
      }
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
  
  options: {
    timestamps:true,
    writeConcern:{ w: 1, j: false},
    versionKey: '_docVersionKey', 
    collection: collectionName,
    documentation:schemaDescription,
    _schemaVersion: schemaVersion
  }
};

