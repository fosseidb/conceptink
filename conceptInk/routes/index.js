
/*
 * GET home page.
 */

exports.view = function(req, res){
res.render('index', {
    'projects': [
      { 'name': 'News',
        'subname': 'lots of gay ass shit here!',
        'image': 'convention01.jpg',
        'id': 'project1'
      },
      { 'name': 'Make a Request',
        'subname': 'lots of gay ass shit h2ere!',
        'image': 'lorempixel.city.1.jpeg',
        'id': 'project2'
      },
      { 'name': 'Search Artist',
        'subname': 'lots of gay ass shit here!2.5',
        'image': 'lorempixel.technics.1.jpeg',
        'id': 'project3'
      },
      { 'name': 'Search Location',
        'subname': 'lots of gay ass shit here!3',
        'image': 'lorempixel.abstract.1.jpeg',
        'id': 'project4'
      },
      { 'name': 'Browse',
        'subname': 'lots of gay ass shit here!4',
        'image': 'lorempixel.abstract.8.jpeg',
        'id': 'project5'
      }
    ]
  });
};