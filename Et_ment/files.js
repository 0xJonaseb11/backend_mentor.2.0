const fileSystem = {
    name: 'root',
    type: 'folder',
    children: [
      {
        name: 'src',
        type: 'folder',
        children: [
          { name: 'index.js', type: 'file' },
          { name: 'app.js', type: 'file' },
          {
            name: 'components',
            type: 'folder',
            children: [
              { name: 'Navbar.js', type: 'file' },
              { name: 'Footer.js', type: 'file' }
            ]
          }
        ]
      },
      {
        name: 'README.md',
        type: 'file'
      },
      {
        name: 'package.json',
        type: 'file'
      }
    ]
  };

  function traverseFileSystem(node, indent = '') {
    console.log(indent + (node.type === 'folder' ? '📁 ' : '📄') + node.name);
  
    if (node.type === 'folder' && node.children) {
      for (const child of node.children) {
        traverseFileSystem(child, indent + '   ');
      }
    }
  }

  setInterval(() => {

    traverseFileSystem(fileSystem);
  }, 2000);

