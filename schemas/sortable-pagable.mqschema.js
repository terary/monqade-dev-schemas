"use strict"

const collectionName = 'sortedpagables'
const schemaVersion='0002';
const schemaDescription = `
  use case:  
  Demonstrate sorting and paging. 

  This being the parent document - and contains no
  references to children.
  relevant paths:
        constKey  - some known search criteria (test dev)
        sortFieldTwo  - some path with datatype numeric and 0 9
        sortFieldOne  - some path with datatype numeric and 0 9
  The idea is to sort by paths + createdAt.
  Can page by using skip/limit of the options argument to doFindMany or doSearchMany.
  Using alternative method of using sort paths > last page sort paths - seems to not 
  work so well - due to the nature of Mongos sort.  See examples in the
  monqade-schema package      
`;



module.exports = {
  paths:{
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
        "restriction": "length 1-100"
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
  
  options:{
        timestamps:true,
        writeConcern:{ w: 1, j: false},
        versionKey: '_docVersionKey', 
        collection: collectionName,
        documentation:schemaDescription,
        _schemaVersion: schemaVersion
      }
  };


