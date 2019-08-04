"use strict"

const collectionName = 'organizations'
const schemaVersion='0002';
const schemaDescription = `
  use case:  
  Demonstrate doUpserOne(...) 
  path 'foreignID' has unique property set to true. Effectively, this document
  has two independent unique identifiers. This will cause significant changes
  behaviour of doUpsertOne(...).  

  *** doUpsertOne *** is not recommended for use-cases where doInsertOne or doUpdateOne will be satisfactory.
`;


const md5 = require('md5')

const randomElement = (ary)=>{
 return ary[Math.floor(Math.random() * ary.length)];
}

module.exports = {
  paths:{
    foreignID: {
      name: "foreignID",
      isSearchable: true,
      isProjectable: true,
      isUpdatable: true,
      isInsertable: true,
      isRequired: true,
      unique:true,
      type: "String",
      makeTestData: ()=>{return (new Date()/1) + Math.random() ;},
      //makeTestData: ()=>{return  ;},
      notes: {
        "purpose": "Demonstrates the 'unique' path property.  This will have significant impact on 'upsert' ",
        "restriction": "length 3-50, must be unique to the collection. "
      },
      maxlength: 50,
      minlength: 3
    },

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
        "purpose": "Just a path to give the schema more realistic appearance.",
        "restriction": "length 3-50"
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
        "purpose": "Just another path to segment a collection in some meaningful way.",
        "restriction": "must be exactly 2 characters"
      },
      maxlength: 2,
      minlength: 2
    },

    webSite: {
      name: "webSite",
      isSearchable: true,
      isProjectable: true,
      isUpdatable: true,
      isInsertable: true,
      isRequired: true,
      type: "String",
      makeTestData: ()=>{return 'www.example' + Math.random() + '.com';},
      notes: {
        "purpose": "Just a path to give the schema more realistic appearance.",
        "restriction": "length 2-100"
      },

      maxlength: 50,
      minlength: 3
    },
    authKey: {
      name: "authKey",
      isSearchable: false,
      isProjectable: false,
      isUpdatable: true,
      isInsertable: true,
      isRequired: true,
      type: "String",
      makeTestData: ()=>{return md5( Math.random());},
      notes: {
        "purpose": "Just a path to give the schema more realistic appearance.",
        "restriction": "length exactly 32"
      },
      maxlength: 32,
      minlength: 32
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
        "purpose": "Instead of 'delete' deactivate",
        "restriction": "true or false"
      }
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


  