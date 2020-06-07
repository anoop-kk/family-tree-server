
async function generateTree(){
    const data = [
        {  "id":100,
          "name":"Patel",
          "node":'root',
          "parent":null
      },
      {   "id":200,
          "name":"Patel Son",
          "node":'child',
          "parent":100
      },
      {   "id":300,
          "name":"Patel Daughter",
          "node":'child',
          "parent":100
      },
      {   "id":400,
          "name":"Patel P1",
          "node":'child',
          "parent":200
      },
      {   "id":500,
          "name":"Patel P2",
          "node":'child',
          "parent":200
      },
      {   "id":600,
          "name":"Patel P3",
          "node":'child',
          "parent":300
      },
      {   "id":600,
          "name":"Patel P4",
          "node":'child',
          "parent":300
      },
      {   "id":600,
          "name":"Patel P5",
          "node":'child',
          "parent":400
      },
      {   "id":700,
          "name":"Patel P6",
          "node":'child',
          "parent":400
      }
      ];
      const idMapping = data.reduce((acc, el, i) => {
        acc[el.id] = i;
        return acc;
      }, {});
      let root;
      data.forEach(el => {
        // Handle the root element
        if (el.parent === null) {
          root = el;
          return;
        }
        // Use our mapping to locate the parent element in our data array
        const parentEl = data[idMapping[el.parent]];
        // Add our current el to its parent's `children` array
        parentEl.children = [...(parentEl.children || []), el];
      });
      return root;
}

export default{
    generateTree
}