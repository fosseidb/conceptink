
/*
 * GET home page.
 */

exports.view = function(req, res){
res.render('index', {
    'projects': [
      { 'name': 'News',
        'subname': 'stuff!',
        'image': 'convention01.jpg',
        'id': 'project1'
      },
      { 'name': 'Make a Request',
        'subname': 'stuff2',
        'image': 'lorempixel.city.1.jpeg',
        'id': 'project2'
      },
      { 'name': 'Search Artist',
        'subname': 'stuff!2.5',
        'image': 'lorempixel.technics.1.jpeg',
        'id': 'project3'
      },
      { 'name': 'Search Location',
        'subname': 'stuff!3',
        'image': 'lorempixel.abstract.1.jpeg',
        'id': 'project4'
      },
      { 'name': 'Browse',
        'subname': 'stuff!4',
        'image': 'lorempixel.abstract.8.jpeg',
        'id': 'project5'
      }
    ]
  });
};