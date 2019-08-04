"use strict"


const collectionName = 'parents'
const schemaVersion='0002';
const schemaDescription = `
  use case:  
  Demonstrate documents with a parent-child relationship. 
  This being the parent document - and contains no
  references to children.
`;


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

